import {inject, Injectable, signal} from '@angular/core';

import { Place } from './place.model';
import {catchError, map, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);

  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlacesData("http://localhost:3000/places", "Something went wrong while fetching available places");
  }

  loadUserPlaces() {
    return this.fetchPlacesData("http://localhost:3000/user-places", "Something went wrong while fetching user places").pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const previousPlaces = this.userPlaces();

    if (!previousPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.update((userPlaces) => [...userPlaces, place]);
    }

    return this.httpClient.put("http://localhost:3000/user-places", {
      placeId: place.id
    }).pipe(
      catchError((error) => {
        return throwError(()=>{
          new Error(error.message);
        })
      })
    );
  }

  removeUserPlace(place: Place) {}

  fetchPlacesData(url: string, errorMsg: string) {
    return this.httpClient.get<{places: Place[]}>(url)
      .pipe(
        map(response => response.places),
        catchError((error) => {
          console.log(error);
          return throwError(()=>
            new Error(errorMsg)
          );
        })
      )
  }
}
