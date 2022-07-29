import React from 'react';
import {Form} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import classes from '../StyleModules/FeedbackComponent.module.css'



function FeedbackComponent() {


  const sendMessage = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_b2705ul', 'service_b2705ul', e.target, 'uXUbgSL7g9pJAN5no')
      .then((result) => {
        console.log(result.text)
        Swal.fire(
          'Данные отправлены!',
          'До связи!',
          'success'
        );
      },
        error => { console.log(error.text); })
    e.target.reset()

  }


  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding:"20px 20px" }}>

      <Form onSubmit={sendMessage} >
        <h4 style={{ color: 'white', textAlign: 'center', padding: '30px' }}>Свяжитесь со мной</h4>
        <Form.Group style={{ color: 'white' }} className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email адрес для связи</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name='email' />
        </Form.Group>
        
        <Form.Group style={{ color: 'white' }} className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Описание</Form.Label>
          <Form.Control as="textarea" rows={3} name='description' />
        </Form.Group>
        <button className={classes.myButton} >Отправить</button>
      </Form>

    </div>
  )
}
export default FeedbackComponent;