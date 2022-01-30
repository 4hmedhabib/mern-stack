import { PlusCircleIcon, CheckIcon } from "@heroicons/react/solid";
import { CalendarIcon, TrashIcon } from "@heroicons/react/outline";

const Main = () => {
  return (
    <section id="main" className="grow font-nunito">
      {/* Header */}
      <header className="m-4 flex items-center justify-between">
        <div id="logo-text">
          <h1 className="text-2xl font-bold tracking-wider">Tiigsi Todo App</h1>
          <p className="text-sm text-gray-500 tracking-wider">
            Save Your Tasks in Tiigsi Todo
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="bg-white card-white relative">
        <div
          id="tasks"
          className="flex flex-col items-center justify-center bg-yellow-50 px-4 pt-10 rounded-md"
        >
          <h1 className="text-left w-full font-bold text-2xl border-b pb-2 mb-3 max-w-lg">
            Lists
          </h1>
          {/* task 1 */}
          <div
            id="task"
            className="card-white border-l-4 border-blue-500 flex justify-between items-center  max-w-lg w-full"
          >
            <div id="left-side">
              <div id="category">
                <h5 className="font-semibold text-blue-600">Learning</h5>
              </div>
              <div id="content" className="mt-1">
                <h1 className="text-xl font-bold tracking-wider">
                  Learning Mern Stack From Tiigsi Technology
                </h1>
                <div className="flex mt-3 gap-1">
                  <CalendarIcon className="w-5 h-5 text-gray-600"></CalendarIcon>
                  <span className="text-sm text-gray-600">2021-12-01</span>
                </div>
              </div>
            </div>
            <div id="right-side" className="flex flex-col gap-3">
              <CheckIcon className="w-6 h-6 cursor-pointer text-green-500"></CheckIcon>
              <TrashIcon className="w-6 h-6 cursor-pointer text-red-500"></TrashIcon>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Main;
