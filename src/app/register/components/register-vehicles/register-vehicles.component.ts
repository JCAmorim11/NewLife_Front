import { apartment } from './../../../model/apartment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-register-vehicles',
  templateUrl: './register-vehicles.component.html',
  styleUrls: ['./register-vehicles.component.scss']
})
export class RegisterVehiclesComponent implements OnInit {

  constructor( private form: FormBuilder, private service: VehiclesService, private router: Router) { 
    
  }

  
  apartment!: string;
  vehiclesForm = this.form.group({
    apartment: ['',Validators.required],
    plate: ['', Validators.required],
    brand: ['', Validators.required],
    model: [''],
    color: ['']
  });

  save(){
    console.log(this.vehiclesForm.value);
    const data = this.vehiclesForm.value;
    console.log(data);
    this.service.createVehicle(data).subscribe({
      next: () => {
        alert("carro adicionado com sucesso!");
        this.vehiclesForm.reset();
      },
      error: () => {
        alert("O carro não pôde ser adicionado.");
      },
    });
  }
  
  update() {
    const data = this.vehiclesForm.value;
    this.service.updateVehicle(data, this.apartment).subscribe({
      next: () => {
        alert("Registro atualizado com sucesso!");
        this.router.navigate(['/vehicles']);
      },
      error: () => {
        alert("O registro não pôde ser atualizado.");
        
      }
    });
   }
  ngOnInit(): void {
  }

}
