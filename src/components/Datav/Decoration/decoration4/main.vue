<template>
  <div
    :ref="ref"
    class="dv-decoration-4"
  >
    <div
      :class="`container ${reverse ? 'reverse' : 'normal'}`"
      :style="reverse ? `width:${width}px;height:5px;animation-duration:${dur}s` : `width:5px;height:${height}px;animation-duration:${dur}s`"
    >
      <svg
        :width="reverse ? width : 5"
        :height="reverse ? 5 : height"
      >
        <polyline
          :stroke="mergedColor[0]"
          :points="reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`"
        />
        <polyline
          class="bold-line"
          :stroke="mergedColor[1]"
          stroke-width="3"
          stroke-dasharray="20, 80"
          stroke-dashoffset="-30"
          :points="reverse ? `0, 2.5 ${width}, 2.5` : `2.5, 0 2.5, ${height}`"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import autoResize from '../../utils/autoResize'
import './main.css'

export default {
  name: 'DvDecoration4',
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => ([])
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      ref: 'decoration-4',

      defaultColor: ['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.3)'],

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
