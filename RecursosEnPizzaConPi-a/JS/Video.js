class Video extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion,valor){
        super(descripcion,valor);
        this._id = ++Video.contadorIngresos;
    }

    get id(){
        return this._id;
    }
}