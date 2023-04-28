import React from 'react';
import { Box, Heading, Image,Container,Stack,Text } from '@chakra-ui/react';
// home me ham box ke andar carousel apply karenge on images
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const headingOptions = {
  pos: 'absolute',
  // for making in center
  left: '50%',
  top: '50%',

  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: 'xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p='16'
        // display={'flex'} 
        // justifyContent={'center'}
        // alignItems={'flex-start'}
      >
       <Heading 
        textTransform={'uppercase'}
        py="2"
        w={'fit-content'}
        borderBottom={'2px solid'}
        m={'auto'}   //we can take help of flex(in the parent container) also
       >
        Services
       </Heading>

       <Stack
      h='full'
      p='4'
      alignItems={'center'}
      direction={['column','row']}  //small_screen=> column,  large_screen=> row
       >
        <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>

        <Text letterSpacing={'wide'} lineHeight={'170%'} p={['4','12']} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit, laborum enim cum assumenda sit. Aut natus deserunt tenetur velit incidunt est quos amet deleniti! Quas voluptate temporibus saepe assumenda veritatis, corporis modi porro culpa esse tenetur laudantium hic minima fuga aut error. Dolorem incidunt ipsam facere soluta ullam adipisci?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nemo? Ducimus animi totam ea. Natus recusandae ullam sapiente consectetur dolore asperiores quam, deserunt sed distinctio fuga rerum architecto neque accusamus officiis culpa quia voluptate qui quis voluptas dignissimos repellat nesciunt totam! Fugiat </Text>
       </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={true}
      showThumbs={false}
      showStatus={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} w='full' h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          {/* headingOptions   ye ek object hai jo upar bana hai globally, jisko hamne spread kiya hai, to use its properties */}
          Watch the Future
        </Heading>
      </Box>
      {/*  */}
      <Box w="full" h={'100vh'}>
        <Image src={img2} w='full' h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img3} w='full' h={'full'} objectFit={'cover'}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
           Gaming on console
        </Heading>
      </Box>

      <Box w="full" h={'100vh'}>
        <Image src={img4} 
           w='full'
           h={'full'} 
           objectFit={'cover'}/>
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night Life is Cool
        </Heading>
      </Box>

    </Carousel>
  );
};

export default Home;
