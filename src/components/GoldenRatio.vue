<template>
  <q-page class="border-top">
    <div class="row q-pt-md mobile-header-padding">
      <div class="q-pa-sm q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
            {{ $t('golden_ratio') }}
            </p>
          </div>
        </div>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                  <div class="col-12 q-mt-md q-mb-xl">
                    <q-input ref="input" type="text" v-model="value" :float-label="$t('value_label')" />
                  </div>
                  <div v-if='this.value'>
                  <q-list-header class="q-mt-md">Result</q-list-header>
                  <q-item tag="label">
                      <q-item-main>
                        <q-item-tile label>Shorter section is: {{ shorterSection }}</q-item-tile>
                      </q-item-main>
                    </q-item>
                    <q-item tag="label">
                        <q-item-main>
                        <q-item-tile label>Longer section is: {{ longerSection }}</q-item-tile>
                        </q-item-main>
                      </q-item>
                  </div>
              </q-card-main>
            </q-card>
            <div class="q-mt-sm">
              <q-btn @click="back" icon="arrow_back_ios" class="back-reset-btn-style" color="secondary" outline :label="$t('back')"/>
                <q-btn @click="reset" icon="refresh" class="q-ml-xs back-reset-btn-style" outline color="secondary" />
            </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
          <blockquote class="embedly-card"><h4><a href="https://en.wikipedia.org/wiki/Golden_ratio">Golden ratio</a></h4><p>In mathematics, two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. The figure on the right illustrates the geometric relationship.</p></blockquote>
        </div>
      </div>
    </div>
    </div>
  </q-page>
</template>

<script>
import Knowledge from '@/knowledge'

export default {
  name: 'GoldenRatio',
  data () {
    return {
      value: null,
      icon: 'goldenRatio'
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
  },
  methods: {
    reset () {
      this.value = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (window.screen.width > 768) {
      setTimeout(() => {
        this.$refs.input.focus()
      }, 500)
    }
  }
}
</script>
