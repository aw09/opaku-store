<script>
// @ts-nocheck

    import { ref, onValue, onChildRemoved, remove, onDisconnect } from "firebase/database";
    import { app, database } from '$firebase';
    import { user, setSnackbar } from '../state'
    import ItemCart from "$components/ItemCart.svelte";
    import { getAnalytics, logEvent } from "firebase/analytics";
    import { onMount } from 'svelte';

    let userData;
    let cartData = [];
    let total = 0;
    let analytics;
    let viewCartLog;
    let refDb;

    onMount(() => {
        analytics = getAnalytics(app)
    });


    const loadData = () => {
        refDb = ref(database, 'cart/' + userData.uid);
        
        let firstRender = true;
        onValue(refDb, (snapshot) => {
            updateData(snapshot, {firstRender: firstRender})
            firstRender = false
        })
        onChildRemoved(refDb, (snapshot) => {
            updateData(snapshot)
        })
        onDisconnect(refDb, (snapshot) => {
            updateData(snapshot)
        })
        
        logEvent(analytics, 'view_cart', viewCartLog);
    }

    const checkout = () => {
        logEvent(analytics, 'begin_checkout', viewCartLog);
        remove(refDb).finally((snapshot) => {
            console.log(snapshot)
            updateData(snapshot)
        });
        // Show modal checkout
        setSnackbar("You have already checked out")
    }

    const updateData = (snapshot, firstRender = false) => {
        const data = snapshot?.val() || [];
        let tempData = [];

        if (!Array.isArray(data)){
            for(let key in data){
                tempData[key] = data[key]
            }
        }
        else{
            tempData = data
        }
        cartData = tempData.filter((d) => d);

        total = cartData.reduce((tempTotal, data) => {
            return tempTotal + data.quantity * data.price;
        }, 0)

        viewCartLog = {
            currency: 'IDR',
            value: total,
            items: cartData
        }
    }

    user.subscribe(value => {
        userData = value;
        if(userData) loadData()
    });



</script>


<h1 class="text-2xl pb-6">Cart</h1>
<div class="flex flex-col gap-2 w-full grow">
    {#each cartData as data}
        <ItemCart {data} />
    {/each}
    <div class="grow"></div>
    
    <div class="flex text-xl font-bold">
        <h1 class="grow">TOTAL</h1>
        <p>Rp {total.toLocaleString()}</p>
    </div>
    <div class="w-full flex  justify-end mb-10">
        <button on:click={checkout} class="text-xl bg-green-400 text-white font-bold px-4 py-2 rounded-lg">Checkout</button>
    </div>
</div>

