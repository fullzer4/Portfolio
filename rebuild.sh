#!/usr/bin/env sh

_() {
  podman-compose down
  podman-compose build
  podman-compose up -d
} && _

unset -f _
