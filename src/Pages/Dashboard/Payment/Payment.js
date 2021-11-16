import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51JvxWnJCXxMCtX83j95mdmj70h9OHgtKelLFMXUihx8F4wOUpyk6kQB84T0RfpLoQIBj1GmfPzRcaqInt4SriBue00QOFZws1F');

    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(()=> {
        fetch(`https://blooming-lake-91301.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please pay for : {appointment.patientName}</h2>
            <h4>Price: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;