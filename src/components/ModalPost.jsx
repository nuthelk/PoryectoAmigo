import { Button, FormControl, FormLabel, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react"


export function ModalPost({ isOpen, onOpen, onClose, initialRef, finalRef }) {


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
                    <form onSubmit=''>
                        <ModalHeader>Publish Your Property</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl isRequired>
                                <FormLabel isRequired>Name</FormLabel>
                                <Input ref={initialRef} placeholder='Name' required focusBorderColor="brand.900" />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel isRequired>Category</FormLabel>
                                <Select required focusBorderColor="brand.900">
                                    <option value='used'>Used</option>
                                    <option value='new'>New</option>
                                </Select>
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Price</FormLabel>
                                <NumberInput ref={initialRef} required focusBorderColor="brand.900">
                                    <NumberInputField placeholder='$ Price' value='' />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Address</FormLabel>
                                <Input ref={initialRef} placeholder='Address' required focusBorderColor="brand.900" />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>Description</FormLabel>
                                <Textarea placeholder='Describe your property' required focusBorderColor="brand.900" />
                            </FormControl>

                            <FormControl mt={4} isRequired>
                                <FormLabel>URLs</FormLabel>
                                <Stack spacing={2}>
                                    <Input placeholder='URL 1' size='sm' required focusBorderColor="brand.900" />
                                    <Input placeholder='URL 2' size='sm' required focusBorderColor="brand.900" />
                                    <Input placeholder='URL 3' size='sm' required focusBorderColor="brand.900" />
                                    <Input placeholder='URL 4' size='sm' required focusBorderColor="brand.900" />
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