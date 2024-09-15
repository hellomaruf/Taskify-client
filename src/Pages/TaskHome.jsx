import { useContext } from "react";
import { AuthContaxt } from "../Services/AuthProvider";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function TaskHome() {
  const { user } = useContext(AuthContaxt);

  return (
    <div>
      <div className=" max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <h4 className="text-3xl font-medium text-gray-700">
            Have a Good Day {user?.displayName}👋
          </h4>
          <Link to={"/create-task"} className="btn bg-[#36a853] text-white">
            <FaPlusCircle />
            Create a Task
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskHome;
