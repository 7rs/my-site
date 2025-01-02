# [Pages](https://7rs.dev/)  

## Getting Started  

  There is the prerequisite. It's installing [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/ja/). [^1]  

  ```sh
  pnpm i
  ```  

  ```sh
  pnpm dev
  ```  

  When started on development server,
  [pages under development can be see from localhost:2999.](http://localhost:2999/)  
  Astrobook page can be see [from /docs/components.](http://localhost:2999/docs/components)  

  ```sh
  pnpm build && pnpm preview
  ```  

[^1]: Of course, npm, yarn, and bun should be available, but assume use pnpm. [If you use others than pnpm, follow Step 3 and later.](https://docs.astro.build/en/install-and-setup/#install-from-the-cli-wizard)
