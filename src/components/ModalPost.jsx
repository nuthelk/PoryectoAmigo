import { Button, FormControl, FormLabel, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Context } from "../Context/ContextProvider";
import { patchData, post } from "../helpers/crud";
import { useForm } from "../Hooks/useForm";


export function ModalPost({ isOpen, onOpen, onClose, initialRef, finalRef}) {

    const {handleBandera} = useContext(Context)
    const [option, setOption] = useState("new")
    const { formValue, handleInputChangeName} = useForm({
        nombre: "",
        categoria: "",
        precio: "",
        direccion: "",
        descripcion: "",
        url:
        {
            url1: "",
            url2: "",
            url3: "",
            url4: ""
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData = {
            nombre: formValue.nombre,
            categoria: option,
            precio: formValue.precio,
            direccion: formValue.direccion,
            descripcion: formValue.descripcion,
            url: {
                url1: formValue.url1,
                url2: formValue.url2,
                url3: formValue.url3,
                url4: formValue.url4
            },
        }
        onClose()
        Swal.fire({
            title: 'Are you sure to publish?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, published!'
        }).then((result) => {
            if (result.isConfirmed) {
                setOption("new")
                post("https://mon-pays.fly.dev/Propertys", updateData).then(()=>{
                    handleBandera()
                })
                Swal.fire(
                    'Published!',
                    'Your property has been published',
                    'success'
                )
                
                
            } else {
                onOpen()
            }
        })

    }

    const handleSelect = (e) => {
        setOption(e.target.value);
    }

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <ModalHeader>Publish Your Property</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel >Name</FormLabel>
                                <Input ref={initialRef} placeholder='Name' onChange={handleInputChangeName} name="nombre" required focusBorderColor="brand.900" />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel >Category</FormLabel>
                                <Select required focusBorderColor="brand.900" name="categoria" onChange={handleSelect} >
                                    <option name="categoria" value='new'>New</option>
                                    <option name="categoria" value='used'>Used</option>
                                </Select>
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Price</FormLabel>
                                <NumberInput required focusBorderColor="brand.900">
                                    <NumberInputField placeholder='$ Price' name="precio" value='' onChange={handleInputChangeName} />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Address</FormLabel>
                                <Input placeholder='Address' required name="direccion" focusBorderColor="brand.900" onChange={handleInputChangeName} />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Description</FormLabel>
                                <Textarea placeholder='Describe your property' name="descripcion" required focusBorderColor="brand.900" onChange={handleInputChangeName} />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Photos</FormLabel>
                                <Stack spacing={2}>
                                    <Input placeholder='URL 1' size='sm' name="url1" required focusBorderColor="brand.900" onChange={handleInputChangeName} />
                                    <Input placeholder='URL 2' size='sm' name="url2" required focusBorderColor="brand.900" onChange={handleInputChangeName} />
                                    <Input placeholder='URL 3' size='sm' name="url3" required focusBorderColor="brand.900" onChange={handleInputChangeName} />
                                    <Input placeholder='URL 4' size='sm' name="url4" required focusBorderColor="brand.900" onChange={handleInputChangeName} />
                                </Stack>
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" bg="brand.900" className="text-white" mr={3}>
                                Post
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}