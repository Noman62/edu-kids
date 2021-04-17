import React from 'react';
import { useForm } from "react-hook-form";



const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();



    const onSubmit = data => {
      
        const eventData = {
            name: data.name,
            description: data.description
        };

        const url = `http://localhost:8080/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response'))
    };
 

    return (

        <div>

            <div class="main border border-success shadow-sm p-3 mb-5 bg-body rounded" style={{marginLeft:'40%',marginTop:'10%',width:'500px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" defaultValue="" placeholder="Enter Name" ref={register} />
                    <br />
                   <textarea name="description" defaultValue="" placeholder="write Description" ref={register}></textarea>
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;