import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private titleservice: Title) {
    this.titleservice.setTitle('Trinh-Portfolio');
  }

  Array1: string[] = [
    '/assets/images/Graduation-Photos/Rigo/Rigo_Senior_Photos-05.22.24-Richard_Trinh-0906.jpg',
    '/assets/images/Graduation-Photos/AJ/AJ.jpg'
  ];

  Array2: string[] = [
    '/assets/images/MoA/GroupShot.jpg',
    '/assets/images/Film Festival/BASS_Student_Film_Festival-04.13.24-Richard_Trinh-5331.jpg'
  ];

  Array3: string[] = [
    '/assets/images/Saddle-Up-Soiree/Saddle_Up_Soiree-05.03.24-Richard_Trinh-8020.jpg',
    '/assets/images/SMC-Sports/MBB_v_Gonzaga-03.02.24-Richard_Trinh-1247.jpg'
  ];

  galleryVisible = false;
  currentImageIndex = 0;
  currentImage = '';
  currentArray: string[] = [];

  openGallery(array: string[], index: number): void {
    this.currentArray = array;
    this.currentImageIndex = index;
    this.currentImage = this.currentArray[this.currentImageIndex];
    this.galleryVisible = true;
  }

  closeGallery(): void {
    this.galleryVisible = false;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex > 0) ? this.currentImageIndex - 1 : this.currentArray.length - 1;
    this.currentImage = this.currentArray[this.currentImageIndex];
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex < this.currentArray.length - 1) ? this.currentImageIndex + 1 : 0;
    this.currentImage = this.currentArray[this.currentImageIndex];
  }
}
