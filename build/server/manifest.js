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
		client: {start:"_app/immutable/entry/start.BTkOVfJL.js",app:"_app/immutable/entry/app.Ctod53PL.js",imports:["_app/immutable/entry/start.BTkOVfJL.js","_app/immutable/chunks/C2Uuf7vX.js","_app/immutable/chunks/WU3FHSPT.js","_app/immutable/chunks/BGwUJsSA.js","_app/immutable/chunks/7PjWF9o6.js","_app/immutable/entry/app.Ctod53PL.js","_app/immutable/chunks/WU3FHSPT.js","_app/immutable/chunks/DbLMf37s.js","_app/immutable/chunks/BmjuCZ8b.js","_app/immutable/chunks/7PjWF9o6.js","_app/immutable/chunks/CcpoW8Rx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DVPmFAq4.js')),
			__memo(() => import('./chunks/1-Up-TUKIX.js')),
			__memo(() => import('./chunks/2-Dz10cumJ.js')),
			__memo(() => import('./chunks/3-B9DDzsrg.js')),
			__memo(() => import('./chunks/4-4lUGKdVS.js')),
			__memo(() => import('./chunks/5-BaJJIJ6x.js')),
			__memo(() => import('./chunks/6-B0usyJkr.js')),
			__memo(() => import('./chunks/7-Du-5I2Tt.js')),
			__memo(() => import('./chunks/8-C2tq5V1M.js')),
			__memo(() => import('./chunks/9-BomxzjbX.js')),
			__memo(() => import('./chunks/10-DHi9cWNV.js')),
			__memo(() => import('./chunks/11-DKWFqOTW.js'))
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
