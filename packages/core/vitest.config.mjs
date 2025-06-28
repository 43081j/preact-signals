import { defineConfig } from 'vitest/config';
import { manglePlugin } from '../../scripts/mangle-plugin.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const MINIFY = process.env.MINIFY === "true";
const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	extends: true,
	resolve: MINIFY ? {
		alias: {
			'@preact/signals-core': path.join(dirname, './dist/signals-core.min.js')
		}
	} : {},
	plugins: [
		manglePlugin
	],
	test: {
		globals: true,
		include: ['./test/**/*.test.tsx']
	}
});
