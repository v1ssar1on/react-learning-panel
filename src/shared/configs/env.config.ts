// example of environment variables configuration

export const envConfig = {
  appUrl: import.meta.env.VITE_APP_URL,
  apiUrl: import.meta.env.VITE_API_URL,
} as const
