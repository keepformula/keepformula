<template>
  <div>
    <div class="col-12 q-mb-xl q-pr-md">
      <q-input ref="input" type="text" v-model="value" :float-label="$t('value_label')" />
    </div>
    <transition-group
      enter-active-class="animated fadeIn"
      v-if='this.value' >
      <div class="q-mt-md q-mb-md" key="head">
        <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
        <q-item-main>
          <div class="parent animate-scale" key="text">
            <q-list inset-separator class="q-mt-xs no-border-left-right">
              <q-item>
                <q-item-side color="black" left>
                  <span> Shorter Section </span>
                </q-item-side>
                <q-item-main color="">
                  <span> {{ shorterSection }} </span>
                </q-item-main>
                <q-item-side right>
                  <q-btn class="absolute-right q-mr-sm"
                         id="copy-btn"
                         size="md"
                         flat
                         outline
                         color="grey"
                         icon="file_copy"
                         v-clipboard="() => this.shorterSection">
                  </q-btn>
                </q-item-side>
              </q-item>
              <q-item-separator />
                <q-item>
                  <q-item-side color="black" left>
                    <span> Longer Section </span>
                  </q-item-side>
                  <q-item-main color="">
                    <span> {{ longerSection }} </span>
                  </q-item-main>
                  <q-item-side right>
                    <q-btn class="absolute-right q-mr-sm"
                           id="copy-btn"
                           size="md"
                           flat
                           outline
                           color="grey"
                           icon="file_copy"
                           v-clipboard="() => this.longerSection">
                    </q-btn>
                  </q-item-side>
                </q-item>
            </q-list>
          </div>
        </q-item-main>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Knowledge from '@/knowledge'
import { mixin } from '@/mixins/mixin'

export default {
  name: 'GoldenRatio',
  mixins: [mixin],
  data () {
    return {
      value: null
    }
  },
  computed: {
    shorterSection () {
      let out = null
      if (this.value) {
        out = Knowledge.goldenRatioShorter(this.value)
      }
      return out
    },
    longerSection () {
      let out = null
      if (this.value) {
        out = Knowledge.goldenRatioLonger(this.value)
      }
      return out
    }
  }
}
</script>
