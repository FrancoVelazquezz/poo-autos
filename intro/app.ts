class Televisor {
    public estaPrendido : boolean;
    public volumenActual : number;
    public canalActual : number;


    constructor (paramPrendido:boolean, paramVolumen:number, paramCanal:number){
        this.estaPrendido = paramPrendido;
        this.volumenActual = paramVolumen;
        this.canalActual  = paramCanal;
    }   


        prenderApagar (): void{
            if (this.estaPrendido===true){
                this.estaPrendido=false;
            }else{
                this.estaPrendido=true;
            }
        }

        obtenerVolumen (): number{
            return this.volumenActual;
        }

        subirVolumen():void {
            this.volumenActual = this.volumenActual++;
        }
        
        bajarVolumen():void {
            this.volumenActual  = this.volumenActual--;
        }

}

let primerTelevisor = new Televisor(true,34,23);
let segundoTelevisor = new Televisor(false,54,32);