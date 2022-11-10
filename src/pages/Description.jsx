import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "../components/Button";
import { get, patchData, post } from "../helpers/crud";

const Description = () => {
  const [addFav, setAddFav] = useState(false);
  const [urlsImg, setUrlsImg] = useState();
  const [pintar, setPintar] = useState([]);
  const urlDescri = `https://proyecto-amigo.herokuapp.com/Propertys/${"2"}`;
  const urlFav = "https://proyecto-amigo.herokuapp.com/usuarios";

  useEffect(() => {
    getItems().then((pintaritems) => setPintar(pintaritems));
  }, []);

  const getItems = async () => {
    const resp = await fetch(urlDescri);
    const data = await resp.json();
    setUrlsImg(data.url);

    return data;
  };

  const handleWishList = async() => {
    
    const getFav = await get(`${urlFav}/${"1"}`)

    const {favoritos} = getFav
    
    const findFav = favoritos.find(e => e.id == pintar.id )
    const datanueva = {}

    if(findFav){
      console.log("a");
      patchData(`${urlFav}/${pintar.id}`, {favoritos:datanueva})
      setAddFav(true)
    }else{
      patchData(`${urlFav}}`, {favoritos:pintar});
      setAddFav(false)
    }
    
    /* const getFav = await get(`${urlFav}`)
    const findFav = getFav.find(e => e.id == pintar.id )
    const datanueva = {}
    if(findFav){
      console.log("a");
      patchData(`${urlFav}/${pintar.id}`, datanueva)
      setAddFav(true)
    }else{
      post(`${urlFav}`, pintar);
      setAddFav(false)
    } */

  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start items-center md:mt-32 mt-10 lg:px-20 xl:px-40 pb-4">
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 w-3/4 items-center justify-center h-56 overflow-y-scroll md:h-[70%]">
        <img
          className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center"
          src={urlsImg ? urlsImg.url1 : ""}
          alt="Casa 1"
        />
        <img
          className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center"
          src={urlsImg ? urlsImg.url2 : ""}
          alt="Casa 2"
        />
        <img
          className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center"
          src={urlsImg ? urlsImg.url3 : ""}
          alt="Casa 3"
        />
        <img
          className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center"
          src={urlsImg ? urlsImg.url4 : ""}
          alt="Casa 4"
        />
      </div>
      <div className="flex flex-col w-3/4 mt-10 gap-4 lg:ml-10 lg:px-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">{pintar.nombre}</h1>
            <p className="font-medium">{pintar.precio}</p>
            <p className="font-light text-gray-400">{pintar.direccion}</p>
          </div>
          <AiFillHeart
            className="cursor-pointer"
            color={`${addFav ? "red" : "black"}`}
            onClick={() => handleWishList()}
            size={35}
          />
        </div>
        <div className="h-64 md:h-36 2xl:h-80 overflow-y-scroll md:overflow-auto">
          <p className="font-normal">
            Revamp your style with the latest designer trends in men’s clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.Revamp your style with the latest designer trends in
            men’s clothing or achieve a perfectly curated wardrobe thanks to our
            line-up of timeless piecesRevamp your style with the latest designer
            trends in men’s clothing or achieve a perfectly curated wardrobe
            thanks to our line-up of timeless piecesRevamp your style with the
            latest designer trends in men’s clothing or achieve a perfectly
            curated wardrobe thanks to our line-up of timeless piecesRevamp your
            style with the latest designer trends in men’s clothing or achieve a
            perfectly curated wardrobe thanks to our line-up of timeless
            piecesRevamp your style with the latest designer trends in men’s
            clothing or achieve a perfectly curated wardrobe thanks to our
            line-up of timeless piecesRevamp your style with the latest designer
            trends in men’s clothing or achieve a perfectly curated wardrobe
            thanks to our line-up of timeless pieces
          </p>
        </div>
        <p className="font-semibold text-lg">Cartegoria:</p>
        <div className="bg-black text-white w-32 h-8 flex justify-center items-center rounded-md font-medium">
          {pintar.categoria}
        </div>
        <div className="w-56 mx-auto mt-2 md:mt-10">
          <Button text={"Contact us"} />
        </div>
      </div>
    </div>
  );
};

export default Description;
