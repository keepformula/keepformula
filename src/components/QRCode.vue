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
             {{ $t('qr_code_generator') }}
            </p>
          </div>
          </div>
                <q-card-main>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 q-mb-md q-pr-md" >
                      <q-input ref="input" type="text" v-model="value" :float-label="$t('value_label')" />
                    </div>
                  </div>
                  <transition-group
                    enter-active-class="animated fadeIn"
                    v-if='this.value' >
                    <div class="q-mt-md" key="head">
                      <q-list-header class="q-body-1 q-mt-md"> {{ $t('result') }}</q-list-header>
                            <q-item-main>
                              <qrcode :value="value" :options="{ width: 300 }"></qrcode>
                              <br/>
                              <q-btn @click="download"
                                     icon="cloud_download"
                                     color="primary"
                                     outline
                                     :label="$t('download')"/>
                            </q-item-main>
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
              <a :href="wiki">
                {{ $t('qr_code') }}
              </a>
            </h4>
            <p>
            {{ $t('qr_code_wiki') }}
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
      value: null,
      icon: 'qrCode',
      wiki: 'https://en.wikipedia.org/wiki/QR_code'
    }
  },
  methods: {
    download () {
      var link = document.createElement('a');
      link.download = 'qr.png';
      link.href = document.getElementsByTagName('canvas')[0].toDataURL()
      link.click();
    }
  }
}
</script>
