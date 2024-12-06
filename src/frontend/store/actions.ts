import { Action } from 'src/frontend/store/store'
import { ActionType } from 'src/frontend/store/constants'

export const setDummy = (dummy: boolean): Partial<Action> => ({
    type: ActionType.SET_DUMMY,
    dummy,
})
