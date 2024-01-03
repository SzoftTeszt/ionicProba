import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  animals:any
  constructor(private base:BaseService) {
    

   }

  ngOnInit() {
    this.base.getAnimals().snapshotChanges().pipe(
      map((ch)=> ch.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ))
    ).subscribe(
      (res)=>this.animals=res
    )
  }

}
