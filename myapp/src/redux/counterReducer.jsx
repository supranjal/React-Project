const counterReducer =(state = {count:0},action) =>{
    switch(action.type){
        case "Increase":
            return {count:++state.count}
        case "Decrease":
            return {count:--state.count}
            case "Reset":
                return {count:0}
            case "SET":
             return {count :action.payload}
            default:
                return state
    }
    return state
}
export default counterReducer