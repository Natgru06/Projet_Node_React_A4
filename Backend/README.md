# Project Backend

## Sommaire 

Le Backend est composé de :

* Server.js : API où sont stockées les questions
* Search.js : API où sont stockées les différents sujet

Les deux API sont sur deux port différent

## Server.js 

Le server.js est composé des 20 questions du quiz et une méthode GET est utilisé afin que le frontend puisse récupérer les questions. Il est situé sur le port 3000.

## Search.js 

Le Search.js est composé des différents sujets qui permet la recherche et l'affichage du ag-grid. Une méthode POST est utilisé pour la recherche et une méthode GET pour l'ag-grid. Il est situé sur le port 3001.
