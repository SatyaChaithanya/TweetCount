import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksAPI } from '../store/books.action';
import { selectBooks } from '../store/books.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private store: Store) {}

  books$ = this.store.pipe(select(selectBooks));

  ngOnInit() {
    this.store.dispatch(invokeBooksAPI());
  }

  // onKeyUp(event: any) {
  //   if (event.key === 'Enter') {
  //     let filteredObj: any;
  //     console.log('event', event, this.books$);
  //     console.log('entered value', event.target.value);
  //       this.books$.subscribe((ele: any )=> {
  //         filteredObj = ele.filter((element: any) => element.name.toLowerCase() === event.target.value.toLowerCase())
  //       }
  //     );
  //     this.store.dispatch(
  //       filterSpecificRecord(filteredObj[0].id)
  //     )
  //   }
  // }
}
