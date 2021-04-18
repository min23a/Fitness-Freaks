import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';


const AddAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleChange = (e) => {
        const newAdmin = { ...admin }
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }

    const handleSubmit = (e) => {
        console.log(admin);
        fetch('https://afternoon-ocean-70704.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(admin)
        }).then(res => console.log(res))
        e.preventDefault();
    }
    return (
        <section className="bg-white">
            <Navbar />
            <main className="d-flex" style={{ height: '100vh' }}>
                <Sidebar />
                <form className=" m-5">
                    <input onBlur={handleChange} type="text" name="name" id="name" /><br /><br />
                    <input onBlur={handleChange} type="email" name="email" id="email" /><br /><br />
                    <input onBlur={handleChange} type="text" name="role" id="role" /><br /><br />
                    <button onClick={handleSubmit} className="btn btn-danger">Submit</button>
                </form>
            </main>
            <Footer />
        </section>
    );
};

export default AddAdmin;