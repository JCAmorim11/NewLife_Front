import { FeedbackService } from './../../../services/feedback.service';

import { ResidentService } from './../../../services/resident.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime, find } from 'rxjs';
import { check } from 'src/app/shared/shared.module';
import { apartment } from './../../../model/apartment';
import { SharedModule } from 'src/app/shared/shared.module';
import * as fs from 'file-saver';
import { MatFormField } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ReallocatedAssetsService } from 'src/app/reports/services/reallocated-assets.service';
import { XLSX$Consts, XLSX$Utils } from 'xlsx';
import { disableDebugTools } from '@angular/platform-browser';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-search-hunt',
  templateUrl: './search-hunt.component.html',
  styleUrls: ['./search-hunt.component.scss'],
})

export class SearchHuntComponent implements OnInit {
  constructor(
    private  service: ResidentService,
    private form: FormBuilder,
    private formB: FormBuilder,
    private feedback: FeedbackService 
  ) { }

  private isButtonVisible = true;
  forms!: FormGroup;
  reallocatedAssertDataSource: any;
  data_export = [{}];
  file: any;
 // files: any[] = [];
  filenameControl = this.formB.control('', Validators.required);
 // status = Status.UNLOADED;

  public love: boolean = false;
  filterControl = new FormControl('');
    totalLength!: number;
    pageSize = 5;
    page = 0;

    dataTable = new MatTableDataSource();
    displayedColumns = ['apartment', 'name', 'cpf', 'rg', 'email', 'telephoneA','telephoneB', 'emergencyContact', 'emergencyTelephone', 'editar'];

    residentForm = this.form.group({
      apartment: [null, [Validators.required]],
      name: [null, [Validators.required]],
      rg: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required]],
      obs: [null],
      telephoneA:[null, [Validators.required]],
      telephoneB:[null],
      emergencyContact: [null, [Validators.required]],
      emergencyTelephone: [null, [Validators.required]],
     });

     pageChange(pageEvent: PageEvent) {
      this.service
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.dataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
        },
      error: () => console.log("Erro ao carregar!")
     });
  }
  
  checar(){
    if(check()){
      console.log(check());
      return true;

    }
    console.log(check());
    return false;
  }

  ngOnInit(): void {   
    this.filterControl.valueChanges.pipe(debounceTime(1000)).subscribe(query => {
      this.service.findAllPaginated({
        pageIndex: this.page,
        pageSize: this.pageSize,
        length: this.totalLength,
      },
        query).subscribe(response => {
          this.dataTable.data = response.content;
      });
    })

    this.pageChange({
      pageIndex: this.page,
      pageSize: this.pageSize,
      length: this.totalLength,
    });

    if(this.checar())
    {  this.love = true;}
    else{ this.love = false}

  }

  delete(id: any) {
    let text = "Deseja excluir o registro?";
    console.log(id);
    if (confirm(text) == true) {
      this.service.deleteResident(id).subscribe({
        next: () => {
          alert("Registro excluído com sucesso!");
          this.pageChange({
            pageIndex: this.page,
            pageSize: this.pageSize,
            length: this.totalLength,
          });
        },
        error: () => {
          alert("O registro não pôde ser excluído.");
        }
      });
    }
  }

  
 generateExcel(){
  this.service.downloadFile("xls", "e");
}

generatePDF(){
  this.service.downloadFile("pdf","newAdobePDF-file");
}
  
saveAsExcelFile(buffer: any, fileName: string) {
            const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
          });
          fs.saveAs(
            data,
            fileName + EXCEL_EXTENSION
          );
}

   

exportExcel() {
    if(this.love){
      console.log("1");
      this.service.findAll().subscribe(response =>
         import("xlsx").then(xls => {
         const header:any[][] = [[
                    'Commodity',
                    'Criado',
                    'nome',
                    'RG', 
                    'Email',
                    'Telefone 1',
                    'Telefone 2',
                    "foto",
                    "obs",
                    'Contato de Emergencia',
                    'Telefone de emergencia'
                ]];
                const ws= xls.utils.book_new();
                xls.utils.sheet_add_aoa(ws,header);
                console.log(response);
                xls.utils.sheet_add_json(ws,response.content,{skipHeader: true,origin: 'A2'});
                const workbook = { Sheets: { 'apartamentos': ws }, SheetNames: ['apartamentos'] };
                const excelBuffer: any = xls.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsExcelFile(excelBuffer, "relocation_report");
            }));
      } 
    else {
        this.feedback.showMessage('love not true');
    }
  } 



  loadFile(event: any){
      if(event.target.files && event.target.files[0]){
          this.file = event.target.files[0];
          this.filenameControl.setValue(this.file.name);
      }
  }

  uploadFile(){
     this.filenameControl.reset();
     this.service.importFile(this.file).subscribe(
        (success) => {
          alert("importação concluida");
        },
        (error) => {
          alert("erro na importação");
        }, () => {}
     ); 
  }


}
