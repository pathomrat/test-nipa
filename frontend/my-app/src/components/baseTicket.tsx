import { Ticket } from "../types/ticket";

type Props = {
    ticket: Ticket
    onUpdateStatus: (ticket: Ticket, status: string) => void;
}

const BaseTicket: React.FC<Props> = (props) => {
    const { title, description, email, phone, updated_date, created_date, status } = props.ticket;
    return (
        <div className="baseTicket">
            <div className="baseTicket--body">
                <h2>{title}</h2>
                <p className="baseTicket--body__description">{description}</p>
                <p>Email : {email} , Phone : {phone}</p>
                <p className="baseTicket--body__timestamp">Created at : {created_date} , Last updated : {updated_date}</p>
            </div>
            <div className="baseTicket--footer">
                <h2>Status : {status}</h2>
                <button className="baseTicket--footer__button" disabled={status === 'Approve' || status === 'Rejected'} onClick={(_) => props.onUpdateStatus(props.ticket, 'Approve')}>Approve</button>
                <button className="baseTicket--footer__button" disabled={status === 'Approve' || status === 'Resolved'} onClick={(_) => props.onUpdateStatus(props.ticket, 'Resolved')}>Resolved</button>
                <button className="baseTicket--footer__button" disabled={status === 'Approve' || status === 'Rejected'} onClick={(_) => props.onUpdateStatus(props.ticket, 'Rejected')}>Rejected</button>
            </div>
        </div>
    )
}

export default BaseTicket;