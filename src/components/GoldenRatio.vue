<template>
  <q-page class="q-pa-lg border-top">
    <div>
      <h4 class="q-my-md">{{ $t('golden_ratio') }}
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
                <div class="row q-mt-lg">
                  <div class="col-12 q-mb-md">
                    <q-input type="number" v-model="number" :float-label="$t('value_label')" />
                  </div>
                  <div class="col-12">
                    <q-field class="q-mt-sm q-headline">{{ shorterSection }}</q-field>
                  </div>
                  <div class ="col-12">
                    <q-field class="q-mt-sm q-headline">{{ longerSection }}</q-field>
                  </div>
                </div>
                <div class="q-mt-lg">
                  <q-btn @click="reset" :label="$t('Reset')"/>
                    <q-btn @click="back" :label="$t('Back')"/>
                </div>
              </q-card-main>
            </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'GoldenRatio',
  data () {
    return {
      number: null
    }
  },
  computed: {
    shorterSection () {
      let out = null
      if (this.number != null) {
        out = ('Shorter is : ' + this.number / 1.61803398875)
      }
      return out
    },
    longerSection () {
      let out = null
      if (this.number != null) {
        out = ('Longer is : ' + this.number * 1.61803398875)
      }
      return out
    }
  },
  methods: {
    reset () {
      this.number = null
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
