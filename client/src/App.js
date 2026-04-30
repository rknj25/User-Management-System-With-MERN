import './App.css';
import User from './GetUser/User';
import AddUser from './addUser/AddUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UpdateUser from './updateUser/UpdateUser';
import DeleteUser from './delete/DeleteUser';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <User /> },
    { path: "/add", element: <AddUser /> },
    {path: "/update/:id", element:<UpdateUser/>},
    {path:"/delete/:id", element:<DeleteUser/>}
  ]);

  return <RouterProvider router={router} />;
}

export default App;