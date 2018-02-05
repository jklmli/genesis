# Genesis

This sets up a demo webapp with the following features:
  - app on Vue with a few demo tricks:
    - parent/child dataflow and manipulation
    - UI/data interactions
    - computed UI properties
    - data watchers that trigger on events
  - CSS styles using SCSS
  - build system on Webpack
  - task system on Jake
  - code in TypeScript 2.7 - everything (including tasks and webpack configs) is in TypeScript
  - lint rules for TypeScript using tslint
  - lint rules for SCSS usint stylelint
  - auto-vendor-prefixing for CSS rules using autoprefixer
  - auto-browser reload based on BrowserSync
  - test framework built on AVA
  - code coverage for tests using istanbuljs
  - CI through CircleCI
  - (opt-in) CI for code coverage through Coveralls

## Prerequisites

You'll need `npm >= 5.2.0` and a recent version of yarn (this app was written with 1.3.2).

Steps to get set up:
  - Fork this repo.
  - Navigate to the root of this directory, then run `yarn install`.  This will take ~ a minute.
  - See tasks via `npm run help`, or `npx jake -T`.  All task commands listed need to be run with an `npx` prefix.

## Starting the app

You can start the app and continuously rebuild your changes with `npx jake build:watch`.  Your browser should open a
window with the app running after the first build completes.

## Setting up CI

For CircleCI, you only need to login via Github and enable CI for this repo.

For Coveralls, you need to login via Github and do a small additional step in CircleCI - see `.circleci/config.yml` for
more details.

## Upcoming

  - README badges
  - speed up CircleCI builds 4x with parllelism
  - (Optional) commit message linting / changelog generation
  - (Optional) automatic semantic release versioning
  - release branch management
  - stay tuned!
