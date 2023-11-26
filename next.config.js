/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['via.placeholder.com', 'th.bing.com', 'flowbite.s3.amazonaws.com', 'avatars.githubusercontent.com', 'images.unsplash.com', 'velog.velcdn.com'],
    },
    experimental: {
        mdxRs: true
    }
}

module.exports = nextConfig
