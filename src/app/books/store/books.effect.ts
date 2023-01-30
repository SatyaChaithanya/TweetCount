import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from "rxjs";
import { BooksService } from "../books.service";
import { booksFetchAPISuccess, invokeBooksAPI } from './books.action';
import { selectBooks } from './books.selector';

@Injectable()
export class BooksEffect {
    constructor(
        private action$: Actions,
        private booksService: BooksService,
        private store: Store
    ) {}

    loadAllBooks$ = createEffect(() => 
        this.action$.pipe(
            ofType(invokeBooksAPI),
            withLatestFrom(this.store.pipe(select(selectBooks))),
            mergeMap(([, bookformStore]) => {
                if(bookformStore.length > 0) {
                    return EMPTY;
                }
                return this.booksService
                        .get()
                        .pipe(map((data) => booksFetchAPISuccess({allBooks: data})));
            })
        )
    );
}
