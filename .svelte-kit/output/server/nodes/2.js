

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.75c65748.js","_app/immutable/chunks/index.ce530a3b.js","_app/immutable/chunks/index.ba8b4f8d.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = ["_app/immutable/assets/2.025dab0f.css"];
export const fonts = [];
