import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DatePipe]
})
export class HomePage {
  nomeUsuario: string;
  listaMoedas = [];
  listaCotacoes = [];
  constructor(private http: HttpClient) {
    this.nomeUsuario = "Guilherme Lopes";

    this.obterCotacaoMoedas();
  }

  private async obterCotacaoMoedas() {
    return await this.http.get("https://api.hgbrasil.com/finance")
      .toPromise()
      .then((response) => {
        this.listaMoedas = [
          (response as any).results.currencies.ARS,
          (response as any).results.currencies.AUD,
          (response as any).results.currencies.BTC,
          (response as any).results.currencies.CAD,
          (response as any).results.currencies.CNY,
          (response as any).results.currencies.EUR,
          (response as any).results.currencies.GBP,
          (response as any).results.currencies.JPY,
          (response as any).results.currencies.USD];

        this.listaCotacoes = [
          (response as any).results.stocks.CAC,
          (response as any).results.stocks.DOWJONES,
          (response as any).results.stocks.IBOVESPA,
          (response as any).results.stocks.IFIX,
          (response as any).results.stocks.NASDAQ,
          (response as any).results.stocks.NIKKEI];
      })
      .catch(ex => {
        console.log(ex);
        throw ex;
      });
  }

  myDate = Date.now();
}
