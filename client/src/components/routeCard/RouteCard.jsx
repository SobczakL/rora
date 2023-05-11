import { Card, CardBody, CardHeader, Heading, Img, VStack, Text, Box } from "@chakra-ui/react"
import tramIcon from '../../assets/icons/tram.svg'
import subwayIcon from '../../assets/icons/subway.svg'
import trainIcon from '../../assets/icons/train.svg'
import busIcon from '../../assets/icons/bus.svg'
import { ChevronRightIcon } from '@chakra-ui/icons'
import trimDirectionHeading from '../../utils/trimDirectionHeading'
function RouteCard({ routeNumber, routeHeadsign, routeName, routeType, routeNextArrival, isFavourite}) {

    const routeIcons = {
        0: tramIcon,
        1: subwayIcon,
        2: trainIcon,
        3: busIcon
    }
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
            <Img src={routeIcons[routeType]} maxH='100%' maxW='40px' color='snow'/>
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
                        {`${routeNumber} ${trimDirectionHeading(routeHeadsign)}`}
                    </Heading>
                </CardHeader>
                <CardBody p='0'>
                    <Text
                    fontFamily='latoR'
                    fontSize='fs.body.lg'
                    lineHeight='lh.body.lg'
                    >
                        {routeName}
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
