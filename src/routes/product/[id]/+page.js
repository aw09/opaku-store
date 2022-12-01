import { error } from '@sveltejs/kit';
import { ref, get } from "firebase/database";
import { database } from '../../../firebase';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const id = params.id;
    const refDb = ref(database, 'products/' + id);
    return (await get(refDb)).val();
}