class Ingreso extends Dato{
    static idIngresos = 0
    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++Ingreso.idIngresos
    }
    get id(){
        return this._id
    }
}