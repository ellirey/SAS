import { http, httpFile } from "./http_service";

export function get_all_students(){
    return http().get('/student')
}

export function create_student(data){
    return httpFile().post('/student', data)
}

export function update_student(id, data){
    return httpFile().post(`student/${id}`, data);
}


export function delete_student(id){
    return http().delete(`student/${id}`);
}



export function student_page(page){
    return httpFile().get('/student?page=' + page)
}