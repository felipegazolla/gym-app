import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed'
import { useState } from 'react'
import { FlatList } from 'react-native'

export function Home() {
  const [groups, setGroups] = useState([
    'Peitoral',
    'Dorsal',
    'Deltoides',
    'Trapézio',
    'Bíceps',
    'Tríceps',
    'Antebraço',
    'Abdômen',
    'Quadríceps',
    'Posterior de Coxa',
    'Glúteos',
    'Panturrilhas',
  ])
  const [groupSelected, setGroupSelected] = useState('peito')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingHorizontal: 16}}
        style={{marginVertical: 25, maxHeight: 44, minHeight: 44}}
      />

      <VStack px={'$8'}>
        <HStack justifyContent='space-between' mb={'$5'} alignItems='center'>
          <Heading color='$gray200' fontSize={'$md'} fontFamily='$heading'>
            Exercícios
          </Heading>
          <Text color='$gray200' fontSize={'$sm'} fontFamily='$body'>
            4
          </Text>
        </HStack>
      </VStack>
    </VStack>
  )
}
