<script>
// @ts-nocheck

  import { getAnalytics, logEvent } from "firebase/analytics";
  import { onMount } from 'svelte';
  import { app } from '$firebase';
    
  /** @type {import('./$types').PageData} */
  export let data;
  let analytics;
  const content = data.content;
  const product = data.product;

  const productLog = {
    item_id: content.product_id,
    item_name: product.name,
    price: product.price
  }

  const promotionLog = {
      promotion_id: data.id,
      promotion_name: content.name,
      location_id: 'HOME_BANNER',
      items: [productLog]
  }
  
  onMount(()=>{
    analytics = getAnalytics(app)
    logEvent(analytics, 'view_promotion', promotionLog);
  })

  const handleCta = () => {
    logEvent(analytics, 'select_promotion', promotionLog);
    window.location.href = '/product/'+content.product_id
  }
</script>

<div class="flex flex-col">
    <img src={content.image} alt="{content.name}-image">
    <h1 class="pt-14 pb-6 text-3xl font-bold">{content.name}</h1>
    <p>{@html content.description}</p>
</div>
<div class="py-8">
  <button on:click={handleCta} class="py-2 w-full rounded-lg bg-green-400 text-white text-2xl font-bold">{content.cta}</button>
</div>