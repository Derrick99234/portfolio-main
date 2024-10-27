/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.wired.com',
                port: '',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port: '',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'media.sproutsocial.com',
                port: '',
                pathname: '/*'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/*'
            }
        ],
    },
};

export default nextConfig;
