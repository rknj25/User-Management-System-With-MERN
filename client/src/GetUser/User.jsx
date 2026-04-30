import React, { useEffect, useState } from 'react';
import './user.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {

    const [user, setUser] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:9999/api/user");
            setUser(response.data);
        } catch {
            console.log("error while fetching data..");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:9999/api/delete/user/${userId}`);
            setUser(prev => prev.filter(u => u._id !== userId));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='userTable'>
            <Link to={"/add"} className='btn btn-primary'>Add User</Link>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {user.map((u, index) => (
                        <tr key={u._id}>
                            <td>{index + 1}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.address}</td>
                            <td>
                                <Link to={`/update/${u._id}`}>
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </Link>

                                <button onClick={() => deleteUser(u._id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;