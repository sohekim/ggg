'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aaafa928a4f8616604eca12d830fe765",
"index.html": "4e8409e4051da7186eab3413562860f1",
"/": "4e8409e4051da7186eab3413562860f1",
"main.dart.js": "e4e783337d1e5e504f5aa54d938d849c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "60091747cc42c4f25033351cba54fc65",
".git/config": "5b120e6f5c8067ba8f93987cf43f5d7d",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/57/577ee620674139e58f59750db1cdf957f8164a": "f24089a2756fe50924a5b5fcdb690ea3",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/05/084dbea8d4fa4860f8df4107ae43dc97bf4679": "69a51f7dee5b5e0aa1a86e18637f19ff",
".git/objects/05/7238aeba6ad011d8103e82828480f328a98678": "af10710d4e3adf64c3b80173e973737b",
".git/objects/02/f13cd396a28931b071d25972277cfefb9dc027": "b3f599f11469db152074f9010da1e1df",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/b4/33425717125493478fbf0a71617b8346a38992": "b509d15ffedb30f16fb053c476fc0ae8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/733b7c899ce6a9b8b07137c389e6d04ed91d49": "503f5ed09288578896cb41d7741ae60b",
".git/objects/f3/429c4fd5396296f73726c779449e65a07bf21b": "fc57bc7db5077c80cd15d94decf7c3ca",
".git/objects/eb/0c4868300a72c93cfdf451b62ecd72e99f7aa1": "bdb40f0a1970e0d4f3611e04efe5483a",
".git/objects/f2/b5fd1420abdc06f544d72b6f7760def4fc6fca": "3805c8aeeca07f8c4f7a620bd7c4b08b",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/8e4426c6fba1e8b5c2f0a6426927320c083fb6": "be86b650d7e475778b43bf850f90f5ff",
".git/objects/c1/6c60b694cfd694e9e14d320e6128411adaddfb": "d547080a9dcdc2f6e20bf930825b91ff",
".git/objects/ec/2f25a145b00099414bbee6dc78b87e2438ecfe": "023d0ea8826fe940ededc2d8fba3e1e9",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/fc55e28ede7e309c6d5a4549f8cc23e171cf8c": "339f7aa292cde4abe33e4d3d08703062",
".git/objects/7c/8f2d20af4d8f7984ff7a422add04a52ecc99fc": "792337056df218c782a23f73c6da866a",
".git/objects/1f/f3e9b297104e252e3ae3b8db05398a96048278": "ca8f949c20a86e861f7e9b7af9604867",
".git/objects/1a/586039812cec679085d370b9430efea3d21c55": "9c994c6f9b49a2ba5189985e15f0ebbf",
".git/objects/28/ad1d477c2319ba87e6433e265777a501b6a11d": "30a4be42aa2ac7983c8b74ef29add02f",
".git/objects/8f/fac627ffc07dace1db29300bfc9e631312ba54": "43be79e1e9b1c1d79892c29b925c8ee3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/7fd4ee45519f684e639891fe49cce7a3d856b0": "31a93080ff7fe319a73522c69b343372",
".git/objects/9a/c38520cdd29d608b27de2f97df2d8f568a2779": "281ddaf4b35e1b88754dfb056fd41bbc",
".git/objects/98/b30913590394c4f71cebf36dd71da3bcfe59b2": "d6059b0c559efdba36c8643ffa7fbaef",
".git/objects/90/9d7288fb7e23039430eff93adb4278df052d7d": "0b0a316aea9496f32436404f74746866",
".git/objects/b8/5d29819e7fc4b8bce6d533e62ace8f7d5e3560": "318eb7f057fca8b6af805686f48febf6",
".git/objects/b6/e4c4fb340825b7568bdb8e1d0904c047b2c944": "9485b1b9a42d143cd9f847784c77cda3",
".git/objects/aa/ff745b8c3101980c392b7e0d626427cce924d2": "461981281984aedbc99956c417446fe3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b0/ef43a38f646d11ce29dd3470349bfee4872251": "edeb896c9125cd6e3871886ab371e3cd",
".git/objects/a1/455d556948c55d7c9afc83df02c74ffb3903ab": "4e6a77dc789269886d92f612585c5052",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ce/9a2c1cb5afe1e447a25f4d147b4424d947dc99": "192644e9d6b34635623ba110f3a1dbf9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/7a02d6da2fab82b06b1d7fb1af9845d25794d8": "25991b19d0dc8367a870bbdaace68ad9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/9d753f1f19e55a2f86383d1e02ccf4251799c4": "565612d9fc905a47844ff65f5ce6a488",
".git/objects/4f/27c28a7096851ef1f7e298cc52f22e7360f7ba": "0e205727b4e73f53b6564eddb4af392b",
".git/objects/49/3ad44efad309dab3f6bab3ce5656d3cf6281ad": "ca14fd79af3d78ea3029f44b86bb195f",
".git/objects/40/f6cfd03eb5d809ae49acfe0c360c3d051e637e": "2ad63433801265666a5d8c9ad6e0df77",
".git/HEAD": "e4bc24d67418c53ba8b81cc7008c90ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd46355fe2e1ce19750b4ed307ef724f",
".git/logs/refs/heads/v6": "0f6914256a4e3668de6f071828d83886",
".git/logs/refs/heads/v2": "d10dc0ae3f636fe25003d642fe489d00",
".git/logs/refs/heads/v5": "29591949fc314a8056f3d5c6010d50c3",
".git/logs/refs/heads/v4": "a45ab45cf31443e67d6baf7dfcfaa71e",
".git/logs/refs/heads/master": "be905ac6316ba6e4c748ec407a79b4cb",
".git/logs/refs/heads/v3": "d2b53bf024979f4d98c33a9c37cb2145",
".git/logs/refs/remotes/origin/v6": "aad3b0ea4ea831bcd28c1c8912122a07",
".git/logs/refs/remotes/origin/v2": "36e6622c6c6829699bbb168eb345aff4",
".git/logs/refs/remotes/origin/v5": "4ded323539ef91a4ab5865b70ab311f1",
".git/logs/refs/remotes/origin/v4": "697f76c91a6331ef1ee0ffa04157c3e2",
".git/logs/refs/remotes/origin/v3": "154cdc83f947189dc88f161a904b83cc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/v6": "6ea708ca90f27fe725d0de488fd422ca",
".git/refs/heads/v2": "639b3f8828c36ca94b3a3e3c79e97697",
".git/refs/heads/v5": "82c1972bd7b5578b74c5d60bc98e200f",
".git/refs/heads/v4": "5a9025cf7c57f48004f386bfc62d4354",
".git/refs/heads/master": "5a9025cf7c57f48004f386bfc62d4354",
".git/refs/heads/v3": "691e56a4ac691978b3306ef959e754c3",
".git/refs/remotes/origin/v6": "6ea708ca90f27fe725d0de488fd422ca",
".git/refs/remotes/origin/v2": "639b3f8828c36ca94b3a3e3c79e97697",
".git/refs/remotes/origin/v5": "82c1972bd7b5578b74c5d60bc98e200f",
".git/refs/remotes/origin/v4": "5a9025cf7c57f48004f386bfc62d4354",
".git/refs/remotes/origin/v3": "691e56a4ac691978b3306ef959e754c3",
".git/index": "94a05c86e7f1b593bb36d5874268dfa5",
".git/COMMIT_EDITMSG": "d7293d91e3c4c5927c79b094c24b0aef",
"assets/AssetManifest.json": "9a4c4a0156264b76e6c45d3b7a7b4e45",
"assets/NOTICES": "d2cdb9a8c27023c82e3ca86aac26adb6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/sohee.jpg": "8937100a1d7471040edb2c21af33b387",
"assets/assets/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/medium_logo.png": "0e8a9192a98f4efba49e3935d5ca303e",
"assets/assets/egobooster/architect.png": "20cc0f132b722b1dcbb8448e1aa53dea",
"assets/assets/linkedin.png": "f7572f9003126b7ab2ae086fb755c22c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
