import Bookmark from "./bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className='md:w-1/3 bg-blue-200 rounded-2xl pt-5'>
            <div className="bg-black text-white m-2 p-2 rounded-xl">
                <h1 className="text-4xl text-center font-bold"> Reading time : {readingTime}</h1>
            </div>
            <h1 className='text-4xl font-bold text-center'>Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;