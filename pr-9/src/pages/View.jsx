import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { View_Note, Delete_Note } from "../action/action"
import './note.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdDelete } from "react-icons/md";


const View =()=>{

    const dispatch = useDispatch()
    const AllRecord = useSelector(state=>state.note.record)
    console.log(AllRecord);
    
    useEffect(()=>{
        dispatch(View_Note())
    },[])


    const DeletNote=(id)=>{
        dispatch(Delete_Note(id))
    }

    return(
        <div>
            <div className="boxs">
                {
                    AllRecord.map((val)=>{
                        return(
                            <div key={val.id} className="cards shadow">
                                <h3>{val.title}</h3>
                                <p>{val.note}</p>
                                <button className="icon" onClick={()=>DeletNote(val.id)}><MdDelete /></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default View