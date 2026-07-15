'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e4fe856abc44831035707b413fb794d1",
"version.json": "08b5b74b95ae96127588edefae855077",
"favicon.ico": "d0f52849ebdef3a37c390c7ffea9d623",
"index.html": "0dd8534fdce2832e8599d2fe5768f069",
"/": "0dd8534fdce2832e8599d2fe5768f069",
"main.dart.js": "c84fc506fa71be6ba08c0d1572c618e8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "87121642ed80423d47e146e376fb40a7",
"icons/Icon-maskable-192.png": "87121642ed80423d47e146e376fb40a7",
"icons/Icon-maskable-512.png": "87121642ed80423d47e146e376fb40a7",
"icons/Icon-512.png": "87121642ed80423d47e146e376fb40a7",
"manifest.json": "5ef4de32cb4512e78a2c2d03973c7924",
"assets/AssetManifest.json": "c271ee1879da3926473932e884eacf1e",
"assets/NOTICES": "371540d38e8fd41e34fb92fcfc6f094c",
"assets/FontManifest.json": "0d648fbcad51ea4cd00cb983ddbccc17",
"assets/AssetManifest.bin.json": "ebbc599e2386d311aaf48464ee7005fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "49a9f7ec07a3c8e562610b27b15fd0fa",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "792ee302d63353c1af448245dd255015",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "959de45ff6e6d420d11168975d76a73c",
"assets/fonts/MaterialIcons-Regular.otf": "64eb71afd0738422e06ccd8ee13d7165",
"assets/assets/l10n/fr-FR.json": "8e9f6de0bd8290f839422d3da0afe7af",
"assets/assets/l10n/en-US.json": "736b90ecd57782f7d36a6d4a88282ea8",
"assets/assets/images/no-data-old.png": "69207523d5ceb92c819f051dcb64a026",
"assets/assets/images/french.png": "6549dc17bafe326e0db9a5bf546c6548",
"assets/assets/images/no-data.png": "986037e2941d1220074d544225991723",
"assets/assets/images/sad-image.png": "9e8fc854f8c826f312f8f7b5e061d1b1",
"assets/assets/images/orange-money.jpg": "82c827b20377f90cf73c7fcaacc6a2ed",
"assets/assets/images/profile.png": "c5baf4c2b96bf6e9cbdad5cf8186dd2a",
"assets/assets/images/signin-image.png": "6427b0460bdb103795d5b87c13d1b46e",
"assets/assets/images/wave-money.jpg": "e392aa35cef0498983bf09408589e1ef",
"assets/assets/images/wave-money.png": "961d9d927136439bd89336e437d9c612",
"assets/assets/images/delete-image.png": "d4cdd2374dbaca2b7ef360f4e4fc4d48",
"assets/assets/images/english.png": "c6361b07795835001d98c731a3f2752e",
"assets/assets/images/info-card.png": "7979d55d9db0cf01e638773eb2ea7d75",
"assets/assets/svg_icons/tutorial.svg": "e3b60ab63ad28c7c32764b51ca02b5bd",
"assets/assets/svg_icons/arrow-down.svg": "29d5ae44e1fcabbc59d1a7f180e2af56",
"assets/assets/svg_icons/vault.svg": "21e550fb3884ca60f85cc644cc12dcbd",
"assets/assets/svg_icons/logout.svg": "8fdbdbd3acc074dbb89c94a9211874ad",
"assets/assets/svg_icons/cancel.svg": "ee379a34fbe78b96a4e68f3075881bfa",
"assets/assets/svg_icons/arrowDown.svg": "1e28c36d846def91822460c8448c477e",
"assets/assets/svg_icons/settings.svg": "4f86634bd788511052e64a63cd07283f",
"assets/assets/svg_icons/forward-arrow.svg": "e07fd552625d955fac366118aaa0fbb8",
"assets/assets/svg_icons/dashboard.svg": "27acd83de573a40dba9e9c7ff1cd2174",
"assets/assets/svg_icons/tick.svg": "d31f04d5b164ae84e903978626661eaa",
"assets/assets/svg_icons/close-eye.svg": "dcc414faa043d4d53b81e1197d118936",
"assets/assets/svg_icons/card.svg": "e6764aa81507b8b3ba2ec916924fb1b4",
"assets/assets/svg_icons/close.svg": "e34cd7d7dba4164eb86be077ae5b4413",
"assets/assets/svg_icons/notification.svg": "a68065a65b84ed773a71e12d8508b1dd",
"assets/assets/svg_icons/calendar-outline.svg": "4f78915945d26ef367ea452b85e2c845",
"assets/assets/svg_icons/language.svg": "4dfc2171a1e4be6a31837832573b4cee",
"assets/assets/svg_icons/delete.svg": "eb374b2b93d00bb7324f438f9986c967",
"assets/assets/svg_icons/eye.svg": "274adf24ec2c67764e1e9a50c68b6bd7",
"assets/assets/svg_icons/Profile.svg": "7cae5ce94afc5bbda91188db00ef676f",
"assets/assets/svg_icons/arrow-up.svg": "ddc9429488872afc6c40a6a51659b7bf",
"assets/assets/svg_icons/filter.svg": "fabf5e430026fdf5f72dfc4e6ac562cf",
"assets/assets/svg_icons/arrowUp.svg": "24b794c180ef81a59a21db3c1e19fb46",
"assets/assets/svg_icons/menu.svg": "2ad534e03c9e9dccb15c41959eaba246",
"assets/assets/svg_icons/graph.svg": "b8832f51e4aa5a76fb28b7d82d6138d6",
"assets/assets/logos/logo.png": "e74c9893551fbd9517e18883a13242ed",
"assets/assets/logos/maman-tontine-logo.png": "7cb0b22f68404e1777a8342d50297871",
"assets/assets/icons/shared.png": "253dac16d1367a99acdb0fd4da57e225",
"assets/assets/icons/arrowDown.png": "42d1194e2111b5e62c1b3ea3cd6a0b40",
"assets/assets/icons/community.png": "b0648e52684d4e3fc98285e59acf17f1",
"assets/assets/icons/calabash.png": "c181b8db99d91f52703203b4013c6b1b",
"assets/assets/icons/groupVault.png": "514660a09323c402b43a231fd348fc85",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
