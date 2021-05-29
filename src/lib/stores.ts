import { writable } from "svelte/store";
import { browser } from "$app/env";


export const user = writable('')

export const selectedStore = writable({})


if (browser) {


}