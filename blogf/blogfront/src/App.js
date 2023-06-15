import "./App.css";
import Topbar from "./components/topbar/TopBar";
import Homepage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import PaymentComponent from "./components/paymentComponent/PaymentComponent";
/* import Checkout from "./pages/formcheckout/Payment/Checkout";
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Success from "./pages/success/Success";
import Cancel from "./pages/cancel/Cancel";
import FreeBook from "./pages/freeBook/FreeBook";

function App() {
  /*    const currentUser = false;
   */

  //context api
  const { user } = useContext(Context);

  return (
    <div className="app">
      <BrowserRouter>
        <Topbar />

        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/posts" element={<Homepage />} />
          <Route
            path="/register"
            element={user ? <Homepage /> : <Register />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Homepage />} />

          <Route
            path="/login"
            element={user ? <Homepage /> : <Login />}
            /*             setCurrentUser={true}
             */
          />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/categories/?cat=" element={<Single />} />
          {/*           <Route path="/checkout/" element={<Checkout />} />
           */}
          <Route path="/freeBook/" element={<FreeBook/>} />

          <Route path="/payment/" element={<PaymentComponent />} />

          <Route path="/settings" element={user ? <Settings /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
