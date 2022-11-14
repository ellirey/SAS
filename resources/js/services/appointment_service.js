import { http, httpFile } from "./http_service";



export function get_all_schedules(){
    return http().get('/get-all-schedules')

}


export function get_all_appointments(){
    return http().get('/appointment')
}

export function create_appointment(data){
    return httpFile().post('/appointment', data)
}

// export function update_guest(id, data){
//     return httpFile().post(`guest/${id}`, data);
// }


// export function delete_guest(id){
//     return http().delete(`guest/${id}`);
// }



// export function guest_page(page){
//     return httpFile().get('/guest?page=' + page)
// }