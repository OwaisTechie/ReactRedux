const set_data = (data) => {
    return (dispatch) => {
        console.log("data ==> ",data)
        dispatch({type : "SET_DATA",data:data})
        // console.log("chl rha hy...")
        
    }
}

export{
    set_data
}