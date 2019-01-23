import { Component,EventEmitter, OnInit, Input,Output } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css','../../assets/bootstrap/css/bootstrap.css']
})



export class NavigationComponent implements OnInit {


  title = "navigation"
  constructor() { }

  private _name = '';
  
  @Input()
	set name(name: string) {
		this._name = name
	}
 
	get name(): string { return this._name; }


  @Output() voted = new EventEmitter<int>();


  ngOnInit() {

  }

  onMenuSelect(i): void {
    //change content view
    console.log(i)
    this.voted.emit(i);
  }

}
