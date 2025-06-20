const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.qF6BAHtr.js",app:"_app/immutable/entry/app.C4QIHwxW.js",imports:["_app/immutable/entry/start.qF6BAHtr.js","_app/immutable/chunks/CTBee6e-.js","_app/immutable/chunks/Ces5mITZ.js","_app/immutable/chunks/DLKgxZ_C.js","_app/immutable/chunks/DkY9ZXZx.js","_app/immutable/chunks/D2RUnR1M.js","_app/immutable/entry/app.C4QIHwxW.js","_app/immutable/chunks/Ces5mITZ.js","_app/immutable/chunks/DLKgxZ_C.js","_app/immutable/chunks/BsAXyQwB.js","_app/immutable/chunks/BYRDEjCi.js","_app/immutable/chunks/DBavZ5B7.js","_app/immutable/chunks/D2RUnR1M.js","_app/immutable/chunks/CpuaUByv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CYr3PmaR.js')),
			__memo(() => import('./chunks/1-DiATE2r-.js')),
			__memo(() => import('./chunks/2-rRPEB5YM.js')),
			__memo(() => import('./chunks/3-D_48xbk9.js')),
			__memo(() => import('./chunks/4-CZi_wuyu.js')),
			__memo(() => import('./chunks/5-BNxwSbx7.js')),
			__memo(() => import('./chunks/6-HBEm3Ntr.js')),
			__memo(() => import('./chunks/7-C9bgGepC.js')),
			__memo(() => import('./chunks/8-WOhH5rC1.js')),
			__memo(() => import('./chunks/9-CbSnAIx9.js')),
			__memo(() => import('./chunks/10-C2-sN2tL.js')),
			__memo(() => import('./chunks/11-B48dHQ8I.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Collatz",
				pattern: /^\/Collatz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Martingale",
				pattern: /^\/Martingale\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Python",
				pattern: /^\/Python\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Test",
				pattern: /^\/Test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/async5",
				pattern: /^\/async5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/clone",
				pattern: /^\/clone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/cube",
				pattern: /^\/cube\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/digitalannealing",
				pattern: /^\/digitalannealing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/score",
				pattern: /^\/score\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
