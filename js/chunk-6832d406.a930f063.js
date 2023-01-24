(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6832d406"],{"5a74":function(l,e,a){"use strict";a.r(e);var u=function(){var l=this,e=this,a=e.$createElement,u=e._self._c||a;return u("div",[u("div",{staticClass:"row"},[u("div",{staticClass:"col-md-8 col-sm-8 col-xs-12 q-mb-md q-pr-md"},[u("q-input",{ref:"input",attrs:{type:"text","float-label":e.$t("value_label")},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1),u("div",{staticClass:"col-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 q-pr-md"},[u("q-select",{attrs:{"float-label":e.$t("input_unit"),options:e.unit.area,separator:!0},model:{value:e.inputUnit,callback:function(l){e.inputUnit=l},expression:"inputUnit"}})],1),u("div",{staticClass:"col-8 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xs-12 q-mb-md q-pr-md"}),u("div",{staticClass:"col-4 col-lg-4 col-md-4 col-xm-4 col-sm-4 col-xs-12 q-pr-md\n                       q-mb-lg"},[u("q-select",{attrs:{"float-label":e.$t("output_unit"),options:e.unit.area,separator:!0},model:{value:e.outputUnit,callback:function(l){e.outputUnit=l},expression:"outputUnit"}})],1),u("div",{staticClass:"col-12 col-md-12 relative-position q-pa-md"},[u("q-btn",{staticClass:"unit-changer-button q-mr-md absolute-right",attrs:{icon:"cached",dense:"",round:"",flat:"",color:"primary"},on:{click:e.changeUnits}})],1)]),this.value?u("transition-group",{attrs:{"enter-active-class":"animated fadeIn"}},[u("div",{key:"head",staticClass:"q-mt-md q-mb-md"},[u("q-list-header",{staticClass:"q-body-1 q-mt-md"},[e._v(" "+e._s(e.$t("result")))]),u("q-item-main",[u("div",{key:"text",staticClass:"parent animate-scale"},[u("q-list",{staticClass:"no-border-left-right",attrs:{"inset-separator":""}},[u("q-item",[u("q-item-side",{attrs:{color:"black",left:""}},[u("span",[e._v(" "+e._s(e.value)+" "+e._s(e.inputUnit)+"\n                                ")])]),u("q-item-main",{attrs:{color:""}},[u("span",[e._v(" "+e._s(e.areaConvert)+" "+e._s(e.outputUnit)+" ")])]),u("q-item-side",{attrs:{right:""}},[u("q-btn",{directives:[{name:"clipboard",rawName:"v-clipboard",value:function(){return l.areaConvert},expression:"() => this.areaConvert"}],staticClass:"absolute-right q-mr-sm",attrs:{id:"copy-btn",size:"md",flat:"",outline:"",color:"grey",icon:"file_copy"}})],1)],1)],1)],1)])],1)]):e._e()],1)},t=[],i=(a("2b8d"),a("fd19")),n=a("4a5f"),b=a("1a86"),o={name:"AreaConverter",mixins:[b["a"]],data:function(){return{unit:i["a"],value:null,inputUnit:this.$config.defaultUnits.inputUnitAreaConverter,outputUnit:this.$config.defaultUnits.outputUnitAreaConverter}},computed:{areaConvert:function(){var l=null;return this.value&&(l=n["a"].convert(this.value,this.inputUnit,this.outputUnit)),l}}},r=o,v=a("2877"),c=Object(v["a"])(r,u,t,!1,null,null,null);e["default"]=c.exports},fd19:function(l,e,a){"use strict";e["a"]={gender:[{label:"Male",value:"male"},{label:"Female",value:"female"}],length:[{label:"Milimetre",value:"mm"},{label:"Centimetre",value:"cm"},{label:"Metre",value:"m"},{label:"Kilometre",value:"km"},{label:"Foot",value:"ft"},{label:"Us survey foot",value:"ft-us"},{label:"Inch",value:"in"},{label:"Mile",value:"mi"}],lengthBMI:[{label:"Milimetre",value:"mm"},{label:"Centimetre",value:"cm"},{label:"Metre",value:"m"},{label:"Foot",value:"ft"},{label:"Inch",value:"in"}],weight:[{label:"Microgram",value:"mcg"},{label:"Miligram",value:"mg"},{label:"Gram",value:"g"},{label:"Kilogram",value:"kg"},{label:"Pound",value:"lb"},{label:"Ounce",value:"oz"},{label:"Metric tonne",value:"mt"},{label:"Ton",value:"t"}],weightBMI:[{label:"Gram",value:"g"},{label:"Kilogram",value:"kg"},{label:"Pound",value:"lb"},{label:"Ounce",value:"oz"}],digital:[{label:"Bit",value:"b"},{label:"Kilobit",value:"Kb"},{label:"Megabit",value:"Mb"},{label:"Gigabit",value:"Gb"},{label:"Terabit",value:"Tb"},{label:"Byte",value:"B"},{label:"Kilobyte",value:"KB"},{label:"Megabyte",value:"MB"},{label:"Gigabyte",value:"GB"},{label:"Terabyte",value:"TB"}],numericalBases:[{label:"Decimal",value:"10"},{label:"Binary",value:"2"},{label:"Senary",value:"6"},{label:"Octal",value:"8"},{label:"Hex",value:"16"}],area:[{label:"Square milimetre",value:"mm2"},{label:"Square centimetre",value:"cm2"},{label:"Square metre",value:"m2"},{label:"Hectare",value:"ha"},{label:"Square kilometre",value:"km2"},{label:"Square inch",value:"in2"},{label:"Square foot",value:"ft2"},{label:"Acre",value:"ac"},{label:"Square mile",value:"mi2"}],volume:[{label:"Cubic milimetre",value:"mm3"},{label:"Cubic centimetre",value:"cm3"},{label:"Cubic metre",value:"m3"},{label:"Mililitre",value:"ml"},{label:"Litre",value:"l"},{label:"Kilolitre",value:"kl"},{label:"Cubic kilometre",value:"km3"},{label:"Us tea spoon",value:"tsp"},{label:"Us table spoon",value:"Tbs"},{label:"Cubic inch",value:"in3"},{label:"Us fluid ounce",value:"fl-oz"},{label:"Us cup",value:"cup"},{label:"Us liquid pint",value:"pnt"},{label:"Us liquid quart",value:"qt"},{label:"Us liquid gallon",value:"gal"},{label:"Cubic foot",value:"ft3"},{label:"Cubic yard",value:"yd3"}],pressure:[{label:"Pascal",value:"Pa"},{label:"Kilopascal",value:"kPa"},{label:"Hectopascal",value:"hPa"},{label:"Megapascal",value:"MPa"},{label:"Bar",value:"bar"},{label:"Torr",value:"torr"},{label:"Pound per square inch",value:"psi"},{label:"Kilopound per square inch",value:"ksi"}],speed:[{label:"Metre per second",value:"m/s"},{label:"Kilometre per hour",value:"km/h"},{label:"Mile per hour",value:"m/h"},{label:"Knot",value:"knot"},{label:"Minute per kilometre",value:"min/km"}],time:[{label:"Nanosecond",value:"ns"},{label:"Microsecond",value:"mu"},{label:"Millisecond",value:"ms"},{label:"Second",value:"s"},{label:"Minute",value:"min"},{label:"Hour",value:"h"},{label:"Day",value:"d"},{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],angle:[{label:"Degree",value:"deg"},{label:"Radian",value:"rad"},{label:"Gradian",value:"grad"},{label:"Minute of arc",value:"arcmin"},{label:"Second of arc",value:"arcsec"}],energy:[{label:"Watt hour",value:"Wh"},{label:"Miliwatt hour",value:"mWh"},{label:"Kilowatt hour",value:"kWh"},{label:"Megawatt hour",value:"MWh"},{label:"Gigawatt hour",value:"GWh"},{label:"Joule",value:"J"},{label:"Kilojoule",value:"kJ"}],frequency:[{label:"Hertz",value:"Hz"},{label:"Milihertz",value:"mHz"},{label:"Kilohertz",value:"kHz"},{label:"Megahertz",value:"MHz"},{label:"Gigahertz",value:"GHz"},{label:"Terahertz",value:"THz"},{label:"Revolution per minute",value:"rpm"},{label:"Degree per second",value:"deg/s"},{label:"Radian per second",value:"rad/s"}],force:[{label:"Newton",value:"N"},{label:"Kilo newton",value:"kN"},{label:"Pound-force",value:"lbf"}],density:[{label:"Kg per cubic meter",value:"kg/m3"},{label:"Kg per litre",value:"kg/l"},{label:"Ton per cubic meter",value:"t/m3"},{label:"Pound per cubic yard",value:"lb/cu-yd"},{label:"Pound per cubic feet",value:"lb/cu-ft"},{label:"Pound per gallon",value:"lb/gal"},{label:"Ounce per cubic inch",value:"oz/cu-in"}],flow:[{label:"Cubic milimetre / Second",value:"mm3/s"},{label:"cubic centimetre / Second",value:"cm3/s"},{label:"Mililitre / Second",value:"ml/s"},{label:"Centilitre / Second",value:"cl/s"},{label:"Decilitre / Second",value:"dl/s"},{label:"Litre / Second",value:"l/s"},{label:"Litre / Minute",value:"l/min"},{label:"Litre / hour",value:"l/h"},{label:"Kilolitre / Second",value:"kl/s"},{label:"Kilolitre / Minute",value:"kl/min"},{label:"Kilolitre / Hour",value:"kl/h"},{label:"Cubic Metre / Second",value:"m3/s"},{label:"cubic Metre / Minute",value:"m3/min"},{label:"Cubic kilo Metre / Second",value:"km3/s"},{label:"Us teaspoon / Second",value:"tsp/s"},{label:"Tablespoons / Second",value:"Tbs/s"},{label:"Cubic inch / Second",value:"in3/s"},{label:"Cubic inch / Minute",value:"in3/min"},{label:"Cubic inch / hour",value:"in3/h"},{label:"Us fluid ounce / Second",value:"fl-oz/s"},{label:"Us fluid ounce / Minute",value:"fl-oz/min"},{label:"Us fluid ounce / Hour",value:"fl-oz/h"},{label:"Us cup / Second",value:"cup/s"},{label:"Pint / Second",value:"pnt/s"},{label:"Pint / Second",value:"pnt/min"},{label:"Pint / Second",value:"pnt/h"},{label:"Us liquid quart / Second",value:"qt/s"},{label:"Us liquid gallon / Second",value:"gal/s"},{label:"Us liquid gallon / Minute",value:"gal/min"},{label:"Us liquid gallon / hour",value:"gal/h"},{label:"Cubic foot / Second",value:"ft3/s"},{label:"Cubic foot / Minute",value:"ft3/min"},{label:"Cubic foot / Hour",value:"ft3/h"},{label:"Cubic yard / Second",value:"yd3/s"},{label:"cubic yard / Minute",value:"yd3/min"},{label:"Cubic yard / Hour",value:"yd3/h"}],temperature:[{label:"Celsius",value:"C"},{label:"Fahrenheit",value:"F"},{label:"Kelvin",value:"K"},{label:"Rankine scale",value:"R"}],aspectRatio:[{label:"SVGA / XGA (4:3)",value:"4:3"},{label:"4K / HD / FHD (16:9)",value:"16:9"},{label:"WXGA (5:3)",value:"5:3"},{label:"SXGA (5:4)",value:"5:4"},{label:"WXGA+ / WSXGA+ (16:10)",value:"16:10"},{label:"WSVGA (~17:10)",value:"17:10"}]}}}]);
//# sourceMappingURL=chunk-6832d406.a930f063.js.map