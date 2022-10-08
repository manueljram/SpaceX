import { useState, useEffect } from 'react'
import { Box, Image, Flex, Text, Spacer, Tag} from '@chakra-ui/react'; 
import { SiGooglecalendar } from "react-icons/si"

export function LaunchItem(e){
    return(
        <Box bg="gray.100" p={4} m={4} borderRadius={15}>
            <Flex display="flex">
              <Text fontSize="2xl">
                Mission <strong>{e.mission_name}</strong> ({e.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme={e.launch_sucess ? "green" : "red"}>
                {e.launch_sucess ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Flex align="center">
              <SiGooglecalendar />
              <Text fontSize="sm" ml={1}>
                {}{e.launch_date_local.split("T")[0]}
              </Text>
            </Flex>
          </Box>
    )
}