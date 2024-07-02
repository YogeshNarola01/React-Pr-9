
export const Add_Note = (note) =>{
    return{
        type : "addnote",
        payload : note
    }
}


export const View_Note = (note) =>{
    return{
        type : "viewnote",
        payload : note
    }
}

export const Delete_Note = (id) =>{
    return{
        type : "deletnote",
        payload : id
    }
}
