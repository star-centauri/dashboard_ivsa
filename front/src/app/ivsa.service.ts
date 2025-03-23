import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVSA } from './models/ivsa.model';
import { DetailMunicipio } from './models/detail.model';

@Injectable({
  providedIn: 'root'
})
export class IvsaService {
  private apiUrl = 'http://localhost:3000/'; // URL do seu backend

  constructor(private http: HttpClient) { }

  getMunicipioIVSA(): Observable<IVSA[]> {
    return this.http.get<IVSA[]>(this.apiUrl);
  }

  getDetalhesMunicipio(municipio: string): Observable<DetailMunicipio[]> {
    const url = `${this.apiUrl}detalhe_municipio/${municipio}`;
    return this.http.get<DetailMunicipio[]>(url);
  }
}
