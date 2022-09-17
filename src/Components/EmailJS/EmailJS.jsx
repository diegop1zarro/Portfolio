import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage} from "formik";
import { initialValue , validSchema } from './Validate';
import './EmailJS.css'

const EmailJS = () => {
const form = useRef();
const [enviado , setEnviado] = useState(false)
  return (
    <div>
      <Formik
      initialValues={initialValue}
      validationSchema={validSchema}
        onSubmit={(valores, { resetForm }) => { 
          emailjs.sendForm('service_co9xwh5','template_ep4xy8h', form.current,'VZYbMxL4f2Q01pBP9')
          setEnviado(true)
          setTimeout(()=>
            setEnviado(false),3000)
        resetForm();
      }}
      >
          {({ errors}) => (
            <Form ref={form} className="form" >
              <div className="form_label">
             <label>Nombre :</label>
             <Field type="text" name="user_name" placeholder="coloque su nombre"/>
             <ErrorMessage
             name="user_name"
             component={()=>(
              <span className="error">{errors.user_name}</span>
             )}
             />
             </div>
             <div className="form_label">
              <label>Email :</label>
              <Field type="email" name="user_email" placeholder="coloque su email" />
             <ErrorMessage name="user_email" component={()=>(
             <span  className="error">{errors.user_email}</span> 
             )}/> 
             </div>
             <div className="form_label">
             <label>Mensaje :</label>
             <Field  type="text" as="textarea" name="message"/>
             <ErrorMessage 
             name="message"
             component={()=>(
              <span  className="error">{errors.message}</span>
             )}
              />
              </div>
              <input type="submit" value="enviar" />
          {enviado === false ? null : <span className='éxito'>mensaje enviado con éxito!</span>} 
            </Form>
          
          )}
      </Formik>
      {/* // <form className='form' ref={form} onSubmit={sendEmail}>
      //   <label>Nombre :</label>
      //   <input type="text" name="user_name" onChange={e=>handleInput(e)} value={input.user_name} />
      //   <label>Email :</label>
      //   <input type="email" name="user_email" onChange={e=>handleInput(e)} value={input.user_email} />
      //   <label>Mensaje :</label>
      //   <textarea name="message" onChange={e=>handleInput(e)} value={input.message} />
      //   <input type="submit" value="enviar" />
      // </form>
      // {enviado === false ? null : <span className='éxito'>mensaje enviado con éxito!</span>} */}
    </div>
    );
  };
  export default EmailJS