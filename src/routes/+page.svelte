<script>
// @ts-nocheck

    import ItemCard from "../components/ItemCard.svelte";
    import CampaignCard from "../components/CampaignCard.svelte";
    import { ref, get } from "firebase/database";
    import {database} from '../firebase';

    let dataCampaign = [];
    const getCampaign = async () => {
        const refDb = ref(database, 'campaign' );
        get(refDb).then((snapshot) => {
            const data = snapshot.val();
            dataCampaign = data;
        });
    }

    let dataProduct = [];
    const getProduct = async () => {
        const refDb = ref(database, 'products' );
        get(refDb).then((snapshot) => {
            const data = snapshot.val();
            dataProduct = data;
        });
    }

    getCampaign();
    getProduct();
</script>

<section id="campaign-list" class="py-2">
    <div class="flex gap-2 relative overflow-x-scroll pb-2">
    {#each dataCampaign as campaign, index}
        {#if campaign }
            <CampaignCard {...campaign} id={index} />
        {/if}
    {/each}
    </div>
</section>
<section class="item-container grid gap-2 py-2 md:grid-cols-3 grid-cols-2">
    {#each dataProduct as product, index}
        {#if product }
            <ItemCard {...product} id={index} />
        {/if}
    {/each}
</section>