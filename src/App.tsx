import { Route, Routes } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import Homepage from "views/homepage";
import Login from "views/login";
import Register from "views/register";
import { AuthProvider } from "helper/authContex";
import { AuthHelper } from "helper/authHelper";
import MinimalLayout from "layout/MinimalLayout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MinimalLayout/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>

        {/* Main layout */}
        <Route path="/" element={<AuthHelper><MainLayout/></AuthHelper>}>
          <Route index element={ <Homepage/>}/>
        </Route>

        {/* Route not found */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
