import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'simulador',
  templateUrl: 'simulador.page.html',
  styleUrls: ['simulador.page.scss']
})


export class SimuladorPage {
  tipoInvestimento: string = "poupanca";
  visualizarGrafico: boolean = true;
  valorInicial: number = 0.00;
  aporteMensal: number = 0.00;
  quantidadeAnos: number = 1;

  private listaRendimentoMensal = [
    {
      Nome: "poupanca", Valor: 0.0030, Cor: "blue"
    },
    {
      Nome: "selic", Valor: 0.0052, Cor: "orange"
    },
    {
      Nome: "tesouro_pre_fixado", Valor: 0.0084, Cor: "red"
    },
    {
      Nome: "cdb", Valor: 0.0054, Cor: "yellow"
    },
    {
      Nome: "lci", Valor: 0.0042, Cor: "green"
    },
    {
      Nome: "renda_fixa", Valor: 0.0082, Cor: "gray"
    },];

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
    'Tesouro Pré-fixado',
    'CDB',
    'LCI',
    'Renda Fixa'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public lineChartLegend = true;
  // public barChartData: ChartDataSets[] = [];
  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: null, backgroundColor: ["blue", "orange", "red", "yellow", "green", "gray"] }
  ];

  constructor() { }

  simular() {
    let valorFinal: number = this.valorInicial;

    for (let i = 0; i < this.listaRendimentoMensal.length; i++) {
      const rendimentoAtual = this.listaRendimentoMensal[i].Valor;

      for (let j = 1; j <= this.quantidadeAnos; j++) {
        for (let k = 1; k <= 12; k++) {
          let juros = (valorFinal * rendimentoAtual);
          valorFinal += this.aporteMensal + juros;
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
