interface ImportMetaEnv {
    readonly PUBLIC_URL: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    Alpine: import('alpinejs').Alpine;
}