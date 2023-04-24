import { Component } from '@angular/core';
import { IP } from 'src/app/Product';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  Prd_Arr:Array<IP>
constructor(private product_serv:StudentDataService){
this.Prd_Arr=this.product_serv.getProducts()
}

}
