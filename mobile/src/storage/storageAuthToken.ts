import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTH_TOKEN_STORAGE } from './storageConfig'

type StorageAuthTokenProps = {
  token: string
  refresh_token: string
}

export async function storageAuthTokenSave({
  token,
  refresh_token,
}: StorageAuthTokenProps) {
  await AsyncStorage.setItem(
    AUTH_TOKEN_STORAGE,
    JSON.stringify({ token, refresh_token })
  )
}

export async function storageAuthTokenGet() {
  const response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE)

  if (response) {
    try {
      const { token, refresh_token }: StorageAuthTokenProps =
        JSON.parse(response)
      return { token, refresh_token }
    } catch (error) {
      console.error('Error parsing JSON:', error)
      return { token: null, refresh_token: null }
    }
  } else {
    return { token: null, refresh_token: null }
  }
}

export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE)
}
