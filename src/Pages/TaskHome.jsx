import { useContext, useState } from "react";
import { AuthContaxt } from "../Services/AuthProvider";
import { FaCheck, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoIosArrowDown, IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

function TaskHome() {
  const { user } = useContext(AuthContaxt);
  const [status, setStatus] = useState("pending");
  const [addedSubtaskItem, setAddedSubtaskItem] = useState(null);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  console.log(user?.email);

  const { data: tasks, isLoading, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_LOCALHOST_URL}/allTask/${user?.email}`
      );
      return data;
    },
  });

  console.log(tasks);
  const pendingTasks = tasks?.filter((task) => task.status === "pending");
  const progressTasks = tasks?.filter((task) => task.status === "progress");
  const completedTasks = tasks?.filter((task) => task.status === "completed");
  console.log(pendingTasks);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subtask = e.target.task.value;
    const title = addedSubtaskItem;
    const subtaskInfo = {
      subtask,
      title,
    };

    await axios
      .patch(
        `${import.meta.env.VITE_LOCALHOST_URL}/subtask/${title}`,
        subtaskInfo
      )
      .then((res) => {
        console.log(res.data);
        refetch()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubtaskItem = (item) => {
    setAddedSubtaskItem(item);
  };

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

        <div className="mt-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="">
              <div className="">
                <div className=" flex items-center ">
                  <h4 className="text-lg font-semibold text-yellow-500 bg-yellow-50 py-1 px-4 rounded-full">
                    Pending
                  </h4>
                </div>

                <div className="">
                  {pendingTasks?.map((item, index) => (
                    <div className="" key={index}>
                      <div className=" space-y-2 p-4 shadow-md rounded-lg mt-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold">
                            {item?.title}{" "}
                          </h3>
                          <label htmlFor="my_modal_6" className="">
                            <IoMdAddCircleOutline
                              onClick={() => handleSubtaskItem(item?.title)}
                              className="text-xl cursor-pointer"
                            />
                          </label>
                        </div>
                        <p>{item?.descreption?.slice(0, 150)}...</p>

                        <div className="space-y-3">
                        {item?.subtask?.map((subtask, index) => (
                          <div className="flex items-center justify-between bg-gray-100 p-3 rounded-xl" key={index}>
                            <h4 className="font-semibold">{subtask}</h4>
                            <MdDeleteOutline />
                          </div>
                        ))}
                      </div>
                        <div className="flex items-center  gap-3">
                          <select
                            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            value={status}
                            onChange={handleChange}
                          >
                            <option value="pending">Pending</option>
                            <option value="progress">Progress</option>
                            <option value="completed">Completed</option>
                          </select>
                          <button className="btn bg-[#36A853] text-white">
                            <FaCheck />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className=" flex items-center ">
                  <h4 className="text-lg font-semibold text-blue-500 bg-blue-50 py-1 px-4 rounded-full">
                    Progress
                  </h4>
                </div>

                {progressTasks?.map((item, index) => (
                  <div className="" key={index}>
                    <div className=" space-y-2 p-4 shadow-md rounded-lg mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {item?.title}{" "}
                        </h3>
                        <IoMdAddCircleOutline className="text-xl cursor-pointer" />
                      </div>
                      <p>{item?.descreption?.slice(0, 150)}...</p>

                      <div className="">
                        {item?.subtask?.map((subtask, index) => (
                          <div className="" key={index}>
                            <h4>{subtask}</h4>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center  gap-3">
                        <select
                          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          value={status}
                          onChange={handleChange}
                        >
                          <option value="pending">Pending</option>
                          <option value="progress">Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button className="btn bg-[#36A853] text-white">
                          <FaCheck />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="">
                <div className=" flex items-center ">
                  <h4 className="text-lg font-semibold text-green-500 bg-green-50 py-1 px-4 rounded-full">
                    Completed
                  </h4>
                </div>

                {completedTasks?.map((item, index) => (
                  <div className="" key={index}>
                    <div className=" space-y-2 p-4 shadow-md rounded-lg mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">
                          {item?.title}{" "}
                        </h3>
                        <IoMdAddCircleOutline className="text-xl cursor-pointer" />
                      </div>
                      <p>{item?.descreption?.slice(0, 150)}...</p>
                      <div className="flex items-center  gap-3">
                        <select
                          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          value={status}
                          onChange={handleChange}
                        >
                          <option value="pending">Pending</option>
                          <option value="progress">Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button className="btn bg-[#36A853] text-white">
                          <FaCheck />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add Subtask!</h3>

          <div className="modal-action">
            <form
              className="space-y-3 w-full"
              onSubmit={handleSubmit}
              method="dialog"
            >
              <input
                type="text"
                name="task"
                placeholder="Enter Subtask"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="space-x-3">
                <label>
                  <button className="btn bg-[#36A853] text-white"> Add</button>
                </label>
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskHome;
