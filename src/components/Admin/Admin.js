import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    return (
        <div>
               <div class="sidenav">
                <Link class="nav-link text-white" aria-current="page" to="/selectedTutor">Selected Teacher</Link>
                <Link class="nav-link text-white" aria-current="page" to="/addService">Add Services</Link>
                <Link class="nav-link text-white" aria-current="page" to="/addAdmin">Add Admin</Link>
               </div>
           
        </div>
    );
};

export default Admin;