import React, { useState } from 'react';
import './addUser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUser() {
    const [data, setData] = useState({
        name: "",
        email: "",
        address: ""
    });

    const navigate = useNavigate();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            console.log("Sending data:", data);

            const res = await axios.post(
                "http://localhost:9999/api/add",
                data
            );

            console.log("Response:", res.data);

            // ✅ No strict status check (like UpdateUser)
            // Reset form
            setData({
                name: "",
                email: "",
                address: ""
            });

            // Redirect
            navigate("/");

        } catch (err) {
            console.error("Error:", err.response?.data || err.message);

            // Optional: show error to user
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className='addUser'>
            <Link to='/' className='btn btn-secondary'>
                <i className="fa-solid fa-backward"></i>
            </Link>

            <h3 className='text-center'>Add New User</h3>

            <form className='addUserForm' onSubmit={submit}>
                <div className='inputGroup'>
                    <input
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={handlechange}
                        placeholder='Enter your name'
                        required
                    />
                </div>

                <div className='inputGroup'>
                    <input
                        type='email'
                        name='email'
                        value={data.email}
                        onChange={handlechange}
                        placeholder='Enter your email'
                        required
                    />
                </div>

                <div className='inputGroup'>
                    <input
                        type='text'
                        name='address'
                        value={data.address}
                        onChange={handlechange}
                        placeholder='Enter your address'
                        required
                    />
                </div>

                <div className='inputGroup'>
                    <button className='btn btn-primary' type='submit'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddUser; 