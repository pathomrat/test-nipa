import axios from "axios";
import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useInput from "../hooks/useInput";
import { Ticket } from "../types/ticket";

const NewTicket = () => {
    const {
        value: enteredTitle,
        isValid: enteredTitleIsValid,
        hasError: enteredTitleHasError,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        reset: resetTitleInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredDescription,
        isValid: enteredDescriptionIsValid,
        hasError: enteredDescriptionHasError,
        valueChangeHandler: descriptionChangeHandler,
        inputBlurHandler: descriptionBlurHandler,
        reset: resetDescriptionInput
    } = useInput(value => value.trim() !== '');


    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));


    const {
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasError: enteredPhoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhoneInput
    } = useInput(value => value.trim().length === 10 && typeof value === 'string' && !isNaN(parseInt(value)));

    let formIsValid = false;

    if (enteredTitleIsValid && enteredDescriptionIsValid && enteredEmailIsValid && enteredPhoneIsValid) {
        formIsValid = true
    }

    const onHandleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const ticket: Ticket = {
            title: enteredTitle,
            description: enteredDescription,
            status: 'Pending',
            email: enteredEmail,
            phone: enteredPhone,
            created_date: Date.now().toString(),
        }

        axios.post('http://localhost:3001/tickets/create', ticket).then(res => {
            if (res.data.error) {
                throw new Error(res.data.error.message);
            }
            Swal.fire({
                icon: 'success',
                title: res.data.success.message,
            }).then(() => {
                resetTitleInput();
                resetDescriptionInput();
                resetEmailInput();
                resetPhoneInput();
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
        <div className="newTicket">
            <div className="newTicket--heading">
                <h1 className="newTicket--heading__text">New Ticket</h1>
                <Link to='/' className="newTicket--heading__link">
                    <h3>back to home</h3>
                </Link>
            </div>

            <form className="newTicket--form" onSubmit={onHandleSubmit}>
                <label htmlFor="title">title : </label>
                <input className="newTicket--form__input" type="text" id="title" onChange={titleChangeHandler} onBlur={titleBlurHandler} value={enteredTitle} />
                {enteredTitleHasError && (
                    <p className="newTicket--form__errorText">Please Enter a valid Title</p>
                )}

                <label htmlFor="description">description : </label>
                <input className="newTicket--form__input" id="description" onChange={descriptionChangeHandler} onBlur={descriptionBlurHandler} value={enteredDescription} />
                {enteredDescriptionHasError && (
                    <p className="newTicket--form__errorText">Please Enter a valid Description</p>
                )}

                <label htmlFor="email">email : </label>
                <input className="newTicket--form__input" type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
                {enteredEmailHasError && (
                    <p className="newTicket--form__errorText">Please Enter a valid Email ( require @ in Email )</p>
                )}

                <label htmlFor="phone">phone : </label>
                <input className="newTicket--form__input" type="text" id="phone" onChange={phoneChangeHandler} onBlur={phoneBlurHandler} value={enteredPhone} />
                {enteredPhoneHasError && (
                    <p className="newTicket--form__errorText">Please Enter a valid Phone ( require 10 character ) </p>
                )}
                <button className="newTicket--form__button" type='submit' disabled={!formIsValid}>SUBMIT</button>
            </form>
        </div>
    )
}

export default NewTicket;