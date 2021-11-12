import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'simulador',
  templateUrl: 'simulador.page.html',
  styleUrls: ['simulador.page.scss']
})

export class SimuladorPage {
  visualizarGrafico: boolean = true;
  valorInicial: number = 0.00;
  aporteMensal: number = 0.00;
  quantidadeAnos: number = 1;

  private listaRendimentoMensal = [
    {
      Nome: "Poupança", Valor: 0.0036, Cor: "blue"
    },
    {
      Nome: "Tesouro SELIC", Valor: 0.0052, Cor: "orange"
    },
    {
      Nome: "Renda Fixa Nubank", Valor: 0.0063, Cor: "gray"
    },
    {
      Nome: "CDB e LC", Valor: 0.0080, Cor: "gray"
    },
    {
      Nome: "Tesouro Direto", Valor: 0.0052, Cor: "orange"
    },
    {
      Nome: "CDI do PicPay", Valor: 0.0076, Cor: "gray"
    },
    {
      Nome: "Renda Fixa Next", Valor: 0.0063, Cor: "gray"
    },
  ];

  private listaValores: number[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: true,
    showLines: false
  };

  public barChartLabels: Label[] = [
    'Poupança',
    'Tesouro SELIC',
    'Renda Fixa Nubank',
    'CDB e LC',
    'Tesouro Direto',
    'CDI do PicPay',
    'Renda Fixa Next'];

  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public lineChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: null }
  ];

  constructor() { }

  simular() {
    let valorFinal: number = this.valorInicial;

    for (let i = 0; i < this.listaRendimentoMensal.length; i++) {
      const rendimentoAtual = this.listaRendimentoMensal[i].Valor;

      for (let j = 1; j <= this.quantidadeAnos; j++) {
        for (let k = 1; k <= 12; k++) {
          let juros = (valorFinal * rendimentoAtual);

          valorFinal = (valorFinal + this.aporteMensal + juros);
        }
      }

      this.listaValores.push(valorFinal);

      valorFinal = this.valorInicial;
    }

    this.barChartData = [{
      data: [parseInt(this.listaValores[0].toFixed(2)), parseInt(this.listaValores[1].toFixed(2)), parseInt(this.listaValores[2].toFixed(2)), parseInt(this.listaValores[3].toFixed(2)), parseInt(this.listaValores[4].toFixed(2)), parseInt(this.listaValores[5].toFixed(2))], backgroundColor: ["blue", "orange", "red", "yellow", "green", "gray"]
    }];
  }
}
