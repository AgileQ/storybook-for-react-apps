import { ComponentMeta, ComponentStory } from '@storybook/react'

import { restaurants } from '../../stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  args: {
    ...restaurants[0],
  },
  // should use figspec but will need access token from figma
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1126-3893&t=b3FMb7BKXWJMWXf7-4',
    },
  },
} as ComponentMeta<typeof RestaurantCard>

const Template: ComponentStory<typeof RestaurantCard> = (args) => <RestaurantCard {...args} />

export const Default = Template.bind({})

export const New = Template.bind({})
New.args = {
  isNew: true,
}

export const Closed = Template.bind({})
Closed.args = {
  isClosed: true,
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
