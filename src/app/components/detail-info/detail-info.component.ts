import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IP } from 'src/app/Product';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent implements OnInit, OnDestroy{
  details:Array<IP>=[] 
  id!:number
  sub:any
  object!:IP

  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.details=this.serve.getProducts()
    console.log(this.details);
    this.sub=this.Act.params.subscribe((params)=>{
    this.object=this.details.find(obj=>obj.id==params['id']) as IP
    })
   
  }
constructor(private Act:ActivatedRoute,private route:Router,private serve:StudentDataService){


}
}
