import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { MdFavorite } from 'react-icons/md'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'


const LayoutLogin = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


//Cerrar sesion
    const handleLogout = () =>{
        sessionStorage.removeItem('idUser')
        window.location.reload()
        onClose()
    }

    return (
        <header className='bg-black h-16 '>
            <div className='flex items-center justify-between  text-white h-full md:px-20 lg:px-28 sm:px-16 px-2'>
                <div className='flex md:justify-around items-center md:gap-12 gap-4 '>
                    <Link to="/" >
                        <div className='flex items-center gap-4'>
                            <img src={logo} alt="logo" className='h-10' />
                            <h3 className='text-2xl font-semibold cursor-pointer w-28'>Mon-Pays</h3>
                        </div>
                    </Link>
                    <Link to="/shop" >
                        <p className='cursor-pointer text-xl font-light  hidden md:block '>Shop</p>
                    </Link>


                </div>


                <div className='md:flex justify-around items-center hidden gap-10'>
                    <div className='flex items-center justify-center  cursor-pointer gap-2'>
                        <MdFavorite size={24} className="mt-1" />
                        <Link to="/wishList"><p className='text-xl'>Favorites</p></Link>

                    </div>
                    <Link to="/profile">
                        <p className='cursor-pointer text-xl'>Profile</p>
                    </Link>

                    <p className='cursor-pointer text-xl' onClick={handleLogout}>Logout</p>

                </div>
                <GiHamburgerMenu size={24} className="cursor-pointer md:hidden block" onClick={onOpen} />

                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Mon-Pays</DrawerHeader>

                        <DrawerBody className='mt-32 text-center flex flex-col gap-16'>
                            <Link to="/shop" onClick={onClose}>
                                <p className='cursor-pointer text-2xl font-medium '>Shop</p>
                            </Link>
                            <Link to="/profile" onClick={onClose}   >
                                <p className='cursor-pointer text-2xl font-medium '>Profile</p>
                            </Link>
                            <Link to="/wishList" onClick={onClose}>
                                <p className='cursor-pointer text-2xl font-medium '>Favorites</p>
                            </Link>

                            <div className='mt-36 flex items-center justify-center gap-2 cursor-pointer '>
                                <p className='text-lg font-medium ' onClick={handleLogout}>Logout</p>
                                <RiLogoutBoxLine className='mt-1' size={20} />
                            </div>


                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button bg='brand.900' className='text-white'>Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>
            <Outlet />
        </header>
    )
}

export default LayoutLogin