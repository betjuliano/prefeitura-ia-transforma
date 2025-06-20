# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/67a2a709-6399-4c26-80e5-a695b3d2818d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/67a2a709-6399-4c26-80e5-a695b3d2818d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies. You must run this before
# executing any `npm run lint`, `npm run dev`, or `npm run build` command.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/67a2a709-6399-4c26-80e5-a695b3d2818d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Deploying under `/prefeituras` on www.iaprojetos.com.br

When hosting the app at `https://www.iaprojetos.com.br/prefeituras`, configure
Vite and React Router to use the subpath:

1. Set `base: '/prefeituras/'` in `vite.config.ts`.
2. Set `basename="/prefeituras"` on `BrowserRouter` in `src/App.tsx`.

Then build the project and preview the result locally:

```sh
npm run build
npm run preview
```

## Deploying on Vercel

For a deployment at the root URL on Vercel, use the default configuration:

1. Ensure `base` in `vite.config.ts` is set to `/`.
2. Remove any `basename` prop from `BrowserRouter` in `src/App.tsx`.

Then, run a production build:

```sh
npm run build
```

Vercel will automatically serve the built files from the `dist` directory.
