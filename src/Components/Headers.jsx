import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Headers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); //useDisclosure (imported from chakra/ui) is a react hook, jsike help se ham open aur close kaenge    // a function with use before it's name is called as React Hook
  // isOpen -> boolean ... onOpen-> will open ... onClose-> will close

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}

      >
        <BiMenuAltLeft size={20} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        {/* placement='left'  sets the direction */}

        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Book</DrawerHeader>
          <DrawerBody>
            {/* Stack : is like display:flex */}
            {/* VStack : display: flex with column direction ... align-items is center by default */}
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/videos/?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            {/* HStack -> display:flex.... flex-direction:row */}

            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              //  bgColor={'red'}
              w={'full'}
              justifyContent={'space-around'}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={'/login'}>Log In</Link>
              </Button>

              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Headers;
