import React from 'react';
import { languages, tools } from '../data';
import { ISkill } from '../type';
import Bar from './components/Bar';

function Resume() {
    return (<div className='px-6 py-2'>
        {/* Education and Experience */}
        <div className='grid md:grid-cols-2 gap-6'>
            <div>
                <h5 className='my-3 text-2xl font-bold'>Education</h5>
                <div>
                    <h5>M.Tech in Renewable Energy from MNIT in 2015</h5>
                    <h5>B.E in EEE from BITS Pilani in 2012</h5>
                </div>
            </div>
            <div>
                <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                <div>
                    <h5>Senior Software Engineer at Covalense</h5>
                    <h5>Senior Software Engineer at OFS</h5>
                </div>
            </div>
            
            {/* Languages and Tools */}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <h5 className='my-3 text-2xl font-bold'>Software Skills</h5>
                <div className="my-2">
                    {
                        languages.map((language : ISkill)  => <Bar data={language} key={language.name}/>)
                    }
                </div>
            </div>
            <div>
                <h5 className='my-3 text-2xl font-bold'>Tools</h5>
                <div className="my-2">
                    {
                        tools.map((tool : ISkill)  => <Bar data={tool} key={tool.name}/>)
                    }
                </div>
            </div>
        </div>
        </div>);
}

export default Resume;
