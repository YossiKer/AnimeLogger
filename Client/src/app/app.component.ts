import { Component } from '@angular/core';
import { NavbarMetadata } from './Objects/navbarMetadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarMetadata: NavbarMetadata;

  constructor() {
    this.navbarMetadata = {
      title: 'Anime Logger',
      links: [
        {
          title: 'My Animes',
          link: '#',
          displayName: 'MyAnimes'
        },
        {
          title: 'Recommended',
          link: '#',
          displayName: 'Recommended'
        },
      ]
    }
  }
}
