import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private routa:Router,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  onClick(valor:string){
    this.routa.navigate(['productos'+'/'+valor]);
    
  }

}
