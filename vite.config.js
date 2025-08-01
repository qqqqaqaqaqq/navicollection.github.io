import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/navicollection.github.io/",
    plugins: [
        react(),
        compression({ algorithm: "gzip" }),
        compression({ algorithm: "brotliCompress" })
    ],
    server: {
        port: 51761,
    }
})