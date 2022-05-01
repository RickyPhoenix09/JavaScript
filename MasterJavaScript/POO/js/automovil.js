var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase (molde del objeto)
var Movil = /** @class */ (function () {
    //metodo (funciones que va a hacer el objeto)
    function Movil(marca, modelo, color, tipo, cilindrada, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.tipo = tipo;
        this.cilindrada = cilindrada;
        this.puertas = puertas;
    }
    Movil.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Movil.prototype.getMarca = function () {
        return this.marca;
    };
    Movil.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Movil.prototype.getModelo = function () {
        return this.modelo;
    };
    Movil.prototype.setColor = function (color) {
        this.color = color;
    };
    Movil.prototype.getColor = function () {
        return this.color;
    };
    Movil.prototype.setTipoAuto = function (tipoAuto) {
        this.tipo = tipoAuto;
    };
    Movil.prototype.getTipoAuto = function () {
        return this.tipo;
    };
    Movil.prototype.setCilindrada = function (cilindrada) {
        this.cilindrada = cilindrada;
    };
    Movil.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    Movil.prototype.setPuertas = function (puertas) {
        this.puertas = puertas;
    };
    Movil.prototype.getPuertas = function () {
        return this.puertas;
    };
    return Movil;
}());
// Clase Hija 
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.setLlantas = function (llantas) {
        this.llantas = llantas;
    };
    Moto.prototype.getLlantas = function () {
        return this.llantas;
    };
    return Moto;
}(Movil));
var carro = new Movil("Ferrari", "365 gtb/4", "negro", "Sport", 4390.35, 2);
console.log(carro);
//carro1.setMarca("Ferrari");
//carro1.setCilindrada(390.35);
var motoneta = new Moto();
console.log(motoneta);
