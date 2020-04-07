<template>
  <div>
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
      currentValue: 0,
      desiredMovement: 0,
      acctualMvement: 0
    }
  },
  computed: {
    newValue () {
      return (this.desiredMovement / this.acctualMvement) * this.currentValue
    }
  }
}
</script>
