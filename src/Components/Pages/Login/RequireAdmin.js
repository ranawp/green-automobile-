import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Shared/Hooks/useAdmin';
import Loading from '../../Shared/Loading';
import Navbar from '../../Shared/Navbar/Navbar';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        signOut(auth)
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequireAdmin;