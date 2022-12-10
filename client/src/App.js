import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Things from "./components/Things";

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.auth.token));

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path='/things' element={<Things />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />}  />
              <Route path="/signup" element={<Signup />} />
              <Route path='/things' element={<Things />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App