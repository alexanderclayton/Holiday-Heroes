//import//
import Vite from "../../public/vite.svg";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-end">
          <Link to="/clients">Clients</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/workday">Workday</Link>
          <Link to="/labor">Labor</Link>
        </div>
        <div>
          <img src={Vite} alt="placeholder" className="w-64" />
        </div>
      </div>
    </>
  );
};
