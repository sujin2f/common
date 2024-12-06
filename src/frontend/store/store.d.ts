import { ActionType } from 'src/frontend/store/constants'

export type State = {
    dummy: boolean
}

export type Action = State & {
    type: ActionType
}
