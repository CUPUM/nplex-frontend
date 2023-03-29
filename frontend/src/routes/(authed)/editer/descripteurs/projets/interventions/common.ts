import { writable } from 'svelte/store';
import type { PageData } from './$types';

export const types = writable<PageData['types']>();
export const interventions = writable<PageData['interventions']>();
