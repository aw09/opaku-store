import adapter from "@sveltejs/adapter-static";
// import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({strict: false}),
		paths: {
			base: process.env.NODE_ENV === "production" ? "/opaku-store" : "",
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

};

export default config;