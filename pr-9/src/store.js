import { createStore } from "redux"
import rootReduser from "./reduser"


const Store = createStore(rootReduser);

export default Store;