//Interface
interface MovilBase{
    setColor(color);
    getColor();
}

// Clase (molde del objeto)
class Movil implements MovilBase{
    // Propiedades (caracteristicas del objeto)
    private marca: string;
    private modelo: string;
    private color: string;
    private tipo: string;
    private cilindrada: number;
    private puertas: number;
//metodo (funciones que va a hacer el objeto)
constructor(marca, modelo, color, tipo, cilindrada, puertas){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.tipo = tipo;
    this.cilindrada = cilindrada;
    this.puertas = puertas;
}
    public setMarca(marca){
        this.marca = marca;
    }
    public getMarca(){
        return this.marca
    }
    public setModelo(modelo){
        this.modelo = modelo;
    }
    public getModelo(){
        return this.modelo
    }
    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color
    }
    public setTipoAuto(tipoAuto){
        this.tipo = tipoAuto;
    }
    public getTipoAuto(){
        return this.tipo
    }
    public setCilindrada(cilindrada){
        this.cilindrada = cilindrada;
    }
    public getCilindrada(){
        return this.cilindrada
    }
    public setPuertas(puertas){
        this.puertas = puertas;
    }
    public getPuertas(){
        return this.puertas
    }
}
    
    // Clase Hija 
    class Moto extends Movil{
        public llantas: number;
        
        setLlantas(llantas: number){
            this.llantas = llantas;
        }
        getLlantas():number{
            return this.llantas;
        }
    }
    
    var carro = new Movil("Ferrari", "365 gtb/4", "negro", "Sport", 4390.35, 2);
        console.log(carro);
        //carro1.setMarca("Ferrari");
        //carro1.setCilindrada(390.35);
    var motoneta = new Moto();
        console.log(motoneta);