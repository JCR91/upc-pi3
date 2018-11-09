;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_peru_educa',
  urlsToCache = [
    './',
    './alumno.html',
'./contenido_grado.html',
'./detalle_recurso.html',
'./evaluaciones.html',
'./index.html',
'./manifest.json',
'./menu-profesor.html',
'./nivel.html',
'./primaria.html',
'./profesor.html',
'./recursos.html',
'./script.js',
'./script_old.js',
'./seguimiento.html',
'./sw.js',
'./sw_old.js',
'./acciones/actualizarEvaluacion.php',
'./acciones/evaluacion.php',
'./acciones/results.json',
'./css/estilos.css',
'./css/jquery.fancybox-1.3.4.css',
'./css/font/Boogaloo-Regular-webfont.woff',
'./css/font/Boogaloo-Regular.ttf',
'./images/background.jpg',
'./images/bg-cinta.png',
'./images/bg-grado-1.png',
'./images/bg-grado-2.png',
'./images/bg-grado-3.png',
'./images/bg-grado-4.png',
'./images/bg-grado-5.png',
'./images/bg-grado-6.png',
'./images/bg-linea.jpg',
'./images/bg-linea.png',
'./images/bg-pass.png',
'./images/bg-principal-1024.png',
'./images/bg-principal.png',
'./images/bg-texto4.png',
'./images/bg-titulo1.png',
'./images/bg-user.png',
'./images/btn-plan-curricular-hover.png',
'./images/btn-plan-curricular.png',
'./images/ciencia-ambiente.png',
'./images/comunicacion.png',
'./images/Docente.jpg',
'./images/download.png',
'./images/estudiante.jpg',
'./images/favicon.ico',
'./images/icon128.png',
'./images/icon_1024.png',
'./images/icon_16.png',
'./images/icon_192.png',
'./images/icon_256.png',
'./images/icon_32.png',
'./images/icon_384.png',
'./images/icon_512.png',
'./images/icon_64.png',
'./images/icon_96.png',
'./images/indicadores.png',
'./images/inicial.png',
'./images/inicio.png',
'./images/Listos_Para_Aprender.png',
'./images/logo-elcole.png',
'./images/logo-gobierno.png',
'./images/logo-minedu.png',
'./images/logo-perueduca.png',
'./images/matematica.png',
'./images/personal-social.png',
'./images/PeruEduca.png',
'./images/primaria.png',
'./images/secundaria.png',
'./images/semana7y8.jpg',
'./images/recursos/ciencia-ambiente.png',
'./images/recursos/comunicacion.png',
'./images/recursos/matematica.png',
'./images/recursos/personal-social.png',
'./images/recursos/semana7y8.jpg',
'./images/recursos/primaria/1/comunicacion/el-zorro.png',
'./images/recursos/primaria/1/comunicacion/elzorroenamorado.pdf',
'./images/recursos/primaria/1/comunicacion/quepaseelrey.jpg',
'./images/recursos/primaria/1/comunicacion/quepaselerey.mp3',
'./images/recursos/primaria/1/matematica/loterias.pdf',
'./images/recursos/primaria/1/matematica/matematica-unidad_0-02.jpg',
'./images/recursos/primaria/1/matematica/numeros.pdf',
'./images/recursos/primaria/1/matematica/numeros.png',
'./images/recursos/primaria/2/ciencia-ambiente/climaperu.jpg',
'./images/recursos/primaria/2/ciencia-ambiente/rm_buena_postura.jpg',
'./images/recursos/primaria/2/ciencia-ambiente/rm_buena_postura.pdf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/caracteristicas.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/fotos_inicio.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/home.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/index.html',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna1.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna2.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna3.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna4.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna5.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna6.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna7.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/interna8.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/losclimasdelperu.doc',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima1.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima2.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima3.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima4.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima5.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima6.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima7.swf',
'./images/recursos/primaria/2/ciencia-ambiente/losclimas/mapa_clima8.swf',
'./images/recursos/primaria/2/personal-social/francisco_bolognesi.jpg',
'./images/recursos/primaria/2/personal-social/francisco_bolognesi.pdf',
'./images/recursos/primaria/2/personal-social/miguel_grau.jpg',
'./images/recursos/primaria/2/personal-social/miguel_grau.pdf',
'./js/Chart.min.js',
'./js/holder.min.js',
'./js/jquery.fancybox-1.3.4.pack.js',
'./js/jquery.min.js',
'./js/jquery.redirect.js',
'./js/jquery.session.js',
'./js/push.min.js',
'./js/recursos.js',
'./js/utils.js',
'./json/grado.json',
'./json/materia.json',
'./json/profesor.json',
'./json/recursos.json',
'./json/alumnos/alumno.json',
'./json/evaluaciones/evaluacion.json',
'./json/evaluaciones/preguntas.json',
'./lib/bootstrap/css/bootstrap.min.css',
'./lib/bootstrap/js/bootstrap.min.js'

  ]

  self.addEventListener('install', e => {
    console.log('Evento: SW Instalado - install')
    e.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
          console.log('Archivos en cache - install -> ' + CACHE_NAME )
          return cache.addAll(urlsToCache).then( () => self.skipWaiting() )
          //skipWaiting forza al SW a activarse
        })
        .catch(err => console.log('Falló registro de cache', err) )
    )
  })
  
  self.addEventListener('activate', e => {
    console.log('Evento: SW Activado - activate')
    const cacheWhitelist = [CACHE_NAME]
  
    e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if ( cacheWhitelist.indexOf(cacheName) === -1 )
              return caches.delete(cacheName)
          })
        )
      })
      .then(() => {
        console.log('Cache actualizado - activate')
        // Le indica al SW activar el cache actual
        return self.clients.claim()
      })
    )
  })
  /*
  self.addEventListener('fetch', e => {
    console.log('Evento: SW Recuperando - fetch')
  
    e.respondWith(
      //Miramos si la petición coincide con algún elemento del cache
      caches.match(e.request)
        .then(res => {
          console.log('Recuperando cache fetch')
          if ( res ) {
            //Si coincide lo retornamos del cache
            console.log('res: '+ res)
            return res
          }
          console.log('e.request: '+ e.request)
          //Sino, lo solicitamos a la red
          return fetch(e.request)
        })
      )
  })
  */
  self.addEventListener('push', e => {
    console.log('Evento: Push')
  
    let title = 'Push Notificación Demo',
      options = {
        body: 'Click para regresar a la aplicación',
        icon: './img/icon_192x192.png',
        vibrate: [100, 50, 100],
        data: { id: 1 },
        actions: [
          { 'action': 'Si', 'title': 'Amo esta aplicación :)', icon: './img/icon_192x192.png' },
          { 'action': 'No', 'title': 'No me gusta esta aplicación :(', icon: './img/icon_192x192.png' }
        ]
      }
  
      e.waitUntil( self.registration.showNotification(title, options) )
  })
  
  self.addEventListener('notificationclick', e => {
    console.log(e)
  
    if ( e.action === 'Si' ) {
      console.log('AMO esta aplicación')
      clients.openWindow('https://ed.team')
    } else if ( e.action === 'No' ) {
      console.log('No me gusta esta aplicación')
    }
  
    e.notification.close()
  })
  /*
  self.addEventListener('sync', e => {
    console.log('Evento: Sincronización de Fondo', e)
  
    //Revisamos que la etiqueta de sincronización sea la que definimos o la que emulan las devtools
    if ( e.tag === 'github' || e.tag === 'test-tag-from-devtools' ) {
      e.waitUntil(
        //Comprobamos todas las pestañas abiertas y les enviamos postMessage
        self.clients.matchAll()
          .then(all => {
            return all.map(client => {
              return client.postMessage('online')
            })
          })
          .catch( err => console.log(err) )
      )
    }
  })
  */
  /* self.addEventListener('message' e => {
    console.log('Desde la Sincronización de Fondo: ', e.data)
    fetchGitHubUser( localStorage.getItem('github'), true )
  }) */
  /*
  self.addEventListener('sync', e => {
    console.log('Evento: Sincronización de Fondo', e)
    console.log(e);
  });*/

  /*
  self.addEventListener('push', event => {
    event.waitUntil(
      self.registration.showNotification('Hola Mundo Push')
    );
  });*/