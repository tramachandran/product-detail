import { Component, OnInit } from '@angular/core';
import { BatsModel } from 'src/app/bats.model';
import { BatService } from 'src/app/services/bat.service';

@Component({
  selector: 'app-bats-list',
  templateUrl: './bats-list.component.html',
  styleUrls: ['./bats-list.component.scss']
})
export class BatsListComponent implements OnInit {

  constructor(private _batService: BatService) { }
  
  bats: BatsModel[] = [];
  defaultImagePath = '/assets/img/';
  isLoading =  true;
  ngOnInit(): void {
    this._batService.getBats().subscribe(
      (res: any[]) => {
        this.bats = res;
        this.isLoading =  false;
      },
      (error: any) => {
        console.log(error);
        this.isLoading =  false;
        this.bats = [];
      }
    )
  }

  getImageURL(url: string): string {
    return `${this.defaultImagePath}${url}`;
  }
}
