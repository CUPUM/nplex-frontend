# Nplex

## General

### See it live

:pick: Under construction :pick:

### Stack

- [SvelteKit](https://kit.svelte.dev/) as the SSR-capable frontend framework
  - The targeted distribution environement is Nodejs, thus we are here using the _SvelteKit_ ecosystem's [node adapter](https://kit.svelte.dev/docs#adapters)
- [Vanilla-extract](https://vanilla-extract.style/) for styling using css-in-ts preprocessing
- [Supabase](https://supabase.io/) for the PostgreSQL database and authentication services

## Getting started

### Setting things up

After cloning the repo, initialize the project and its dependencies locally:

```sh
pnpm install
```

### Developing

Once you've installed the dependencies, you can start a development server:

```sh
pnpm dev

# append the optional "-- --open" flag to either of these commands if you want
# to automatically open the app in a new browser tab once the server has started
```

## Using this project

### Building

In the long run, the project's `/dist` build should be provided as a dockerized application wrapped with a minimal Nodejs-on-Linux-architecture image to reduce risks of discrepency problems between developement and production environments' node versions and other root dependencies. The said docker image should also contain the proper vscode configurations and extensions to facilitate the predefined setup of a dev container.

To build the application:

```sh
pnpm build
```

### Previewing a build

You can preview the built app contained in the `build` directory:

```sh
pnpm preview
```

:warning: Note that the `preview` command should **not** be used to serve the app in production.

## Deploying

Mockups of the project will temporarily be deployed to Heroku until the CalculCanada server is properly set up.

```sh
# Deployment procedure
```

### CI/CD pipeline within GitHub

_**To do**: set GitHub actions and/or necessary webhooks to link with deployement destination and update distribution builds.

## Additionnal ressources

## Notes
