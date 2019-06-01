<template>
  <q-page class="q-pa-lg">
    <q-search
          class="q-mb-lg"
          v-model="search" />
      <q-card
          class="q-ma-sm"
          v-for="item in items"
          v-bind:key="item"
          inline
          style="width: 300px">
        <q-card-media
          class="q-py-lg flex flex-center">
          <q-icon
          class="text-primary"
          style="font-size: 100px;"
          name="place" />
          </q-card-media>
          <q-card-title>
            Cafe Basilico
            <q-rating slot="subtitle" v-model="stars" :max="5" />
              <div slot="right" class="row items-center">
                <q-icon name="place" /> 250 ft
              </div>
                </q-card-title>
                <q-card-main>
                  <p>$・Italian, Cafe</p>
                  <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
                </q-card-main>
                <q-card-separator />
                  <q-card-actions>
                    <q-btn flat round dense icon="event" />
                      <q-btn flat label="5:30PM" />
                        <q-btn flat label="7:30PM" />
                          <q-btn flat label="9:00PM" />
                            <q-btn flat color="primary" label="Reserve" />
                            </q-card-actions>
                          </q-card>
                        </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageHome',
  components: {
  },
  data () {
    return {
      items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ],
      search: null,
      select: null
    }
  }
}

</script>
