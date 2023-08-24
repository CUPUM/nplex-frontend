import type { ValueOf } from 'type-fest';

/**
 * Css cursor names.
 */
export const CURSOR = {
	ADD: 'add',
	ALIAS: 'alias',
	AUTO: 'auto',
	CELL: 'cell',
	COPY: 'copy',
	CROSSHAIR: 'crosshair',
	DEFAULT: 'default',
	DRAG: 'drag',
	GRAB: 'grab',
	GRABBING: 'grabbing',
	HELP: 'help',
	MOVE: 'move',
	NONE: 'none',
	PROGRESS: 'progress',
	POINTER: 'pointer',
	TEXT: 'text',
	URL: 'URL',
	WAIT: 'wait',
	INITIAL: 'initial',
	INHERIT: 'inherit',
	COL_RESIZE: 'col-resize',
	CONTEXT_MENU: 'context-menu',
	E_RESIZE: 'e-resize',
	EW_RESIZE: 'ew-resize',
	N_RESIZE: 'n-resize',
	NE_RESIZE: 'ne-resize',
	NESW_RESIZE: 'nesw-resize',
	NS_RESIZE: 'ns-resize',
	NW_RESIZE: 'nw-resize',
	NWSE_RESIZE: 'nwse-resize',
	NO_DROP: 'no-drop',
	NOT_ALLOWED: 'not-allowed',
	ROW_RESIZE: 'row-resize',
	S_RESIZE: 's-resize',
	SE_RESIZE: 'se-resize',
	SW_RESIZE: 'sw-resize',
	VERTICAL_TEXT: 'vertical-text',
	W_RESIZE: 'w-resize',
	ZOOM_IN: 'zoom-in',
	ZOOM_OUT: 'zoom-out',
} as const;

export type Cursor = ValueOf<typeof CURSOR>;

/**
 * Http response status codes.
 */
export const STATUS_CODE = {
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NON_AUTHORITATIVE_INFORMATION: 203,
	NO_CONTENT: 204,
	RESET_CONTENT: 205,
	PARTIAL_CONTENT: 206,
	MULTIPLE_CHOICES: 300,
	MOVED_PERMANENTLY: 301,
	MOVED_TEMPORARILY: 302,
	SEE_OTHER: 303,
	NOT_MODIFIED: 304,
	USE_PROXY: 305,
	TEMPORARY_REDIRECT: 307,
	PERMANENT_REDIRECT: 308,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	PROXY_AUTHENTICATION_REQUIRED: 407,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	LENGTH_REQUIRED: 411,
	PRECONDITION_FAILED: 412,
	REQUEST_ENTITY_TOO_LARGE: 413,
	REQUEST_URI_TOO_LONG: 414,
	UNSUPPORTED_MEDIA_TYPE: 415,
	REQUESTED_RANGE_NOT_SATISFIABLE: 416,
	EXPECTATION_FAILED: 417,
	IM_A_TEAPOT: 418,
	INSUFFICIENT_SPACEON_RESOURCE: 419,
	METHOD_FAILURE: 420,
	MISDIRECTED_REQUEST: 421,
	UNPROCESSABLE_ENTITY: 422,
	LOCKED: 423,
	FAILED_DEPENDENCY: 424,
	PRECONDITION_REQUIRED: 428,
	TOO_MANY_REQUESTS: 429,
	REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	HTTP_VERSION_NOT_SUPPORTED: 505,
	INSUFFICIENT_STORAGE: 507,
	NETWORK_AUTHENTICATION_REQUIRED: 511,
} as const;

export type StatusCode = ValueOf<typeof STATUS_CODE>;
