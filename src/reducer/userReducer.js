export default (state =[], action) =>{
    switch(action.type){
        //in case to add data use ...state
        case 'FETCH_USERS': return [...state, action.payload];
        // case 'ADD_POST': return action.payload
    default: return state;
    }
}

