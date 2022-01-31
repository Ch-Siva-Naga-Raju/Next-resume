import React, {FunctionComponent} from 'react';
import { IService } from '../../type';

export const ServiceCard:FunctionComponent<{service: IService}> = 
({service:{Icon,title, description}}) => {
  return <div className='flex items-center p-2 space-x-4'>
      <Icon className='w-12 h-12 text-green' />
      <div className='flex flex-col'>
        <h4 className='font-bold'>{title}</h4>
        <h5>{description}</h5>
      </div>
  </div>;
};

