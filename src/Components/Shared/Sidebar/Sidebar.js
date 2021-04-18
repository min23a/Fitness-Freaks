import { faDochub } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus, faPlusSquare, faStar, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataContext } from '../../../App';
import jwt_decode from "jwt-decode";

const Sidebar = () => {
    const { users } = useContext(dataContext);
    const [user] = users;
    const getMail = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            return false;
        }
        const decodedToken = jwt_decode(token);
        return decodedToken.email;
    }
    const email = getMail();
    const mail = user.email || email;
    const [profile, setProfile] = useState({})

    const url = `https://afternoon-ocean-70704.herokuapp.com/adminRole/${mail}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [url])

    return (
        <section style={{ width: '60px', backgroundColor: 'black', height: '100vh' }}>
            <ul className="navbar-nav d-flex flex-column py-5 align-items-center">
                <li className="nav-item my-3">
                    <Link className="nav-link text-white" to="/dashboard"><FontAwesomeIcon icon={faDochub} /></Link>
                </li>
                <li className="nav-item my-3">
                    <Link className="nav-link text-white" to="/checkout/:id"><FontAwesomeIcon icon={faCartPlus} /></Link>
                </li>
                <li className="nav-item my-3">
                    <Link className="nav-link text-white" to="/addReview"><FontAwesomeIcon icon={faStar} /></Link>
                </li>
                {
                    profile.role === 'admin' ?
                        <div>
                            <li className="nav-item my-3">
                                <Link className="nav-link text-white" to="/manageService"><FontAwesomeIcon icon={faTasks} /></Link>
                            </li>
                            <li className="nav-item my-3">
                                <Link className="nav-link text-white" to="/addService"><FontAwesomeIcon icon={faPlusSquare} /></Link>
                            </li>
                            <li className="nav-item my-3">
                                <Link className="nav-link text-white" to="/addAdmin"><FontAwesomeIcon icon={faUserPlus} /></Link>
                            </li>
                        </div>
                        :
                        <div></div>
                }
            </ul>
        </section>
    );
};

export default Sidebar;