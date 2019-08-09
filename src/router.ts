import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import GoldenRatio from './components/GoldenRatio.vue'
import BMI from './components/BMI.vue'
import BaseConverter from './components/BaseConverter.vue'
import DataStorageConverter from './components/DataStorageConverter.vue'
import LengthConverter from './components/LengthConverter.vue'
import WeightConverter from './components/WeightConverter.vue'
import AreaConverter from './components/AreaConverter.vue'
import VolumeConverter from './components/VolumeConverter.vue'
import PressureConverter from './components/PressureConverter.vue'
import SpeedConverter from './components/SpeedConverter.vue'
import TimeConverter from './components/TimeConverter.vue'
import AngleConverter from './components/AngleConverter.vue'
import EnergyConverter from './components/EnergyConverter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/Golden.Ratio',
          name: 'Golden Ratio',
          component: GoldenRatio
        },
        {
          path: '/BMI',
          name: 'BMI',
          component: BMI
        },
        {
          path: '/Base.Converter',
          name: 'Base Converter',
          component: BaseConverter
        },
        {
          path: 'Data.Storage.Converter',
          name: 'Data Storage Converter',
          component: DataStorageConverter
        },
        {
          path: '/Length.Converter',
          name: 'Length Converter',
          component: LengthConverter
        },
        {
          path: '/Weight.Converter',
          name: 'Weight Converter',
          component: WeightConverter
        },
        {
          path: '/Area.Converter',
          name: 'Area Converter',
          component: AreaConverter
        },
        {
          path: '/Volume.Converter',
          name: 'Volume Converter',
          component: VolumeConverter
        },
        {
          path: '/Pressure.Converter',
          name: 'Pressure Converter',
          component: PressureConverter
        },
        {
          path: '/Speed.Converter',
          name: 'Speed Converter',
          component: SpeedConverter
        },
        {
          path: '/Time.Converter',
          name: 'Time Converter',
          component: TimeConverter
        },
        {
          path: '/Angle.Converter',
          name: 'Angle Converter',
          component: AngleConverter
        },
        {
          path: '/Energy.Converter',
          name: 'Energy Converter',
          component: EnergyConverter
        }
      ]
    }
  ]
})
