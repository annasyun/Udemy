import { Count } from "./components/Count";
import Timer from "./components/Timer";
import Text from "./components/Text";
import Toggle from "./components/Toggle";
import { CountReducer } from "./components/countReducer";
import Theme from "./components/Theme";

function App() {
  return (
    <div>
      <Count />
      <Timer />
      <Text />
      <Toggle />
      <CountReducer />
      <Theme />
    </div>
  );
}
export default App;
