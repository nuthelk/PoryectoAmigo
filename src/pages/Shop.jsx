import React, { useContext, useEffect, useState } from 'react'
import ButtonBlack from '../components/ButtonBlack'
import DesignPropiedad from '../components/DesignPropiedad'
import {BiSearch} from 'react-icons/bi'
import { SortArray, SortArray2, SortArrayPrice, SortArrayPrice2 } from '../helpers/funcionesOrdenamiento'
import { useDisclosure } from '@chakra-ui/react'
import { ModalPost } from '../components/ModalPost'
import { Context } from '../Context/ContextProvider'


const Shop = () => {

    const [dataPropiedad, setDataPropiedad] = useState()
    const [search, setSearch] = useState()
    const [bandera, setBandera] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure() //funciones chackra ui modal
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const {bandera:banderaContext} = useContext(Context)
    

    //traer los datos de las propiedades
    useEffect(() => {
        const data = async () => {
            const resp = await fetch("https://mon-pays.fly.dev/Propertys")
            const datos = await resp.json()
            setDataPropiedad(datos)
        }
        data()  
    }, [banderaContext])

    //enviar el id al localStorage clickear una propiedad
    const enviarID = (id) => {
        localStorage.setItem('id', id)
    }

    //funcion de filtro
    let results = []
    if(!search){
        results = dataPropiedad
    }else{
        results = dataPropiedad.filter((dato) => dato.nombre.includes(search)) //filtrar por nombre
    }

    //funcion busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    //funcion ordenar A-Z
    const ordenar1 = () =>{
        setDataPropiedad(results.sort(SortArray))
        setBandera(!bandera)
    }

    //funcion ordenar Z-A
    const ordenar2 = () =>{
        setDataPropiedad(results.sort(SortArray2))
        setBandera(!bandera)
    }

    //funcion ordenar de mayor precio a menor
    const ordenarPrice = () =>{
        setDataPropiedad(results.sort(SortArrayPrice))
        setBandera(!bandera)
    }

    //funcion ordenar de menor precio a mayor
    const ordenarPrice2 = () =>{
        setDataPropiedad(results.sort(SortArrayPrice2))
        setBandera(!bandera)
    }



    return (
        <main className='h-screen '>
            <div className='bg-black h-[25%] w-full border-t-[1px] border-gray-400 flex  flex-col justify-center'>
                <h1 className='text-white md:text-4xl text-2xl font-semibold md:px-40 px-2 sm:px-8'>Our Store</h1>
                <div className='xl:w-[50%]'>
                    <p className='text-white md:text-lg text-base md:px-40 px-2 sm:px-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>

            <div className='flex items-center mt-12 px-2 md:px-40 gap-2 flex-wrap justify-center md:justify-start'>
                <ButtonBlack text={"A-Z"} funcion={ordenar1} />
                <ButtonBlack text={"Z-A"} funcion={ordenar2} />
                <ButtonBlack text={"Higher Price"} funcion={ordenarPrice} />
                <ButtonBlack text={"Lower Price"} funcion={ordenarPrice2} />
            </div>

            <div className='w-full flex items-centers justify-center mt-10 mb-12'>
                <div onClick={onOpen} 
                className='flex items-center justify-center w-60 h-12 border-[1px] border-black font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
                    Post your property
                </div>
            </div>

            <ModalPost 
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                initialRef={initialRef}
                finalRef={finalRef}
               
            />

            <div className='md:flex items-center relative mt-4 justify-center bg-white w-56  md:w-80 m-auto rounded-lg'>
                <BiSearch size={24} className="absolute top-2 left-0 ml-2  md:block " />
                <input value={search} onChange={searcher} type="search" placeholder='Search' className='pl-10 md:pl-10  rounded-lg outline-none md:w-40 lg:w-72  w-40 h-10 md:h-10' />
            </div>

            <div className='flex flex-wrap items-center mt-8 px-2  gap-10 justify-center'>
                {
                    dataPropiedad &&
                    results.map(propiedad => (
                        <div onClick={() => enviarID(propiedad.id)} key={propiedad.id}>
                            <DesignPropiedad
                                nombre={propiedad.nombre}
                                precio={propiedad.precio}
                                imagen={propiedad.url.url1}
                                categoria={propiedad.categoria}
                            />
                        </div>

                    ))
                }

            </div>
            <footer className='mt-10 h-20'>

            </footer>
        </main>
    )
}

export default Shop