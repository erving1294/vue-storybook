import CbCard from './index.vue'
// import CibertecLinkCard from '../CbLinkCard/LinkCard.vue'
import CbLinkCard from '../CbLinkCard/index.vue'
import CbTag from '../CbTag/index.vue'

export default {
  title: 'Molecules/Card',
  component: CbCard,
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      CbCard,
      CbLinkCard,
      CbTag
      // CibertecLinkCard
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args
      }
    },
    // Then, the spread values can be accessed directly in the template
    template: '<CbCard v-bind="$props" />'
  })
}

export const Default = {
  args: {
    textLink: 'COMPUTACIÓN E INFORMÁTICA',
    textTag: 'Presencial'
  }
}
