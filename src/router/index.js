import {createRouter, createWebHistory} from "vue-router";
import PresentationComponent from "@/pages/presentation-component.vue";
import DirectiveComponent from "@/pages/directive-component.vue";
import ReactiviteComponent from "@/pages/reactivite-component.vue";
import HomeComponent from "@/pages/home-component.vue";
import NotFound from "@/pages/NotFound.vue";
import FormComponent from "@/pages/form-component.vue";

const router = createRouter({
    routes: [
        {path: '/', component: HomeComponent},
        {path : '/presentation', component: PresentationComponent},
        {path: '/directives', component: DirectiveComponent},
        {path: '/reactivite', component: ReactiviteComponent},
        {path: '/form', component: FormComponent},
        {path: '/accueil', redirect: '/'},
        {path: '/acceuil', redirect: '/'},
        {path: '/:pathMatch(.*)*', component: NotFound}
    ],
    history: createWebHistory()
});

export default router;