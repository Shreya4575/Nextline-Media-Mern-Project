import React, { useEffect, useState } from "react";
// import { users, blogs, currentUserId } from "../utils/dummyData";
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);


    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setTimeout(async () => {
                try {
                    const BlogsApi = await axios.get('http://localhost:3000/api/v1/blogs/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log("API response: ", BlogsApi.data);
                    setBlogs(BlogsApi.data.blogs);
                    const UsersApi = await axios.get('http://localhost:3000/api/v1/auth/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(UsersApi.data.user)
                    console.log("API response: ", UsersApi.data);
                } catch (error) {
                    console.log("Error fetching user Blogs: ", error);
                    alert("error fetching profile")
                } finally {
                    setLoading(false);
                }
            }, 1000);
        };
        fetchData();
    }, [token])

    if (loading) {
        return <p className="text-center mt-10"><LoadingComponent/>.</p>
    };

    if (!token) {
        return <p className="text-red-500 mt-10 text-center">Please log in to view your profile.</p>
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Your Profile</h1>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h2 className="text-2xl font-semibold">{user?.name || "User"}</h2>
                <p className="text-gray-600">{user?.bio || "No bio provided"}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 className="text-xl font-semibold mb-2">Your Stats</h3>
                <p>Total Blogs: {blogs.length}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Your Blogs</h3>
                {blogs.length === 0 ? (
                    <p>You haven't written anything yet</p>
                ) : (
                    <ul className="space-y-3">
                        {blogs.map((blog) => (
                            <li key={blog._id} className="border p-4 rounded-lg">
                                <h4 className="text-lg font-bold">{blog.title}</h4>
                                <p className="text-sm text-gray-500">{blog.category} | {new Date(blog.createdAt).toDateString()}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;

const LoadingComponent = () => {
  return (
    <div role="status" className="p-4 animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
