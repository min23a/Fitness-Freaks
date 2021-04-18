import React, { useContext } from 'react';
import { dataContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import './Login.css';
import { Redirect } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import googleIcon from '../../Images/search.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const { users, local } = useContext(dataContext);
    const [user, setUser] = users;
    const [Locate] = local;
    // const history = useHistory();

    const G_provider = new firebase.auth.GoogleAuthProvider();
    //account creating part
    const handleAccountCreate = (e) => {
        if (e.target.id === 'google') {
            firebase.auth()
                .signInWithPopup(G_provider)
                .then((res) => {
                    const User = res.user;
                    const newUser = {
                        name: User.displayName,
                        email: User.email,
                        role: 'user'
                    }
                    const url = "https://afternoon-ocean-70704.herokuapp.com/addUser";
                    fetch(url, {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(newUser)
                    })
                    setUser(newUser);
                    storeAuthToken();
                }).catch((error) => {
                    var errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
        e.preventDefault();
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
            });
    }
    return (
        <section>
            <Navbar />
            <div style={{ height: '90vh', backgroundColor: 'white' }} className=" d-flex justify-content-center align-items-center">
                <div className=" p-3">
                    {user.email &&
                        <Redirect to={Locate} />
                    }
                    <button className="d-flex align-items-center card_shadow" onClick={handleAccountCreate} id="google">
                        <img className="img-fluid pr-3" style={{ height: '25px' }} src={googleIcon} alt="" />
                       Continue With Google
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Login;