import { singleUser } from "../../data"
import Single from "../single/Single"
import "./user.scss"

function User() {
  return (
    <div className="user"><Single {...singleUser}/></div>
  )
}

export default User