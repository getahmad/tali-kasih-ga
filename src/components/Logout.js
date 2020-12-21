import Cookies from "js-cookie"
import {useHistory} from "react-router-dom"

const Logout=()=>{
    window.location.reload();
    let history = useHistory()
    Cookies.remove("token")
    Cookies.remove("id")
    Cookies.remove("name")
    Cookies.remove("email")
    Cookies.remove("bankName")
    Cookies.remove("bankNumber")
    Cookies.remove("isAdmin")
    history.push("/")
    return null
}

export default Logout;