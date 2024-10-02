import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { ToastMessage } from '@components/ToastMessage'
import { HistoryByDayDTO } from '@dtos/HistoryByDayDTO'
import { Heading, Text, useToast, VStack } from '@gluestack-ui/themed'
import { useFocusEffect } from '@react-navigation/native'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { useCallback, useState } from 'react'
import { SectionList } from 'react-native'

export function History() {
  const [isLoading, setIsLoading] = useState(true)
  const toast = useToast()
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([])

  async function fetchHistory() {
    try {
      setIsLoading(true)

      const response = await api.get('/history')
      setExercises(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possivel carregar o histórico'

      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            onClose={() => toast.close(id)}
          />
        ),
      })
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useCallback(() => {
      fetchHistory()
    }, [])
  )

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={item => item.id}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="$gray200"
            fontSize={'$md'}
            mt={'$10'}
            mb={'$3'}
            fontFamily="$heading"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color="$gray100" textAlign="center">
            Não existem exercícios registrados ainda!
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}
