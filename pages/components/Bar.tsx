import React, {FunctionComponent} from 'react';
import {ISkill} from '../../type';

const Bar:FunctionComponent<{data: ISkill}> = ({data:{name,level,Icon}}) => {
  return <div className='my-2 text-white bg-gray-200 rounded-full'>
    <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
    style={{width: level}}>
      <Icon className='mr-3'/>
      {name}
    </div>
    </div>;
};

export default Bar
