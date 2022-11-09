import React, { useState } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import MenuBar from '../components/MenuBar'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'

const LayoutLogin = () => {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()


    return (
        <header className='bg-black h-16 sticky '>
            <div className='flex items-center justify-between  text-white h-full md:px-28 px-2'>
                <div className='flex md:justify-around items-center md:gap-12 gap-4 '>
                    <h3 className='text-2xl font-semibold cursor-pointer w-28'>Mon-Pays</h3>
                    <p className='cursor-pointer text-xl font-light  hidden md:block '>Shop</p>
                    <div className='md:flex items-center relative mt-1 '>
                        <BiSearch size={24} className="absolute top-2 ml-2 hidden md:block" />
                        <input type="search" placeholder='Search' className='pl-1 md:pl-10 border-2 border-white rounded-lg md:w-40 lg:w-60 bg-black w-24 h-8 md:h-10' />
                    </div>

                </div>

                <div className='md:flex justify-around items-center hidden gap-10'>
                    <BsCart4 size={24} className="cursor-pointer" />
                    <p className='cursor-pointer text-xl'>Profile</p>
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
                            <p className='cursor-pointer text-2xl font-medium '>Shop</p>
                            <p className='cursor-pointer text-2xl font-medium '>Profile</p>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue'>Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>
        </header>
    )
}

export default LayoutLogin