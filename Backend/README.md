# Project Backend

## Sommaire 

Le Backend est composé de :

* Server.js : API où sont stockées les questions
* Search.js : API où sont stockées les différents sujet

Les deux API sont sur deux port différent

## Server.js 

Le server.js est composé des 20 questions du quiz et une méthode GET est utilisé afin que le frontend puisse récupérer les questions. Il est situé sur le port 3000.

_Code de la méthode GET_
![image](https://github.com/Natgru06/Projet_Node_React_A4/assets/108078812/54a4d4ab-0909-49e5-bb7e-5517e65e91af)

_Code pour récupérer dans le Frontend_

![image](https://github.com/Natgru06/Projet_Node_React_A4/assets/108078812/60344c48-1b97-4b97-a6e1-81a9cc7182dd)

## Search.js 

Le Search.js est composé des différents sujets qui permet la recherche et l'affichage du ag-grid. Une méthode POST est utilisé pour la recherche et une méthode GET pour l'ag-grid. Il est situé sur le port 3001.

_Code de la méthode GET et POST_
![image](https://github.com/Natgru06/Projet_Node_React_A4/assets/108078812/4010ca2e-f1a4-4ef0-b3e7-7b6a73967865)

_Code pour récupérer dans le Frontend (POST)_

![image](https://github.com/Natgru06/Projet_Node_React_A4/assets/108078812/31a042b4-974b-45a5-a94b-4a7ae42b2a2a)

_Code pour récupérer dans le Frontend (GET)_

![image](https://github.com/Natgru06/Projet_Node_React_A4/assets/108078812/a20503a4-8043-4a69-95c6-ea01d37d6ce4)
