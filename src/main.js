// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import NavBar from '~/layouts/NavBar.vue'
import Dropdown from "~/components/DropDownMenu.vue";
import DropDownItem from "~/components/DropDownItem";
import ListItem from "~/components/ListItem";



import '~/assets/styles.scss'
import '~/assets/main.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', NavBar)
  Vue.component('DropDown-Menu', Dropdown)
  Vue.component('DropDown-item', DropDownItem)
  Vue.component('DropDown-link', ListItem)


}
