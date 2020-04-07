<template>
  <div>
    <q-page class="border-top q-mb-md">
      <div class="row mobile-header-padding q-pt-sm">
        <div class="q-pa-xs q-mx-auto col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <q-card>
                <div class="row q-pt-md q-mt-md mobile-size-no-margin">
                  <div class="q-ml-md col-1 mobile-size-component-header q-mb-md q-mr-xs">
                    <img :src="`/icon/${meta.icon}.svg`" style="width: 35px; height: 100%;"/>
                  </div>
                  <div class="">
                    <p class="q-display-1 mobile-size-component-header">
                    {{ $t(meta.name) }}
                    </p>
                  </div>
                </div>
                <q-card-main >
                  <div class="widget-area">
                <router-view v-if="flag" />
                  </div>
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
            <WikiBox
                   :wiki="meta.wikiText"
                   :name="meta.name"
                   :url="meta.wikiUrl"/>
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import { openURL } from 'quasar'
import { mixin } from '@/mixins/mixin'

export default {
  name: 'WidgetsFormContainer',
  mixins: [mixin],
  data () {
    return {
      flag: true,
      meta: this.$route.meta
    }
  },
  methods: {
    reset () {
      this.flag = false
      setTimeout(() => {
        this.flag = true
      }, 0)
    }
  }
}
</script>
<style>
 .widget-area {
   min-height: 300px;
 }
</style>
