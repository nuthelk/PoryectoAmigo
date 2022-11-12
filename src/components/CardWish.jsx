import React, { useContext, useEffect, useState } from "react";
import { get, getData, patchData } from "../helpers/crud";
import { FaSadTear } from 'react-icons/fa';
import { Context } from "../Context/ContextProvider";


const CardWish = () => {
    const urlFav = "https://mon-pays.fly.dev/usuarios";
    const [pintar, setPintar] = useState([]);
    const idUser = sessionStorage.getItem('idUser')


    const {handleBandera, bandera, setBandera} = useContext(Context)

    useEffect(() => {
        getData(setPintar,`${urlFav}/${idUser}`)
        setBandera(false)
    }, [bandera]);

    const handleDelete = async ({ target }) => {
        
        const getFav = await get(`${urlFav}/${idUser}`)
        const { favoritos } = getFav;
        const filtrarObj = favoritos.filter(e => e.id !== Number(target.id)) //encontramos
        patchData(`${urlFav}/${idUser}`, { favoritos: filtrarObj }).then(() =>{
            handleBandera()
        })
        
    };


    return (
        <>
            <div className="flex flex-col items-center gap-5 justify-center ">
                <h1 className="font-bold text-4xl my-10">Favorites</h1>
            </div>

            {pintar.favoritos?.length >= 1 ? pintar.favoritos.map(({ nombre, descripcion, id, url }) => (
                <div key={id} className="w-full m-auto border-b-2 border-b-gray-300 flex flex-col p-10 justify-center items-center md:px-20  md:flex-row">
                    <img
                        className="w-36 place-self-center md:w-1/3 rounded-md"
                        src={url.url1}
                        alt="list"
                    />
                    <div className="flex flex-col text-center gap-5 p-5">
                        <h1 className="font-semibold text-xl">
                            {nombre}
                        </h1>
                        <div className="h-24 overflow-y-scroll md:h-2/3 lg:h-44">
                            <p className="text-sm text-start">
                                {descripcion}
                            </p>
                        </div>
                        <div onClick={e => handleDelete(e)} className="w-1/3 mx-auto">
                            <button id={id} className="w-full min-w-[80px] bg-red-700 text-white h-10 rounded-md hover:bg-gray-400 transition-all duration-500 hover:border-transparent font-semibold">Delete</button>
                        </div>
                    </div>
                </div>
            )): 
            <div className="flex flex-col justify-center items-center w-full gap-5 h-[500px] px-10 text-center">
                <FaSadTear size={60} color={"#e0e0e0"}/>
                <h1 className="text-2xl font-semibold text-[#e0e0e0]">You have nothing in favorites</h1>
            </div>
          }
        </>
    );
};

export default CardWish;
