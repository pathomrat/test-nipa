import { Ticket } from "../types/ticket";

type Props = {
    ticket: Ticket
    onUpdateStatus: (ticket: Ticket, status: string) => void;
}

const BaseTicket: React.FC<Props> = (props) => {
    const { title, description, email, phone, updated_date, created_date, status } = props.ticket;

    const formatted_updated_date = new Date(updated_date!).toLocaleString('En-en');
    const formatted_create_date = new Date(created_date!).toLocaleString('En-en');

    const disabledApproveAndRejected = status === 'Approve' || status === 'Rejected';
    const disabledResolved = status === 'Approve' || status === 'Resolved';

    const buttonApproveClassName = disabledApproveAndRejected ? "baseTicket--footer__buttonDisabled" : "baseTicket--footer__buttonApprove"
    const buttonResolvedClassName = disabledResolved ? "baseTicket--footer__buttonDisabled" : "baseTicket--footer__buttonResolved"
    const buttonRejectedClassName = disabledApproveAndRejected ? "baseTicket--footer__buttonDisabled" : "baseTicket--footer__buttonRejected"


    return (
        <div className="baseTicket">
            <div className="baseTicket--body">
                <h2>{title}</h2>
                <p className="baseTicket--body__description">{description}</p>
                <p>Email : {email} , Phone : {phone}</p>
                <p className="baseTicket--body__timestamp">Created at : {formatted_create_date} , Last updated : {formatted_updated_date}</p>
            </div>
            <div className="baseTicket--footer">
                <p className="baseTicket--footer__text">Status : {status}</p>
                <button className={buttonApproveClassName} disabled={disabledApproveAndRejected} onClick={(_) => props.onUpdateStatus(props.ticket, 'Approve')}>Approve</button>
                <button className={buttonResolvedClassName} disabled={disabledResolved} onClick={(_) => props.onUpdateStatus(props.ticket, 'Resolved')}>Resolved</button>
                <button className={buttonRejectedClassName} disabled={disabledApproveAndRejected} onClick={(_) => props.onUpdateStatus(props.ticket, 'Rejected')}>Rejected</button>
            </div>
        </div>
    )
}

export default BaseTicket;