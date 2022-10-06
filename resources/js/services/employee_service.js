import { http, httpFile } from "./http_service";

export function get_all_employees(){
    return http().get('/employee')
}

export function create_employee(data){
    return httpFile().post('/employee', data)
}

export function update_employee(id, data){
    return httpFile().post(`employee/${id}`, data);
}


export function delete_employee(id){
    return http().delete(`employee/${id}`);
}



export function employee_page(page){
    return httpFile().get('/employee?page=' + page)
}