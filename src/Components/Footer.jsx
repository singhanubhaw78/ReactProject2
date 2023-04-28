import { Box,Stack,VStack,Heading,HStack,Button ,Input,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="8" color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'}>
                <Heading 
                size={'sm'}
                textTransform={'uppercase'}
                textAlign={['center','left']}
                
                >
                    Subscribe to get updates
                </Heading>

                <HStack borderBottom={'2px solid white'}>
                    <Input
                     placeholder='Email ...'
                     border={'none'}
                     borderRadius={'none'}
                     outline={'none'}
                     focusBorderColor='none'
                     />

                    <Button
                    
                    p={0}
                    colorScheme='purple'
                    variant={'ghost'}
                    borderRadius='0 20px 20px 0'
                    
                    >
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>

            <VStack 
                w={'full'}
                borderLeft={['none','1px solid white']}
                borderRight={['none','1px solid white']}
                
            >
                <Heading
                 textTransform={'uppercase'}
                 textAlign={'center'}
                 size={'md'}
                 >
                    VIDEO HUB
                </Heading>
                <Text size={'sm'}>All rights received</Text>
            </VStack>

            <VStack 
                w={'full'}
            >
                <Heading
                size={'sm'}
                textTransform={'uppercase'}
                >
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme='purple'>
                    <a target='blank' href="https://www.linkedin.com/in/anubhaw-singh-04054b1a1/">LinkedIn</a>
                </Button>

                <Button variant={'link'} colorScheme='purple'>
                    <a target='blank' href="https://www.instagram.com/_aws_07_08/">Instagram</a>
                </Button>

                <Button variant={'link'} colorScheme='purple'>
                    <a target='blank' href="https://github.com/singhanubhaw78">GitHub</a>
                </Button>

            </VStack>


        </Stack>
    </Box>
  )
}

export default Footer