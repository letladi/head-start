# This script is used by CircleCI to execute automated tests.

# Build the application
yarn run universal:build

# Boot the application server
yarn run start:production

# Execute tests
PORT=8080 CI=true yarn run test:e2e

# Kill the server
yarn run stop:production