import { Component, OnInit } from '@angular/core';
import { ComService } from 'src/app/services/com.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  opened :boolean=false;

  constructor(private comS: ComService) { }

  ngOnInit(): void {
    this.comS.isDrawerOpen.subscribe(isOpen => {
      this.opened=isOpen;      
    });
  }
}