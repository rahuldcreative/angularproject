import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  testimmonialconfig = {"slidesToShow": 4, "slidesToScroll": 4, "autoplay":true, "dots":false,};
}
