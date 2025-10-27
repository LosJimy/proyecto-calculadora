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
    let total = 0;
    for(let numero of this.numeros){
      total += numero;
    }
    return total;
  }

  restarNumeros(): number{
    let total = this.numeros[0];
    for(let i = 1; i<this.numeros.length-1; i++){
      total -= this.numeros[i];
    }
    return total;
  }

  multiplicarNumeros(): number{
    let total = this.numeros[0];
    for(let i = this.numeros[1]; i<this.numeros.length-1; i++){
      total = total * i;
    }
    return total;
  }

  dividirNumeros(): number{
    let total = this.numeros[0]
    
    return total;
  }
}
