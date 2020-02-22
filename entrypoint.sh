#!/bin/bash
# it is in official guide and I am not sure whether it is useful or not.
set -e

# Remove a potentially pre-existing server.pid for Rails.
[ ! -e /banana-rails/tmp/pids/server.pid ] || rm -f /banana-rails/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"


