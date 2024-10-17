import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
	await setupDevPlatform()
}

const watchNodeModules = true

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {
		runtime: 'experimental-edge',
	},

	webpack(config, { isServer, nextRuntime }) {
		if (watchNodeModules) {
			// It's recommended to opt-out of managedPaths if editing files in
			// node_modules directly.
			// @see https://github.com/webpack/webpack/issues/11612#issuecomment-705790881
			// @see https://webpack.js.org/configuration/other-options/#managedpaths
			config.snapshot.managedPaths = []

			// config.watchOptions isn't directly writable, so we use defineProperty.
			Object.defineProperty(config, 'watchOptions', {
				...Object.getOwnPropertyDescriptor(config, 'watchOptions'),
				value: {
					...config.watchOptions,
					ignored: /^((?:[^/]*(?:\/|$))*)(\.(git|next))(\/((?:[^/]*(?:\/|$))*)(?:$|\/))?/,
				},
			})

			// This seems to work without any changes to watchOptions.followSymlinks
			// or resolve.symlinks, but in case it ever becomes relevant:
			// @see https://github.com/webpack/webpack/issues/11612#issuecomment-1448208868
		}

		return config
	},
}

export default nextConfig
