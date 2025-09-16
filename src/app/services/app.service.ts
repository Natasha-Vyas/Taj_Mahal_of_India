import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({

  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  public formCode: any;
  contactUsSubmission(data: any): Observable<any> {
    let requestBody = {
      ...data,
      type: 'Contact Us'
    };
    return this.http.post(
      `https://submit-form.com/${this.formCode}`,
      requestBody
    );
  }
}
