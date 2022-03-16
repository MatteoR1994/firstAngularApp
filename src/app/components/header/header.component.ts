import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComService } from 'src/app/services/com.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  // @Output() public onMenuClicked: EventEmitter<any>;

  isWelcome = false;

  constructor(private comS: ComService) { 
    // this.onMenuClicked = new EventEmitter();
  }

  ngOnInit(): void {
    if(window.location.pathname === '/welcome'){
      this.isWelcome=true;
    }
  }

  menuClicked(): void {
    // this.onMenuClicked.emit();
    this.comS.isDrawerOpen.next(!this.comS.isDrawerOpen.value);
  }

}