App . AddChild ( ' CitySearch ' , {
  EL :  ' # ciudad-input-envoltura ' ,

  eventos : {
    ' Entrada .city-búsqueda-de entrada ' :  ' clearPreResult ' ,
    ' Clic .city-select ' :  ' chooseCity '
  },

  activar :  la función () {
    este . watchSearchForm ();
  },

  watchSearchForm :  la función () {
    var que =  esto ;
    var opciones = {
      espere :  300 ,
      destacado :  verdad ,
      captureLength :  3 ,
      devolución de llamada :  este . ontypewatch
    };

    este . $ ( ' .city-búsqueda-input ' ). typeWatch (opciones);
  },

  chooseCity :  función ( evento ) {
    este . $ ( ' .city-búsqueda-input ' ). val ( $ ( evento . objetivo .) html . () ajuste ());
    este . $ ( ' #project_city_id ' ). val ( $ ( evento . diana ). datos ( ' ciudad-id ' ));
    este . $ ( ' .search-pre-resultado " .) ocultar ();
  },

  clearPreResult :  función ( evento ) {
    si ( $ ( evento . diana ). val () ===  " " ) {
      este . $ ( ' .search-pre-resultado " .) ocultar ();
    }
  },

  ontypewatch :  función ( valor ) {
    var que =  esto ;

    $ . Obtener ( $ ( ' # ciudad-entrada-wrapper ' ). Datos ( ' searchpath ' ), {pg_search : valor}, la función ( respuesta ) {
      si ( $ . recortar (respuesta) ===  " " ) {
        que . $ ( ' .search-pre-resultado ' ). ocultar ();
      } Demás {
        que . $ ( ' .search-pre-resultado ' ). espectáculo ();
        que . $ ( ' .search-pre-resultado " .) html (respuesta);
      }
    });
  }
});
