import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    url = 'http://localhost:3000/api/v1/auth/login';

    constructor(private http: HttpClient) {
    }

    login(payload: any) {
        return this.http.post(this.url, payload)
    }
    isLogin():boolean{
        const token = localStorage.getItem('token');
        console.log(token);
        
        return !!localStorage.getItem('token')
    }
    role(){
        const role = localStorage.getItem('role')
        return role;
    }


}
