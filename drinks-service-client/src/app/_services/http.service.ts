import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(url: string){
        return this.http.get(url)
    }

    putData(url: string, data: any) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.put(url, JSON.stringify(data), { headers: headers });
    }

    deleteDataByID(url: string, id: number) {
        console.log(url + '/' + id);
        return this.http.delete(url + '/' + id);
    }
}