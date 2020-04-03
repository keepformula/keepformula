<template>
  <q-page class="border-top">
    <div class="row mobile-header-padding q-pt-sm">
      <div class="q-pa-xs q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6">
            <q-card>
              <div class="row q-pt-md q-mt-md mobile-size-no-margin">
          <div class="q-ml-md col-1 mobile-size-component-header q-mb-md q-mr-xs">
            <img :src="`/icon/${icon}.svg`" style="width: 35px; height: 100%;"/>
          </div>
          <div class="">
            <p class="q-display-1 mobile-size-component-header">
             {{ $t('threed_printer_steppers_calibration') }}
            </p>
          </div>
          </div>
                <q-card-main>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 q-mb-md q-pr-md" >
                      <q-input
                         type="text"
                         v-model="currentValue"
                        :float-label="$t('current_m92_value')" />
                      <div class="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xs-12 q-mb-md q-pr-md" > </div>
                      <q-input
                        type="text"
                        v-model="desiredMovement"
                        suffix="mm"
                        :float-label="$t('desired_movement')" >
                      </q-input>
                      <div class="col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xs-12 q-mb-md q-pr-md" > </div>
                      <q-input
                        type="text"
                        suffix="mm"
                        v-model="acctualMvement"
                        :float-label="$t('acctual_movement')">
                      </q-input>
                    </div>
                  </div>
                  <transition-group
                    enter-active-class="animated fadeIn"
                    v-if='this.newValue' >
                    <div class="q-mt-md q-mr-md" key="head">
                      <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
                      <q-list
                        dense
                        bordered
                        padding
                        class="rounded-borders">
                        <q-item
                          class="q-my-sm cursor-pointer"
                          clickable
                          v-clipboard="() => this.newValue"
                          v-ripple>
                          <q-item-section side top>
                            <q-btn class="q-my-md q-mr-sm"
                                   size="md"
                                   id="copy-btn"
                                   outline
                                   flat
                                   color="grey"
                                   icon="file_copy">
                            </q-btn>
                          </q-item-section>
                          <q-item-section avatar>
                            <q-avatar color="primary" text-color="white">
                              {{ newValue }}
                            </q-avatar>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </div>
                  </transition-group>
              </q-card-main>
            </q-card>
            <div class="q-mt-sm">
              <q-btn @click="back"
                 icon="arrow_back_ios"
                 class="back-btn-style q-mr-sm"
                 color="secondary"
                 outline
                 :label="$t('back')"/>

                <q-btn @click="reset"
                 icon="refresh"
                 class="reset-btn-style"
                 outline
                 color="secondary"
                 :label="$t('reset')" />
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg">
            <blockquote class="embedly-card">
              <h4>
                <a href="https://reprap.org/wiki/Calibration#Motor_Calibration">
                  {{ $t('threed_printer_steppers_calibration') }}
                </a>
              </h4>
              <p>
              {{ $t('threed_print_calibration_wiki') }}
              This page has been flagged as containing duplicate material that RepRapSoftwareTweakingManual also attempts to cover.These pages should be merged such that both pages do not attempt to cover the duplicate topics. ANNOUNCEMENT: If you search for the latest up-to-date guide please take a look at Triffid's Guide.This page has been flagged as containing duplicate material that RepRapSoftwareTweakingManual also attempts to cover.These pages should be merged such that both pages do not attempt to cover the duplicate topics. ANNOUNCEMENT: If you search for the latest up-to-date guide please take a look at Triffid's Guide.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Knowledge from '@/knowledge'
import Unit from '@/units'
import { mixin } from '@/mixins/mixin'

export default {
  name: 'BaseConvrter',
  mixins: [mixin],
  data () {
    return {
      currentValue: 0,
      desiredMovement: 0,
      acctualMvement: 0,
      icon: '3dPrintCalibration',
      wiki: 'https://en.wikipedia.org/wiki/QR_code'
    }
  },
  computed: {
    newValue () {
      return (this.desiredMovement / this.acctualMvement) * this.currentValue
    }
  }
}
</script>
