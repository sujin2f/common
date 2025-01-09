import { State } from 'src/frontend/store/store'

export enum ActionType {
    SET_DUMMY = 'project-name/SET_DUMMY',
}

export const initialState: State = {
    dummy: false,
}
