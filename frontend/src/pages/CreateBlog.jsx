import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    desc: "",
  });

    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:3000/api/v1/blogs/create", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error creating blog.");
    }
  };

    return (
        <main className='flex justify-center items-center bg-blue-100'>
            <div className='flex justify-center items-center container min-h-screen'>
                <div className='flex justify-center py-20'>
                    <div>
                        <div className='border border-neutral-400 bg-blue-50 px-10 py-10 rounded-2xl'>
                            <h1 className='text-6xl font-bold font-sans dark:text-blue-900 py-8 underline'>Create New Blog</h1>
                            <form className='py-5 grid gap-6 text-2xl' onSubmit={handleSubmit}>
                                <div className='grid gap-3'>
                                    <label htmlFor="title">Title </label>
                                    <input type="text" id='title' name='title' value={form.title} onChange={handleChange} className='border border-neutral-400 w-full pl-2 rounded-sm' placeholder='Enter Title of the blog' required/>
                                </div>
                                <div className='grid gap-3'>
                                    <label htmlFor="content">Content </label>
                                    <textarea type="text" id='content' name='content' value={form.content} onChange={handleChange} className='border pl-2 border-neutral-400 w-full rounded-sm' placeholder='Enter Content of the blog' required></textarea>
                                </div>
                                <div>
                                    <label htmlFor="desc">Describe</label>
                                    <textarea type="text" id='desc' name='desc' value={form.desc} onChange={handleChange} className='border pl-2 border-neutral-400 w-full rounded-sm' placeholder='Provide description for your blog'></textarea>
                                </div>
                                <div className='grid gap-3'>
                                    <label htmlFor="category">Category</label>
                                    <select id="category" name="category" onChange={handleChange} value={form.category} className='border pl-2 border-neutral-400 py-1 w-full rounded-sm' required>
                                        <option disabled>Select a category</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Politics">Politics</option>
                                        <option value="Business">Business</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Health">Health</option>
                                    </select>
                                </div>

                                <button className='w-full border border-neutral-400 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-950 hover:shadow-gray-700 shadow-lg'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CreateBlog
