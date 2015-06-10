Développer des applications multiplateformes facilement à l'aide Ionic Framework
======

##### Par [Stéphanie Moallic](https://twitter.com/steffy_29)

Cette application va permettre de tester :
* la création d'une liste de courses avec stockage dans Firebase
* l'accès à la caméra sur le device
* l'accès à la géolocalisation
* la récupération des informations du device comme la plateforme et le model du device
* l'affichage d'un splashscreen et d'une icône pour l'application
* l'envoi de SMS

## Récupération des librairies
Pour construire l'application et la lancer, il faut récupérer les librairies de celle-ci :
`bower install`

## Ajout de la plate-forme cible
En fonction de la plate-forme cible :
`ionic platform add android` pour une plate-forme Android
`ionic platform add ios` pour une plate-forme iOS

## Lancement de l'application
Pour lancer l'application, on peut le faire de plusieurs façons différentes :
+ `ionic emulate android/ios` pour lancer l'application via l'émulateur de la plate-forme cible
+ `ionic serve` pour lancer l'application dans un navigateur web
+ `ionic serve --lab` pour lancer l'application dans un navigateur web pour tester l'affichage de l'application pour iOS et Android.
+ `ionic run android/ios` avec un device connecté pour lancer l'application directement sur celui-ci
