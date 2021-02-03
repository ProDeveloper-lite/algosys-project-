import { EventEmitter, Injectable } from '@angular/core';

export interface DataTableExtendedConfig {
    titleColumn: string[];
    width?: string;
    height?: string;
    eventFromTable?: EventEmitter<DataTableCustomEvent>;
    eventToTable?: EventEmitter<DataTableCustomEvent>;
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
