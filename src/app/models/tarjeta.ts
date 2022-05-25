export class Tarjeta{
    titular: string;
    numeroTarjeta: string;
    fechaExpiracion: string;
    cvv: string;

    constructor(titular: string, numeroTarjeta: string, fechaExpiracion: string, cvv: string){
        this.titular = titular;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaExpiracion = fechaExpiracion;
        this.cvv = cvv;
    }
}