import { writable } from "svelte/store";

export const isLoggedIn = writable(false);

export const cartItems = writable([
    // title: "",
    // durationInYears: "",
    // ectsPoints: "",
    // educationGroup: ""
]);