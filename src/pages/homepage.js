import { Outlet } from "react-router-dom";

import Directory from "../components/directory";

const HomePage = () => {


  return (
    <div>
      <Directory/>
      <Outlet />
    </div>
  );
};

export default HomePage;
