import { FC } from 'react';

import {
  Box,
  Tag,
  Link,
  VStack,
  chakra,
  TextProps,
} from '@chakra-ui/react';

const Item: FC<TextProps> = ({children, ...props}) => (
  <chakra.p fontSize='xs' {...props}>{children}</chakra.p>
);

const Dashboard: FC = () => {
  return (    
    <Box
      pl='2'
      w='10rem'
      ml='-12rem'
      position='fixed'
      textAlign='left'
      overflow='hidden'
      borderLeftWidth='thin'
      display={{ base: 'none', lg: 'block'}}
    >
      {/*to place box on the left of container, set ml = -w */}
      <VStack spacing='1' align='start'>
        <Item textAlign='left' fontWeight='medium'>
          Dashboard {' '}
          <Link
            fontSize='xs'
            onClick={() => void(0)}
          >
            [-]
          </Link>
        </Item>
        <Item>weather: ☁️ 10°C</Item>
        <Item>visitor count: 1,021</Item>
        <Item>last commit: 32abece</Item>
        <Item>updated: 02-04-2023</Item>
        <Item>status: {' '}
          <Tag
            size='sm'
            fontSize='xs'
            variant='subtle'
            colorScheme='green'
          >
            operational
          </Tag>
        </Item>
      </VStack>
    </Box>
  );
}

export default Dashboard;

