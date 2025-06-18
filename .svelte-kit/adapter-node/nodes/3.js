

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Collatz/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BsyZ3grk.js","_app/immutable/chunks/BmjuCZ8b.js","_app/immutable/chunks/WU3FHSPT.js","_app/immutable/chunks/BHrKQAH6.js","_app/immutable/chunks/DbLMf37s.js","_app/immutable/chunks/BK7NlGbo.js"];
export const stylesheets = ["_app/immutable/assets/3.CkF6uak3.css"];
export const fonts = [];
