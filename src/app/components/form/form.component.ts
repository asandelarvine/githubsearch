import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  typedWord!: string;
  @Output ()word=new EventEmitter<any>();

  outputValue(){
    this.word.emit(this.typedWord)
  }
    

  constructor() { }

  ngOnInit(): void {
  }

}
