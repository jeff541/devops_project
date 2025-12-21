# GitOps CI/CD avec Jenkins, ArgoCD et Minikube

Ce projet montre un **workflow GitOps** qui utilise un conteneur Jenkins et ArgoCD pour déployer automatiquement des fichiers Kubernetes (manifests) sur un cluster Minikube.

**En résumé** : dès que tu fais un `git push` sur GitHub, Jenkins lance un pipeline qui demande à ArgoCD de mettre à jour l'application sur Minikube.

## Aperçu du projet

- **Jenkins** : tourne dans un conteneur **en dehors** du cluster Minikube et s'occupe de la partie CI/CD (build et déclenchement du déploiement).
- **Minikube** : c'est ton cluster Kubernetes local, avec le driver Docker.
- **ArgoCD** : gère le déploiement continu en comparant ce qui est dans Git avec l'état réel du cluster Minikube.
- **Webhooks GitHub** : dès que tu fais un `git push`, GitHub prévient automatiquement Jenkins.
- **Dossier `manifests`** : contient tous les fichiers YAML Kubernetes (Deployment, Service, Ingress, etc.) à déployer.

## Architecture (comment ça marche)

1. Tu fais un `git push` sur le repository GitHub → un webhook est déclenché.
2. Jenkins reçoit le signal, récupère le code mis à jour et lance son pipeline.
3. Jenkins communique avec ArgoCD pour lui dire de synchroniser les nouveaux manifests.
4. ArgoCD applique automatiquement les manifests sur le cluster Minikube (il s'assure que le cluster corresponde exactement à ce qui est dans Git).

## Prérequis

### Outils nécessaires

- Docker
- Minikube
- Jenkins
- ArgoCD CLI (interface en ligne de commande)
- Git

### Configuration requise

- Un repository GitHub contenant un dossier `manifests` avec tes fichiers YAML Kubernetes.
- Un cluster Minikube démarré avec le driver Docker.
- Un conteneur Jenkins qui tourne **à l'extérieur** du cluster Minikube.
- ArgoCD installé et configuré **à l'intérieur** du cluster Minikube.
