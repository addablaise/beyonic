import { MenuItem } from "./menu-item";

export interface Menu 
{
    group?: string,
    children?: MenuItem[]
}