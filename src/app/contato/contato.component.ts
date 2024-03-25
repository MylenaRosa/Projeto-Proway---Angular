import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, NgxMaskService } from 'ngx-mask';
import { NgxMaskApplierService } from 'ngx-mask/lib/ngx-mask-applier.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit{

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    
  }

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]] 
    
  })

  enviarFormulario(){
    alert("Sua mensagem foi enviada!");
    this.formContato.reset();
  }

  

}
