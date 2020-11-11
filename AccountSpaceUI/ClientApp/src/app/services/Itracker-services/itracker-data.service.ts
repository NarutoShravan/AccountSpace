import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class ItrackerDataService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44310/api';

  addSystem(formData) {
    debugger;
    return this.http.post(this.BaseURI + '/itracker/systems', formData);
  }

  getSystems() {
    debugger;
    return this.http.get(this.BaseURI + '/itracker/systems');
  }

  addSubSystem(formData) {
    debugger;
    return this.http.post(this.BaseURI + '/itracker/subsystems', formData);
  }

  getSubSytems() {
    debugger;
    return this.http.get(this.BaseURI + '/itracker/subsystems');
  }

  addProject(formData) {
    debugger;
    return this.http.post(this.BaseURI + '/itracker/projects', formData);
  }

}
