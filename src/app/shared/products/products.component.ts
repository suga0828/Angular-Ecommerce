import { Component, OnInit } from '@angular/core';
// import { ImageServiceService } from '../../services/image-service.service';

// import { Observable, of } from 'rxjs';
// import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	// with: number = 343;
	// height: number = 390;

  // constructor(private ImageService: ImageServiceService) { }

  ngOnInit() {
  	// this.getImage();
  }

  // getImage() {
  // 	this.ImageService.getImage(this.with,this.height)
  // 		.subscribe( response => {
  // 			console.log(response)
  // 		})
  // }

}
