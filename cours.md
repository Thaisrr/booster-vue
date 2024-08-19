# VueJS

## Fonctionnement

- Compilation avec le `vue-compiler`
- Transpilation avec Babel
- Bundling avec Rollup
=> Vite

-----

SPA : Single Page Application
-> Une application qui n'a qu'une page html ( public/index.html ), et dont le contenu va être injecté en JS.


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