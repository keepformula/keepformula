<template>
  <div>
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
  </div>
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
      value: null
    }
  },
  methods: {
    download () {
      var link = document.createElement('a')
      link.download = 'qr.png'
      link.href = document.getElementsByTagName('canvas')[0].toDataURL()
      link.click()
    }
  }
}
</script>
