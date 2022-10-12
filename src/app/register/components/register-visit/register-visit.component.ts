import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-register-visit',
  templateUrl: './register-visit.component.html',
  styleUrls: ['./register-visit.component.scss']
})
export class RegisterVisitComponent implements OnInit {



  constructor( private form: FormBuilder, private service: VisitorService, private router: Router){ }

  apartment!: string;


  visitForm = this.form.group({
   apartment: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', Validators.required],
    rg: ['', Validators.required],
    telephoneA: ['', Validators.required],
    telephoneB: [''],
    obs: ['']
  });

  pg = "Cadastro";


  ngOnInit(): void {
  }

  save(){
    console.log(this.visitForm.value);
    const data = this.visitForm.value;
    console.log(data);
    this.service.createVisitor(data).subscribe({
      next: () => {
        alert("Visitante dicionado com sucesso!");
        this.visitForm.reset();
      },
      error: () => {
        alert("O Visitante não pôde ser adicionado.");
      },
    });
  }


  update() {
    const data = this.visitForm.value;
    this.service.updateVisitor(data, this.apartment).subscribe({
      next: () => {
        alert("Registro atualizado com sucesso!");
        this.router.navigate(['/visitor']);
      },
      error: () => {
        alert("O registro não pôde ser atualizado.");
        
      }
    });
   }

}
