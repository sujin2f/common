import express from 'express'

import {
    publicParam,
    assetParam,
    GetTemplateVar,
    showReact,
} from 'src/common/utils/server-route'

const staticRouter = express.Router()

/**
 * Public Dir
 */
staticRouter.get(publicParam[0], publicParam[1])
staticRouter.get(assetParam[0], assetParam[1])

const getTemplateVar: GetTemplateVar<TemplateVar> = async () => {
    return {
        SITE_NAME: process.env.TITLE || '',
        TITLE: process.env.TITLE || '',
        DESCRIPTION: process.env.EXCERPT || '',
        EXCERPT: process.env.EXCERPT || '',
        IMAGE: './thumbnail.png',
        URL: process.env.FRONTEND || '',
        FRONTEND: process.env.FRONTEND || '',
        GOOGLE_AD_CLIENT: process.env.GOOGLE_AD_CLIENT || '',
        GOOGLE_AD_SLOT: process.env.GOOGLE_AD_SLOT || '',
        IS_PRODUCTION: process.env.NODE_ENV === 'production',
        VERSION: process.env.VERSION || '1.0.0',
    }
}

/**
 * React frontend
 */
staticRouter.use((req, res) => {
    showReact(req, res, getTemplateVar)
})

export { staticRouter }
