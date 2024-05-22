import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({
    email: '',
    name: '',
    surname: '',
    role: 'user',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', newUser);
      setUsers([...users, response.data]);
      setNewUser({
        email: '',
        name: '',
        surname: '',
        role: 'user',
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <div>Loading ajajaj...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <form onSubmit={handleAddUser} className="mb-4">
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          name="surname"
          value={newUser.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          className="border p-2 mr-2"
          required
        />
        <select
          name="role"
          value={newUser.role}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add User</button>
      </form>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Email</th>
            <th className="py-2">Name</th>
            <th className="py-2">Surname</th>
            <th className="py-2">Role</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.surname}</td>
              <td className="py-2">{user.role}</td>
              <td className="py-2">
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
