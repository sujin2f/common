declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'

type FrontendVars = {
    SITE_NAME: string
    EXCERPT: string
    FRONTEND: string
    GOOGLE_AD_CLIENT: string
    GOOGLE_AD_SLOT: string
    IS_PRODUCTION: boolean
    VERSION: string
}

type TemplateVar = FrontendVars & {
    TITLE: string
    DESCRIPTION: string
    IMAGE: string
    URL: string
}

interface Window {
    hljs
    frontendVars: FrontendVars
}
