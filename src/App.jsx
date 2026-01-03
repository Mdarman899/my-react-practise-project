import Blogs from './components/blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/header/Header'
import './index.css'

function App() {
  
  return (
    <>    
      <Header> </Header>
      <div className='md:flex'>
        <Blogs> </Blogs>
        <Bookmarks> </Bookmarks>
      </div>
    </>
  )
}

export default App
  
