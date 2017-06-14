    import { Component } from '@angular/core';
    @Component({
    selector: 'app-route',
    styleUrls: [ './app.component.css' ],
    template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/teams">Teams</a>
     </nav>
    <router-outlet></router-outlet>
  
    `
    })
    export class AppComponent {
    title = 'ICC Champions Trophy 2017';
    }