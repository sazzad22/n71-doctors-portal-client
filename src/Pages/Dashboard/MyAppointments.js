import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    
    useEffect(() => {
        if (user) {
            
        fetch(`http://localhost:5000/booking?patient=${user.email}`).then(res=>res.json()).then(data=>setAppointments(data))
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>;
    }
    if (error) {
        return <div><h2>Error:{error.message}</h2></div>
    }
    return (
        <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
                <tbody>
                    {
                      appointments.map(a=><tr>
                        <th>1</th>
                          <td>{a.patientName}</td>
                        <td>{a.date}</td>
                        <td>{a.slot}</td>
                        <td>{a.treatment}</td>
                      </tr>)
                    }
      
      
    </tbody>
  </table>
</div>
    );
};

export default MyAppointments;