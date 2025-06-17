
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n\t<style>\n.h3 {\n    color: gold;\n    font-size: 27px;\n    text-align: center;\n    }\n\n.i3 {\n  margin-left: 3%;\n  text-align: left;\n}\n    \nhtml {background-color:#0c0c0c;}\n\ndiv {\n    color: blue;\n}\n\nbody {\n    font-size: 22px;\n    color: darkblue;\n    padding-left: 3%;\n    padding-right: 3%;\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    min-height: 100vh;\n    border-radius: 17px;\n}\n\np {\n    color: rgb(219, 253, 244);\n    font-size: 24px;\n    text-indent: 3%;\n}\n\n.p2 {\n    color: rgb(195, 219, 255);\n}\n\nh3 {\n    color: gold;\n    font-size: 22px;\n}\n\n.columns {\n    column-count: 2;\n    display: flex;\n}\n\t\n  button {\n    margin-left: 1%;\n    background-color: rgb(72, 7, 162);\n    border-width: 2px;\n    border-color: #E8F7C1;\n    border-radius: 10px;\n    color: gold;\n    font-size: 22px;\n    box-shadow: 0px 0px 5px 0px rgb(255, 215, 0);\n    padding: 3px 10px 3px 10px; \n  } \n\n  \n  button:hover {\n    color: blue;\n    background-color: gold;\n    border-color: #E8F7C1;\n    border-radius: 10px;\n    box-shadow: 0px 0px 25px 0px rgb(255, 255, 0);\n    font-size: 23px;\n  }\n\npre {\n    color: rgb(241, 206, 206);\n    font-size: 24p;\n    white-space: pre-wrap;       /* Since CSS 2.1 */\n    word-break: keep-all;\n    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */\n    white-space: -pre-wrap;      /* Opera 4-6 */\n    white-space: -o-pre-wrap;    /* Opera 7 */\n    word-wrap: break-word;       /* Internet Explorer 5.5+ */\n}\n\ndiv {\n    color: darkgreen;\n}\n\nh3 {\n    color: rgb(140, 216, 248);\n}\n\nh1, h2 {\n    color: gold;\n}\n\nspan {\n    color: rgb(219, 253, 244);\n    font-size: 24px;\n}\n\np span {\n    /*text-transform: uppercase; */\n    color: rgb(219, 253, 244);\n    font-size: 24px;\n}\n\na {\n    /*background-color: lightblue; */\n    border-color: #E8F7C1;\n    color: rgb(232, 217, 241);\n    font-size: 22px;\n  } \n\n  a:hover {\n    color: magenta; \n    background-color: gold;\n    border-color: #E8F7C1;\n    border-radius: 10px;\n    box-shadow: 0px 0px 25px 0px rgb(255, 255, 0);\n  }\n\n   .h3a {\n    font-size: 32px; \n    font-weight: bold;\n  }\n\n   .h3b {\n    font-size: 32px; \n    font-weight: bold;\n    text-align: center;\n  }\n</style>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "3ypol6"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
