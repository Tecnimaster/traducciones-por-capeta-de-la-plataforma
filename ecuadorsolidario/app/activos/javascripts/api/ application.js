// = Requerir mithril / mithril.js
// = Requerir subrayado
// = Requerir mithril.postgrest
// = Requerir momento
// = requerir reemplazar-diacríticos
// = Requerir chartjs
// = Requerir i18n / traducciones
// = Requerir API / init
// = requerir catarse.js / dist / catarse.js
// = Require_self

( Función ( m , c , Gráfico ) {
  //Chart.defaults.global.responsive = True;
  Gráfico . Predeterminados . Mundial . Receptivo  =  false ;
  Gráfico . Predeterminados . Línea . PointHitDetectionRadius  =  0 ;
  Gráfico . Predeterminados . Mundial . ScaleFontFamily  =  " Proxima-nova " ;

  I18n . DefaultLocale  =  " PT " ;
  I18n . Locale  =  " PT " ;

  var AdminRoot =  documento . getElemenById ( ' nueva-admin ' );

  si (AdminRoot) {
    m . ruta . modo  =  ' hachís ' ;
    m . ruta (AdminRoot, ' / ' , {
      ' / ' :  M . Componente ( c . De administración . Aportes , {raíz : AdminRoot}),
      ' / Usuarios ' :  m . Componente ( c . De administración . Usuarios )
    });
  }

  _ . Cada uno ( documento . QuerySelectorAll ( ' div [técnica de mithril] ' ), la función ( el ) {
    var componente =  c . raíz [ EL . atributos [ " -mithril de datos ' ]. Valor ],
        paramAttr =  EL . atributos [ ' ficha parámetros ' ],
        params = paramAttr &&  JSON . analizar ( paramAttr . valor );
    m . de montaje (EL, m . componente (componente, _ . extender ({raíz : EL}, params)));
  });
} ( Ventana . M , ventana . C , ventana . Gráfico ));

ventana . toggleMenu  =  función () {
  var usermenu =  documento . getElemenById ( " user-menu-desplegable " );
  usermenu . classList . alternar ( ' w - abierta ' );
};
