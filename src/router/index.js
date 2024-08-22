import {createRouter, createWebHistory} from "vue-router";
import PresentationComponent from "@/pages/presentation-component.vue";
import DirectiveComponent from "@/pages/directive-component.vue";
import ReactiviteComponent from "@/pages/reactivite-component.vue";
import HomeComponent from "@/pages/home-component.vue";
import NotFound from "@/pages/NotFound.vue";
import FormComponent from "@/pages/form-component.vue";
import ComputedComponent from "@/pages/computed-component.vue";
import ParentComponent from "@/pages/parent-component.vue";
import RouterBis from "@/pages/router-bis.vue";
import StoreComponent from "@/pages/store-component.vue";
import BindingComponent from "@/pages/binding-component.vue";
import LifecycleComponent from "@/pages/lifecycle-component.vue";
import ComposableComponent from "@/pages/composable-component.vue";
import ApiComponent from "@/pages/api-component.vue";

const router = createRouter({
    routes: [
        {path: '/', component: HomeComponent},
        {path : '/presentation', component: PresentationComponent},
        {path: '/directives', component: DirectiveComponent},
        {path: '/reactivite', component: ReactiviteComponent},
        {path: '/form', component: FormComponent},
        {path: '/computed', component: ComputedComponent},
        {path: '/parent', component: ParentComponent},
        {
            path: '/router/:message',
            name: 'router',
            component: RouterBis,
            props: (route) => ({ message: route.params.message.toUpperCase()}),
        },
        {path: '/store', component: StoreComponent},
        {path: '/binding', component: BindingComponent},
        {path: '/life', component: LifecycleComponent},
        {path: '/composable', component: ComposableComponent},
        {path: '/api', component: ApiComponent},
        {path: '/accueil', redirect: '/'},
        {path: '/acceuil', redirect: '/'},
        {path: '/:pathMatch(.*)*', component: NotFound}
    ],
    history: createWebHistory()
});

export default router;