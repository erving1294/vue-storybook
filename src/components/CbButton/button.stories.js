import CbButton from './index.vue'
import { ButtonType } from './types'

export default {
  title: 'Atoms/Button',
  component: CbButton,
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      CbButton
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args
      }
    },
    // Then, the spread values can be accessed directly in the template
    template: '<CbButton v-bind="$props">Button</CbButton>'
  }),
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: [ButtonType.Primary, ButtonType.Secondary]
    },
    disabled: {
      control: 'boolean'
    }
  }
}

export const Primary = {
  args: {
    type: ButtonType.Primary
  }
}

export const Secondary = {
  args: {
    type: ButtonType.Secondary
  }
}
