import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h1 className='servicesTitle'>Our Services</h1>
            <div className="servicesContainer">
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;