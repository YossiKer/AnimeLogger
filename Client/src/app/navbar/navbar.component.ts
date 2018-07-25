import { Component, OnInit, Input } from '@angular/core';
import { NavbarMetadata } from '../Objects/navbarMetadata';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbarMetadata: NavbarMetadata;

  currLink: string;

  constructor() { }

  ngOnInit() {
    this.currLink = this.navbarMetadata.links[0].title;
    console.log(this.currLink);
  }

}
