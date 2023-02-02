import React, {useState} from 'react';
import style from './Contacts.module.scss'
import axios from "axios";

const Contacts = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false);
    const [error,setError]=useState()

    const nameHandler = (e) => {
        setName(e.target.value)


    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name: name,
            email: email,
            message: message
        }
        await axios.post('https://gmail-nodejs-jet.vercel.app/sendMessage', data, {withCredentials: true})
            .then(res => {
                setSent(true)
                setEmail('')
                setName('')
                setMessage(' ')
               alert('Your message has been sent')
            })
            .catch(error => {

            })
    }
    return (

        <div className={style.contactsBlock}>
            <div className={style.section}></div>
            <div className={` ${style.contactsContainer}`}>
                <h3 id={'contacts'} className={style.title}>CONTACTS</h3>
                <div className={style.separator}></div>

                <form onSubmit={handleSubmit} className={style.contactsForm}>
                    <div className={style.row}>
                        <div className={style.inputField}>
                            <input type='name' name='name'
                                   placeholder="Your name"
                                   value={name}
                                   onChange={nameHandler}
                            />
                        </div>
                        <div className={style.inputField}>
                            <input
                                type='email'
                                name='email'
                                placeholder="Your email"
                                value={email}
                                onChange={emailHandler}
                            />
                        </div>
                    </div>
                    <div className={style.inputField}>
                        <textarea
                            onChange={messageHandler}
                            className={style.textForm}
                            name='message'
                            placeholder="Your message">

                        </textarea>
                    </div>

                    <button type="submit" className={style.btn}>SEND</button>
                </form>

            </div>
            <div className={style.section1}></div>

        </div>

    )

};

export default Contacts;
