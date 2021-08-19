import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BaseTicket from "../components/baseTicket";
import { Ticket } from "../types/ticket";

const Home = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedStatus, setSelectedStatus] = useState<string>('');

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

    const onSelectedStatus = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedStatus(event.target.value);
    }

    const renderTickets = () => {
        let ticketArr: any[] = [];
        let tempTicket = tickets.filter(ticket => ticket.status.startsWith(selectedStatus));
        tempTicket.map(ticket => {
            ticketArr.push(
                <BaseTicket
                    key={ticket._id}
                    ticket={ticket}
                    onUpdateStatus={onUpdateStatus}
                />)
        })

        if (ticketArr.length === 0) return <h3 className="home--content__noData">No Ticket ...</h3>

        return ticketArr;
    }

    return (
        <div className="home">
            <div className="home--heading">
                <h1 className="home--heading__text">Ticket</h1>
                <div className="home--heading__groupButton">
                    <div className="home--heading__selectInput">
                        <label htmlFor="status">Select status : </label>
                        <input list="statusList" name="status" id="status" onChange={onSelectedStatus} />
                        <datalist id="statusList">
                            <option value="Pending" />
                            <option value="Approve" />
                            <option value="Resolved" />
                            <option value="Rejected" />
                        </datalist>
                    </div>
                    <Link to='/new-ticket' className="home--heading__link">
                        <h3>New Ticket</h3>
                    </Link>
                </div>
            </div>
            <div className="home--content">
                {tickets && renderTickets()}
            </div>
        </div >
    );
}

export default Home;