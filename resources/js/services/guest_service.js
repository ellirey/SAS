import { http, httpFile } from "./http_service";

export function get_all_guests(){
    return http().get('/guest')
}

export function create_guest(data){
    return httpFile().post('/guest', data)
}

export function update_guest(id, data){
    return httpFile().post(`guest/${id}`, data);
}


export function delete_guest(id){
    return http().delete(`guest/${id}`);
}



export function guest_page(page){
    return httpFile().get('/guest?page=' + page)
}