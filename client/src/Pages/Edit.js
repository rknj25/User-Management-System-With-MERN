
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

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

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:9999/api/get/${id}`
                );

                const extUsr = response.data.extUsr;

                if (extUsr) {
                    setForm({
                        name: extUsr.name || "",
                        email: extUsr.email || "",
                        address: extUsr.address || ""
                    });
                }
            }
            catch (error) {
                alert(error.response?.data?.message || "Error fetching user");
            }
        };

        getUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `http://localhost:9999/api/update/${id}`,
                form
            );

            alert(response.data.message);
            navigate('/view');
        }
        catch (error) {
            alert(error.response?.data?.message || "Error updating user");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">

                    <div className="card shadow">
                        <div className="card-header bg-success text-white text-center">
                            <h3 className="mb-0">Update User</h3>
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

                                <div className="d-flex gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-success flex-fill"
                                    >
                                        Update User
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => navigate('/view')}
                                    >
                                        Cancel
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Edit;
