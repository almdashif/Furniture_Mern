export const initialState = {
    cart: [],
}

export interface IState {
    [key: string]: any;
}

export interface Action {
    type: string;
    payload: any;
}

export const reducer = (state: IState = initialState, action: Action): IState => {
    switch (action.type) {
        case action.type:
            return {
                ...state,
                [action.type]: [action.payload, ...state[action.type]],
            }

        default:
            return state;
    }
}