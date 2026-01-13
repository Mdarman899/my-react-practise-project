import { useState } from "react";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/header/Header";
import "./index.css";

function App() {

  // bookmarks 
  const [bookmarks, setbookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newbookmarks = [...bookmarks, blog];
    setbookmarks(newbookmarks);
  };

  // reading time 
const [readingTime , setreadingTime] = useState(0)
const handleMarkAsRead = time =>{
  const newReadingTime = readingTime + time ;
  setreadingTime(newReadingTime);
  console.log(readingTime)
}

  return (
    <>
      <div className="w-[1300px] mx-auto">
        <Header> </Header>
        <div className="md:flex">
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}> </Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}> </Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
