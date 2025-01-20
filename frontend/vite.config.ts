import {defineConfig} from "vite";

export default defineConfig({
	appType: "spa",
	server: {
		port: 3770,
		strictPort: true,
	},
});