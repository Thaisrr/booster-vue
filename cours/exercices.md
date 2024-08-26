# Exercices

## Exercice 1

- Créer un nouveau projet "booster-vue-exo" - `vue create nomprojet`
( attention à ne pas créer le projet dans un autre projet ! )
- Créer un composant "CounterComponent", avec un titre "Compteur"
- Intégrer ce composant dans App ( supprimer HelloWorld.vue )

- Afficher un nombre ( un compteur ) avec 2 boutons : 
  - un pour incrémenter, 
  - un pour décrémenter.

Bonus : 
- Si le compteur affiche un nombre pair, le mettre en rouge, sinon en vert

## Exercice 2

Créer un nouveau composant ( dans le projet exo ), et l'appeler 'CourseComponent'.
Lui mettre le titre "Liste de course" et l'afficher à la place / ou en plus du compteur.
Créer une liste dans le script, qui contient des chaînes de caractère.

- Si la liste est vide, afficher le message "Aucune course à afficher".
- Sinon, afficher une liste des différentes courses à faire.

- Pour chaque élément, ajouter un bouton pour le supprimer de la liste.


## Exercice 3

Dans un nouveau composant,
Créer une liste de films dans le script ( ou de séries )
Ce sont des objets qui contiennent : 
- titre (string)
- image ( url )
- isVue (booléen )

Afficher ces films sous forme de card dans le template.
Si le film est vu, ajouter un badge ( une indication ), sinon, rien
Ajouter un bouton pour marquer un film comme vu / pas vu.


## Exercice 4

Dans le projet "vue-booster-exo" : 
- installer vue-router
- configurer le router en suivant les étapes dans le cours.md
- créer une route pour chacun des exercices 
- créer une barre de navigation

## Exercice 5

Sans utiliser vee-validate !
Toujours dans le vue-booster-exo
- Créer une nouvelle page 'SecretMessage', avec son chemin et son lien dans la nav
- Créer un input
- Créer un paragraphe qui contient un message secret, et qui ne s'affiche que si dans l'input
l'utilisateur à entré le mot de passe "TarteAuxFraises"

## Exercice 6

Installer vee-validate dans booster-vue-exo
- créer une nouvelle page "Contact", avec son lien dans la barre de navigation
Créer un formulaire de contact avec email, nom, message.
- L'email doit être un email, non vide
- le nom doit faire au moins 2 caractères, et non vide
- le message ne doit pas être vide et faire entre 30 et 1000 caractères.
-> Afficher un message différent en fonction de l'erreur ( Email obligatoire / Email invalide)

## Exercice 7

Ajouter un filtre pour la liste de film : 
- trois bouton : 'Tous', 'Vu', 'Pas Vu'
- Quand on clique sur un des boutons, afficher les films correspondants
- tips: utiliser les computed

## Exercice 8

Ajouter un bouton "supprimer" sur les films pour supprimer un film.

## Exercice 9

Créer un composant "FormulaireComponent"
- Ce formulaire attends une valeur "titre", qui sera affichée dans un h2
- Deux input (titre, imageUrl ), un bouton de soumission
- Envoie un emit qui contient la valeur de l'input
Côté parent (ListeFilm)
- Afficher le formulaire
- Récupérer la valeur de l'emit pour créer un film, et l'ajouter à la liste.


## Exercice 10

- Dans le projet vue-booster-exo, installer pinia
- Configurer pinia dans main.js
- créer un store 'UserStore
- Créer une nouvelle page "LoginComposant" ( + créer sa route et son lien )
- Dans logincomposant créer un formulaire / un input pour récupérer le nom de l'utilisateur.
- Enregistrer ce nom dans un store
- Sur la page d'accueil, récupérer le nom de l'utilisateur, et écrire "Bienvenue Nom" si il y a un nom,
- et "Veuillez vous connecter", si il n'y a pas de nom.

## Exercice 11

URL: https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit

Créer un nouveau composant JokeComponent
Utiliser l'url si dessus pour charger une blague.
Afficher la blague dans un composant
Créer un bouton qui permet de relancer la requête pour afficher une nouvelle blague/
Attention, les blagues peuvent avoir 2 formes différentes : 
- joke : la blague 
- setup (question) / delivery (réponse)

## TP : 
M2I Pizza
Une pizzeria vous demande de créer son site en VueJS
/!\ le site aura plusieurs pages, il faut donc Vue Router
-Sur la page d'accueil, afficher la liste des pizzas
- Permettre le tri des pizzas ( par base ( créme, tomate), par prix);
- Une pizza à : 
  - id
  - nom
  - base
  - liste d'ingrédients ( tableau ) 
  - prix
  - bestSeller ( boolean )

=> Chaque pizza doit être affichée dans un composant réutilisable

--- Ajouter un système de panier : 
- on peut ajouter une pizza au panier
- le nombre d'éléments dans le panier est affiché dans la barre de navigation
- on a une page "panier" qui permet de voir le panier

--- Ajouter un crud : 
- les pizzas vont être récupérée depuis une API ( JSON-SERVER )
- => Fichier json sur sharemycode.fr/6q0
- une page admin pour voir la liste des pizzas dans un tableau, avec un bouton pour supprimer
- 
- BONUS : 
- créer une page admin pour créer des nouvelles pizzas,
- une page pour modifier une pizza