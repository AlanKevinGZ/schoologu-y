import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.component.html',
  styleUrls: ['./producto1.component.scss']
})
export class Producto1Component implements OnInit {

  id:number=0;

  constructor(private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params)=>{
    /* obentemos el valor  */
   /*  console.log(params); */
    this.id=params['id'];
    console.log(this.id);
    
  })
  }

}
