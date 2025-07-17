import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVSA } from './models/ivsa.model';
import { DetailMunicipio } from './models/detail.model';
import { Faixa } from './models/faixa.model';

@Injectable({
  providedIn: 'root'
})
export class IvsaService {
  private apiUrl = 'http://localhost:3000/'; // URL do seu backend

  constructor(private http: HttpClient) { }

  getMunicipioIVSA(): Observable<IVSA[]> {
    return this.http.get<IVSA[]>(this.apiUrl);
  }

  getCriticidadePorMunicipio(): Observable<IVSA[]> {
    const url = `${this.apiUrl}criticidade_municipios`;
    return this.http.get<IVSA[]>(url);
  }

  getSuportabilidadePorMunicipio(): Observable<IVSA[]> {
    const url = `${this.apiUrl}suportabilidade_municipios`;
    return this.http.get<IVSA[]>(url);
  }

  getIncidentePorMunicipio(): Observable<IVSA[]> {
    const url = `${this.apiUrl}incidente_municipios`;
    return this.http.get<IVSA[]>(url);
  }

  getFaixaIvsa(): Observable<Faixa[]> {
    const url = `${this.apiUrl}faixas_ivsa`;
    return this.http.get<Faixa[]>(url);
  }

  getDetalhesMunicipio(municipio: string): Observable<DetailMunicipio[]> {
    const url = `${this.apiUrl}detalhe_municipio/${municipio}`;
    return this.http.get<DetailMunicipio[]>(url);
  }
}
