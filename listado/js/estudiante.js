class Estudiante{
    constructor(nombre, apellido){ //argumentos
        this._nombre = nombre // losoo this representan los atributos
        this._apellido = apellido
    }

get nombre(){
    return this._nombre
}
set nombre(nombre){
    this._nombre = nombre
}
get apellido(){
    return this._apellido
}
set apellido(apellido){
    this._apellido = apellido
}

}