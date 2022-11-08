import { http, httpFile } from "./http_service";

export function get_all_schedule(){
    return http().get('/schedule')
}

export function get_all_days(){
    return http().get('/get-all-days')
}


export function create_schedule(data){
    return httpFile().post('/schedule', data)
}


export function update_schedule(id, data){
    return httpFile().post(`schedule/${id}`, data);
}


export function delete_schedule(id){
    return http().delete(`schedule/${id}`);
}




