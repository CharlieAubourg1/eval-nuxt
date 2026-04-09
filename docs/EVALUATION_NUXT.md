# Évaluation — sujets Nuxt

## En bref

- **Deux sujets au choix** (A ou B) : vous n’en réalisez **qu’un** dans l’application Nuxt du cours.
- **Travail** : en binôme, si nombre impair, voir avec l'enseignant pour un groupe de 3 ou une personne seule.
- **Rendu** : dépôt public sur github ou gitlab, votre **README** indique les noms des membres et le **sujet choisi** (A ou B).

### Informations communes

- Branche : `nuxt-08-evaluation`
- Durée : 2 heures 30 minutes

---

## Rendu

- Code sur dépôt public, **README** du dépôt indiquant **noms / prénoms** des membres du groupe et **sujet choisi (A ou B)**.
- M'envoyer le lien du dépôt par email à *thomas.tfdv+cours@gmail.com*.
- Application testable : démarrage de l’API + `npm run dev:nuxt` depuis la racine du monorepo.

---

## Sujet A — Historique de recherche

### Objectif métier

Chaque fois que l’utilisateur **lance une recherche avec du texte** (comme sur la page des résultats), cette recherche est **enregistrée** de façon **persistante**. Une **page dédiée** permet de **voir l’historique** des recherches passées.

### Comportement attendu

- **Nouvelle entrée** à chaque lancement de recherche : si la même requête est relancée plusieurs fois, **plusieurs lignes** peuvent apparaître (pas de fusion automatique des doublons).
- L’historique est **commun à l’application de démonstration** : ce n’est pas un historique « par compte utilisateur ».

### Ce que l’utilisateur doit pouvoir faire

- Ouvrir une **page historique** depuis l’application (lien dans le menu **visible** et **compréhensible**).
- Voir la **liste** des recherches enregistrées, des plus récentes aux plus anciennes.
- **Relancer** une recherche depuis une ligne (rediriger vers la page des résultats avec cette recherche).
- **Supprimer** une entrée de l’historique.
- Voir un **message clair** lorsqu’**aucune** recherche n’a encore été enregistrée.
- Reconnaître les **moments de chargement** et les **cas d’erreur** sans que l’interface reste muette.

### Critères techniques (checklist)

À valider dans votre implémentation.

| Critère | Attendu |
|--------|---------|
| **Données** | Ajouter une **nouvelle table** dans la base de données du projet pour stocker l’historique des recherches avec l'id de la recherche, la requête de recherche et la date d'ajout. |
| **Persistance** | **Créer** une entrée après une recherche réussie (avec texte de recherche non vide), **lire** la liste pour l’affichage, **supprimer** une entrée depuis l’UI. |
| **Composables** | Créer un composable pour gérer l'historique des recherches et faire des appels à l'API. |
| **Page et navigation** | Ajouter une **nouvelle page** exposée par le **routing Nuxt**, et un **lien** depuis l’application vers cette page dans le menu. |
| **Relance** | La navigation depuis une ligne d’historique vers les **résultats** repose sur le **routeur** (paramètres de recherche dans l’URL). |
| **Données affichées** | À partir des données stockées, un composant doit afficher la recherche avec la requête, la date d'ajout et le bouton pour supprimer la recherche de l'historique. |
| **Composants** | Au moins **un composant** dédié avec **au moins une prop** (par exemple : `HistoryOfferCard`). |
| **États async** | Gestion explicite du **chargement** et des **erreurs** lors des appels à l’API. |

---

## Sujet B — Favoris (offres)

### Objectif métier

L’utilisateur peut **marquer des offres en favoris** depuis la liste des résultats, **voir** lesquelles sont favorites, **retirer** une offre des favoris, et ouvrir une **page** qui regroupe **toutes** les offres favorites. Il voit également **combien** d’offres sont en favori au total.

### Comportement attendu

- **Ajouter ou retirer** une offre des favoris par une action simple (un **bouton** ou un icone qui **bascule** entre « en favori » et « pas en favori »).
- Les favoris sont **communs à l’application de démonstration** : ce n’est pas une liste « par compte utilisateur ».

### Ce que l’utilisateur doit pouvoir faire

- Sur la **page des résultats** : **ajouter** ou **retirer** une offre des favoris, avec une **indication visuelle** claire (favori / non favori).
- Ouvrir une **page dédiée** listant l’ensemble des **offres favorites**, avec une carte pour chaque offre favorite.
- Voir le **nombre total** de favoris (par ex. près du titre, dans l’en-tête, ou sur un badge).
- **Retirer** une offre des favoris **depuis la page des favoris** aussi (pas seulement depuis les résultats), de façon cohérente avec le reste.
- Voir un **message explicite** lorsqu’**aucune** offre n’est en favori, un indicateur de chargement et un message d'erreur.

### Critères techniques (checklist)

À valider dans votre implémentation.

| Critère | Attendu |
|--------|---------|
| **Données** | Ajouter une **nouvelle table** dans la base de données du projet pour stocker les favoris avec l'id de l'offre, le titre de l'offre et la date d'ajout. |
| **Persistance** | **Lire** la liste des favoris, **créer** et **supprimer** des entrées selon les actions utilisateur (bascule sur les résultats, retrait sur la page favoris). |
| **Composables** | Créer un composable pour gérer les favoris et faire des appels à l'API. |
| **Page et navigation** | Ajouter une **page dédiée** aux favoris via le **routing Nuxt**, et un **lien** vers cette page dans le menu. |
| **Intégration liste** | Modifier ou étendre l’affichage des **résultats** pour le toggle favori et l’**état visuel** (sans casser le reste du flux). |
| **Données affichées** | À partir des données stockées, un composant doit afficher l'offre avec son titre, sa date d'ajout et le bouton pour retirer l'offre des favoris. |
| **Composants** | Au moins **un composant** dédié avec **au moins une prop** (par exemple : `FavoriteOfferCard`). |
| **États async** | Gestion claire des **chargements** et **erreurs** lors des interactions avec l’API. |

---

## Rappel

L’application doit **continuer à fonctionner** comme avant pour les usages déjà présents (recherche, navigation, etc.).

