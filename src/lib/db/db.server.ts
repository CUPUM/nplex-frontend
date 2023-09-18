import { NEON_DB_URL, NEON_POOL_DB_URL } from '$env/static/private';
import { Pool, neon, neonConfig } from '@neondatabase/serverless';
import { drizzle as httpdrizzle } from 'drizzle-orm/neon-http';
import { drizzle as wsdrizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import * as accountsSchema from './schema/accounts';
import * as i18nSchema from './schema/i18n';
import * as publicSchema from './schema/public';

const schema = { ...publicSchema, ...accountsSchema, ...i18nSchema };

neonConfig.fetchConnectionCache = true;
const sqlhttp = neon(NEON_DB_URL);
/**
 * Http database connection.
 *
 * @see https://orm.drizzle.team/docs/installation-and-db-connection/postgresql/neon
 */
export const dbhttp = httpdrizzle(sqlhttp, { schema });

neonConfig.webSocketConstructor = ws;
export const pool = new Pool({ connectionString: NEON_POOL_DB_URL });
/**
 * Web-socket pooled database connection.
 *
 * @see https://github.com/neondatabase/serverless#example-nodejs-with-poolconnect
 */
export const dbpool = wsdrizzle(pool, { schema });

// /**
//  * Instanciate a pooled connection to enable transactions and more features.
//  *
//  * @warning Make sure to close your pool connection after its context completion. You should use `await pool.end()` when closing your queries' context.
//  */
// export function createDbPool() {
// 	neonConfig.webSocketConstructor = ws;
// 	const pool = new Pool({ connectionString: NEON_DB_URL });
// 	/**
// 	 * Web-socket pooled database connection.
// 	 *
// 	 * @see https://github.com/neondatabase/serverless#example-nodejs-with-poolconnect
// 	 */
// 	const db = wsdrizzle(pool);
// 	return { db, pool };
// }
