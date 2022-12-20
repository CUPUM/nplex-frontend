// Here imports cannot use path alias as the module is imported in vite.config
import { themeClasses, themeNames, type Theme } from '../../plugins/themes/utils';

export const THEMES = {
	LIGHT: {
		bg: {
			'000': 'hsl(54, 20%, 100%)',
			100: 'hsl(55, 20%, 98%)',
			300: 'hsl(56, 18%, 94%)',
			500: 'hsl(57, 15%, 90%)',
			700: 'hsl(59, 12%, 86%)',
			900: 'hsl(60, 11%, 81%)',
		},
		fg: {
			'000': 'hsl(165, 10%, 0%)',
			100: 'hsl(165, 8%, 7%)',
			300: 'hsl(165, 6%, 11%)',
			500: 'hsl(165, 4%, 15%)',
			700: 'hsl(165, 3%, 19%)',
			900: 'hsl(165, 2%, 22%)',
		},
		primary: {
			100: 'hsl(120, 48%, 72%)',
			300: 'hsl(122, 46%, 64%)',
			500: 'hsl(124, 44%, 56%)',
			700: 'hsl(126, 46%, 45%)',
			900: 'hsl(128, 48%, 34%)',
		},
		secondary: {
			100: 'hsl(243, 86%, 81%)',
			300: 'hsl(244, 83%, 77%)',
			500: 'hsl(245, 77%, 72%)',
			700: 'hsl(246, 74%, 66%)',
			900: 'hsl(247, 66%, 58%)',
		},
		success: {
			100: 'hsl(83, 71%, 74%)',
			300: 'hsl(83, 72%, 68%)',
			500: 'hsl(83, 73%, 60%)',
			700: 'hsl(83, 74%, 49%)',
			900: 'hsl(83, 80%, 44%)',
		},
		error: {
			100: 'hsl(5, 90%, 78%)',
			300: 'hsl(5, 85%, 70%)',
			500: 'hsl(5, 80%, 62%)',
			700: 'hsl(5, 74%, 54%)',
			900: 'hsl(5, 70%, 46%)',
		},
	},
	DARK: {
		bg: {
			'000': 'hsl(204, 20%, 0%)',
			100: 'hsl(203, 19%, 8%)',
			300: 'hsl(202,18%, 11%)',
			500: 'hsl(201,17%, 13%)',
			700: 'hsl(200, 16%, 15%)',
			900: 'hsl(199, 14%, 17%)',
		},
		fg: {
			'000': 'hsl(140, 9%, 86%)',
			100: 'hsl(125, 10%, 90%)',
			300: 'hsl(110, 12%, 93%)',
			500: 'hsl(95, 16%, 95%)',
			700: 'hsl(80, 20%, 98%)',
			900: 'hsl(0, 0%, 100%)',
		},
		primary: {
			100: 'hsl(138, 65%, 30%)',
			300: 'hsl(137, 54%, 39%)',
			500: 'hsl(136, 43%, 50%)',
			700: 'hsl(136, 44%, 62%)',
			900: 'hsl(137, 45%, 72%)',
		},
		secondary: {
			100: 'hsl(247, 66%, 58%)',
			300: 'hsl(246, 74%, 66%)',
			500: 'hsl(245, 77%, 72%)',
			700: 'hsl(244, 83%, 77%)',
			900: 'hsl(243, 86%, 81%)',
		},
		success: {
			100: 'hsl(83, 71%, 74%)',
			300: 'hsl(83, 72%, 68%)',
			500: 'hsl(83, 73%, 60%)',
			700: 'hsl(83, 74%, 49%)',
			900: 'hsl(83, 80%, 44%)',
		},
		error: {
			100: 'hsl(2, 90%, 78%)',
			300: 'hsl(3, 88%, 72%)',
			500: 'hsl(3, 84%, 66%)',
			700: 'hsl(4, 76%, 59%)',
			900: 'hsl(5, 66%, 50%)',
		},
	},
} as const satisfies Record<string, Theme>;

export const THEME_CLASSES = themeClasses(THEMES);

export const THEME_NAMES = themeNames(THEMES);
