<script>
// @ts-nocheck

    import ItemCard from "../components/ItemCard.svelte";
    import CampaignCard from "../components/CampaignCard.svelte";
    import { ref, get } from "firebase/database";
    import {database} from '../firebase';
	import Header from "./Header.svelte";

    let dataProduct = [];
    const getProduct = async () => {
        const refDb = ref(database, 'products' );
        get(refDb).then((snapshot) => {
            const data = snapshot.val();
            dataProduct = data;
        });
    }
    getProduct();
</script>

<section id="campaign-list" class="py-2">
    <div class="flex gap-2 relative overflow-x-scroll pb-2">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
    </div>
</section>
<section class="item-container grid grid-cols-3 gap-2 py-2">
    {#each dataProduct as product, index}
        {#if product }
            <ItemCard {...product} id={index} />
        {/if}
    {/each}
</section>