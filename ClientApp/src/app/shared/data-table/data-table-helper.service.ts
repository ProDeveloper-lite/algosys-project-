import { Injectable } from '@angular/core';

export interface DataTableExtendedConfig {
    titleColumn: string[];
    width?: string;
    height?: string;
}

export interface DataTableCustomEvent {
    action: string;
    payload?: any;
}

@Injectable({
    providedIn: 'root'
})
export class DataTableHelperService {

}
