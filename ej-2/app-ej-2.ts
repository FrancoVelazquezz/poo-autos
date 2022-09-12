class Auto {
    public marca: string;
    public color: string;
    public numSerie: number;
    public usado: boolean;
    public todoTerreno: boolean; 


    constructor (paramMarca:string, paramColor:string, paramNumSerie:number, paramUsado:boolean, paramTodoTerreno:boolean){
        this.marca = paramMarca;
        this.color = paramColor;
        this.numSerie = paramNumSerie;
        this.usado = paramUsado;
        this.todoTerreno = paramTodoTerreno;
    }   

    obtenerMarca(): string{
        return this.marca;
    }

    obtenerColor():string {
        return this.color;
    }
    
    obtenerNumSerie():number {
        return this.numSerie
    }

    obtenerUsado():void {
        if(this.usado === true) {
            this.usado = true;
        } else {
            this.usado = false;
        }
    }
    
    obtenerTodoTerreno():boolean {
        if(this.todoTerreno === true) {
            return this.todoTerreno = true;
        } else {
            return this.todoTerreno = false;
        }
    }
}

let primerAuto = new Auto('nissan','negro',12,true,false)
let segundoAuto = new Auto('audi', 'gris', 189, false,false)
let tercerAuto = new Auto('toyota','blanco',256,true,true)

console.log('Marca: ' + primerAuto.obtenerMarca() + 'Color: ' + primerAuto.obtenerMarca())

