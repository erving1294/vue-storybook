import CbTag from './index.vue'
import { TagType } from './types'

export default {
  title: 'Atoms/Tag',
  component: CbTag,
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      CbTag
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
        type: TagType.Primary
      }
    },
    // Then, the spread values can be accessed directly in the template
    template: '<CbTag v-bind="$props" text="Presencial" />'
  }),
  argTypes: {
    type: {
      control: {
        type: 'select'
      },
      options: [TagType.Primary, TagType.Secondary]
    }
  }
}

export const Primary = {
  args: {
    type: TagType.Primary
  }
}

export const Secondary = {
  args: {
    type: TagType.Secondary
  }
}
