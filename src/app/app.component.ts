import { Component } from '@angular/core';
import { StorageService } from './storage.service';
import { AuthService } from './services/checkout/authantication/auth.service';
import { Subscription } from 'rxjs';
import { EventBusService } from './event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FurnishUp';


  constructor() { }

  ngOnInit(): void {
    
  }
  

  
}
