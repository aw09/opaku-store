<script>
// @ts-nocheck
    import IoIosRemoveCircleOutline from 'svelte-icons/io/IoIosRemoveCircleOutline.svelte'
    import IoIosAddCircleOutline from 'svelte-icons/io/IoIosAddCircleOutline.svelte'
    import { ref, set, remove } from "firebase/database";
    import { database } from '$firebase';
    import { user } from '$state';
    export let data;
    let userData;
    let refDb;

    user.subscribe(value => {
		userData = value;
        refDb = ref(database, 'cart/' + userData.uid + '/' + data.item_id)
	});

    const increase = () => {
        data.quantity++;
        set(refDb, data);
    }

    const decrease = () => {
        if (data.quantity == 1) 
            return remove(refDb)

        data.quantity--;
        set(refDb, data);
    }


</script>

<div class="flex gap-2">
    <img class="w-28 h-28 rounded-lg" src={data.image} alt="{data.name}-image">
    <div class="grow">
        <h1 class="font-bold">{data.item_name}</h1>
        <p>Rp {data.price.toLocaleString()}</p>
    </div>
    <div>
        <div id="quantity-control" class="flex items-center w-20 md:w-24">
            <button on:click={decrease} class="w-5"><IoIosRemoveCircleOutline/></button>
            <p class="mx-auto">{data.quantity}</p>
            <button on:click={increase} class="w-5"><IoIosAddCircleOutline/></button>
        </div>
    </div>
</div>