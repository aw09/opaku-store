<script>
    import ItemCard from "../components/ItemCard.svelte";
    import CampaignCard from "../components/CampaignCard.svelte";
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
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
</section>