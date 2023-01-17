import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  
  images = ['computer.jpg', 'bib.jpg', 'gym.jpg'];
  headlines = [
    'Work hard, play hard',
    'Knowledge is power',
    'Aus großem Bizeps erwächst große Verantwortung'
  ];
  currentImage = 0;
  showImage = true;


  ngOnInit() {
    this.updateImage();
  }




  updateImage() {

    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1)

    }, 8000);


  }

}
