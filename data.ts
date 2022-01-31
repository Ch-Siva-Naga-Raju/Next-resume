import { RiComputerLine } from 'react-icons/ri';
import { BsCircleFill } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
// import { MdDeveloperMode } from 'react-icons/md';
import { IService, ISkill } from './type';

export const services: IService[] = [
    {
        title: 'Frontend Development',
        description: 'I used HTML,CSS, Javascript and React to build websites, chatapps for ecommerce,healthcare and financial clients',
        Icon: RiComputerLine
    },
    {
        title: 'Backend Developer',
        description: "I'm used Node js and MongoDB as backend for most of my pet projects. ",
        Icon: FaServer
    },

]

export const languages: ISkill[] = [
    {
        name: 'HTML',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'CSS',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'JavaScript',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Next',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Node',
        level: '50%',
        Icon: BsCircleFill
    },

]

export const tools: ISkill[] = [
    {
        name: 'VS Code',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'Cypress',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'Mocha',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'Jest',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name: 'Enzyme',
        level: '40%',
        Icon: BsCircleFill
    },

]