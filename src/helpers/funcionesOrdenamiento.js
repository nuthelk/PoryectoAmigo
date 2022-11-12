export function SortArray(x, y){
    if (x.nombre < y.nombre) {return -1;}
    if (x.nombre > y.nombre) {return 1;}
    return 0;
}

export function SortArray2(x, y){
    if (x.nombre > y.nombre) {return -1;}
    if (x.nombre < y.nombre) {return 1;}
    return 0;
}

export function SortArrayPrice2(x, y){
    if (Number(x.precio) > Number(y.precio)) {return 1;}
    if (Number(x.precio) < Number(y.precio)) {return -1;}
    return 0;
}

export function SortArrayPrice(x, y){
    if (Number(x.precio) < Number(y.precio)) {return 1;}
    if (Number(x.precio) > Number(y.precio)) {return -1;}
    return 0;
}
