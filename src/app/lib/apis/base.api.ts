import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { OptionApi } from '@lib/models/api/api-option.model';
/**
 * API Class
 */
@Injectable({
  providedIn: 'root'
})
export class BaseApi {
  constructor(public http: HttpClient) {}

  /**
   * Return a GET request
   */
  public get<T>(endpoint: string, options?: OptionApi) {
    return new Promise<T>((resolve, reject) => {
      this.http.get<T>(environment.apiUrl + '/' + endpoint, options).subscribe({
        next: (res) => {
          if (!res) {
            return reject(res);
          }
          return resolve(res);
        },
        error: (err) => {
          return reject(err);
        },
      });
    });
  }

  /**
   * Return a POST request
   * @TODO: error reject json
   */
  public post<T>(endpoint: string, body: any, options?: OptionApi) {
    return new Promise<T>((resolve, reject) => {
      this.http
        .post<T>(environment.apiUrl + '/' + endpoint, body, options)
        .subscribe({
          next: (res) => {
            if (!res) {
              return reject(res);
            }
            return resolve(res);
          },
          error: (err) => {
            return reject(err);
          },
        });
    });
  }

  /**
   * Return a PUT request
   * @TODO: error reject json
   */
  public put<T>(endpoint: string, body: any, options?: OptionApi) {
    return new Promise<T>((resolve, reject) => {
      this.http
        .put<T>(environment.apiUrl + '/' + endpoint, body, options)
        .subscribe({
          next: (res) => {
            if (!res) {
              return reject(res);
            }
            return resolve(res);
          },
          error: (err) => {
            return reject(err);
          },
        });
    });
  }

  /**
   * Return a DELETE request
   * @TODO: error reject json
   */
  public delete<T>(endpoint: string, options?: OptionApi) {
    return new Promise<T>((resolve, reject) => {
      this.http
        .delete<T>(environment.apiUrl + '/' + endpoint, options)
        .subscribe({
          next: (res) => {
            if (!res) {
              return reject(res);
            }
            return resolve(res);
          },
          error: (err) => {
            return reject(err);
          },
        });
    });
  }

  public buildParams(object: { [key: string]: string }) {
    return Object.keys(object)
      .map((k) => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(object[k]);
      })
      .join('&');
  }
}
