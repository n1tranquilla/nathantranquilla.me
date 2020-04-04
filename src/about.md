---
layout: main.njk
title: About
relativeRoot: ../
tags: nav
---
nathantranquilla.me exists in part as an outlet for trying cool new web stuff. One of the things I've been interested in trying out is <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a> in the context of a shared elements library or for the purpose of encapsulating design decisions. In my case, I decided to use <a href="https://www.leanternet.com/principles/">lean design principles</a> and encapsulate them in a <a href="https://github.com/n1tranquilla/lean-blog-web-components">shared blog components library</a> which I'm using in this site. Check out the source code for this page and look for tags prefixed with *lbwc* to see them. eg. <code>< lbwc-app-bar /></code>

It also gave me the chance to try out a new static site generator, <a href="https://www.11ty.dev/">eleventy</a>. In the past I had used <a href="https://www.gatsbyjs.org/">Gatsby</a>, but it is much more opinionated and assumes you'll do the standard one-page app with React. In this case, simpler is better, so I decided to go with a multi-page application with few or optimized resources for quick page loads. If you want to check out the code, you can view the github repo <a href="https://github.com/n1tranquilla/nathantranquilla.me">here</a>.