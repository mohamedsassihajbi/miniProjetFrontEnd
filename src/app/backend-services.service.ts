import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from './Models/Tache';

@Injectable({
  providedIn: 'root'
})
export class BackendServicesService {

  constructor(private httpClient: HttpClient) { }

  taches(): Observable<any> {
    return this.httpClient.get("http://localhost:9090/taches")
  }

  addTache(t:Tache): Observable<any> {
    return this.httpClient.post("http://localhost:9090/ajouterTache", t)
  }

  deleteTache(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:9090/supprimerTahce/" +id)
  }

  updateTache(id:number, t:Tache):Observable<any>{
    return this.httpClient.patch("http://localhost:9090/modifierTache/"+id,t)
  }

  tacheById(id:number):Observable<any> {
    return this.httpClient.get("http://localhost:9090/tacheById/"+id)
  }

}
