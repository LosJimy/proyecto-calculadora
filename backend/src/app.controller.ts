import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService, Operaciones } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post(':operacion')
  postOperacion(@Param('operacion') operacion: string, @Body() body: any){
    const { numeros } = body;
    const instancia = new Operaciones(numeros);

    if(operacion === 'suma'){ return instancia.sumarNumeros()}
    else if (operacion === 'resta'){ return instancia.restarNumeros()}
    else if (operacion === 'multiplicar') { return instancia.multiplicarNumeros()}
    else if (operacion === 'division') { return instancia.dividirNumeros()}
  }
}
