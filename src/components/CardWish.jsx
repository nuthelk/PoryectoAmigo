import React, { useEffect, useState } from "react";
import { get, patchData } from "../helpers/crud";


const CardWish = () => {
  const urlFav = "https://mon-pays.fly.dev/usuarios";
  const [pintar, setPintar] = useState([]);



  useEffect(() => {
    getItems().then((pintaritems) => setPintar(pintaritems));
  }, []);

  
  const getItems = async () => {
    const resp = await fetch(`${urlFav}/${"1"}`);
    const data = await resp.json();

    return data.favoritos;
  };

  const handleDelete = async({target}) => {
    const getFav = await get(`${urlFav}/${"1"}`)
    const {favoritos} = getFav;
    const filtrarObj =favoritos.filter(e => e.id !== Number(target.id))
    patchData(`${urlFav}/${"1"}`, {favoritos:filtrarObj})

  };

  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center w-screen">
        <h1 className="font-bold text-2xl mt-5">Wish List</h1>
      </div>

      {pintar.map(({nombre,descripcion,id,url}) => (
        <div key={id} className="w-full border-b-2 border-b-gray-300 flex flex-col p-10 justify-center items-center md:items-start md:flex-row">
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
            <div onClick={ e => handleDelete(e) } className="w-1/3 mx-auto">
              <button id={id} className="w-full min-w-[80px] bg-red-700 text-white h-10 rounded-md hover:bg-gray-400 transition-all duration-500 hover:border-transparent font-semibold">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardWish;
