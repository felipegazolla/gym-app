import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed'
import BgImg from '@assets/background.png'
import Logo from '@assets/logo.svg'
import { Input } from '@components/input'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import type { AuthNavigatorRouteProps } from '@routes/auth.routes'

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRouteProps>()

  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BgImg}
          alt="Background gym app"
          w={'$full'}
          h={624}
          defaultSource={BgImg}
          position="absolute"
        />

        <VStack flex={1} px={'$10'} pb={'$16'}>
          <Center my={'$24'}>
            <Logo />
            <Text color="$gray100" fontSize={'$sm'} my={8}>
              Treine sua mente e seu corpo.
            </Text>
          </Center>

          <Center gap={'$2'} flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Input placeholder="Nome" />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />

            <Button title="Criar e acessar" />
          </Center>

          <Button title="Voltar para o login" variant="outline" mt={'$12'} onPress={handleGoBack} />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
