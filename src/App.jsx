import logo from "./assets/logo.svg";
import { DataProvider } from "./context/Data";
import Window from "./components/Window";

function App() {
  return (
    <DataProvider>
      <div className="bg-light-grayish-cyan-1 h-screen font-space-mono">
        <img src={logo} className="p-8 mr-auto ml-auto" alt="logo" />
        <Window />
      </div>
    </DataProvider>
  );
}

export default App;
