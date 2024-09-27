import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import type { AppNavigatorRoutesProps } from '@routes/app.routes'
import { ArrowLeft } from 'lucide-react-native'
import { TouchableOpacity } from 'react-native'
import BodySvg from '@assets/body.svg'

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={'$8'} bg="$gray600" pt={'$16'}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={'$4'}
          mb={'$8'}
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            fontSize={'$lg'}
            flexShrink={1}
          >
            Supino com Halteres
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml={'$1'} textTransform="capitalize">
              Peito
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack p={'$8'}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/39/d9/fb/39d9fb1ab399ad672ab879b3ef898dea.jpg',
          }}
          alt='Imagem do exercício'
          mb={'$3'}
          resizeMode='cover'
          rounded={'$lg'}
          w={'$full'}
          h={'$80'}
        />
      </VStack>
    </VStack>
  )
}
