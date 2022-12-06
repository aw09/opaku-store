import { error } from '@sveltejs/kit';
import { ref, get } from "firebase/database";
import { database } from '../../../firebase';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const id = params.id;
    const refDb = ref(database, 'products/' + id);
    return {
        'id': id,
        'content': (await get(refDb)).val()
    };
}