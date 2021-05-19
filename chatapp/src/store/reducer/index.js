const INITIAL_STATE = {
    users : [{
        name: "Owais",
        email: "owaisSandiyawal@gmail.com"
    },
    {
        name: "Ahsan",
        email: "AhsanSandiyawala@gmail.com"
    }
]
}

export default (state = INITIAL_STATE, action) => {

    console.log("action==>",action)
    switch (action.type) {
        case "SET_DATA":
            console.log("state ==> ",state)
            return({  
                ...state,
                users: [...state.users,action.data],
                abc:"Ghous"
            })
            default:
                return state
    }
} 