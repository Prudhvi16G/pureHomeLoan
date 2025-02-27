import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Personaldetails } from './personaldetails';
import { ErrorHandler } from '@angular/core';
import{HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";
import{catchError} from 'rxjs/operators';
import { Admindetails } from './admindetails';


import { IncomeDetails } from './income-details';
import { LoanDetails } from './loan-details';
@Injectable({
  providedIn: 'root'
})
export class PersonaldetailsService {
  private apiServer="http://localhost:3751/api";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  personaldetails(priregister:any):Observable<Personaldetails>{
    return this.httpClient.post<Personaldetails>(this.apiServer+'/PersonalDetails/',JSON.stringify(priregister),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  userlogin(userlog:any):Observable<Personaldetails>{
    return this.httpClient.post<Personaldetails>(this.apiServer+'/UserLogin/',JSON.stringify(userlog),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  adminlogin(adminlog:any):Observable<Admindetails>{
    return this.httpClient.post<Admindetails>(this.apiServer+'/AdminDetails/',JSON.stringify(adminlog),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  incomedetails(incomedetails:any):Observable<IncomeDetails>{
    return this.httpClient.post<IncomeDetails>(this.apiServer+'/IncomeDetails/',JSON.stringify(incomedetails),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  

  loandetails(loandetails:any):Observable<LoanDetails>{
    return this.httpClient.post<LoanDetails>(this.apiServer+'/LoanDetails/',JSON.stringify(loandetails),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
