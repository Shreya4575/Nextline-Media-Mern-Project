import React, { useState } from 'react'
import { blogs } from '../utils/dummyData'
import { useParams } from 'react-router-dom'
import { Heart, Bookmark, BookmarkCheck } from 'lucide-react';
import { useEffect } from "react";
import axios from "axios";

const SingleBlogPage = () => {
    const { id } = useParams();
    // const blog = blogs.find((el) => el.id == id);
    const [liked, setLiked] = useState(false);
    const [bookmark, setBookMarked] = useState(false);
    const [newblog, setNewBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            const blog = blogs.find((el) => el._id == id);
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/blogs/${id}`);
                setLoading(true);
                if (res.data.blog) {
                    setNewBlog(res.data.blog);
                } else {
                    setNewBlog(blog || null);
                }
            } catch (err) {
                console.error(err.response?.data || err.message);
                setNewBlog(blog || null);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    console.log("Blog from API:", newblog);

    function handleLike() {
        setLiked(!liked);
    }
    function handleBook() {
        setBookMarked(!bookmark);
    }

    if (!newblog) {
        return <div className="text-center text-red-500 py-10">Blog not found.</div>
    };

    if (loading) {
        return <div className="text-center py-10 text-gray-400">Loading...</div>
    };

    return (
        <main>
            <div className="flex justify-center bg-blue-100 py-25 px-4">
                <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
                    <h1 className="text-4xl font-bold text-blue-900">{newblog.title}</h1>
                    <p className="text-gray-500 italic">Category: {newblog.category}</p>
                    <div className="text-lg text-gray-800">{newblog.desc}</div>
                    <div className='flex justify-between text-xl'>
                        <div>{newblog.authorId}</div>
                        <div className='flex gap-2 text-2xl pt-3'>
                            <button onClick={handleLike}>
                                <div>{liked ? <Heart fill='red' color='red' size={25} /> : <Heart size={25} />}</div>
                            </button>
                            <button onClick={handleBook}>
                                <div>{bookmark ? <BookmarkCheck size={25} /> : <Bookmark size={25} />}</div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default SingleBlogPage
