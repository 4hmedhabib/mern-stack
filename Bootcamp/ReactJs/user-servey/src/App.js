const App = () => {
  return (
    <div>
      <div>
        <form>
          <div>
            <label htmlFor="fullname">Full Name :</label>
            <input type="text" id="fullname" name="fullname" />
          </div>
          <div>
            <label htmlFor="username">Username :</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="age">Age :</label>
            <input type="number" id="age" name="age" />
          </div>
          <div>
            <button type="subit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
