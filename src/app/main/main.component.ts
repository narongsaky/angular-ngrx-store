import { Component, OnInit, Inject, Input } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app-state.model";
import { AddItemAction, UserItem } from "../store/user.actions";
import { Observable } from "rxjs";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
})
export class MainComponent implements OnInit {

    items$: Observable<Array<UserItem>>;

    @Input()
    fullName: string = '';

    @Input()
    email: string = '';

    constructor(
        private store: Store<AppState>
    ) {
        this.items$ = this.store.select((store) => store.user);
    }

    ngOnInit() {}

    addUser(fullName: string, email: string) {
        this.store.dispatch(AddItemAction({payload: {fullName, email}}));
    }

}
