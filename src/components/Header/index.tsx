import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import theme from '@/theme'

import * as S from './styles'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  const insets = useSafeAreaInsets()
  const paddingTop = insets.top + 42

  const { goBack } = useNavigation()

  return (
    <S.Container style={{ paddingTop }}>
      <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
        <ArrowLeft size={24} weight="bold" color={theme.COLORS.BRAND_LIGHT} />
      </TouchableOpacity>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
