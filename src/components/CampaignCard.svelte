<script>
// @ts-nocheck
    import { base } from '$app/paths';

    export let id;
    export let name;
    export let thumbnail;

    const handleClick = () => {
        window.location.href = base+'/campaign?id='+id;
    }
</script>

<div on:click={handleClick} class="campaign-card w-60 h-28 border-2 border-gray-300 rounded-lg cursor-pointer overflow-hidden">
    <img src={thumbnail} alt="{name}-thumbnail">
</div>