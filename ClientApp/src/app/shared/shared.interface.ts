import { Route, Data } from '@angular/router';

interface RouteData extends Data {
    title: string;
    isMenu?: boolean;
}

export interface CustomRoute extends Route {
    data: RouteData;
}

export function nameOf<T>(key: keyof T): keyof T {
    return key;
}
