import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Buffer } from 'buffer';
import 'rxjs/add/operator/map';
import * as localStorage from 'nativescript-localstorage';

@Injectable()
export class AuthenticationService extends BaseService {
    token: string;
    username: string;
    private clientId = 'HvmqNrOCspOvzVjPcPGSn2Vfo4kj44j0LO7bW8Vh';
    private clientSecret = 'k931EU92lZx0kW3pTdIkY57yXLHyervqGBNeQvHZdDGn0mCNunRjpRQ' +
        'dst4KzrahzXIVDPQXrllkHgg8libsGBaGpAnIZUruA6414pWE9lXu2hW7S5CCkfBIYvU0pbvY';

    constructor( http: HttpClient ) {
        super( http );
        this.serviceName = 'o';

        // set token if saved in local storage
        const currentUser = JSON.parse( localStorage.getItem( 'currentUser' ) );
        this.token = currentUser && currentUser.token;
        this.username = currentUser && currentUser.username;
    }

    login( username: string, password: string ): Observable<boolean> {
        const body = new HttpParams()
            .set( 'username', username )
            .set( 'password', password )
            .set( 'grant_type', 'password' );
        return this.http
            .post( this.formatApiUri( 'token/' ),
            body.toString(),
            {
                headers: new HttpHeaders()
                    .set( 'Authorization', 'Basic ' + Buffer.from( `${this.clientId}:${this.clientSecret}` ).toString('base64') )
                    .set( 'Content-Type', 'application/x-www-form-urlencoded' )
            } )
            .map(( data: any ) => {
                console.log( data );
                // login successful if there's a jwt token in the response
                const token = data && data.access_token;
                if ( token ) {
                    // set token property
                    this.token = token;
                    this.username = username;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem( 'currentUser', JSON.stringify( { username: username, token: token } ) );

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            } );
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.username = null;
        localStorage.removeItem( 'currentUser' );
    }
}
