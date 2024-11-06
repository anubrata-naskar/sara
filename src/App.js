import logo from './logo.svg';
import './App.css';
import LoginOps from "../src/components/LoginOps"
import StdentLogin from "../src/components/StudentLogin"
import TeacherLogin from "../src/components/TeacherLogin"
import StudentReg from "../src/components/StudentReg"
import TeacherReg from "../src/components/TeacherReg"
import TestServer from "../src/components/TestServer"
import TestServer2 from "../src/components/TestServer2"
import TeacherDash from "../src/components/TeacherDash"
import Teacher_prev_crse from "../src/components/Teacher_prev_crse"
import Teacher_new_crse from "../src/components/Teacher_new_crse"
import StudentDash from "../src/components/StudentDash"
import StudentShowCourse from "../src/components/StudentShowCourse"
import UploadVideo from "../src/components/UploadVideo"
import ViewDetails from "../src/components/ViewDetails"
import Rating from "../src/components/Rating"
import Admin from "../src/components/Admin"
import AllCourse from "../src/components/AllCourse"
import EditCourse from "../src/components/EditCourse"
import Home from "../src/components/Home"
import AdminLogin from "../src/components/AdminLogin"
import StuGetPass from "../src/components/StuGetPass"
import TeaGetPass from "../src/components/TeaGetPass"
import ChangePassS from "../src/components/ChangePassS"
import ChangePassT from "../src/components/ChangePassT"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginOps />} />
          <Route path="/studentlogin" element={<StdentLogin />} />
          <Route path="/studentReg" element={<StudentReg />} />
          <Route path="/teacherlogin" element={<TeacherLogin />} />
          <Route path="/teacherReg" element={<TeacherReg />} />
          <Route path="/testserver" element={<TestServer />} />
          <Route path="/testserver2" element={<TestServer2 />} />
          <Route path="/teacherdash" element={<TeacherDash />} />
          <Route path="/teacherprev" element={<Teacher_prev_crse />} />
          <Route path="/teachernew" element={<Teacher_new_crse />} />
          <Route path="/studentdash" element={<StudentDash />} />
          <Route path="/studentshowcourse" element={<StudentShowCourse />} />
          <Route path="/uploadvideo" element={<UploadVideo />} />
          <Route path="/viewdetails/:id" element={<ViewDetails />} />
          <Route path="/rating" element={<Rating/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/allcourse" element={<AllCourse />} />
          <Route path="/editcourse" element={<EditCourse />} />
          <Route path="/showcourse" element={<StudentShowCourse />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/forgetpasswordstu" element={<StuGetPass />} />
          <Route path="/forgetpasswordtea" element={<TeaGetPass />} />
          <Route path="/changepasss" element={<ChangePassS />} />
          <Route path="/changepasst" element={<ChangePassT />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;