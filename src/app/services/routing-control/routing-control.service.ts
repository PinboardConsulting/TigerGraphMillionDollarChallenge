import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingControlService {

  private readonly Observable_route = new BehaviorSubject({});
  getRoute = this.Observable_route.asObservable();

  constructor() { }

  setRoute(route: any) {
    this.Observable_route.next(route);
  }
}
