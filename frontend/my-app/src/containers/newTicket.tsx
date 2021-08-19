import { Link } from "react-router-dom";

const NewTicket = () => {
    return (
        <div className="newTicket">
            <div className="newTicket--heading">
                <h1 className="newTicket--heading__text">New Ticket</h1>
                <Link to='/' className="newTicket--heading__link">
                    <h3>back to home</h3>
                </Link>
            </div>

            <form className="newTicket--form">
                <label htmlFor="title">title : </label>
                <input className="newTicket--form__input" type="text" id="title" />

                <label htmlFor="description">description : </label>
                <textarea className="newTicket--form__input" rows={5} id="description" />

                <label htmlFor="email">email : </label>
                <input className="newTicket--form__input" type="text" id="email" />

                <label htmlFor="phone">phone : </label>
                <input className="newTicket--form__input" type="text" id="phone" />

                <button className="newTicket--form__button" type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default NewTicket;