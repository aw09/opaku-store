import { ref, get } from "firebase/database";
import { database } from '../../../firebase';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const id = params.id;
    const refDb = ref(database, 'campaign/' + id);
    const campaignData = (await get(refDb)).val();
    const refDbProduct = ref(database, 'products/' + campaignData.product_id);
    const productData = (await get(refDbProduct)).val();
    return {
        'id': id,
        'content': campaignData,
        'product': productData,
    };
}