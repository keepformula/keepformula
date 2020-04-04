<template>
  <q-page class="border-top q-mb-md">
    <div class="row mobile-header-padding q-pt-sm">
      <div class="q-pa-xs q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <div class="row q-pt-md q-mt-md mobile-size-no-margin">
          <div class="q-ml-md col-1 mobile-size-component-header q-mb-md q-mr-xs">
            <img
            :src="`/icon/${icon}.svg`"
            style="width: 35px; height: 100%;"/>
          </div>
            <p class="q-display-1 mobile-size-component-header">
             {{ $t('aspect_ratio') }}
            </p>
          </div>
              <q-card-main>
                  <div class="row">
                  <div class="col-md-8 col-sm-8 col-xs-6 q-mb-md q-pr-md" >
                    <q-input
                      ref="input"
                      type="text"
                      v-model="value"
                      :float-label="$t('width_label')"/>
                  </div>
                    <div class="col-4 col-lg-4 col-md-4 col-xs-4 col-sm-4 col-xs-6 q-pr-md">
                      <q-select
                         v-model="inputUnit"
                         :float-label="$t('aspect_ratio_unit')"
                         :options="unit.aspectRatio"
                         :separator="true"
                         radio
                         />
                    </div>
                </div>
                  <br>
                  <transition-group
                     enter-active-class="animated fadeIn"
                     v-if="this.inputUnit && this.value">
                    <div
                      class="q-mt-md"
                      key="head">
                      <q-list-header
                        class="q-body-1 q-mt-md">
                        {{ $t('result') }}
                      </q-list-header>
                      <q-item-main>
                        <div
                          class="parent animate-scale"
                          key="text">
                          <div class="div1">
                            {{ $t('height') }}
                          </div>
                          <div class="div2 relative-position">
                            {{  aspectRatioUnit }}
                            <q-btn
                               class="absolute-right q-my-md q-mr-sm"
                               id="copy-btn"
                               size="md"
                               flat
                               outline
                               color="grey"
                               icon="file_copy"
                               v-clipboard="() => this.aspectRatioUnit">
                            </q-btn>
                          </div>
                        </div>
                      </q-item-main>
                    </div>
                  </transition-group>
              </q-card-main>
           </q-card>
           <div class="q-mt-sm">
             <q-btn
                @click="back"
                icon="arrow_back_ios"
                class="back-btn-style q-mr-sm"
                color="secondary"
                outline
                :label="$t('back')"/>

               <q-btn
                @click="reset"
                icon="refresh"
                class="reset-btn-style"
                outline
                color="secondary"
                :label="$t('reset')" />
           </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
          <blockquote
            class="embedly-card"
            data-card-controls="0">
            <h4>
              <a v-bind:href=this.wiki>
                {{ $t('aspect_ratio') }}
              </a>
            </h4>
            <p>
            {{ $t('aspect_ratio_wiki') }}
            </p>
          </blockquote>
        </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
import Unit from '@/units'
import Knowledge from '@/knowledge'
import { mixin } from '@/mixins/mixin'

export default {
  name: 'AspectRatio',
  mixins: [mixin],
  data () {
    return {
      unit: Unit,
      value: null,
      height: null,
      icon: 'AspectRatio',
      wiki: 'https://en.wikipedia.org/wiki/Aspect_ratio',
      inputUnit: this.$config.defaultUnits.inputUnitAspectRatioConverter
    }
  },
  computed: {
    aspectRatioUnit () {
      let out = this.value
      if (this.inputUnit === `4:3`) {
        out = Math.round(out * 3 / 4)
      }
      if (this.inputUnit === `16:9`) {
        out = Math.round(out * 9 / 16)
      }
      if (this.inputUnit === `16:10`) {
        out = Math.round(out * 10 / 16)
      }
      if (this.inputUnit === `5:3`) {
        out = Math.round(out * 3 / 5)
      }
      if (this.inputUnit === `5:4`) {
        out = Math.round(out * 4 / 5)
      }
      if (this.inputUnit === `17:10`) {
        out = Math.round(out * 10 / 17)
      }
      return out
    }
  }
}
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 4fr 5fr;
  grid-template-rows: repeat(7, 1fr);
  font-size: 16px;
}
.div1 { grid-area: 1 / 1 / 2 / 2;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
.div2 { grid-area: 1 / 2 / 2 / 3;
  padding: 25px 10px;
  border-bottom: 1px solid #E0E0E0;
  border-top: 1px solid #E0E0E0;
}
</style>
