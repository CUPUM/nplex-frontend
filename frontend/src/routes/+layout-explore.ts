import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		showCategoryNav: true,
		showExploreSearchbar: false,
	};
};
