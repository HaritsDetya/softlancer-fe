This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Pull n Push Schema

1. Checkout to develop branch
2. Pull origin develop
3. Create a new branch (Please read the rule below this section)
4. Checkout to the new branch
5. Code
6. Commit (Please follow the commit messages rule)
7. Pull origin develop
8. Push origin "your branch name"
9. Create a new pull request to develop branch and mention me (verlino)
10. Done

## Branch Naming

<type>/<short_description>.<dev_name>

- <type> :
  - feature: saya menambahkan fitur baru
  - fixing: saya memperbaiki fitur

Contoh: feature/navbar.verlino <br/>
[Learn More](https://nvie.com/posts/a-successful-git-branching-model/)

## Commit Messages

<type>[scope]: <short_summary> <br/>
Contoh : feat[Homepage] : Creating about section

[Learn More](https://www.conventionalcommits.org/en/v1.0.0/)

[Learn More Part 2](https://www.linkedin.com/pulse/mastering-git-commit-types-guide-proper-usage-best-practices-sharma/)
