/* istanbul ignore file */
import express, { Response, Request } from 'express'
import path from 'path'
import ejs from 'ejs'

import type { TemplateVar } from 'src/server/types/template'
import {
    publicParam,
    assetParam,
    GetTemplateVar,
    showReact,
} from 'src/common/utils/server-route'

const { bundles, publicDir, baseDir } = require('src/common/utils/path')

const staticRouter = express.Router()

/**
 * Public Dir
 */
staticRouter.get(publicParam[0], publicParam[1])
staticRouter.get(assetParam[0], assetParam[1])

const getTemplateVar: GetTemplateVar<TemplateVar> = async (req) => {
    return {
        title: process.env.TITLE as string,
        excerpt: process.env.EXCERPT as string,
        url: process.env.FRONTEND as string,
        adClient: process.env.GOOGLE_AD_CLIENT as string,
        adSlot: process.env.GOOGLE_AD_SLOT as string,
        image: '/thumbnail.png',
    }
}

/**
 * React frontend
 */
staticRouter.use((req, res) => {
    showReact(req, res, getTemplateVar)
})

export { staticRouter }
