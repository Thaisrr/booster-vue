import {createRouter, createWebHistory} from "vue-router";
import PresentationComponent from "@/pages/presentation-component.vue";
import DirectiveComponent from "@/pages/directive-component.vue";
import ReactiviteComponent from "@/pages/reactivite-component.vue";

const router = createRouter({
    routes: [
        {path : '/presentation', component: PresentationComponent},
        {path: '/directives', component: DirectiveComponent},
        {path: '/reactivite', component: ReactiviteComponent}
    ],
    history: createWebHistory()
});

export default router;