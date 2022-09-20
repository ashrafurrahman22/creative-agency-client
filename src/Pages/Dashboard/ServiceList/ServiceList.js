import React from 'react';
import SingleService from '../../../Components/SingleService';
import useOrder from '../../../Hooks/useOrder';
import useService from '../../../Hooks/useServices';

const ServiceList = () => {

    const [services, setServices] = useService();


    return (
        <div>
            <div className='grid grid-cols-2 gap-10 py-8'>
                {
                    services.map(service => <SingleService
                    service={service}
                    ></SingleService> )
                }
            </div>
        </div>
    );
};

export default ServiceList;