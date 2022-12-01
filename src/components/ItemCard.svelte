<script>
// @ts-nocheck
    export let id;
    export let name;
    export let image;
    export let price;

    const handleClick = id => {
        window.location.href = '/product/'+id;
    }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={()=>handleClick(id)}  class="item-card border-2 border-gray-300 h-56 rounded-lg p-2 cursor-pointer">
    <img class="h-36 w-36 mx-auto" src={image} alt="{name}-image">
    <h1 class="font-bold text-lg text-gray-500">{name}</h1>
    <p>Rp {price.toLocaleString()}</p>
</div>
