<script>
// @ts-nocheck

    import { ref, onValue, onChildRemoved } from "firebase/database";
    import { database } from '../../firebase';
    import { user } from '../state'
    import ItemCart from "$components/ItemCart.svelte";

    let userData;
    let cartData = [];
    let total = 0;
    
    const loadData = () => {
        const refDb = ref(database, 'cart/' + userData.uid);
        let tempData = [];
        onValue(refDb, (snapshot) => {
            updateData(snapshot, tempData)
        })
        onChildRemoved(refDb, (snapshot) => {
            updateData(snapshot, tempData)
        })
    }

    const updateData = (snapshot, tempData) => {
        const data = snapshot.val();
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
        <button class="text-xl bg-green-400 text-white font-bold px-4 py-2 rounded-lg">Checkout</button>
    </div>
</div>

