import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate { // این اینترفیس باید توسط کامپوننتی که این گارد بر روی آن اعمال شده، به ارث برده شود
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const UnsavedChangesGuardGuard: CanDeactivateFn<CanComponentDeactivate> =
  (component, currentRoute, currentState, nextState) => {
    return component.canDeactivate();
  };
  