<template>
  <div class="col-12 col-md-12 col-lg-6 mobile-size-wiki-margin q-pl-lg q-mt-md desktop-only">
    <blockquote class="embedly-card" data-card-controls="0">
      <h4>
        <a v-bind:href=this.wiki>
          {{ $t(name) }}
        </a>
      </h4>
      <p>
      {{ $t(wiki) }}
      </p>
    </blockquote>
  </div>
</template>

<script>

export default {
  name: 'BaseConvrter',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    url: {
      type: String,
      default: '',
      required: true
    },
    wiki: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
