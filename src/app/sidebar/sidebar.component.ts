import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidebar') sideNavigation: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    const classList = this.sideNavigation.nativeElement.classList;
    if (classList.contains('active')) {
      classList.remove('active');
    } else {
      classList.add('active');
    }
  }
}
