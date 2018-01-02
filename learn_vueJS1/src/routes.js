import Home from './components/Home.vue'
import SectionDetails from './components/SectionDetails'

export default [
    { path: '/', component: Home },
    { path: '/sectionDetails/:id', component: SectionDetails }
]
