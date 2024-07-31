import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private titleserveice: Title){
    this.titleserveice.setTitle('Trinh-Contact')
  }
}
