<template>
  <q-layout view="hHr lpR ffr">
    <q-layout-header
      class="row mobile-scroll-header border-bottom border-danger q-px-sm"
      :class="{ 'scroll-header': !showNavbar }">
      <div class="relative-position q-mx-auto q-mt-md col-12 col-sm-10 col-xl-8 col-lg-8 col-md-10
        mobile-size-padding" >
        <q-toolbar
          color="primary"
          class="q-pa-none q-py-xs"
          :glossy="$q.theme === 'mat'"
          :inverted="$q.theme === 'ios'"
          >
          <div class="">
            <router-link  to="/">
              <img class="icon">
            </router-link>
          </div>
          <div class="q-pa-xs">
            <router-link  to="/">
                <span class="header-app-name">
                  {{ $t('app_name') }}
                  <!--<div slot="subtitle">Version {{ $q.version }}</div>-->
                </span>
            </router-link>
          </div>
            <q-btn
              class="drawer-icon"
              size="xl"
              flat
              dense
              round
              color="$primary"
              @click="rightDrawerOpen = !rightDrawerOpen"
              aria-label="Menu"
              icon="menu"
              />
        </q-toolbar>
      </div>
    </q-layout-header>
    <q-layout-drawer
      v-model="rightDrawerOpen"
      side="right"
      flat
      round
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      >
      <q-list
        class="navigation"
        no-border
        link
        inset-delimiter >
        <q-list no-border link inset-delimiter>
          <q-list-header class="text-weight-medium" color="primary">Menu</q-list-header>
          <q-item-separator class="q-mt-none"/>
          <q-item to="/" exact>
            <q-item-side icon="home" color="primary"/>
              <q-item-main label="Home" />
              </q-item>
      <q-item @click.native="openURL('https://github.com/keepformula/keepformula-webui')">
        <q-item-side icon="fab fa-github" color="primary"/>
          <q-item-main label="GitHub" sublabel=""></q-item-main>
        </q-item>
        </q-list>
      </q-list>
      <div class="text-weight-medium fixed-bottom q-pb-md" color="primary">
          <q-item-separator class="q-mb-md" />
        <span class="text-love">
          Made for you with <img width="10" src="/img/heart.svg"> by Open Source community
        </span>
      </div>
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
