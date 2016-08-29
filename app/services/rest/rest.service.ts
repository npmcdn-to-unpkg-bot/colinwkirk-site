/**
 * Created by Colin on 7/17/2016.
 * A standalone service to manage calls to REST APIs
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class RestService {
    constructor(private http:Http) {
    }

    //private heroesUrl = 'app/heroes';  // URL to web API
    private actionUrl = 'http://127.0.0.1:8000/api/contact/send-email';

    getData():Observable<any[]> {
        return this.http.get(this.actionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    sendEmail(data):Observable<any> {
        let body = JSON.stringify(data);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        console.log("actionUrl: " + this.actionUrl);
        console.log("body: " + body);
        console.log("options: " + options);
        return this.http.post(this.actionUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        //return body.data || {};
        console.log("bodyyyyy is " + JSON.stringify(body.data));
        return body.data || {};
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
