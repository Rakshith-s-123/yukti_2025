import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Restaurant/Home";
import Navbar from "./components/Restaurant/Navbar";
import Register from "./components/Restaurant/Register";
import Footer from "./components/Restaurant/Footer";
import Login from "./components/Restaurant/Login";
import AddRestaurant from "./components/Restaurant/AddRestaurant";
import ViewRestaurant from "./components/Restaurant/ViewRestaurant";
import Menu from "./components/Restaurant/Menu";
// import ViewMenu from "./components/Restaurant/ViewMenu";
// import ViewOrder from "./components/Restaurant/ViewOrder";
// import ViewOrderDetails from "./components/Restaurant/ViewOrderDetails";
import RestaurantHome from "./components/Restaurant/RestaurantHome";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/Restaurant/register"
            element={<Register />}
          ></Route>
          <Route exact path="/Restaurant/login" element={<Login />}></Route>
          <Route
            exact
            path="/Restaurant/addRestaurant"
            element={<AddRestaurant />}
          ></Route>
          <Route
            exact
            path="/Restaurant/viewRestaurant"
            element={<ViewRestaurant />}
          ></Route>
          <Route exact path="/*" element={<RestaurantHome />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
