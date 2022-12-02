import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: path.resolve('./src'),
			$routes: path.resolve('./src/routes'),
			$components: path.resolve('./src/components'),
			$state: path.resolve('./src/routes/state'),
			$firebase: path.resolve('./src/firebase')
		}
	}
};

export default config;
