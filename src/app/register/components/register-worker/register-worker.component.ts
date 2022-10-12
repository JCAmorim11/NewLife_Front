import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-register-worker',
  templateUrl: './register-worker.component.html',
  styleUrls: ['./register-worker.component.scss']
})
export class RegisterWorkerComponent implements OnInit {
  ;

  constructor( private form: FormBuilder, private service: WorkerService, private router: Router){ }

  apartment!: string;

  pg = "Cadastro";

 workerForm = this.form.group({
    apartment: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', Validators.required],
    rg: ['', Validators.required],
    telephoneA: ['', Validators.required],
    telephoneB: [''],
    obs: ['']
  });
  ngOnInit(): void {
  }


  save(){
    console.log(this.workerForm.value);
    const data = this.workerForm.value;
    console.log(data);
    this.service.createWorker(data).subscribe({
      next: () => {
        alert("funcionario adicionado com sucesso!");
        this.workerForm.reset();
      },
      error: () => {
        alert("O funcionario não pôde ser adicionado.");
      },
    });
  }


  update() {
    const data = this.workerForm.value;
    this.service.updateWorker(data, this.apartment).subscribe({
      next: () => {
        alert("Registro atualizado com sucesso!");
        this.router.navigate(['/worker']);
      },
      error: () => {
        alert("O registro não pôde ser atualizado.");
        
      }
    });
   }

}
