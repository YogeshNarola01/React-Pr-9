import { useState } from "react"
import { useDispatch} from "react-redux"
import { Add_Note } from "../action/action"
import './note.css'
import { SiGooglekeep } from "react-icons/si";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const Add =()=>{
    const [title,setTitle] = useState("")
    const [note,setNote] = useState("")
    const dispatch = useDispatch()

    const handlesubmit =(e)=>{
        e.preventDefault()

        if(!title || !note){
            alert("please fill all the fields")
            return false
        }

        let obj = {id : Date.now(),title,note}
        dispatch(Add_Note(obj))
        setTitle("")
        setNote("")
    }

    return(
        <div className="keep">
            <h1 className="hed"><SiGooglekeep />Google Keep</h1>
            <form className="box shadow" onSubmit={handlesubmit}>
                <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <input type="text" placeholder="Note" onChange={(e)=>setNote(e.target.value)} value={note}/>
                <input className="plas" type="submit" value="+" />
            </form>
        </div>
    )
}

export default Add