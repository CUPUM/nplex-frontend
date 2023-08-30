import { getContext, setContext } from 'svelte';

/**
 * Allows defining adequately typed and corresponding context setter & context getter.
 *
 * @returns A tuple of [Context setter, Context getter];
 */
export function defineContext<T>(key: unknown) {
	function set(context: T) {
		return setContext<T>(key, context);
	}
	function get() {
		const ctx = getContext<T>(key);
		if (!ctx) {
			throw new Error(
				`No context found for key ${key}. Please make sure you are calling getContext inside a children of a component that uses setContext with that key.`
			);
		}
		return getContext<T>(key);
	}
	return [set, get] as const as [setter: typeof set, getter: typeof get];
}
