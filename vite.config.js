import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		// for github pages
		outDir: "docs",
	},
	plugins: [react()],
});
