import { SET_DUMMY } from 'src/frontend/store/actions'
import { Action, State } from 'src/frontend/store/store'

export const initialState: State = {
    dummy: false,
}

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_DUMMY: {
            return {
                ...state,
                dummy: action.dummy,
            }
        }
        default: {
            return state
        }
    }
}
