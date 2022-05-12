import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h4>Available Appointment on {format(date, 'pp')}</h4>
            <div></div>
        </div>
    );
};

export default AvailableAppointment;