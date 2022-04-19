const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): typeof initState=> { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

type loadingACType = {
    type:'CHANGE-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): loadingACType=>
    ({type:'CHANGE-LOADING',isLoading  }) // fix any