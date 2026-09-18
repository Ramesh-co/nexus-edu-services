# PRANAV’S NEXUS EDU SERVICES

Production-oriented public web foundation for the NEXUS rebuild.

## Identity
- Master brand: PRANAV’S NEXUS EDU SERVICES
- Tagline: WHERE DISCIPLINE REACHES DESTINATION
- Founder: Pranav Mogili
- Primary domain: https://pranavnexus.com

## Architecture direction
This repository is the public-web foundation of the larger NEXUS Core. The public website must not become the database or authorization layer. Future work will add the API/core, PostgreSQL data model, authentication/RBAC, native classroom, content/recording, examinations, AI, points/finance, notifications, audit, observability and administration modules.

## Local development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```

Cloudflare currently recommends its vinext path for new Next.js applications on Workers. Workers Builds can connect this repository and automate builds/deployments.
