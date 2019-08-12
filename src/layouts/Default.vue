<template>
  <q-layout view="lHr Lpr lFf">
    <q-layout-header
      class="row " :class="{ 'scroll-header': !showNavbar }"
      >
      <div class="q-pb-xs query q-mx-auto q-pt-lg col-12 col-xl-9 col-lg-9 col-md-10" >
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
      <div class="textColor q-ml-xs">
        <router-link  to="/">
          <img
            class="icon"
            >
             <span class="header-app-name">
                {{ $t('app_name') }}
                <!--<div slot="subtitle">Version {{ $q.version }}</div>-->
             </span>
        </router-link>
      </div>
      <div>
        <q-btn
           class="drawer-icon"
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
      </div>
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
          <q-item @click.native="openURL('http://quasar-framework.org')">
            <q-item-side icon="school" />
              <q-item-main label="Docs" sublabel="quasar-framework.org"></q-item-main>
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
      rightDrawerOpen: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  methods: {
    openURL,
    onScroll () {
      if (Math.abs(window.pageYOffset) < 90) {
        this.showNavbar = window.pageYOffset < this.lastScrollPosition
        this.lastScrollPosition = window.pageYOffset
      }
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  }
}
</script>
