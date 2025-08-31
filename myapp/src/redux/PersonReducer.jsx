const initialData = {
    name:'',
    age:''
}
const personReducer = (state = initialData, action) => {
    switch(action.type){
        case "UPDATE_NAME":
            return {...state, name: action.payload}
        case "UPDATE_AGE":
            return {...state, age: action.payload}
        default:
            return state
    }
}

export default personReducer