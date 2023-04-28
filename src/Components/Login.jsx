import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h='110vh' p={'8'}>

        <form>
            <VStack
                alignItems={'stretch'} //for taking whole width for children
                spacing={'6'}
                w={['full','96']}
                m={'auto'}
                my={'10'}
            >
                <Heading alignSelf={'centre'}>Welcome Back</Heading>
                <Input
                    placeholder='Email'
                    type='email'
                    required
                    focusBorderColor='purple.500'
                />
                  <Input
                    placeholder='Password'
                    type='password'
                    required
                    focusBorderColor='purple.500'
                />

                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to="/forgotpassword">Forgot Password? </Link>
                </Button>

                <Button colorScheme='purple' type='submit'>Log In</Button>
                <Text textAlign={'right'}>
                    New User? {' '}
                    <Button variant={'link'} colorScheme='purple'>
                        <Link to='/signup'>Sign Up</Link>
                    </Button>
                </Text>
            </VStack>
        </form>

    </Container>
  )
}

export default Login