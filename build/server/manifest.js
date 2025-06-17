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
		client: {start:"_app/immutable/entry/start.B0YFx-bI.js",app:"_app/immutable/entry/app.B2aeeZLr.js",imports:["_app/immutable/entry/start.B0YFx-bI.js","_app/immutable/chunks/Db5OfBRJ.js","_app/immutable/chunks/B65Ra-PH.js","_app/immutable/chunks/TCS5Jh0-.js","_app/immutable/chunks/DHvIsmOp.js","_app/immutable/entry/app.B2aeeZLr.js","_app/immutable/chunks/B65Ra-PH.js","_app/immutable/chunks/dKuiboTu.js","_app/immutable/chunks/j718xIQC.js","_app/immutable/chunks/DHvIsmOp.js","_app/immutable/chunks/Bn9KAO3E.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-vMIxhrNB.js')),
			__memo(() => import('./chunks/1-6SU-S0rA.js')),
			__memo(() => import('./chunks/2-CbVI96dI.js')),
			__memo(() => import('./chunks/3-DBEsphAp.js')),
			__memo(() => import('./chunks/4-D4iZXFju.js')),
			__memo(() => import('./chunks/5-BI0hGs8x.js')),
			__memo(() => import('./chunks/6-q70equXb.js')),
			__memo(() => import('./chunks/7-DknTOvQG.js')),
			__memo(() => import('./chunks/8-tMl5T3Uc.js')),
			__memo(() => import('./chunks/9-nY1DeUuC.js')),
			__memo(() => import('./chunks/10-ClXijLKe.js'))
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
				id: "/async5",
				pattern: /^\/async5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/clone",
				pattern: /^\/clone\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/cube",
				pattern: /^\/cube\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/digitalannealing",
				pattern: /^\/digitalannealing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/score",
				pattern: /^\/score\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
