---
layout: main.njk
title: nathantranquilla.me - about
relativeRoot: ../
---
One of my first motivations for launching a new website was to explore <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a>
I've always wanted to work on building a design language, either privately or for business.
Using Web Components, I've encapsulated my own design decisions into a <a href="https://github.com/n1tranquilla/lean-blog-web-components">handful of components 
suitable for blog</a> using <a href="https://www.leanternet.com/principles/">lean design principles</a>.

One of the neat things I've been able to do is incorporate css variables into Web Components
to encapsulate basic design principles but expose some high-level rules, which has a configuration feel.

For example click this button to cycle through some text colors

Or put a hex value in to adjust the primary and accent colors:

I knew I wanted to build a static site.
I've used Gatsby in the past, but this time I decided to go even simpler. There is nothing complicated
about this site. I'm not using React to build and reconcile DOM based on application state, there is no special routing;
links just link to regular html pages. Each page imports the basic web components needed to frame the page,
and then rest is just html. 
