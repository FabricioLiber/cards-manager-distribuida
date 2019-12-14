import { Component, OnInit } from '@angular/core';
import { PagamentoService } from './pagamento.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.sass']
})
export class PagamentoComponent implements OnInit {

  formPagamento: FormGroup

  constructor(
    private pagamentoService: PagamentoService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.formPagamento = this.formBuilder.group({
      numero: ['', Validators.required],
      nomePortador: ['', Validators.required],
      validade: ['', Validators.required],
      codSeguranca: ['', Validators.required],
    })
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'ok', {
      duration: 2000,
    });
  }


  onSubmit() {
    if (!this.formPagamento.valid) {
      this.openSnackBar('Informe todos os campos corretamente!')
      return
    }
    this.pagamentoService.post(this.formPagamento.value).subscribe(
      response => this.openSnackBar(response.message),
      response => {
        this.openSnackBar(response.error.message)
      }
    )
    
  }
}
