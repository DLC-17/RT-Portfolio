import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  
})
export class PortfolioComponent {
  constructor(private titleserveice: Title){
    this.titleserveice.setTitle('Trinh-Portfolio')
  }}
