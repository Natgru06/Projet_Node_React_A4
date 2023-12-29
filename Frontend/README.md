# Frontend

## Sommaire

Le Frontend est composé de :

* Page Home : Cette page permet juste d'accéder au quiz
* Page Quiz : Quiz de 20 questions
* Page Quiz Summary : Résultat du quiz
* Page Search : Permet de rechercher une connaissance voulue
* Page Grid : Affiche le Ag-grid du projet


## Home 

Simple page d'accueil

## Quiz

Une série de 20 questions sur des connaissances en Informatique. Il n'y a pas une question par page la page se change automatiquement pour chaque question.
De plus, l'ordre des questions sont aléatoires

## Quiz Summary

Une rétrospective du quiz affiche les questions et montre si l'utilisateur a eu une bonne réponse ou non au quizz. A la fin de la page, nous montrons combien de réponses bonnes et fausses l'utilisateurs a eu et affiche son score.

## Search

Cette page de recherche permet selon 3 critères Topic, Difficulty et Tags de pouvoir chercher un sujet que l'on peut commencer à étudier :

* Topic : Il suffit de taper un sujet que nous voulons étudier par exemple Algorithm et cela va nous montrer tous les domaine ou ce sujet est utilisé.
* Difficulty : Vous pouvez choisir un nombre entre 1 et 10 selon le niveau de difficulté souhaité, cela va afficher tous les cours sujets qui sont de cette difficulté.
* Tags : Si vous voulez rechercher par un tag une liste de tag est proposé afin de choisir un sujet qui correspond au tag souhaité.

De plus, il est nécessaire de remplir au moins une case pour pouvoir effectuer la recherche.

## Grid

Cette page est un ag-grid qui permet de visualiser les différents sujets que nous pouvons rechercher.
