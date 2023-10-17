# excuses_dev_backend_Symbol-IT-2023
Le backend d'Excuses de Dev est une application qui génère des phrases amusantes pour faire patienter les utilisateurs. 
Ce référentiel contient le code backend de l'application. 

Suivez les instructions ci-dessous pour cloner, configurer, installer et utiliser le backend sur votre environnement local.

Cloner le dépôt
Pour cloner ce dépôt, exécutez la commande suivante dans votre terminal:

- git clone https://github.com/votreutilisateur/excuses-de-dev-backend.git

## Configurer le fichier .env
Après avoir cloné le dépôt, créez un fichier .env à la racine du projet et configurez-le avec les variables d'environnement suivantes :

- SERVER_PORT=8010
- DB_URL="mongodb://127.0.0.1:27017/test_SYMBOL-IT"

Ces variables d'environnement spécifient le port sur lequel le serveur s'exécutera et l'URL de la base de données MongoDB à utiliser.

## Installer les dépendances
Pour installer les dépendances du projet, exécutez la commande suivante dans votre terminal:

- yarn

Cela installera toutes les dépendances nécessaires pour le backend.

## Démarrer le serveur
Pour démarrer le serveur, exécutez la commande suivante dans votre terminal:

- yarn dev


Cela démarrera le serveur en mode développement et il sera prêt à recevoir des requêtes.

## Utilisation du backend
Une fois que le serveur est en cours d'exécution, vous pouvez utiliser les routes suivantes pour tester les fonctionnalités du backend :

 - Obtenir toutes les excuses (verbe GET): http://127.0.0.1:8010/api/all
 - Obtenir une excuse avec son http_code (verbe GET) : http://127.0.0.1:8010/api/ + http_code(int)
 - Obtenir une excuse au hasard (verbe GET): http://127.0.0.1:8010/api/random
 - Ajouter une nouvelle excuse (verbe POST): http://127.0.0.1:8010/api/newexcuse
 - Pour ajouter une nouvelle excuse, utilisez le format de corps de requête JSON suivant :

{
  "http_code": 901,
  "tag": "tag 901",
  "message": "excuse"
}

## Base de données MongoDB
Cette application utilise MongoDB comme base de données, que ce soit avec MongoDB Atlas dans le cloud ou MongoDB Compass en local. 
Vous pouvez trouver un fichier excusas.json dans le référentiel pour alimenter votre base de données.


Ces instructions vous aideront à configurer, installer et utiliser le backend d'Excuses de Dev dans votre environnement local. 



### Amusez-vous à générer des excuses amusantes !


#### David Cordoba





