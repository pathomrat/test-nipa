import { Link } from "react-router-dom";
import BaseTicket from "../components/baseTicket";

const Home = () => {
    return (
        <div className="home">
            <div className="home--heading">
                <h1 className="home--heading__text">Ticket</h1>
                <Link to='/new-ticket' className="home--heading__link">
                    <h3>New Ticket</h3>
                </Link>
            </div>
            <BaseTicket
                title='หัวข้อ'
                description='รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด'
                status='Pending'
                email='pathomrat97@gmail.com'
                phone='0875687554'
                lastUpdate='19/08/2020'
            />
            <BaseTicket
                title='หัวข้อ'
                description='รายละเอียด'
                status='Pending'
                email='pathomrat97@gmail.com'
                phone='0875687554'
                lastUpdate='19/08/2020'
            />
            <BaseTicket
                title='หัวข้อ'
                description='รายละเอียด'
                status='Pending'
                email='pathomrat97@gmail.com'
                phone='0875687554'
                lastUpdate='19/08/2020'
            />
            <BaseTicket
                title='หัวข้อ'
                description='รายละเอียด'
                status='Pending'
                email='pathomrat97@gmail.com'
                phone='0875687554'
                lastUpdate='19/08/2020'
            />
        </div>
    );
}

export default Home;