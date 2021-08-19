type Props = {
    title: string;
    description: string;
    status: string;
    email: string;
    phone: string;
    lastUpdate: string;
    lastCreated: string;
}

const BaseTicket: React.FC<Props> = (props) => {
    return (
        <div className="baseTicket">
            <div className="baseTicket--body">
                <h2>{props.title}</h2>
                <p className="baseTicket--body__description">{props.description}</p>
                <p>Email : {props.email} , Phone : {props.phone}</p>
                <p className="baseTicket--body__timestamp">Created at : {props.lastCreated} , Last updated : {props.lastUpdate}</p>
            </div>
            <div className="baseTicket--footer">
                <h2>Status : {props.status}</h2>
                <button className="baseTicket--footer__button">Approve</button>
                <button className="baseTicket--footer__button" disabled={props.status === 'Approve'}>Resolved</button>
                <button className="baseTicket--footer__button" disabled={props.status === 'Approve'}>Rejected</button>
            </div>
        </div>
    )
}

export default BaseTicket;