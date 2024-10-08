# VueJS

## Fonctionnement

- Compilation avec le `vue-compiler`
- Transpilation avec Babel
- Bundling avec Rollup
=> Vite

-----

SPA : Single Page Application
-> Une application qui n'a qu'une page html ( public/index.html ), et dont le contenu va être injecté en JS.

Lancer l'application : 
- Pour lancer une application créée avec `vue create`, il faut utiliser le script `npm run serve`.
- L'application se lance alors sur un port ( souvent, 8080 ), pour la visualiser, il faut ouvrir le navigateur sur l'adresse indiquée
- ( par exemple `http://localhost:8080`)


## Les composants

Un composant, c'est un ensemble de code pour un bout de l'application ( le site ).
Les composants se créent dans un seul fichier .vue `Single File Componant` ou composant monofichier.
Les composants sont divisés en 3 parties : 
- le script : qui contient tous le JS nécéssaire au fonctionnement du composant
- le template : qui accepte la syntaxe HTML5
- le style : qui contient le CSS.

Les composants sont partie intégrante de l'application.
Ils peuvent s'importer les uns dans les autres.

Le composant principal de l'application est App.vue
C'est ce composant qui va être injecté dans le HTML.

## Interpolation

Le fait d'interpréter des valeurs, de variables, des expressions directement dans le template.

On utilise pour ça les balises moustaches {{ js }}

## Data Binding

Passer des données du Script au Template, dans les attributs HTML, via les directives.

On peut demander à n'importe quel attribut HTML d'interpréter du JS, au lieu d'une string
-> Attributs HTML :class, id, for, lang, ...

```
v-bind:attribut="valeur en js"
```


## Les événements

Sur chaque balise HTML, on peut ajouter un écouteur d'événement avec `v-on:nomévenement`

```vue
<button v-on:click="maFonction()">Click Click</button>
```

Cette syntaxe peut être raccourcie avec @
```vue
<button @click="maFonction()">Click Click</button>
```

## Réactivité 

Un concept clef de VueJS
Elle permet de mettre à jour automatiquement le DOM en fonction des données.
Il faut indiquer à Vue de surveiller l'état de ces données.
Deux solution: 

- ref() -> pour les données simples. Peut prendre n'importe quel type de donnée. 
        -> Dans le script, pour accéder et modifier les données il faut passer `.value`

```vue
let foo = ref('toto');

/*** reste du code **/
console.log(foo.value)
```

Dans le Template, on utilise le nom de la variable, sans le `.value`.

On ne mets des valeurs en réactive que si elles sont utilisées dans le DOM, et que leur
modification implique une mise à jour de l'interface.

## Directives

Ce sont des attributs "HTML" de VueJS, qui permettent d'ajouter de la logique dans le template.

Les directives sont préfixées de `v-`

### v-show

Affiche un block HTML si une condition est vrai.
Sinon, n'affiche rien.

```vue
<p v-show="condition">S'affiche si la condition est vrai</p>
```

### v-if

Permet d'afficher ou non un block en fonction d'une condition.
Il existe aussi `v-else-if` et `v-else`

```vue
<p v-if="condition1"></p>
<p v-else-if="condition2"></p>
<p v-else></p>
```


Le `v-show` va créér l'élément en HTML, mais le mettre en `display: none` si il ne l'affiche pas.
Le `v-if` recréé à chaque fois l'élément en JS.

## v-for

Pour afficher les listes.
v-for permet de recréer un élément HTML ( ou un bloc d'éléments HTML) pour chaque item d'une liste.

Attention, c'est `for ... in` et pas `for... of`.
Il ne faut pas oublier de mettre également une clef unique sur chaque élément répété.

```vue
<div v-for="el in liste" v-bind:key="clef_unique">
        <p>{{el}}</p>
</div>
```

### Les routes

Installer `vue-router`
```vue
npm i vue-router
```

Configurer le router dans un fichier router/index.js : 
```javascript
const router = createRouter({
        routes: [],
        history: createWebHistory()
})
```

en mode webHistory() sur le router, il est nécéssaire de configurer le serveur de production pour lui demander de toujours renvoyer la page index.html, quelque soit la requête.
Documentation :
https://router.vuejs.org/guide/essentials/history-mode#Example-Server-Configurations


Indiquer, à l'app d'utiliser le router dans le fichier main.js
```javascript
import router from "./router";

createApp(App)
    .use(router)
    .mount('#app')

```

On déclare les routes dans le fichier router/index.js sous forme d'un objet : 
```javascript
routes: [
    {path: '/', componant: MonComposant},
]
```

On ajoute la balise `<router-view />` dans App.vue, à l'endroit où on souhaite que s'affichent les pages.

Dans la barre de navigation, on n'utilise pas des <a> mais des `<router-link to="./lien">`

## Les formulaires

On peut relier la valeur d'une variable à celle d'un input avec `v-model`

```vue
<script setup>
        let maVariable = '';
</script>

<template>
        <input v-model="maVariable" />
</template>
```


On peut gérer les formulaires avec librairie vee-validate

```
npm i vee-validate
```


## Computed

Un propriété computed est une propriété calculée, qui est mise à jour dans le dom quand les valeurs qu'elle surveille sont modifiées.
( les valeurs surveillées doivent être des valeurs réactive (ref() ou reactive()))

## Watcher

Fonction qui surveille une valeur; qui fait quelque chose quand la valeur surveillée est modifiée.

## Props : 

Des attributs HTML personnalisés qui permettent de passer des informations d'un composant parent vers un composant enfant.

Elles se définissent dans le composant enfant, avec la fonction `defineProps()`.
Cette fonction peut prendre en paramétre soit un tableau de string ( chaque string correspond à une prop),
Soit un objet, et chaque propriété correspond à une prop.

```vue
defineProps({
    prop1 : Type,
    prop2: {
        type: Type,
        required: true,
        default: 'valeur par default'
        validator: () => return true si OK; false si pas OK
    }
});
```

Les types acceptés sont : 
- String
- Number
- Array
- Function
- Object
- Boolean

Pour les objets et les tableaux, la valeur par défaut doit être passée par une fonction qui retourne la valeur par défaut.

## Slot

Les slots sont des valeurs du template qu'on passe d'un composant parent à un composant enfant.

```vue
/* parent */
<Enfant>
        Valeur de template en texte ou HTML
</Enfant>


/* enfant */
<div>
        <slot />
</div>
```

## Emit

Les événements personnalisés ou emits sont des événements envoyés d'un enfant à un parent.
Le parent peut alors y réagir dans une fonction.

```vue
/*** enfant ***/
<button @click="emit('nomEvent', ...paramétres)"></button>

/*** parent ***/
<Enfant @nomEvent="fonctionAAppeler"></Enfant>
```

## Les stores

Les stores sont un design pattern courant en VueJS
Il permet de centraliser la gestion de données dont plusieurs composants auraient besoin dans l'application.
Le store de VueJS est pinia

```
npm i pinia
```

Pour initialiser le store, il faut l'importer dans le fichier main.js: 
```js
const pinia = createPinia();

app.use(pinia)
    .mount('#app')
```

Ensuite, il faut créer un store, qui surveillera une ou plusieurs valeurs.
Un store contient 3 parties : 
- le state, qui définie l'état initial des valeurs, sous forme d'une fonction qui retourne un objet de valeurs,
- les actions, un objet de méthodes qui permettent de modifier la valeur
- les getters, qui permettent de retourner une valeur calculer à partir du state.

```js
export const useMonStore = defineStore('nom unique', {
    state: () => ({valeur1: "valeur par défaut"}),
    actions: {
        update(newVal) {
            this.valeur1 = newVal;
        }
    },
    getters: {
        upperVal: (state) => state.valeur1.toUpperCase()
    }
})
```

Une nouvelle syntaxe permet de créer le store dans une fonction setup, dont la syntaxe est équivalente à celle d'un composant : 
Les states deviennent des refs(), les actions des fonctions, et les getters des computed.

```js
export const useMonStore = defineStore('nom unique', () => {
    const val1 = ref('valeur par défaut');
    function update(newVal) {
        val1.value = newVal;
    }
    const upperVal = computed(() => val1.value.toUpperCase())
}

```

## JSON SERVER

- Installer globalement la librairie `npm i -g json-server` - une seule fois par machine
- Créer un fichier db.json qui contient les entry points de chaque données

```json
{
        "data1": [],
        "data2": []
}
```
- Pour le lancer depuis un projet : créer un script dans le projet, qui contient la commande
- `json-server --watch ./db/db.json` ( attention à bien mettre le bon lien vers voter fichier json)
- Lancer l'API avec le script nouvellement créé
- `npm run monscript`

Plus de doc: https://github.com/typicode/json-server/tree/v0