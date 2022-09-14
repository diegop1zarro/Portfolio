import React from 'react'
import CV_Diego from '../../CV_Diego.pdf'
import './Contact.css'
export default function Contact() {
  return (
    <div className='Contact'>
    <h2>Mis redes y contacto</h2>
   <div id='body'>
 <div id='menu'>
 <ul>
 <li id='item-uno'>
 <a href="mailto:diego.cab.1016@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail">Gmail</a>
 </li>

{/* <li id='item-dos'>
<a href='#'>Instagram</a>
</li> */}
<li id='item-tres'>
<a href='https://api.whatsapp.com/send/?phone=%2B543516137592&text&type=phone_number&app_absent=0' target='_blank'>whatsApp</a>
{/* <a href='wa.me/+543516137592' target='blank'>whatsApp</a> */}
</li>

<li id='item-cuatro'>
<a href='https://www.linkedin.com/in/diegopizarro10/' target='_blank'>Linkedlin</a>
</li>

<li id='item-cinco'>
<a href={CV_Diego} target='_blank'>Ver cv</a>
</li>

<li id='item-seis'>
<a href='https://github.com/diegop1zarro' target='_blank'>Github</a>
</li>
</ul>

</div>
</div>
    </div>

  )
}
