import React, { useEffect, useState } from "react";
import { blogs } from "../utils/dummyData";
import axios from "axios";
import BlogCard from "./BlogCard";

const BlogPage = ({ selectedCategory }) => {
    const [AllBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            setTimeout(async () => {
                try {
                    const res = await axios.get("http://localhost:3000/api/v1/blogs");
                    const apiBlogs = res.data.blogs;
                    const combinedBlogs = [...blogs, ...apiBlogs];
                    setAllBlogs(combinedBlogs);
                } catch (err) {
                    console.error(err.response?.data || err.message);
                    setAllBlogs(blogs);
                } finally {
                    setLoading(false);
                }
            }, 1000);
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div className="text-center py-10 text-gray-400"><LoadingComponent /></div>
    }

    const categoryFilter = selectedCategory === "All"
        ? AllBlogs
        : AllBlogs.filter((blog) => blog.category === selectedCategory);

    return (
        <main className="flex justify-center bg-blue-100 px-2 sm:px-4">
            <div className="w-full max-w-7xl">
                {/* Hero Section */}
                <div className="min-h-[60vh] flex justify-center items-center text-center">
                    <div>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            Welcome to <br />
                            <span className="text-blue-900 text-4xl sm:text-6xl lg:text-7xl underline">
                                NEWS BLOGS!!
                            </span>
                        </h1>
                        <p className="text-lg sm:text-2xl py-4 max-w-2xl mx-auto">
                            Stay Updated with the Latest News!
                        </p>
                    </div>
                </div>

                <main className="flex justify-center bg-blue-100 px-2 sm:px-4">
                    <div className="container py-8">
                        <h2 className="text-3xl font-bold text-center mb-8">Latest Blogs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogs.map((blog) => (
                                <BlogCard key={blog._id} blogDetails={blog} />
                            ))}
                        </div>
                    </div>
                </main>

            </div>
        </main>
    );
};

export default BlogPage;

const LoadingComponent = () => {
    return (
        <div role="status" className="p-4 animate-pulse px-4">
            {[...Array(4)].map((_, idx) => (
                <div key={idx} className="mb-6">
                    <div className="h-4 bg-gray-200 rounded-full w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full mb-2 w-full"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                </div>
            ))}
            <span className="sr-only">Loading...</span>
        </div>
    );
};
