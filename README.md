# Matías Sepúlveda — Portfolio

Hand-built portfolio for [malygod.netlify.app](https://malygod.netlify.app/), focused on distributed systems, platform engineering, cloud infrastructure, and selected product work.

## Stack

- Astro
- React
- TypeScript
- Tailwind CSS

## Local development

```sh
npm ci
npm run dev
```

## Production check

```sh
npm run build
npx tsc --noEmit
```

The `main` branch is the production source and deploys through the existing Netlify pipeline.
