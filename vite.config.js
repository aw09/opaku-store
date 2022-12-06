import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const prod = process.env.NODE_ENV === "production";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$base: prod ? '/opaku-store' : '',
			$src: path.resolve('./src'),
			$routes: path.resolve('./src/routes'),
			$components: path.resolve('./src/components'),
			$state: path.resolve('./src/routes/state'),
			$firebase: path.resolve('./src/firebase')
		}
	}
};

export default config;
