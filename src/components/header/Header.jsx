// import profile from '/projects/my-react-practise-project/public/images'

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-5 mx-1 border-b-2 bo '>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='p-3' src="/images/profile.png" alt="" />
        </div>
    );
};

export default Header;