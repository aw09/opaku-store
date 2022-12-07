<script>
// @ts-nocheck

  import { getAnalytics, logEvent } from "firebase/analytics";
  import { app, database } from '$firebase';
  import { ref, get, set } from "firebase/database";
  import { user } from '$state';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
	import { setSnackbar } from '$state';
    


  const id = $page.url.searchParams.get('id');
  let analytics;
  let userData;
  let product;
  let quantityProduct;
  let data;

  const fetchData = async () => {
    const refDb = ref(database, 'products/' + id);
    const result = (await get(refDb)).val()
    if(result) {
      initAnalytics()
      return result
    }
    else throw new Error("Product Not Found");
  }
  
  
  let promise = fetchData();

  user.subscribe(value => {
      userData = value;
  });


  const initAnalytics = async () => {
    analytics = getAnalytics(app)
    data = await promise

    product = {
      item_id: id,
      item_name: data.name,
      price: data.price
    }
    quantityProduct = {...product, quantity: 1}
    logEvent(analytics, 'select_item', product);
  }


  const addToCart = () => {
    if (!userData) window.location.href = base+'/login'

    const cartProduct = {...quantityProduct, image: data.image}
    const refDb = ref(database, 'cart/' + userData.uid + '/' + quantityProduct.item_id)
    get(refDb).then((snapshot) => {
      const data = snapshot.val();
      if (!data){
        set(refDb, cartProduct)
        setSnackbar("Item added to cart")
        logAddToCart()
      }
      else{
        // Show modal item is already in cart
        setSnackbar("This item is already in the cart")
      }
    })
  }

  const logAddToCart = () => {
    const productLog = {
      currency: 'IDR',
      value: quantityProduct.price,
      items: [quantityProduct]
    }
    logEvent(analytics, 'add_to_cart', productLog)
  }

  

</script>

{#await promise}
<span>Loading data...</span>
{:then data}
<div class="flex py-4 gap-4">
    <img class="h-48 w-48" src={data.image} alt='{data.name}-image'>
    <div class="flex flex-col">
        <h1 class="font-bold text-xl text-black">{data.name}</h1>
        <p class="text-2xl">Rp {data.price.toLocaleString()}</p>
        <button 
          on:click={addToCart} 
          disabled={!userData} 
          class="mt-4 py-2 w-full rounded-lg  text-center font-bold {userData ? 'text-white bg-green-400': 'text-gray-500 bg-gray-200'}"
        >{userData ? 'Add to Cart' : 'Login first'}</button>
    </div>
  </div>
{:catch error}
	<h2 class="mx-auto text-xl">{error.message}</h2>
{/await}