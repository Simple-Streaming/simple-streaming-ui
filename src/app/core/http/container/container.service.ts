import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

import { Container, Containers } from '../container/container.model';
import { ContainerUpdate } from '../container/container-update.model';

@Injectable()
export class ContainerService {
  static readonly API_URL = environment.simple_streaming_service_url;

  constructor(private http: HttpClient) {}

  get({ cursor = null, limit = null } = {}): Observable<Container> {
    let params = new HttpParams();

    if (cursor) {
      params = params.set('cursor', cursor);
    }

    if (limit) {
      params = params.set('limit', limit);
    }

    return this.http.get<Container>(`${ContainerService.API_URL}/containers`, { params });
  }

  post(updates: ContainerUpdates) : Observable<Containers> {
    const params = { updates };

    return this.http.post<Containers>(`${ContainerService.API_URL}/containers`, params);
  }
}
