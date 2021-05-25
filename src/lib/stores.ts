import { writable } from "svelte/store";
import { browser } from "$app/env";

export const user = writable('')

if (browser) {


}