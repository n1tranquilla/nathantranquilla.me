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
    "revision": "8734bc3e4809a77193795a3072c0e17a"
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
    "revision": "8673ae6eb7f793422bb3be4b194e4665"
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
    "revision": "31b1b0f202cc2f3382476392219df02c"
  },
  {
    "url": "collections/book-reviews/index.html",
    "revision": "7ec0978946f7b80e9ab5a58387bee83f"
  },
  {
    "url": "collections/covid-19-diaries/index.html",
    "revision": "7a1716f70edc14e0c2862d58e6acdeff"
  },
  {
    "url": "collections/philosophy/index.html",
    "revision": "c6958dfd87a87789686d476a421c8af2"
  },
  {
    "url": "collections/religion/index.html",
    "revision": "d5d2daffe8ac6d607b02b998d3d61b4d"
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
    "revision": "e82c36f69f88e90416ba6176c54597dc"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "164feaacfbe196ef4963c68d37edc418"
  },
  {
    "url": "posts/a-day-in-the-life-of-a-quaratine/index.html",
    "revision": "021c2d9869857e2017674979ddd2a173"
  },
  {
    "url": "posts/the-covid-19-diaries-part-1/index.html",
    "revision": "b6d59d72eb8cb07370dcce7f1185e5f6"
  },
  {
    "url": "posts/the-covid-19-diaries-part-2/index.html",
    "revision": "a16b7381e306124b5098e907e6432971"
  },
  {
    "url": "posts/the-covid-19-diaries-part-3/index.html",
    "revision": "14933ecced0f4a01cfedbd60b141cae2"
  },
  {
    "url": "posts/what-i-am-doing-to-overcome-my-plantar-fasciitis/index.html",
    "revision": "cf5ff9b8899c1b7152518289b184f6e2"
  },
  {
    "url": "reviews/that-all-shall-be-saved/index.html",
    "revision": "204bbcf9c3d09dd4cfd9bd9408611dc7"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "0a4cc77a476fa14a7101b5677dddbadc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
