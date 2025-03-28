import {IBase} from './IBase';
import {IRole} from './IRole';

export interface IClient extends IBase {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role: IRole;
}
