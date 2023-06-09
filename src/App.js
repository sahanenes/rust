import "devextreme/dist/css/dx.light.css";
import "./App.css";
import Datagrid from "./components/Datagrids";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mainPage">
      <Navbar />
      <div className="datagrid">
        <Datagrid className="innerdiv" />
      </div>
    </div>
  );
}

export default App;
