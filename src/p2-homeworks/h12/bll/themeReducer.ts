
const initState = {
    theme: 'dark'
};

type initStateType = {
    theme: string
}

export const themeReducer = (state= initState, action: changeThemeCType): initStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {
                ...state,
                theme: action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string)=> {
    return {
       type:"SET-THEME",
        theme: theme
    }as const
}; // fix any

type changeThemeCType = ReturnType<typeof changeThemeC>