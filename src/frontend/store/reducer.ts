import { Action, State } from 'src/frontend/store/store'
import { initialState } from 'src/frontend/store/constants'
import { ActionType } from 'src/frontend/store/constants'

export const reducer = (
    state: State = initialState,
    action: Action,
): Partial<State> => {
    switch (action.type) {
        case ActionType.SET_DUMMY: {
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
