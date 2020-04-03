import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
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
import FrequencyConverter from './components/FrequencyConverter.vue'
import DensityConverter from './components/DensityConverter.vue'
import ForceConverter from './components/ForceConverter.vue'
import FlowRateConverter from './components/FlowRateConverter.vue'
import TemperatureConverter from './components/TemperatureConverter.vue'
import StepperMotor from './components/StepperMotor.vue'
import QRCode from './components/QRCode.vue'
import threeDPrintStepperCalibration from './components/3dPrintStepperCalibration.vue'
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
          path: '/GoldenRatio',
          name: 'GoldenRatio',
          component: GoldenRatio
        },
        {
          path: '/BMI',
          name: 'BMI',
          component: BMI
        },
        {
          path: '/Radix',
          name: 'RadixConverter',
          component: BaseConverter
        },
        {
          path: 'DataStorage',
          name: 'DataStorageConverter',
          component: DataStorageConverter
        },
        {
          path: '/Length',
          name: 'LengthConverter',
          component: LengthConverter
        },
        {
          path: '/Weight',
          name: 'WeightConverter',
          component: WeightConverter
        },
        {
          path: '/Area',
          name: 'AreaConverter',
          component: AreaConverter
        },
        {
          path: '/Volume',
          name: 'VolumeConverter',
          component: VolumeConverter
        },
        {
          path: '/Pressure',
          name: 'PressureConverter',
          component: PressureConverter
        },
        {
          path: '/Speed',
          name: 'SpeedConverter',
          component: SpeedConverter
        },
        {
          path: '/Time',
          name: 'TimeConverter',
          component: TimeConverter
        },
        {
          path: '/Angle',
          name: 'AngleConverter',
          component: AngleConverter
        },
        {
          path: '/Energy',
          name: 'EnergyConverter',
          component: EnergyConverter
        },
        {
          path: '/Frequency',
          name: 'FrequencyConverter',
          component: FrequencyConverter
        },
        {
          path: '/Density',
          name: 'DensityConverter',
          component: DensityConverter
        },
        {
          path: '/Force',
          name: 'ForceConverter',
          component: ForceConverter
        },
        {
          path: '/FlowRate',
          name: 'FlowRateConverter',
          component: FlowRateConverter
        },
        {
          path: '/Temperature',
          name: 'TemperatureConverter',
          component: TemperatureConverter
        },
        {
          path: '/StepperMotor',
          name: 'StepperMotor',
          component: StepperMotor
        },
        {
          path: '/QRCode',
          name: 'QRCode',
          component: QRCode
        },
        {
          path: '/3d_print_stepper_calibration',
          name: '3dPrintStepperCalibration',
          component: threeDPrintStepperCalibration
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (window.location.pathname !== 'home') {
      return { x: 0, y: 0 }
    }
  }
})
