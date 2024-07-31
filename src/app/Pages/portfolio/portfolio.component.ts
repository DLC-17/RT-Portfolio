import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  
})
export class PortfolioComponent {
  constructor(private titleserveice: Title){
    this.titleserveice.setTitle('Trinh-Portfolio')
  }
  Array1: string[] = [
    '',
    '/assets/images/AJ.jpg'
  ];

  Array2: string[] = [
    '/assets/images/MoA/GroupShot.jpg','/assets/images/2. Rigo Grad Photo/Rigo_Senior_Photos-05.22.24-Richard_Trinh-0906.jpg'
  ];

  Array3: string[] = ['/assets/images/2. Rigo Grad Photo/Rigo_Senior_Photos-05.22.24-Richard_Trinh-0906.jpg']; }
