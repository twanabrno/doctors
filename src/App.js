import { Routes, Route } from "react-router-dom";
import DentistBranches from "./components/DentistBranches";
import Branches from "./components/Branches";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TopHeader from "./components/TopHeader";
import Doctors from "./components/Doctors";
import Doctor from "./components/Doctor";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import NvBar from "./components/NvBar";
import { AuthProvider } from "./auth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import AddAppointment from "./components/AddAppointment";
import MyAccount from "./components/MyAccount";
import Login from "./components/Login";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <>
      <AuthProvider>
      <TopHeader />
      <NvBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/dentistbranches" element={<DentistBranches />} />
          <Route
            path="/myaccount"
            element={
              <RequireAuth>
                <MyAccount />
              </RequireAuth>
            }
          />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/appointment" element={<AddAppointment />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
