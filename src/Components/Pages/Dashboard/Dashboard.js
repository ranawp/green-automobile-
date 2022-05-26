import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Shared/Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    console.log(admin)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h3 className='text-primary text-3xl'>Dashboard</h3>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    {
                        admin && <> <li><Link to="/dashboard/addproduct">Add New Product</Link></li>
                            <li><Link to="/dashboard/alluser">All users</Link></li>
                            <li><Link to="/dashboard/manageAllproducts">Manage all Products</Link></li>
                            <li><Link to="/dashboard/manageAllOrders">Manage all Orders</Link></li></>
                    }



                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    <li><Link to="/dashboard/myorders">My Orders</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;