<script>
// @ts-nocheck
    export let id;
    export let name;
    export let thumbnail;

    const handleClick = () => {
        window.location.href = 'campaign/'+id;
    }
</script>

<div on:click={handleClick} class="campaign-card min-w-[15rem] h-28 border-2 border-gray-300 rounded-lg cursor-pointer overflow-hidden">
    <img src={thumbnail} alt="{name}-thumbnail">
</div>