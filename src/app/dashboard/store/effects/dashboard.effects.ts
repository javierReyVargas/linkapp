import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { catchError, map, mergeMap, tap } from "rxjs";
import { LinksService } from "../../services/links.service";
import * as actionsDashboard from '../actions';

@Injectable()
export class DashboardEffects {

    constructor(private actions$: Actions,
                private linksService: LinksService) {
    }

    createLink$ = createEffect(
        () => this.actions$.pipe(
            ofType( actionsDashboard.createLink ),
            mergeMap(
                (data) => this.linksService.createLink(data.url, data.name)
                .pipe(
                    map(
                        (dataResponse: any) => actionsDashboard.createLinkSuccess(
                            {
                                name: dataResponse.name,
                                url: dataResponse.url,
                                id: dataResponse.id
                            }
                        )
                    )
                )
            )
        )
    );

    deleteLink$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionsDashboard.deleteLink),
            mergeMap(
                (data) => this.linksService.deleteLink(data.id)
                .pipe(
                    map(
                        (dataResponse: any) => actionsDashboard.deleteLinkSuccess(dataResponse)
                    )
                )
            )
        )
    );

    loadLinks$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionsDashboard.loadListUrls),
            mergeMap(
                (data) => this.linksService.loadLinks()
                .pipe(
                    map(
                        (dataResponse: any) => actionsDashboard.loadListUrlsSuccess({arrUrls: dataResponse})
                    )
                )
            )
        )
    );
}