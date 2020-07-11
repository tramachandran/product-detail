import { Component, OnInit } from '@angular/core';
import { BatsModel } from 'src/app/bats.model';
import { BatService } from 'src/app/services/bat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bat-detail',
  templateUrl: './bat-detail.component.html',
  styleUrls: ['./bat-detail.component.scss']
})
export class BatDetailComponent implements OnInit {

  constructor(private _batService: BatService, private _route: ActivatedRoute) { }
  batDetails: BatsModel;
  defaultImagePath = '/assets/img/';
  isLoading = true;
  isErrorOccured = false;
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      const id = params.id;
      this._batService.getBatDetails(id).subscribe(
        (res: BatsModel) => {
          this.batDetails = res;
          this.isLoading =  false;
          this.isErrorOccured = false
        },
        (err) => {
          console.log(err)
          this.isLoading = false;
          this.isErrorOccured = true;
        }
      )
    });
  }

  getImageURL(): string {
    return `${this.defaultImagePath}${this.batDetails.imageUrl}`;
  }

  getAvailablityDetails(): string {
    return this.batDetails.availability === 'O' ? 'Sorry, this product is Out of Stock': 'Hurray, product is available';
  }

}
