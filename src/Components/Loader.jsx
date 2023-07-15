// import React from 'react'

import { Box, Heading, Spinner, VStack } from "@chakra-ui/react"

const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'} >
        <Box transform={"scale(3)"}>
          <Spinner size={'xl'}/>
        </Box>
        <Heading pt={'8'}>Loading...</Heading>
    </VStack>
  )
}

export default Loader