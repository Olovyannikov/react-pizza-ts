import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PopupListItem {
    id: number;
    title: string;
    value: string;
}

export interface PopupProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
    list: PopupListItem[];
    checked?: number;
    setChecked?: (item: number) => void;
}
