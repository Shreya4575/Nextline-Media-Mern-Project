import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Bookmark, BookmarkCheck } from 'lucide-react';

const BlogCard = ({ blogDetails }) => {
    const { _id, title, content, category } = blogDetails;
    const [liked, setLiked] = useState(false);
    const [bookmark, setBookMarked] = useState(false);

    const handleLike = () => setLiked(!liked);
    const handleBook = () => setBookMarked(!bookmark);

    return (
        <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-cyan-50 border border-neutral-300 rounded-xl shadow-md transition-transform p-4">
                <Link to={`/blog/${_id}`}>
                <h1 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h1>
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">{content}</p>

                <p className="text-sm">
                    <span className="font-semibold underline">Category:</span> {category}
                </p>
            </Link>
            <div className="flex gap-4 pt-3 text-gray-600">
                <button onClick={handleLike}>
                    {liked ? <Heart fill="red" color="red" size={22} /> : <Heart size={22} />}
                </button>
                <button onClick={handleBook}>
                    {bookmark ? <BookmarkCheck size={22} /> : <Bookmark size={22} />}
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
