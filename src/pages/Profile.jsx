import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Button } from "../components/Button";
import { get, patchData } from "../helpers/crud";
import { useForm } from "../Hooks/useForm";

const Profile = () => {
  const idUser = sessionStorage.getItem("idUser");
  const urlUsuarios = `https://mon-pays.fly.dev/usuarios/${idUser}`;

  const [pintar, setPintar] = useState([]);

  const { formValue, handleInputChangeName, reset } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    getItems().then((pintaritems) => setPintar(pintaritems));
  }, [pintar]);

  const getItems = async () => {
    const data = await get(urlUsuarios);

    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      nombre: formValue.firstName,
      apellido: formValue.lastName,
      direccion: formValue.address,
      Email: formValue.email,
      password: pintar.password,
      favoritos: pintar.favoritos,
      id: pintar.id,
    };
    Swal.fire({
      title: "Are you sure to edit?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit!",
    }).then((result) => {
      if (result.isConfirmed) {
        patchData(urlUsuarios, updateData);
        Swal.fire("Edited!", "Your file has been Edited.", "success");
      }
    });
  };

  return (
    <div className="flex flex-col">
      <div className="m-auto mt-16 flex flex-col justify-center items-center gap-2">
        <img
          className="w-28 h-28 md:w-36 md:h-36 rounded-full"
          src="https://us.123rf.com/450wm/mrshamsjaman/mrshamsjaman2011/mrshamsjaman201100267/159314849-plantilla-de-dise%C3%B1o-de-vector-de-letra-inicial-mp-o-pm.jpg?ver=6"
          alt="photo"
        />
        <h1 className="font-bold text-xl md:text-2xl">My Profile</h1>
        <p className="md:text-lg">Update your profile</p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center mt-10 gap-5 px-10 mx-auto w-2/3 md:w-3/4 lg:w-1/2 lg:gap-6"
      >
        <h1 className="font-bold text-xl md:text-2xl text-center">
          Basic Information
        </h1>
        <input
          className="md:text-lg md:h-12 h-10 border-2 pl-5 md:w-96 sm:w-72  "
          onChange={handleInputChangeName}
          name="firstName"
          placeholder={pintar.nombre}     
          type="text"
        />
        <input
          className="md:h-12 md:text-lg h-10 border-2 pl-5 md:w-96 sm:w-72 rounded-md "
          onChange={handleInputChangeName}
          name="lastName"
          placeholder={pintar.apellido ? pintar.apellido : "Insert lastName"}
          type="text"
        />
        <input
          className="md:h-12 md:text-lg h-10 border-2 pl-5 md:w-96 sm:w-72 rounded-md "
          onChange={handleInputChangeName}
          name="email"
          placeholder={pintar.Email}
          type="email"
        />
        <input
          className="md:h-12 md:text-lg h-10 border-2 pl-5 md:w-96 sm:w-72 rounded-md "
          onChange={handleInputChangeName}
          name="address"
          placeholder={pintar.direccion ? pintar.direccion : "Insert address"}
          type="text"
        />
        <div className="w-20 mx-auto md:w-32 mt-4 ">
          <Button text={"Change"} />
        </div>
      </form>
    </div>
  );
};

export default Profile;
