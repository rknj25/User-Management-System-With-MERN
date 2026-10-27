
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const View = () => {
    const [user, setUser] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(
                " https://user-management-system-with-mern.onrender.com/api/get"
            );

            setUser(response.data.userData);
        }
        catch (error) {
            alert(error.response?.data?.message || "Error fetching users");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const dltUser = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) return;

        try {
            const response = await axios.delete(
                ` https://user-management-system-with-mern.onrender.com/api/delete/${id}`
            );

            alert(response.data.message);
            getData();
        }
        catch (error) {
            alert(error.response?.data?.message || "Error deleting user");
        }
    };

    return (
        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">User Management</h3>

                    <Link to="/" className="btn btn-primary">
                        + Add User
                    </Link>
                </div>

                <div className="card-body">

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle mb-0">

                            <thead className="table-primary">
                                <tr>
                                    <th scope="col">Sr. No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col" className="text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {user.length > 0 ? (
                                    user.map((i, index) => (
                                        <tr key={i._id}>
                                            <td>{index + 1}</td>
                                            <td>{i.name}</td>
                                            <td>{i.email}</td>
                                            <td>{i.address}</td>

                                            <td className="text-center">
                                                <div className="d-flex justify-content-center gap-2">

                                                    <Link
                                                        className="btn btn-success btn-sm"
                                                        to={`/edit/${i._id}`}
                                                    >
                                                        Update
                                                    </Link>

                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => dltUser(i._id)}
                                                    >
                                                        Delete
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="text-center text-muted py-4"
                                        >
                                            No users found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>

                </div>

                <div className="card-footer text-muted">
                    Total Users: {user.length}
                </div>

            </div>

        </div>
    );
};

export default View;
