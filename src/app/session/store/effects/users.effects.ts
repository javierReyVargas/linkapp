import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs";
import { SesionService } from "../../services/sesion.service";
import * as actionsLogin from '../actions';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions,
                private userService: SesionService) {
    }

    initLogin$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionsLogin.initsession),
            mergeMap(
                (data) => this.userService.login(data.email, data.password)
                .pipe(
                    map(
                        dataResponse => actionsLogin.initsessionSuccess(dataResponse)
                    ),
                    catchError( dataError => actionsLogin.initsessionError(dataError))
                )
            )
        )
    );

    initRegister$ = createEffect(
        () => this.actions$.pipe(
            ofType( actionsLogin.initSignup ),
            mergeMap(
                (data) => this.userService.signup(data.email,data.password,data.fullName)
                .pipe(
                    map(
                        data => actionsLogin.initSignupSuccess(
                            {
                                fullName: data.name,
                                id: data.id,
                                email: data.email,
                                password: data.password
                            }
                            )
                        )
                )
            )
        )
    );

    successSignup$ = createEffect(
        () => this.actions$.pipe(
            ofType( actionsLogin.initSignupSuccess ),
            map(
                (data) => actionsLogin.initsession(data)
            )
        )
    );

}