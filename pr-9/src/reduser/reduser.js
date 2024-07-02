

let initialState = {
    record : JSON.parse(localStorage.getItem ("deta")) ? JSON.parse(localStorage.getItem('data')) : [],
}

const Rerduser = (state = initialState,action)=>{
    switch (action.type) {
        case 'addnote':
            let New = action.payload;
            let up = [...state.record,New];
            localStorage.setItem('data',JSON.stringify(up));
            return {
                ...state,
                record : up
            }
            
        case 'viewnote' :
            return state
            console.log(state);

        case 'deletnote' :
            let id = action.payload
            let del = state.record.filter((item)=>item.id != id)
            localStorage.setItem('data',JSON.stringify(del));
            return {
                ...state,
                record : del
            }
    
        default:
            return state
    }
}

export default Rerduser