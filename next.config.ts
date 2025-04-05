import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true, // ✅ Ignore les erreurs TypeScript
    },
    eslint: {
        ignoreDuringBuilds: true, // ✅ Ignore les erreurs ESLint
    },
};


export default nextConfig;
