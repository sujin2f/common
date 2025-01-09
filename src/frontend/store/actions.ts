import { Action } from 'src/frontend/store/store'
import { ActionType } from 'src/frontend/store/constants'

export const setDummy = (dummy: boolean): Action => ({
    type: ActionType.SET_DUMMY,
    version: window.frontendVars.VERSION || '',
    dummy,
})
