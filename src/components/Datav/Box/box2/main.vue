<template>
  <div
    :ref="ref"
    class="dv-border-box-2"
  >
    <svg
      class="dv-border-svg-container"
      :width="width"
      :height="height"
    >
      <polygon
        :fill="backgroundColor"
        :points="`
        7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}
      `"
      />

      <polyline
        :stroke="mergedColor[0]"
        :points="`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`"
      />
      <polyline
        :stroke="mergedColor[1]"
        :points="`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`"
      />
      <circle
        :fill="mergedColor[0]"
        cx="11"
        cy="11"
        r="1"
      />
      <circle
        :fill="mergedColor[0]"
        :cx="width - 11"
        cy="11"
        r="1"
      />
      <circle
        :fill="mergedColor[0]"
        :cx="width - 11"
        :cy="height - 11"
        r="1"
      />
      <circle
        :fill="mergedColor[0]"
        cx="11"
        :cy="height - 11"
        r="1"
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
  name: 'DvBorderBox2',
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
      ref: 'border-box-2',

      defaultColor: ['#fff', 'rgba(255, 255, 255, 0.6)'],

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
