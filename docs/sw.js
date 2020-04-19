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
    "revision": "806d242b3194485fd533c4a1b458c227"
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
    "url": "assets/js/critical.bundle.js",
    "revision": "2095d8c8a1894d46e9539a4cd40db457"
  },
  {
    "url": "assets/js/deferable.bundle.js",
    "revision": "92dd07f97f4da6c3dcaf222db4677bb2"
  },
  {
    "url": "assets/stylesheets/flex.css",
    "revision": "9fb02151178b654da5656c37545f7c66"
  },
  {
    "url": "assets/stylesheets/index.css",
    "revision": "69ab94fc227083121383c155bf3252a4"
  },
  {
    "url": "collections/blog/index.html",
    "revision": "f3c439a4d8df4e96fc129395fe761a73"
  },
  {
    "url": "collections/book-reviews/index.html",
    "revision": "a3da66c68beb5f00a05e8043682f877d"
  },
  {
    "url": "collections/covid-19-diaries/index.html",
    "revision": "19b88cebc3d4c88f42da7a270d8f5183"
  },
  {
    "url": "collections/philosophy/index.html",
    "revision": "189a6134b1c33517df0aefff4815a873"
  },
  {
    "url": "collections/religion/index.html",
    "revision": "6eb6e43327d41dc811227973b3c1bd34"
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
    "revision": "0cb4c0ecc110b4e43a6ed7ee3b84c782"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "164feaacfbe196ef4963c68d37edc418"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "55f8221bd50b3e000062f24e7e727993"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "4014e2d05cb991a1d0b401f45c499699"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "e2ae58f2736d586490e5ec37b7cc1b44"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "c72e43ffdc75d10b7f7183e2dbedc917"
  },
  {
    "url": "posts/what-i-am-doing-to-overcome-my-plantar-fasciitis/index.html",
    "revision": "5543a582e7a54083caa0b105cf6d3863"
  },
  {
    "url": "reviews/that-all-shall-be-saved/index.html",
    "revision": "7cf9e9dc269866c7b955bb40cbc186e6"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "0a4cc77a476fa14a7101b5677dddbadc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
