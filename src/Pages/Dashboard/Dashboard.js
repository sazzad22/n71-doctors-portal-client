import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile lg:pt-20 pt-16 ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
              {/* <!-- Page content here --> */}
              <h2 className="text-4xl text-purple-400 ">Dashboard</h2>
        <hr />
        <Outlet></Outlet>
        
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard'>My Appointments</Link>
          </li>
          <li>
            <Link to='/dashboard/myreview'>My Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
