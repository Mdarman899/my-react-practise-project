
const Bookmark = ({bookmark}) => {
    const {title} = bookmark ;
    return(
        <div className="bg-blue-50 p-3 m-3 rounded-2xl">
            <h1 className="text-2xl font-bold text-center ">{title}</h1>
        </div>
    );
};

export default Bookmark ;