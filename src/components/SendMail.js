import React from 'react';
import '../styles/SendMail.css';
import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from './firebase';
import { FieldValue, addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

function SendMail() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  async function onSubmit(formData) {

    await addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp()
    })

    dispatch(closeSendMessage());

  }



  return (
    <div className='sendMail'>
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close
          className='sendMail_close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='to' type="email" placeholder='To:' {...register('to', { required: true })} />
        {errors.to && <p className='sendMail_error'>To is Required!</p>}
        <input name='subject' type="text" placeholder='Subject:' {...register('subject', { required: true })} />
        {errors.subject && <p className='sendMail_error'>Subject is Required!</p>}
        <input name='message' type="text" placeholder='Message:' className='sendMail_message' {...register('message', { required: true })} />
        {errors.message && <p className='sendMail_error'>Message is Required!</p>}

        <div className="sendMail_options">
          <Button
            className='sendMail_send'
            variant='contained'
            color='primary'
            type='submit'
          >Send</Button>
        </div>
      </form>


    </div>
  )
}

export default SendMail