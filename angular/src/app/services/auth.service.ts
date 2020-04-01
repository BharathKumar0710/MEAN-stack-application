import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: HttpClient) {}

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Context-Type", "application/json");
    return this.http.post("http://localhost:3000/users/register", user, { headers: headers }).map(res => res.json());
  }
}
