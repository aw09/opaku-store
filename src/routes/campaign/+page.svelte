<script>
// @ts-nocheck

  import { ref, get, set } from "firebase/database";
  import { getAnalytics, logEvent } from "firebase/analytics";
  import { app, database } from '$firebase';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  
  const id = $page.url.searchParams.get('id');
  let analytics;
  let productLog;
  let promotionLog;
  let campaign;
  let product;
  
  const fetchData = async () => {
    const refDb = ref(database, 'campaign/' + id);
    const campaignData = (await get(refDb)).val();
    const refDbProduct = ref(database, 'products/' + campaignData.product_id);
    const productData = (await get(refDbProduct)).val();
    if(productData) {
      initAnalytics()
      return {campaign: campaignData, product: productData}
    }
    else throw new Error("Campaign Not Found");
  }

  const promise = fetchData()

  const initAnalytics = async () => {
    analytics = getAnalytics(app)
    campaign = (await promise).campaign;
    product = (await promise).product;
    productLog = {
      item_id: campaign.product_id,
      item_name: product.name,
      price: product.price
    }
    promotionLog = {
      promotion_id: id,
      promotion_name: campaign.name,
      location_id: 'HOME_BANNER',
      items: [productLog]
    }

    logEvent(analytics, 'view_promotion', promotionLog);
  }
  

  const handleCta = () => {
    logEvent(analytics, 'select_promotion', promotionLog);
    window.location.href = base + '/product?id='+campaign?.product_id
  }
</script>

<head>
    <title>Campaign Detail</title>
</head>

{#await promise}
<span>Loading data...</span>
{:then data}
  <div class="flex flex-col">
      <img src={data.campaign.image} alt="{data.campaign.name}-image">
      <h1 class="pt-14 pb-6 text-3xl font-bold">{data.campaign.name}</h1>
      <p>{@html data.campaign.description}</p>
  </div>
  <div class="py-8">
    <button on:click={handleCta} class="py-2 w-full rounded-lg bg-green-400 text-white text-2xl font-bold">{data.campaign.cta}</button>
  </div>
{:catch error}
	<h2 class="mx-auto text-xl">{error.message}</h2>
{/await}