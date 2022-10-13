import { http, httpFile } from "./http_service";

export function get_all_schedule(){
    return http().get('/days')
}

export function get_all_days(){
    return http().get('/get-all-days')
}


export function create_schedule(data){
    return httpFile().post('/schedule', data)
}