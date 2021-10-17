import React, { useState } from 'react';

const AddAdmin = () => {

    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

 

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('email', info.email);

        fetch('https://hidden-peak-44578.herokuapp.com/isAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>
         
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
    );
};

export default AddAdmin;