import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styles: [`.warning {
      font-weight:bold;
      font-size=144;
`
  ]
})
export class AppComponent {
  task: string;
  tasks = [];
  property1=true
  myClasses =  {
    warning:this.property1,
  }
  Add() {
    this.tasks.push({ name: this.task });
    this.task = "";
  }

 delete(index) {
        this.tasks.splice(index, 1);
    }

}
