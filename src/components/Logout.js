import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"

const Logout=()=>{
    let history = useHistory()
    Cookies.remove("token")
    Cookies.remove("id")
    Cookies.remove("name")
    Cookies.remove("email")
    history.push("/")
    return null
}

export default Logout;