import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notfound } from './notfound/notfound';
import { authGuard } from './guards/auth-guard';
import { Login } from './login/login';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users').then((m) => m.Users),
    canActivate: [authGuard],
  },
  {
    path: 'products',
    loadComponent: () => import('./product/product').then((m) => m.Product),
    canActivate: [authGuard],
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((m) => m.Cart),
    canActivate: [authGuard],
  },
  {
    path: 'newpagecomponent',
    loadComponent: () =>
      import('./newpagecomponent/newpagecomponent').then((m) => m.Newpagecomponent),
    canActivate: [authGuard],
  },
  {
    path: 'httpUser',
    loadComponent: () => import('./http-user/http-user').then((m) => m.HttpUser),
    canActivate: [authGuard],
  },
  {
    path: 'CreateUser',
    loadComponent: () => import('./create-user/create-user').then((m) => m.CreateUser),
    canActivate: [authGuard],
  },
  {
    path: 'httpUser/:id',
    loadComponent: () => import('./detailuser/detailuser').then((m) => m.Detailuser),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '**',
    component: Notfound,
  },
];
