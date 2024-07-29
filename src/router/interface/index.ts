import { RouteRecordRedirectOption, RouteComponent } from 'vue-router'

declare type Lazy<T> = () => Promise<T>;

interface MetaProps {
    title?: string
    icon?: string
    hidden?: boolean
    alwaysShow?: boolean
    noCache?: boolean
    sort?: number,
    keepAlive?: boolean,
    noPermission?:boolean
}
export interface RouterObject {
    path: string,
    name?: string,
    component?: RouteComponent | Lazy<RouteComponent>,
    redirect?: RouteRecordRedirectOption,
    meta?: MetaProps,
    children?: RouterObject[]
}