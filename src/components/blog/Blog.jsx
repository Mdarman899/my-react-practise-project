import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="pt-10 w-[845px]">
    <img className="rounded-2xl" src={cover} alt={`cover picture of the title ${title}`} />
      <div className="flex justify-between items-center pt-5">
        <div className="flex items-center">
          <div className="w-16 h-16">
            <img src={author_img} alt={`picture of author ${author}`} />
          </div>
          <div className="pl-3">
            <h1 className="font-bold text-2xl">{author}</h1>
            <h4>{posted_date}</h4>
          </div>
        </div>
        <div>
            <div className="flex">
                <h3 className="font-medium text-xl pr-2">{reading_time} min read</h3>
                <button
                onClick={ () => handleAddToBookmark(blog)}
                ><FaRegBookmark /></button>
            </div>
        </div>
      </div>
      <h3 className="text-4xl font-bold py-3">{title}</h3>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="" >#{hash}</a></span>)
        }
      </p>
      <button
      onClick={() => handleMarkAsRead(id ,reading_time)}
      className="text-blue-500 underline py-2">marks as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
