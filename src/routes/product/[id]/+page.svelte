<script>
  import { getAnalytics, logEvent } from "firebase/analytics";
  import { app } from '../../../firebase';
  import { onMount } from 'svelte';
    
  /** @type {import('./$types').PageData} */
  export let data;

  onMount(() => {
    // Record google analytics
    const analytics = getAnalytics(app);

    const product = {
      item_id: data.id,
      item_name: data.content.name,
      price: data.content.price
    }

    logEvent(analytics, 'detail_product', product);
  });
</script>

<div class="flex py-4">
    <img class="h-48 w-48" src={data.content.image} alt='{data.content.name}-image'>
    <div>
        <h1>{data.content.name}</h1>
        <p>Rp {data.content.price.toLocaleString()}</p>
    </div>
</div>