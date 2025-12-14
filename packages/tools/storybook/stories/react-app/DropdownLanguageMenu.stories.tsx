import type { Meta, StoryObj } from '@storybook/react-vite'

import DropdownLanguageMenu from 'react-app/src/components/DropdownLanguageMenu.js'
import { getDecorators } from './lib/decorators'

const meta = {
  component: DropdownLanguageMenu,
  decorators: getDecorators(),
} satisfies Meta<typeof DropdownLanguageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
