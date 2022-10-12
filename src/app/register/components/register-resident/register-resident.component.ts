import { apartment } from './../../../model/apartment';
import { ResidentService } from './../../../services/resident.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-resident',
  templateUrl: './register-resident.component.html',
  styleUrls: ['./register-resident.component.scss']
})
export class RegisterResidentComponent implements OnInit {

  constructor(private form: FormBuilder,
     private service: ResidentService,
    private router: Router,
    private route: ActivatedRoute){ }

    apartment!: string;
    id!: number;
    isEdit = false;
    
    pg = "Cadastro";

 residentForm = this.form.group({
    apartment: [null, Validators.required],
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    cpf: [null, Validators.required],
    rg: [null, Validators.required],
    telephoneA: [null, Validators.required],
    telephoneB: [null],
    emergencyContact: [null, Validators.required],
    emergencyTelephone: [null, Validators.required],
    obs: []
  });

  create(){
    console.log(this.residentForm.value);
    const data = this.residentForm.value;
    console.log(data);
    this.service.createResident(data).subscribe({
      next: () => {
        alert("Morador adicionado com sucesso!");
        this.residentForm.reset();
      },
      error: () => {
        alert("O morador não pôde ser adicionado.");
      },
    });
  }

  ngOnInit(): void {
    console.log("chegueri")
    if(this.router.url != "/register/resident"){
        this.route.params.subscribe({
          next: (params) => {
            this.isEdit = true;
            this.apartment = params['id'];
            console.log(this.apartment)
          },
        });
        if (this.isEdit) {
          console.log("ok aqui2");
          console.log(this.isEdit);
          console.log(this.apartment)
          this.patch();
    }
    console.log(this.router.url);
    console.log("ok aqui");
    }    
  }
  
  patch() {
    console.log("viash");
    this.service.findResident(this.apartment).subscribe({
      next: (response) =>{
        console.log(response);
        this.residentForm.patchValue(response[0]);
   //       apartment: response.apartment
 //       });
      }
    
    });
    
  }
  update() {
    const data = this.residentForm.value;
    console.log(data); 
    this.service.updateResident(data).subscribe({
      next: () => {
        alert("Registro atualizado com sucesso!");
        this.router.navigate(['register/resident']);
      },
      error: () => {
        alert("O registro não pode ser atualizado.");
      }
    });
   }
}
