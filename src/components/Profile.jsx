import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch user profile');
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <p className="text-red-500 text-center mt-6">{error}</p>;
  }

  if (!user) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-6 text-center">Profile</h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">Name: {user.name}</p>
        <p className="text-lg text-gray-700 mb-4">Email: {user.email}</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
