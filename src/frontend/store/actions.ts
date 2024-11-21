import { Action } from 'src/frontend/store/store'

export const SET_DUMMY = 'mongo/v1/SET_DUMMY'

export const setDummy = (dummy: boolean): Partial<Action> => {
    return {
        type: SET_DUMMY,
        dummy,
    }
}
