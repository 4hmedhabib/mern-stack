const Header = () => {
  return (
    // Header
    <header className="m-4 flex items-center justify-between">
      <div className="flex items-center">
        {" "}
        <div className="sm:hidden my-5 mx-3 flex justify-center items-center">
          <img
            src="/images/todo-logo.png"
            className="w-14 h-auto m-0 p-0 rounded-full shadow-gray-200 shadow-xl flex justify-center items-center"
            alt=""
          />
        </div>
        <div id="logo-text" className="hidden xl:block mt-5">
          <h1 className="text-2xl font-bold tracking-wider">
            Manage Your Tasks
          </h1>
          <p className="text-sm text-gray-500 tracking-wider">
            The best todo app for store tasks
          </p>
        </div>
        <div id="logo-text" className="xl:hidden">
          <h1 className="text-2xl font-bold tracking-wider">Tiigsi Todo App</h1>
          <p className="text-sm text-gray-500 tracking-wider">
            Save Your Tasks in Tiigsi Todo
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
