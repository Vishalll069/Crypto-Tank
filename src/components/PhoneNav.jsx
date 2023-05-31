import { HamburgerIcon } from '@chakra-ui/icons'
import { HStack ,Box,Flex, Spacer,Image, Text} from '@chakra-ui/react'
import React from 'react'

export const PhoneNav = () => {
  return (
    <Box display={["block","block","block","none"]} color={"white"} p={"2%"} >
        <Flex>
        <Box m={"2rem"}>
          <Text cursor={'pointer'} color={"white"} fontSize={"4rem"} fontWeight={"bold"}>
            <span
              style={{
                color: "#fede51",
                background:
                  "linear-gradient(to right, #F2CF05, #FFDD80, #CFAB08)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              COINTANK
            </span>
          </Text>
        </Box>
            <Spacer/>
            <Box size={"35px"}>
                <HamburgerIcon fontSize={"35px"} />
            </Box>

        </Flex>

    </Box>
  )
}