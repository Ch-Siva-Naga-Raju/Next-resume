import { GetStaticPropsContext } from 'next';
import { services } from '../data';
import { ServiceCard } from './components/ServiceCard';
import { IService } from '../type';
import {Key} from 'react'

const index = () => {

  return <div className='flex flex-col px-6 pt-1'>
    <h5>I'm working as a Senior Software Engineer at Covalense Global.</h5>
    <div className='p-4 mt-5 bg-gray-400 rounded-lg' 
    style={{marginLeft:'-1.5rem', marginRight:'-1.5rem', height: '80vh'}}>
      <h6 className='my-3 text-xl font-bold tracking-wide'>My Services</h6>
      <div className='grid lg:grid-cols-2 gap-6 flex-grow'>
        {services.map((service: IService, index: Key) =>{ 
          return (
            <div key={index} className='bg-gray-200 rounded-lg lg:col-span-1'>
            <ServiceCard service={service}/>
         </div>
          )
        })}
      </div>
    </div>
  </div>;
};

export default index;

export const getStaticProps = async(context: GetStaticPropsContext) =>{
  const res = await fetch('http://localhost:3000/api/v1/services')
  const data = await res.json();

  
  return {
    props: {
      services: data.services
    }
  }
}