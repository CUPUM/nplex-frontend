import { getDb } from '$utils/database/client';
import { STATUS_CODES } from '$utils/enums';
import { alwaysArr } from '$utils/format';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
	const db = await getDb(event);

	const indicators = db
		.from('project_exemplarity_indicator_category')
		.select(
			`
		*,
		indicators:project_exemplarity_indicator (
			*
		)
		`
		)
		.then((res) => {
			if (res.error) {
				throw error(STATUS_CODES.InternalServerError, res.error);
			}
			return res.data.map((d) => {
				return { ...d, indicators: alwaysArr(d.indicators) };
			});
		});

	return {
		indicators,
	};
};