'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aaafa928a4f8616604eca12d830fe765",
"favicon.ico": "43bb0949a23493201c66eb8382f9692d",
"index.html": "d34961de2e1c22a56af03eff641ecb49",
"/": "d34961de2e1c22a56af03eff641ecb49",
"main.dart.js": "c52e07151565e27630209b943e371214",
"favicon.png": "7a1b49ed137766722805b76dcf745480",
"icons/Icon-192.png": "28bee3b7bed61582e40e15d21f24ce4d",
"icons/Icon-512.png": "28bee3b7bed61582e40e15d21f24ce4d",
"manifest.json": "60091747cc42c4f25033351cba54fc65",
".git/config": "4a3d03772a30baea683c579f4645c794",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6a/58a9a20cb5af33ba4ffae279c7ee6eb098b68e": "ec50ea6027a2a99e20b78e10530f3936",
".git/objects/35/1afe67d524ec60a204100e7ab9f2098e99bf4d": "a6590afb61f49be57910c282699d6fbb",
".git/objects/67/8bfd75b2f23cc04282d5b5c14b0584b357eaef": "412c72abe7d8fb40375ce0044a41d758",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/0e/f8571569cc59fd4b588eaa98542cecea906615": "9bc16ecfbae8dfdc3de0b93f556d8991",
".git/objects/05/084dbea8d4fa4860f8df4107ae43dc97bf4679": "69a51f7dee5b5e0aa1a86e18637f19ff",
".git/objects/02/41a7cd9170e750057718e2a057778d932b7013": "261fd2087f428ad74d5c20166a505df4",
".git/objects/a4/152507b5be22ae25653611435d07f483b728be": "7e0f88fb761ef1e995a7b69a8e8e893b",
".git/objects/a3/4cfbf96f8c6b7dca8abb04c82ad0e35037eefd": "e60a02b3ba56392e2f8fe85f28c45f8a",
".git/objects/b2/2955fab85b865a79f672f6f1d60aa60ad892ec": "2f7b7dcf88f9f0d611291cde1276c12b",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/b4/33425717125493478fbf0a71617b8346a38992": "b509d15ffedb30f16fb053c476fc0ae8",
".git/objects/bd/46c5a8a50424b73fade554ff119b9fe1b3616f": "4a094e8548e5c45bb954caf7c66083fd",
".git/objects/d1/57da216901672413c4a63b776e6abc5c018075": "b855986c041b1fa07a5ebbb28e8a43cf",
".git/objects/d6/729f4d815196678fecc913d7284be9dc53df72": "2697104d99dce633da77af765ff3c643",
".git/objects/d6/2ccd6ef211740709f9ac9351c64880b123ca95": "7a2e8dba6aec4b4a2728584129cfb720",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f7ab3d72bc1c3cd00545b6eb0cffab60954ff1": "bba29733485672043c00f18bd642d035",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/5633c4edb2dde875866a9bdf20d89344cbbd55": "fabfc29581a182f56a52c78f39929aaf",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/0f1693c3d49fa8144d82462a9908b68b5383b6": "5e50b3926fd870c08a2e0ceb0285b42f",
".git/objects/fb/16a8e0a122f51a7e1e55bee08d9cfecc8c0f0a": "949215ae740fcb18441e00963c8268e6",
".git/objects/7d/35ce63426c53a556c70182a5b12cb69a2569eb": "aed160c7fa6d14d7cee97ccc925c8334",
".git/objects/7d/8fa19b16ab8e090d6ba9435159cf42b68c950c": "1ab576a87b80db45242147d9816a0e57",
".git/objects/7c/b486d4fbd95212235026c80fec57d7a2c3fab0": "0fbe1d37b7bdbfa649b0b58e01a2da1b",
".git/objects/42/cbacc1b88ce517632355903b6ba37b581e454e": "1bf612207adc7b86061d38c56bfcb07e",
".git/objects/28/ad1d477c2319ba87e6433e265777a501b6a11d": "30a4be42aa2ac7983c8b74ef29add02f",
".git/objects/7b/879992c0945328cff1fbe068ad324b8e2f8bc6": "97128291960488b01cc242b36e16809b",
".git/objects/8f/fac627ffc07dace1db29300bfc9e631312ba54": "43be79e1e9b1c1d79892c29b925c8ee3",
".git/objects/8f/dcd4279a3c986fcb0fca2ba3d1caaefd9b1386": "abac069bf422301adf7eafacde82058d",
".git/objects/7e/3cf26408d0f701fa7b9ae9d4a6325193dc500e": "34db9b2167c8ec61d920bbf03ed51312",
".git/objects/19/20c29deb9bf0fd6c703d388e27c16fd9d8a7f1": "af0cb94fbeb3ca670f921b92111d5230",
".git/objects/26/e30d1b63f17a7602162734c5035ff762098dfd": "16e97550647cb83edd928cbae8b7b823",
".git/objects/4d/a0e9b55e75f3d9db287ac67eff573369c858c0": "84ea690a1b83b8ce587f9d22ead59092",
".git/objects/72/c04c47e8e9af8083a5b3f83b1f5b7d3c7d5aa3": "e2e4452fb9d16896facb0b54e02d43fe",
".git/objects/88/029ef6e075fb9590dc71853664e36982981700": "6a1baee3e8e872ebd0479e6eb99006a7",
".git/objects/88/6f5ba3e65efcd4e001d5a5cfbb17dc57b6c1ff": "5ff222f1b97f49b12ad86435b67d4be3",
".git/objects/07/4120ed2d1565fe254e6eab4d1038adc4326bc5": "ff97806b8d05f045715f2061accc462f",
".git/objects/00/5113be59e5590609627feb76e6ef4381272172": "0e086ea88d34102c3ec70ed7b3c90099",
".git/objects/36/437163a484ac1500dfc424f6760c2498965042": "4b279f33ae307ccc57f52105283ab688",
".git/objects/5c/3cd422b889f4bf6e4803303de315632c8d405d": "d03629aebc44e43b18e8860b43bb529a",
".git/objects/5d/3ab4a7aeaa56b20afec465e336813eafa0d2ef": "2ac07ea6fa4775a047bd741b2aa21242",
".git/objects/65/c2f216c6d8f5d9695ab77961b7f3582becc9eb": "1e73efb3d4802f6eed769c86696ba724",
".git/objects/62/26f7ef9b1aa80b08c147516d9f7c1c671ab069": "7efbb05902836b8a6a5993c4e8277888",
".git/objects/39/e6d7859c84e05b638138de9ec7f0855e2d9364": "c489a8d70c71457a2c27d20466e0561c",
".git/objects/a7/38e6f466d7361e2881ad36d6f6a9521fb2179f": "31aee170e5a4090e491f2bec88a520f1",
".git/objects/b6/e4c4fb340825b7568bdb8e1d0904c047b2c944": "9485b1b9a42d143cd9f847784c77cda3",
".git/objects/a9/7a2bd0cbc55bb27532ae416387d86bbf0b56d2": "13c09084136671749585e69daf88ad89",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/7c68adee4e050d78d7e6102dcd90f7ddb2fbf5": "3a93f32ce5444ac83dcf1980e111591a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/be7d403965c8e18e90d54ced541a9ede0cdccc": "4fab0a2a3f6c653276bcaed7f8c367db",
".git/objects/c4/f7d6c67a6c52f1420dc64b04fcbe598b452593": "45d1003f3d96b5f8b2d3eebfcfaa6fa0",
".git/objects/cc/9157da10d430e404238f00266adb3e17f834b1": "e38feee516166d3791a59a5cf2047835",
".git/objects/f9/755fae9becbb44ca493e262087e7655782ef5f": "bcf49545d851105930f44caea1f026b3",
".git/objects/f6/e154301466ea01ad8d3a22baab8df9c8c28fa9": "d1337eddeca8c4462ea836bb07399cdb",
".git/objects/e9/c52584fa5e69a3262ccf128d23a2fac3e94431": "bb73a420f064148373862220ab6f6233",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9a635a866bec56cf523887f84d4e88bacc07f4": "29171a050dfacfd6d3d89eaa101aa747",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/973eba5ff35b87588f37ddd0f23d226d28bc03": "e944c644b182be62272de89952857443",
".git/objects/4a/71deb87fac88b3a53e02ea91d54ce5028ed12e": "0760f5add22edf51390b524f179aa5ce",
".git/objects/12/dd47556a9c16ec7b29e270fdb5d9e978e37ca2": "6fd3aa8b43b1ace1d374e0c64c2f5cc2",
".git/objects/8c/2660dd9ba47b4cb862d718db2e6d796fecf54e": "f5cd8263571f06fc3642fa6725a6a3a7",
".git/objects/2e/2cff43859fcadd357a77272deb9b124694410e": "9ac634e505b7cde661e6b669607772c3",
".git/objects/7a/77e34b6c932a49fb753ea3fafa9042631d94e1": "63b789e83fd9f0400cd3a6d8506f15da",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02f49b10bf8d8d5bd91eb738d9c03604",
".git/logs/refs/heads/v9": "1c93a5860a22118cd2bdc829ad68c045",
".git/logs/refs/heads/master": "4004c1b976e205c99ea0e7dec9ef0acc",
".git/logs/refs/remotes/origin/v9": "1174100acb7727e2def585a9c87cbbbb",
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
".git/refs/heads/v9": "8ba67606a6cc9e9c11143d7308394926",
".git/refs/heads/master": "8e616636ee7ddfaf6c6f8e43e213ad59",
".git/refs/remotes/origin/v9": "8ba67606a6cc9e9c11143d7308394926",
".git/index": "8abeec786baf9b3de5641a9e41920761",
".git/COMMIT_EDITMSG": "b9cd9d46532c6314c5a90597966048fc",
"assets/AssetManifest.json": "9a4c4a0156264b76e6c45d3b7a7b4e45",
"assets/NOTICES": "d2cdb9a8c27023c82e3ca86aac26adb6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/sohee.jpg": "8937100a1d7471040edb2c21af33b387",
"assets/assets/egobooster-batch/both.png": "29ec0855d835c6a07d24f1fa015120d3",
"assets/assets/breast/8.png": "0b34e1d09a7b409a3f93aa8010fd32fb",
"assets/assets/breast/9.png": "218c5b58f96304802c68d848e753dc9a",
"assets/assets/breast/4.png": "2e2e1930d5d3f1a3c30408cc7a2d9d47",
"assets/assets/breast/5.png": "3fc4d19764412f68d4b22e475d5f49b4",
"assets/assets/breast/7.png": "eb32c10f5e7e349a251bad0faf2630bd",
"assets/assets/breast/6.png": "8b45adfc9878ee80906d0dcc7c92b729",
"assets/assets/breast/2.png": "d0159c84c7c84da5d872720c544ee46d",
"assets/assets/breast/3.png": "9acbe995b6ba8449ec3e48f35148383a",
"assets/assets/breast/1.png": "9b4255607b44bb71be6cf7e1b81ae12a",
"assets/assets/moim/figma.png": "d82f8aed9f0be608232196d145e2fb77",
"assets/assets/moim/m-db1.png": "4876e62d51a7ee140f1247a2afeb1dd9",
"assets/assets/moim/m-db2.png": "764080129f3a7f4c3fada936c0ceb18c",
"assets/assets/bridge/11.png": "f66ce66c34c14e0d648fdbe31424acce",
"assets/assets/bridge/22.png": "84316b9ebfe9a0628f19690698350430",
"assets/assets/bridge/data.png": "02850fb341b43009a31705d06a8f3357",
"assets/assets/github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/medium_logo.png": "0e8a9192a98f4efba49e3935d5ca303e",
"assets/assets/egobooster/egobooster-2.png": "2c5d0b49c23f850cd844788ca54e1b4f",
"assets/assets/egobooster/egobooster-1.png": "f4d231a72666e22991b6a7c03e352cf7",
"assets/assets/egobooster/architect.png": "20cc0f132b722b1dcbb8448e1aa53dea",
"assets/assets/linkedin.png": "f7572f9003126b7ab2ae086fb755c22c",
"assets/assets/vscode/v1.png": "bf9d840ad174db581ef038def57d4ef4",
"assets/assets/vscode/v3.png": "ac7af8f490c76319ca08fc532cef8bc5",
"assets/assets/vscode/v2.png": "831d05ed00bdd5ac85b886691d83d7b7"
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
