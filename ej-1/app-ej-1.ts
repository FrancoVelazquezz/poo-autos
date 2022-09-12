class Perros {
    public edad: number;
    public raza: string;
    public entrenado: boolean;

    constructor (paramEdad:number, paramRaza:string, paramEntrenado:boolean){
        this.edad = paramEdad;
        this.raza = paramRaza;
        this.entrenado = paramEntrenado;
    }   

    obtenerEdad():number {
        return this.edad;
    }

    obtenerRaza():string {
        return this.raza;
    }

    obtenerEntrenado():boolean {
        if (this.entrenado===true){
           return this.entrenado = true;

        }else{
            return this.entrenado=false;
        }
    }
}

let primerPerro = new Perros(3,'dogo', true);

console.log('Raza del perro: ' + primerPerro.obtenerRaza())
console.log('Edad del perro: ' + primerPerro.obtenerEdad())
console.log('Perro entrenado: ' + primerPerro.obtenerEntrenado())