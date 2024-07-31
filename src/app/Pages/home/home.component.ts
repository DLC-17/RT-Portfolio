import { Component } from '@angular/core';
import { AppComponent } from '../Main/app.component';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleserveice: Title){
    this.titleserveice.setTitle('Trinh-Home')
  }
}
