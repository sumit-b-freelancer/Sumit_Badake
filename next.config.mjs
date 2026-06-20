const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const requestedBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const derivedBasePath =
  requestedBasePath || (process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}` : '');

const basePath = derivedBasePath === '/' ? '' : derivedBasePath.replace(/\/$/, '');

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
