import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import './EmailJS.css'

const EmailJS = () => {
  const form = useRef();
 const [input , setInput] = useState ({
    user_name :'',
    user_email: '',
    message : ''
 })
const handleInput = (e)=>{
    e.preventDefault()
    setInput({
        ...input,
        [e.target.name]: e.target.value
      });
}
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_co9xwh5','template_ep4xy8h', form.current,'VZYbMxL4f2Q01pBP9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setInput({
        user_name :'',
        user_email: '',
        message : ''
      })
  };
console.log(input)
  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" onChange={e=>handleInput(e)} value={input.user_name} />
      <label>Email</label>
      <input type="email" name="user_email" onChange={e=>handleInput(e)} value={input.user_email} />
      <label>Message</label>
      <textarea name="message" onChange={e=>handleInput(e)} value={input.message} />
      <input type="submit" value="Send" />
    </form>
  );
};
export default EmailJS