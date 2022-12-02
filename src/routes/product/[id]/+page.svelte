<script>
// @ts-nocheck

  import { getAnalytics, logEvent } from "firebase/analytics";
  import { onMount } from 'svelte';
  import { app, database } from '$firebase';
  import { ref, get, set } from "firebase/database";
  import { user } from '$state';
    
  /** @type {import('./$types').PageData} */
  export let data;

  let analytics;
  let userData;
  user.subscribe(value => {
      userData = value;
  });

  const product = {
    item_id: data.id,
    item_name: data.content.name,
    price: data.content.price
  }
  const quantityProduct = {...product, quantity: 1}

  onMount(() => {
    analytics = getAnalytics(app)
    logEvent(analytics, 'select_item', product);
  });

  const addToCart = () => {
    if (!userData) window.location.href = '/login'


    const cartProduct = {...quantityProduct, image: data.content.image}
    const refDb = ref(database, 'cart/' + userData.uid + '/' + quantityProduct.item_id)
    get(refDb).then((snapshot) => {
      const data = snapshot.val();
      if (!data){
        set(refDb, cartProduct)
        logAddToCart()
      }
      // Show modal item is already in cart
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

<div class="flex py-4 gap-4">
    <img class="h-48 w-48" src={data.content.image} alt='{data.content.name}-image'>
    <div class="flex flex-col">
        <h1 class="font-bold text-xl text-black">{data.content.name}</h1>
        <p class="text-2xl">Rp {data.content.price.toLocaleString()}</p>
        <button 
          on:click={addToCart} 
          disabled={!userData} 
          class="mt-4 py-2 w-full rounded-lg  text-center font-bold {userData ? 'text-white bg-green-400': 'text-gray-500 bg-gray-200'}"
        >{userData ? 'Add to Cart' : 'Login first'}</button>
    </div>
</div>