import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseTicket from "../components/baseTicket";
import { Ticket } from "../types/ticket";

const Home = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/tickets").then((res) => {
            setTickets(res.data);
        })
    }, [])

    return (
        <div className="home">
            <div className="home--heading">
                <h1 className="home--heading__text">Ticket</h1>
                <Link to='/new-ticket' className="home--heading__link">
                    <h3>New Ticket</h3>
                </Link>
            </div>
            {tickets && tickets.map(ticket =>
                <BaseTicket
                    key={ticket.id}
                    title={ticket.title}
                    description={ticket.description}
                    status={ticket.status}
                    email={ticket.email}
                    phone={ticket.phone}
                    lastUpdate={ticket.updated_date}
                    lastCreated={ticket.created_date}
                />)}
        </div>
    );
}

export default Home;