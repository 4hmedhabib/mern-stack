const Left = () => {
  return (
    //   Left Side
    <aside
      id="left"
      className="w-20 md:w-48 2xl:w-80 flex-none shadow-lg shadow-gray-200 rounded-tr-lg bg-white"
    >
      <div className="logo my-5 mx-3 flex justify-center items-center">
        <img
          src="/images/todo-logo.png"
          className="w-14  m-0 p-0 inline-block rounded-full shadow-gray-200 shadow-xl "
          alt=""
        />
      </div>
    </aside>
  );
};

export default Left;
