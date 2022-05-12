import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div
            style={{background:`url(${appointment})`}}
            className='text-center my-20 py-20'>
            <div className=' flex flex-col text-center my-5'>
            <h5 className='font-medium text-secondary'>Contact Us</h5>
            <h2 className='text-white font-semibold text-4xl my-5'>Stay Connected With Us</h2>
            <input type="text" placeholder="Email" class="input input-bordered input-sm w-full max-w-xs my-3 mx-auto mx-20 hover:scale-105" />
            <input type="text" placeholder="Subject" class="input input-bordered input-sm w-full max-w-xs my-3 mx-auto mx-20 hover:scale-105" />
            <input type="text" placeholder="Your Message" class="input input-bordered input-lg w-full max-w-xs my-3 mx-auto mx-20 hover:scale-105" />
            
            </div>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default ContactUs;