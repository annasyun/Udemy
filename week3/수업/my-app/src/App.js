import Random from "components/Random";
import Slider from "components/Slider";
import TodoList from "components/TodoList";
import { Login } from "./components/Login";

function App() {
  return (
    <div>
      <Login />
      <TodoList />
      <Random />
      <Slider />
    </div>
  );
}
export default App;
