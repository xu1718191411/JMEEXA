import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../assets/bootstrap/css/bootstrap.css']
})
export class AppComponent {
  title = 'title';
  name = "XUZHONGWEI";
  currentPage = 0;

  onVoted(agreed: int) {
    this.currentPage = agreed;
  }
  
}
