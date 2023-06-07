import CbLinkCard from './index.vue'

export default {
  title: 'Atoms/LinkCard',
  component: CbLinkCard,
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      CbLinkCard
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args
      }
    },
    // Then, the spread values can be accessed directly in the template
    template: '<CbLinkCard v-bind="$props" />'
  })
}

export const Default = {
  args: {
    text: 'loremp ipsum'
  }
}
