import { writable } from "svelte/store";
import type { Measurements } from "./types";

export const measurements = writable<Measurements>("metric");