<script>
// @ts-nocheck

    import { ref, onValue } from "firebase/database";
    import { database } from '../../firebase';
    import { user } from '../state'
    import ItemCart from "$components/ItemCart.svelte";

    let userData;
    let cartData = [];
    
    const loadData = () => {
        const refDb = ref(database, 'cart/' + userData.uid);
        let tempData = [];
        onValue(refDb, (snapshot) => {
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
            // console.log(cartData);
        })
    }
    
    user.subscribe(value => {
        userData = value;
        if(userData) loadData()
    });


</script>


<h1 class="text-2xl pb-6">Cart</h1>
    <div class="flex flex-col gap-2 w-full">
        {#each cartData as data}
            <ItemCart {data} />
        {/each}
    </div>