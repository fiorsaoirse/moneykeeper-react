import { History } from 'history';

export interface IBaseProps {
    history?: History;
    labels?: {
        [ key: string ]: string;
    };
}