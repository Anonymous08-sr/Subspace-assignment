import Signup from "./components/Signup";
import "./index.css";

function App() {
  return (
    <container>
      <div className="head">
        <img src="images/logo.png" alt="Logo"></img>
        <p>
          Already a user?{" "}
          <button type="button" className="log-in">
            Log in
          </button>
        </p>
      </div>
      <Signup />;
    </container>
  );
}

export default App;
