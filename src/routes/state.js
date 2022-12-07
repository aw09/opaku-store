// @ts-nocheck
import { writable } from 'svelte/store'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

export const navbar = writable(false)
export const user = writable(null)
export const snackbar = writable({state: false, message: ""})

onAuthStateChanged(auth, (userData) => {
    if (userData) {
        user.update(n => userData);
    } else {
        user.update(n => null);
    }
});

export const setSnackbar = message => {
    snackbar.set({
        state: true,
        message: message
    })
}

export const resetSnackbar = () => {
    snackbar.set({ state: false, message: "" })
}