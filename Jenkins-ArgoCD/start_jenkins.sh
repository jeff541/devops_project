#!/bin/bash

set -e
echo "Starting Jenkins..."
docker run -d \
  --name jenkins \
  -p 8080:8080 \
  -p 50000:50000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $HOME/docker/jenkins_home:/var/jenkins_home \
  -e DOCKER_GID=$(getent group docker | cut -d: -f3) \
  --network minikube \
  jenkins/jenkins:lts
echo "Jenkins started. Access it at http://localhost:8080"