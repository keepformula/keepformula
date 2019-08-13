<template>
  <q-page class="border-top">
    <div class="row q-pa-md">
      <div class="q-pa-sm q-mx-auto col-12 col-xl-9 col-lg-9 col-md-10">
      <h4 class="q-mt-xs">{{ $t('golden_ratio') }}
        <a
          href=https://en.wikipedia.org/wiki/Golden_ratio
          target="_blank"
          :title="$t('golden_ratio_wiki_icon')">
          <q-icon
          class="text-warning"
          name="help"
          />
        </a>
      </h4>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-6">
          <q-card>
            <q-card-separator />
              <q-card-main>
                  <div class="col-12 q-mt-md">
                    <q-input autofocus ref="input" type="text" v-model="value" :float-label="$t('value_label')" />
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
                <div class="q-mt-lg">
                  <q-btn @click="reset" :label="$t('reset')"/>
                    <q-btn @click="back" :label="$t('back')"/>
                </div>
              </q-card-main>
            </q-card>
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
  },
  methods: {
    reset () {
      this.value = null
      this.$refs.input.focus()
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
