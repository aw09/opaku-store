<script>
// @ts-nocheck

  import { getAnalytics, logEvent } from "firebase/analytics";
  import { app } from '../../../firebase';
  import { onMount } from 'svelte';
  import { database } from '../../../firebase';
  import { getDatabase, ref, set } from "firebase/database";
  import { user } from '../../state';
    
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

  onMount(() => {
    analytics = getAnalytics(app)
    logEvent(analytics, 'select_item', product);
  });

  const addToCart = () => {
    const quantityProduct = {...product, quantity: 1}
    const cartProduct = {
      currency: 'IDR',
      value: quantityProduct.price,
      items: [quantityProduct]
    }

    set(ref(database, 'cart/' + userData.uid + '/' + quantityProduct.item_id), quantityProduct)
    logEvent(analytics, 'add_to_cart', cartProduct)
  }

</script>

<div class="flex py-4 gap-4">
    <img class="h-48 w-48" src={data.content.image} alt='{data.content.name}-image'>
    <div class="flex flex-col">
        <h1 class="font-bold text-xl text-black">{data.content.name}</h1>
        <p class="text-2xl">Rp {data.content.price.toLocaleString()}</p>
        <button on:click={addToCart} class="mt-4 py-2 w-full rounded-lg bg-green-400 text-center text-white font-bold">Add to Cart</button>
    </div>
</div>