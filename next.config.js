/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com', 'th.bing.com', 'flowbite.s3.amazonaws.com'],
    },
    experimental: {
        mdxRs: true
    }
}

module.exports = nextConfig
