import React, {useState} from 'react';
import style from './Contacts.module.scss'
import loco from "../assets/image/icons/location-svgrepo-com .svg";
import phone from "../assets/image/icons/phone-svgrepo-com .svg";
import email from "../assets/image/icons/email-svgrepo-com.svg"
import axios from "axios";

const Contacts = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [message, setMessage] = useState('')

      const nameHandler = (e) => {
          setName(e.target.value)


      }
      const emailHandler = (e) => {
          setEmail(e.target.value)
      }
      const messageHandler = (e) => {
          setMessage(e.target.value)
      }

      const handleSubmit = (e) => {
          e.preventDefault()

              axios.post('https://gmail-nodejs-jet.vercel.app/sendMessage', {name,email,message})
                  .then(res => {
                      console.log(res)
                  })
                  .catch(error=>{
                      console.log('Error')
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

{/*<div className={style.infoBlock}>*/
}
{/*    <div className={style.infoBlockItem}>*/
}
{/*        <div className={style.infoItem}>*/
}
{/*            <img src={loco} alt={"location"}/>*/
}
{/*            <span>Belarus, Minsk</span>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*    <div className={style.infoBlockItem}>*/
}
{/*        <div className={style.infoItem}>*/
}
{/*            <img src={phone} alt={"phone"}/>*/
}
{/*            <a href="tel:+375336267719">*/
}
{/*               <span>+375336267719</span>*/
}
{/*            </a>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*    <div className={style.infoBlockItem}>*/
}
{/*        <div className={style.infoItem}>*/
}
{/*            <img src={email} alt={"email"}/>*/
}
{/*            <a href="mailto:zhanetfio@gmail.com">*/
}
{/*                <span>zhanetfio@gmail.com</span>*/
}
{/*            </a>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}