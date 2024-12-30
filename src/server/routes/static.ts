/* istanbul ignore file */
import express, { Response, Request } from 'express'
import path from 'path'
import ejs from 'ejs'

import { GlobalVariable } from 'src/types/common'
import {
    publicParam,
    GetGlobalVariable,
    showReact,
} from 'src/common/utils/server-route'

const { bundles, publicDir, baseDir } = require('src/common/utils/path')

const staticRouter = express.Router()

/**
 * Public Dir
 */
staticRouter.get(publicParam[0], publicParam[1])

/**
 * JS
 */
staticRouter.get('/(*).js', (req, res) => {
    res.sendFile(`${baseDir}/frontend${req.url}`)
})

/**
 * Static Dir
 */
staticRouter.get('/static(/*)', (req, res) => {
    res.sendFile(`${baseDir}/frontend${req.url}`)
})

const getGlobalVariable: GetGlobalVariable<GlobalVariable> = async (req) => {
    return {
        siteName: process.env.TITLE as string,
        description: process.env.DESCRIPTION as string,
        url: process.env.PUBLIC_URL as string,
    }
}

/**
 * React frontend
 */
staticRouter.use((req, res) => {
    showReact(req, res, getGlobalVariable)
})

export { staticRouter }
