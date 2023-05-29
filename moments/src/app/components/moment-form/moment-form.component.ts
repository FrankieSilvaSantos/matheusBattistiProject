import { Component, Input,OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent   {
  @Input() btnText!: string

  constructor() {}




  momentForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',Validators.required),
      image: new FormControl('', Validators.required),
    })


  get title() {
    return this.momentForm.get('title')!
  }

  get description() {
    return this.momentForm.get('description')!
  }
  get image() {
    return this.momentForm.get('image')!
  }

  

submit() {
  if(this.momentForm.invalid) {
    return
  }
  console.log('Enviou o formulário')
}

}
