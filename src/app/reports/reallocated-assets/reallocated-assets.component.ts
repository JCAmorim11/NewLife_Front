import { ReallocatedAssetsService } from './../services/reallocated-assets.service';
import { VisitorService } from './../../services/visitor.service';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import * as fs from 'file-saver';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

enum Status{
    LOADED,
    UNLOADED,
    LOADING
}

@Component({
  selector: 'app-reallocated-assets',
  templateUrl: './reallocated-assets.component.html',
  styleUrls: ['./reallocated-assets.component.scss']
})
export class ReallocatedAssetsComponent implements OnInit {
  form!: FormGroup;
  reallocatedAssertDataSource: any;
  displayedColumns = ['relocationDate','active','activeType','model','previousCompany','previousBranch','currentCompany','currentBranch','responsibleUser']
  totalLength!:number;
  pageSize = 5;
  data_export = [{}];

  status = Status.UNLOADED;

 
  constructor( private reallocatedAssetsService: ReallocatedAssetsService,
 private feedback: VisitorService) { }

  ngOnInit(): void {
  }
  reset(): void{
    this.form.reset();
    this.reallocatedAssertDataSource.data = [];
    this.status = Status.UNLOADED;
  }

 find():void{

       if(this.form.valid){
        this.reallocatedAssetsService.findAssetBranchByDate(this.form.value.dt_start, this.form.value.dt_end, this.pageSize, 0).subscribe( response => {
            this.reallocatedAssertDataSource.data = response.content;
            this.totalLength = response.totalElements;
            this.status = Status.LOADED;
          }, error => {
            this.feedback.showMessage('Não foi possível realizar a busca')
        });
       } else {
        this.feedback.showMessage('Informe a data de inicio e fim');
       }
       
    }


//['relocationDate','active','activeType','model','previousCompany','previousBranch','currentCompany','currentBranch','responsibleUser']
  exportExcel() {
    if(this.form.valid){
        this.reallocatedAssetsService.findAssetBranchByDateExport(this.form.value.dt_start, this.form.value.dt_end).subscribe((response => {
            import("xlsx").then(xlsx => {
                const header:any[][] = [[
                    'Data Realocação',
                    'Ativo',
                    'Tipo Ativo',
                    'Modelo', 
                    'Empresa Anterior',
                    'Filial Anterior',
                    'Empresa Atual',
                    'Filial Atual',
                    'Usuário Responsável'
                ]];
                const ws= xlsx.utils.book_new();
                xlsx.utils.sheet_add_aoa(ws,header);
                xlsx.utils.sheet_add_json(ws,response,{skipHeader: true,origin: 'A2'});
                const workbook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
                const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
                this.saveAsExcelFile(excelBuffer, "relocation_report");
            });
        }));
    } else {
        this.feedback.showMessage('Informe a data de início e fim');
    }
  }
  saveAsExcelFile(excelBuffer: any, arg1: string) {
    throw new Error('Method not implemented.');
  }
  
  pageChange( pageEvent: PageEvent){
        if(this.form.valid){
            this.reallocatedAssetsService.findAssetBranchByDate(this.form.value.dt_start, this.form.value.dt_end, pageEvent.pageSize, pageEvent.pageIndex).subscribe( response => {
                this.reallocatedAssertDataSource.data = response.content;
                this.totalLength = response.totalElements
              }, error => {
                this.feedback.showMessage('Não foi possível realizar a busca')
            });
        } else {
            this.feedback.showMessage('Informe a data de inicio e fim');
        }
    }
    
    isLoaded(){
        return this.status === Status.LOADED;
    }

    hasData(){
        return this.status === Status.LOADED && this.reallocatedAssertDataSource.data.length > 0
    }

    dontHasData(){
        return this.status === Status.LOADED && this.reallocatedAssertDataSource.data.length === 0
    }

}

export interface ReallocatedAssetsModel{
  relocationDate: string;
  active: string;
  activeType: string;
  model: string;
  previousCompany: string;
  previousBranch: string;
  currentCompany: string;
  currentBranch: string;
  responsibleUser: string;
}