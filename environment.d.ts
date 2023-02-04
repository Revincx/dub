declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DUB_DOMAIN: string;
      DUB_APP_DOMAIN: string;
      DUB_API_DOMAIN: string;
    }
  }
}

export {}