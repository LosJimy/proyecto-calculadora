import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class Operaciones{
  private numeros: number[];

  constructor(numeros: number[]){
    this.numeros = numeros;
  }

  sumarNumeros(): number{
    let total = this.numeros[0];
    for(let i = 1; i<this.numeros.length; i++){
      total += this.numeros[i];
    }
    return total;
  }

  restarNumeros(): number{
    let total = this.numeros[0];
    for(let i = 1; i<this.numeros.length; i++){
      total -= this.numeros[i];
    }
    return total;
  }

  multiplicarNumeros(): number{
    let total = this.numeros[0];
    for(let i = 1; i<this.numeros.length; i++){
      total = total * this.numeros[i];
    }
    return total;
  }

  dividirNumeros(): number{
    let total = this.numeros[0]
    for(let i = 1; i < this.numeros.length; i++){
      total = total / this.numeros[i];
    }
    return total;
  }
}
