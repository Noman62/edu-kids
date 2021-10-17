import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.name,
            subject: data.subject,
            price: data.price,
            imageURL: imageURL
        };

        const url = `https://hidden-peak-44578.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response'))
        
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '3e03164a15e513f3a57db83d961ae6ac');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log(res.data.data.display_url);
                setImageURL(res.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <div>
                <div class="sidenav">
                    <Link class="nav-link text-white" aria-current="page" to="/selectedTutor">Selected Teacher</Link>
                    <Link class="nav-link text-white" aria-current="page" to="/addService">Add Services</Link>
                    <Link class="nav-link text-white" aria-current="page" to="/review">Add Admin</Link>
                </div>
                <div class="main border border-success shadow-sm p-3 mb-5 bg-body rounded" style={{marginLeft:'40%',marginTop:'10%',width:'500px'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue="" placeholder="Enter Teacher Name" ref={register} />
                        <br />
                        <input name="subject" defaultValue="" placeholder="Enter Subject Name" ref={register} />
                        <br />
                        <input name="price" defaultValue="" placeholder="Enter payment" ref={register} />
                        <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                </div>
        </div>
    );
};

export default AddService;