/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "7e2a3de2550875ee23c06464675c086f"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "3b2660bf175f108645eff1a9f86f830c"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "f2e6b8de5a7dcd83c96c198560d5988c"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d9ee92428a4dd394a12d5dc5c29b797"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "71b9eaca076dd175967ada710fdf6c08"
  },
  {
    "url": "assets/img/mindblown.gif",
    "revision": "34a0a23b7fc5d16814adaa32518435ab"
  },
  {
    "url": "assets/js/appbar.bundle.js",
    "revision": "66616854459c59bed35a6725998d87fb"
  },
  {
    "url": "assets/js/critical.bundle.js",
    "revision": "e7ab0fb547e4155a50b7cf5f3378e895"
  },
  {
    "url": "assets/js/deferable.bundle.js",
    "revision": "8673ae6eb7f793422bb3be4b194e4665"
  },
  {
    "url": "assets/stylesheets/flex.css",
    "revision": "9fb02151178b654da5656c37545f7c66"
  },
  {
    "url": "assets/stylesheets/index.css",
    "revision": "2c0734d279193328eb4e3b53194ebbd6"
  },
  {
    "url": "collections/blog/index.html",
    "revision": "99f167b510611b4514c176705033a702"
  },
  {
    "url": "collections/book-reviews/index.html",
    "revision": "809b462d042ac09c7d9246a594e87c0f"
  },
  {
    "url": "collections/covid-19-diaries/index.html",
    "revision": "ac53b6140c8c1a9e00d6e929fd272d5c"
  },
  {
    "url": "collections/opinion/index.html",
    "revision": "4733dd4fbd29148e430595f44c096e2a"
  },
  {
    "url": "collections/philosophy/index.html",
    "revision": "53896bb184f7e1fb363b1ecec82c2cf2"
  },
  {
    "url": "collections/religion/index.html",
    "revision": "280af10cfe1ef8a47dbd74c319ef9088"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d92a1e41787973495309b3d3f8a7b510"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b2aae108f4be7f1e4d7783800f00f793"
  },
  {
    "url": "favicon.ico",
    "revision": "a4672a2ba4ce7aed5dceddbe6d9babd5"
  },
  {
    "url": "index.html",
    "revision": "c107f1e2ec3c933749c2a3a970467b83"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "164feaacfbe196ef4963c68d37edc418"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "060af2581dbc456c9780af614cc3e9ab"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "452817cfa3d278b4da1e911ac1f95226"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "aae6dee1d015231d94e716a9ec22c70f"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "baa7b72087454bc0518fba8640732a16"
  },
  {
    "url": "posts/the-covid-19-diaries-the-mentality-in-the-united-states/index.html",
    "revision": "8d2f241986ee45f6fe34f7f382c669af"
  },
  {
    "url": "posts/what-i-am-doing-to-overcome-my-plantar-fasciitis/index.html",
    "revision": "1b4d5281242051ef0bb64e1e514c7abe"
  },
  {
    "url": "reviews/that-all-shall-be-saved/index.html",
    "revision": "0e2e14ef03258bc8db4f9dd86e01e300"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "0a4cc77a476fa14a7101b5677dddbadc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
