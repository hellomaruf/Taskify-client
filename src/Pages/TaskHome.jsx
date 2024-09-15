import { useContext } from "react"
import { AuthContaxt } from "../Services/AuthProvider"


function TaskHome() {
  const {user} = useContext(AuthContaxt)

  
  return (
    <div>
      <div className=" max-w-7xl mx-auto my-10">
        <div className="">
          <h4 className="text-3xl font-medium text-gray-700">Have a Good Day { user?.displayName}👋</h4>
        </div>
     </div>
    </div>
  )
}

export default TaskHome
