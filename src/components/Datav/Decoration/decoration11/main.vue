<template>
  <div
    :ref="ref"
    class="dv-decoration-11"
  >
    <svg
      :width="width"
      :height="height"
    >
      <polygon
        :fill="fade(mergedColor[1] || defaultColor[1], 10)"
        :stroke="mergedColor[1]"
        :points="`20 10, 25 4, 55 4 60 10`"
      />

      <polygon
        :fill="fade(mergedColor[1] || defaultColor[1], 10)"
        :stroke="mergedColor[1]"
        :points="`20 ${height - 10}, 25 ${height - 4}, 55 ${height - 4} 60 ${height - 10}`"
      />

      <polygon
        :fill="fade(mergedColor[1] || defaultColor[1], 10)"
        :stroke="mergedColor[1]"
        :points="`${width - 20} 10, ${width - 25} 4, ${width - 55} 4 ${width - 60} 10`"
      />

      <polygon
        :fill="fade(mergedColor[1] || defaultColor[1], 10)"
        :stroke="mergedColor[1]"
        :points="`${width - 20} ${height - 10}, ${width - 25} ${height - 4}, ${width - 55} ${height - 4} ${width - 60} ${height - 10}`"
      />

      <polygon
        :fill="fade(mergedColor[0] || defaultColor[0], 20)"
        :stroke="mergedColor[0]"
        :points="`
          20 10, 5 ${height / 2} 20 ${height - 10}
          ${width - 20} ${height - 10} ${width - 5} ${height / 2} ${width - 20} 10
        `"
      />

      <polyline
        fill="transparent"
        :stroke="fade(mergedColor[0] || defaultColor[0], 70)"
        :points="`25 18, 15 ${height / 2} 25 ${height - 18}`"
      />

      <polyline
        fill="transparent"
        :stroke="fade(mergedColor[0] || defaultColor[0], 70)"
        :points="`${width - 25} 18, ${width - 15} ${height / 2} ${width - 25} ${height - 18}`"
      />
    </svg>

    <div class="decoration-content">
      <slot/>
    </div>
  </div>
</template>

<script>
import autoResize from '../../utils/autoResize'
import './main.css'

import { fade } from '../../utils/index'

export default {
  name: 'DvDecoration11',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      ref: 'decoration-11',

      defaultColor: ['#1a98fc', '#2cf7fe'],

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
    },
    fade
  }
}
</script>
