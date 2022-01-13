import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.sass']
})
export class CreateUrlComponent implements OnInit {

  createLinkFormGroup!: FormGroup;

  @Output() addLink = new EventEmitter<{name: string, url: string}>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createLinkFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      url: ['', Validators.required]
    });
  }

  saveUrl(){

    this.addLink.emit(
      {
        name: this.createLinkFormGroup.value.name,
        url: this.createLinkFormGroup.value.url
      }
    )

  }

}
