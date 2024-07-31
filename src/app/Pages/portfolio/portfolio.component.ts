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
    '/assets/images/Graduation-Photos/Rigo/Rigo_Senior_Photos-05.22.24-Richard_Trinh-0906.jpg',
    '/assets/images/Graduation-Photos/AJ/AJ.jpg'
  ];

  Array2: string[] = [
    '/assets/images/MoA/GroupShot.jpg','/assets/images/Film Festival/BASS_Student_Film_Festival-04.13.24-Richard_Trinh-5331.jpg'
  ];

  Array3: string[] = ['/assets/images/Saddle-Up-Soiree/Saddle_Up_Soiree-05.03.24-Richard_Trinh-8020.jpg','/assets/images/SMC-Sports/MBB_v_Gonzaga-03.02.24-Richard_Trinh-1247.jpg']; }
