import {
    BrowserRouter,
    Route,
    Navigate,
    Outlet,
    Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";

const PrivateRoutes = ()=>{
    const isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const RestrictedRoutes = ()=>{
    const isAuthenticated = false;
    return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
}

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<PrivateRoutes />}>
                  <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route element={<RestrictedRoutes />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
              </Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
