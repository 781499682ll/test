
<template>
  <div
    :ref="ref"
    class="dv-border-box-7"
    :style="`box-shadow: inset 0 0 40px ${mergedColor[0]}; border: 1px solid ${mergedColor[0]}; background-color: ${backgroundColor}`"
  >
    <svg
      class="dv-border-svg-container"
      :width="width"
      :height="height"
    >
      <polyline
        class="dv-bb7-line-width-2"
        :stroke="mergedColor[0]"
        :points="`0, 25 0, 0 25, 0`"
      />
      <polyline
        class="dv-bb7-line-width-2"
        :stroke="mergedColor[0]"
        :points="`${width - 25}, 0 ${width}, 0 ${width}, 25`"
      />
      <polyline
        class="dv-bb7-line-width-2"
        :stroke="mergedColor[0]"
        :points="`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`"
      />
      <polyline
        class="dv-bb7-line-width-2"
        :stroke="mergedColor[0]"
        :points="`0, ${height - 25} 0, ${height} 25, ${height}`"
      />

      <polyline
        class="dv-bb7-line-width-5"
        :stroke="mergedColor[1]"
        :points="`0, 10 0, 0 10, 0`"
      />
      <polyline
        class="dv-bb7-line-width-5"
        :stroke="mergedColor[1]"
        :points="`${width - 10}, 0 ${width}, 0 ${width}, 10`"
      />
      <polyline
        class="dv-bb7-line-width-5"
        :stroke="mergedColor[1]"
        :points="`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`"
      />
      <polyline
        class="dv-bb7-line-width-5"
        :stroke="mergedColor[1]"
        :points="`0, ${height - 10} 0, ${height} 10, ${height}`"
      />
    </svg>

    <div class="border-box-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import autoResize from '../../utils/autoResize'
import './main.css'

export default {
  name: 'DvBorderBox7',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },
  data () {
    return {
      ref: 'border-box-7',

      defaultColor: ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.5)'],

      mergedColor: []
    }
  },
  watch: {
    color () {
      const { mergeColor } = this

      mergeColor()
    }
  },
  mounted () {
    const { mergeColor } = this

    mergeColor()
  },
  methods: {
    mergeColor () {
      const { color, defaultColor } = this

      this.mergedColor = [...color, ...defaultColor]
    }
  }
}
</script>
