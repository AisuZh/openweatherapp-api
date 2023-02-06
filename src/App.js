import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
