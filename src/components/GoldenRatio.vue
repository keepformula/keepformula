<template>
  <q-page class="border-top">
    <div class="row q-pt-md mobile-header-padding">
      <div class="q-pa-sm q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="row col-6 col-xs-12 col-lg-12 relative-position">
          <div class="mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
            {{ $t('golden_ratio') }}
            </p>
          </div>
          <q-btn @click="back" icon="arrow_back_ios" class="q-mr-sm back-reset-btn-style absolute-right"
            color="secondary" outline :label="$t('back')"/>
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
                      <q-item-main>
                        <div class="parent">
                          <div class="div1"> Shorter Section </div>
                          <div class="div2 relative-position"> {{ shorterSection }}
                            <q-btn class="absolute-right q-my-md q-mr-sm"
                                   id="copy-btn"
                                   size="md"
                                   flat
                                   outline
                                   color="grey"
                                   icon="file_copy"
                                   v-clipboard="() => this.shorterSection">
                            </q-btn>
                          </div>
                          <div class="div3"> Longer Section </div>
                          <div class="div4 relative-position"> {{ longerSection }}
                            <q-btn class="absolute-right q-my-md q-mr-sm"
                                   id="copy-btn"
                                   size="md"
                                   flat
                                   outline
                                   color="grey"
                                   icon="file_copy"
                                   v-clipboard="() => this.longerSection">
                            </q-btn>
                          </div>
                          <div class="div5"> </div>
                        </div>
                        </q-item-main>
                  </div>
              </q-card-main>
            </q-card>
            <div class="q-mt-sm">
                 <q-btn @click="reset" icon="refresh" class="back-reset-btn-style" flat outline
                  color="secondary" :label="$t('reset')" />
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

<style scoped>
.parent {
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
.div3 {
  grid-area: 2 / 1 / 3 / 2;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
}
.div4 {
  grid-area: 2 / 2 / 3 / 3;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
}
.div5 { grid-area: 1 / 1 / 3 / 3; }

</style>
