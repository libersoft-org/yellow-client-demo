

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c989f28b.js","_app/immutable/chunks/index.ce530a3b.js","_app/immutable/chunks/singletons.0a11733f.js","_app/immutable/chunks/index.ba8b4f8d.js"];
export const stylesheets = [];
export const fonts = [];