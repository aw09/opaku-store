// @ts-nocheck
import { writable } from 'svelte/store'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const navbar = writable(false)
export const user = writable(null)

onAuthStateChanged(auth, (userData) => {
    if (userData) {
        user.update(n => userData);
    } else {
        user.update(n => null);
    }
});