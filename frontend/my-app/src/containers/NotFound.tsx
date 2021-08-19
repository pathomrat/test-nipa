import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <img className="notFound--image" src='/warn.png' alt='not found' height={300} width={350} />
            <h3 className="notFound--text">Pages Not Found . . .</h3>
            <Link to='/' className="notFound--link">Back to Home</Link>
        </div>
    )
}
export default NotFound;