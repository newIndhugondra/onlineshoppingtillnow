import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchText = new BehaviorSubject<string>("");

  setSearch(text: string) {
    this.searchText.next(text);
  }
}
