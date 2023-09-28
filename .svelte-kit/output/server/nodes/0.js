

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.91b7dda4.js","_app/immutable/chunks/index.ce530a3b.js"];
export const stylesheets = [];
export const fonts = [];
