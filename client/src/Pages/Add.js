
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Add = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                " https://user-management-system-with-mern.onrender.com/api/add",
                form
            );

            alert(response.data.message);

            setForm({
                name: "",
                email: "",
                address: ""
            });
        }
        catch (error) {
            alert(error.response?.data?.message || "Error adding user");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">

                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="mb-0">Add User</h3>
                        </div>

                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Address</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}
                                        placeholder="Enter your address"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Add User
                                </button>

                            </form>
                        </div>
                    </div>
                        
                                            <Link to="/view" className="form-control btn btn-primary">
                                                 View All User
                                            </Link>
                </div>
            </div>
        </div>
    );
};

export default Add;
