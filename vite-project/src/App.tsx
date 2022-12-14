import AddNewTodo from "./AddNewTodo";
import ToDo from "./ToDo";
import "./App.css";
import "./Global.css";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <AddNewTodo />
      </div>
    </div>
  );
}

export default App;
