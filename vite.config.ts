import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~styles": path.resolve(__dirname, "src/styles"),
            "~assets": path.resolve(__dirname, "src/assets"),
            "~context": path.resolve(__dirname, "src/context"),
            "~components": path.resolve(__dirname, "src/components"),
            "~pages": path.resolve(__dirname, "src/pages"),
            "~constants": path.resolve(__dirname, "src/constants"),
        },
    },
});
