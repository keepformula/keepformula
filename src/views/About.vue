<template>
  <q-page padding>
    <p>Folan Calculator</p>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <q-input v-model="text" />
        <q-input v-model="text" stack-label="Stack Label" />
        <q-input v-model="text" float-label="Float Label" placeholder="Gigi" />
        <q-btn
          class="q-mt-lg"
          color="primary" size="lg" label="Large Button" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageAbout'
}
</script>
