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

