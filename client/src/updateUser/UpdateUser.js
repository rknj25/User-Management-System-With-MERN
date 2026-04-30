import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const [data, setData] = useState({
        name: "",
        email: "",
        address: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // ✅ Fetch user data
    useEffect(() => {
        axios.get(`http://localhost:9999/api/user/${id}`)
            .then((response) => {
                setData(response.data); // ✅ FIXED
            })
            .catch(err => console.error(err));
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.put(`http://localhost:9999/api/update/user/${id}`, data)

            console.log("User updated");

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
        }
    };

    return (
        <div className='addUser'>
            <Link to='/' className='btn btn-secondary'>
                <i className="fa-solid fa-backward"></i>
            </Link>

            <h3 className='text-center'>Update User</h3>

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
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateUser;