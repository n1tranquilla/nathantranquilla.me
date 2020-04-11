# nathantranquilla.me

nathantranquilla.me is a static, multi-page blog with lean design. This repo contains all the source code for contributing content, adding features, and building artifacts.

## Quickstart
- install dependecies: `npm install`
- start the dev server: `npm run start`

Note: eleventy runs in watch mode while webpack does not (to avoid problems with both writing to the same target folder)

## Core technology and concepts
### eleventy
> Eleventy is a simpler static site generator.
I use [eleventy](https://www.11ty.dev/) to generate html from markdown. This allows me to build templates (and even nested templates) to ensure consistency across each page while developing. 

Elventy also allows you to serve and watch content while in development so that changes to content is quickly reflected.

### webpack
In conjunction with eleventy (and it's a little tricky) I also use webpack for bundling js assets and copying stylesheets and images into the target directory. This is not a marriage made in heaven but it works fairly well. Both build assets into the same folder target folder (docs/).

### lean-blog-web-components
This is my [own repository](https://github.com/n1tranquilla/lean-blog-web-components) of Web Components which encapsulate some basic design decisions concerning lean design, and responsiveness. These components are re-usable for other projects following lean design, due to carefully thought-out use of css variables.

### lean design
I decided to go with a multi-page application with low overhead per page. With the exception of working well without javascript enabled, this site follows the guidelines of [leanternet](https://www.leanternet.com/principles/)
