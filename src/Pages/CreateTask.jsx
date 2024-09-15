import axios from "axios";

function CreateTask() {
  const handleSubmitTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const descreption = form.description.value;
    const taskInfo = {
      title,
      descreption,
    };
    await axios
      .post(`${import.meta.env.VITE_LOCALHOST_URL}/tasks`, taskInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto my-20 ">
        <div className="max-w-4xl mx-auto bg-[#F8F8FA] border p-6 rounded-xl">
          <div className=" mb-6 space-y-2">
            <h3 className="text-3xl font-semibold">Create a New Task</h3>
            <p className="text-lg text-gray-500">
              Provide Information about the Task you Wish to Complete
            </p>
          </div>
          <form onSubmit={handleSubmitTask} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Title
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Task Title"
                type="text"
                id="title"
                name="title"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Description
              </label>

              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Description"
                rows="8"
                name="description"
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-[#36a853] px-5 py-3 font-medium text-white sm:w-auto"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
