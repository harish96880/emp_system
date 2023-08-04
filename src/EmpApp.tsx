import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import Footer from "./components/Footer";
import "./EmpApp.css";

export default function EmpApp() {
  return (
    <>
      <Header />
      <div className="contain container-fluid">
        <h3 className="text-center my-2">Employment Management System</h3>
        <StudentTable />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
