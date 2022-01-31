import { IconType } from "react-icons/lib";

export interface IService {
    title: String,
    description: String,
    Icon: IconType
}

export interface ISkill{
    name: String,
    level: String,
    Icon: IconType
}