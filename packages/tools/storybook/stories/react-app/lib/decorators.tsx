import type { Decorator } from '@storybook/react-vite'
import Providers from './Providers'
import 'react-app/src/styles/app.css'

export const getDecorators = (): Decorator[] => {
  return [
    (Story) => {
      return (
        <Providers>
          <Story />
        </Providers>
      )
    },
  ]
}
