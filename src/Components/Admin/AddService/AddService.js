import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddService = () => {
    const [service, setService] = useState({
        name: '',
        description: '',
        img: '',
        price: ''
    })

    const handleBlur = (e) => {
        const newService = { ...service }
        newService[e.target.name] = e.target.value;
        setService(newService);
    }
    const handleChange = (e) => {
        const imgData = new FormData();
        imgData.set('key', '0fb03a882241f5c04128b1b8370fe608')
        imgData.append('image', e.target.files[0])
        if (e.target.files.length > 0) {
            axios.post('https://api.imgbb.com/1/upload', imgData)
                .then(function (response) {
                    console.log(response.data.data.display_url);
                    const newService = { ...service }
                    newService.img = response.data.data.display_url;
                    setService(newService);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    console.log(service);
    const handleSubmit = (e) => {
        if (service.name !== '') {
            axios.post('https://afternoon-ocean-70704.herokuapp.com/addService', service)
                .then(res => console.log(res))
        }
        e.preventDefault();
    }

    return (
        <section className="bg-white">
            <Navbar />
            <main className="d-flex">
                <Sidebar />
                <form className="m-5" >
                    <input onBlur={handleBlur} type="text" name="name" id="name"  placeholder="Name..."/><br /><br />
                    <input onBlur={handleBlur} type="textarea" name="description" id="description"  placeholder="Description..."/><br /><br />
                    <input onChange={handleChange} type="file" name="img" id="img"  placeholder="Image..."/><br /><br />
                    <input onBlur={handleBlur} type="number" name="price" id="price"  placeholder="Price.."/><br /><br />
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </main>
            <Footer />
        </section>
    );
};

export default AddService;