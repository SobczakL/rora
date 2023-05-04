import { Card, CardBody, CardHeader, Heading, Img, VStack, Text } from "@chakra-ui/react"
import tramIcon from '../../assets/icons/tram.svg'
import { ChevronRightIcon } from '@chakra-ui/icons'

function RouteCard({ routeNumber, routeName, isFavourite}) {
    return (
        <Card 
        display='flex'
        direction='row'
        align='center'
        w='100%'
        gap='4px'
        py='8px'
        px='16px'
        bg='twilight'
        _active={{bg: 'deepNavy'}}
        cursor='pointer'
        >
            <Img src={tramIcon} maxH='100%' maxW='40px'/>
            <VStack 
            spacing='0' 
            align='start' 
            w='100%' 
            color='snow'
            >
                <CardHeader p='0'>
                    <Heading
                    fontFamily='latoB'
                    fontSize='fs.subheader'
                    lineHeight='lh.subheader'
                    >
                        {routeNumber}505
                    </Heading>
                </CardHeader>
                <CardBody p='0'>
                    <Text
                    fontFamily='latoR'
                    fontSize='fs.body.lg'
                    lineHeight='lh.body.lg'
                    >
                        {routeName}queen
                    </Text>
                </CardBody>
            </VStack>
            <ChevronRightIcon 
            boxSize={6}
            color={isFavourite ? 'sunrise' : 'lavender'}
            />
        </Card>
    )
}

export default RouteCard
