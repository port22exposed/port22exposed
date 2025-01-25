// @ts-check
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	site: "https://port22.exposed",
    output: "static",
    devToolbar: {
        enabled: false
    },
})