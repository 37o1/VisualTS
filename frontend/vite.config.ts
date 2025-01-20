import {defineConfig} from "vite";

export default defineConfig({
	appType: "spa",
	server: {
		port: 3770,
		strictPort: true,
		proxy: {
			"/socket.io": {
				target: "http://localhost:3775/",
				ws: true,
				changeOrigin: true,
			}
		}
	},
});