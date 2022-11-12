import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'

const ButtonContact = ({text}) => {

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <button className='w-full bg-black text-white h-10 rounded-md hover:bg-gray-500 transition-all duration-500 hover:border-transparent font-medium'>{text}</button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader className='text-center font-bold text-lg'>Phone</PopoverHeader>
                    <PopoverBody className='text-center text-blue-600'>{Math.round(getRandomArbitrary(3000000000, 3999999999))}</PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default ButtonContact