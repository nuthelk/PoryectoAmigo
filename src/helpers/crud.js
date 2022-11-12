import axios from "axios";

export const getData = async(state,url)=>{
    const peticion = await axios.get(url);
    state(peticion.data)
}   





export async function post ( url, data ) {
    try {
        await fetch( url, {
            method: "POST",
            body: JSON.stringify( data ),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });

        

    } catch ( err ) {
        alert( "No se pudo agregar una Usuario, intente mas tarde" );
        console.log( err );
    };
}

export async function get(url){
    const resp = await fetch(url);
    const data = await resp.json();
    return data
}

export const patchData = async (url,data) => {
    try {
        await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        })

       
    } catch (error) {
        console.error(error);
    }
}

