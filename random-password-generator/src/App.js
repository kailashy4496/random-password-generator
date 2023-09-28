import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import './App.css';
import Homepage from "./components/homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Homepage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
