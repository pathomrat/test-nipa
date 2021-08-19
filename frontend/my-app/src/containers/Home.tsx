import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BaseTicket from "../components/baseTicket";
import { Ticket } from "../types/ticket";

const Home = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/tickets").then((res) => {
            setTickets(res.data);
        })
    }, [])

    const onUpdateStatus = (ticket: Ticket, status: string) => {
        let tempTicket = ticket;
        tempTicket.updated_date = Date.now().toString();
        tempTicket.status = status;
        axios.put(`http://localhost:3001/tickets/update/${ticket._id}`, tempTicket).then(res => {
            if (res.data.error) {
                throw new Error(res.data.error.message);
            }
            Swal.fire({
                icon: 'success',
                title: res.data.success.message,
            }).then(() => {
                axios.get("http://localhost:3001/tickets").then((res) => {
                    setTickets(res.data);
                })
            })
        }).catch(err => {
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: err.message
            })
        })
    }

    return (
        <div className="home">
            <div className="home--heading">
                <h1 className="home--heading__text">Ticket</h1>
                <Link to='/new-ticket' className="home--heading__link">
                    <h3>New Ticket</h3>
                </Link>
            </div>
            <div className="home--content">
                {tickets && tickets.map(ticket =>
                    <BaseTicket
                        key={ticket._id}
                        ticket={ticket}
                        onUpdateStatus={onUpdateStatus}
                    />)}
            </div>
        </div >
    );
}

export default Home;