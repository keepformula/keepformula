<template>
  <q-layout view="lHr Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
          <img
          class="icon"
          width="30" height="30"
          >
          <div class="absolute-center textColor header-app-name">
          <router-link  to="/">
          {{ $t('app_name') }}
          <!--<div slot="subtitle">Version {{ $q.version }}</div>-->
          </router-link>
          </div>
          <div class="position-right">
        <q-btn
          flat
          dense
          round
          color="text-primary"
          @click="rightDrawerOpen = !rightDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
          </div>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer
      v-model="rightDrawerOpen"
      side="right"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        class="navigation"
        no-border
        link
        inset-delimiter >
        <q-list no-border link inset-delimiter>
          <q-list-header>Navigation</q-list-header>
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Home" />
          </q-item>
          <q-item-separator />
          <q-list-header>Development Links</q-list-header>
          <q-item @click.native="openURL('https://github.com/babakhani/nightjar')">
            <q-item-side icon="fab fa-github" />
            <q-item-main label="GitHub" sublabel=""></q-item-main>
          </q-item>
        </q-list>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      rightDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>
