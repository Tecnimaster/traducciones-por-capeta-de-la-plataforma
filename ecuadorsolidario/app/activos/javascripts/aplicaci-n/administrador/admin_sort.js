App . AddChild ( ' Ordenar ' , {
  EL :  ' .admin.use-tipo ' ,

  eventos : {
    ' Clic en [datos en especie] '  :  ' especie '
  },

  activar :  la función () {
    esta . forma  =  presente . $ ( ' form.simple_form ' );
    este . mesa  =  presente . $ ( ' tabla ' );
    este . selectSorting ();
  },

  getSorting :  la función () {
    var SortField =  esta . forma . encontrar ( ' [id = _order_by] ' );

    si ( SortField . val ()) {
      var tipo =  SortField . val (). división ( '  ' );
      volver {terreno : tipo [ 0 ], el orden : tipo [ 1 ]};
    }
    volver  indefinido ;
  },

  selectSorting :  la función () {
    si ( este . getSorting ()) {
      var enlace =  presente . $ ( ' un [técnica de tipo = " '  +  esto . getSorting (). campo  +  ' "] ' );
      var sortOrder =  enlace . hermanos ( ' span.sort orden ' );
      // Limpiar los criterios de ordenación de edad
      este . $ ( ' [datos en especie] ' ). hermanos ( ' span.sort orden ' ). html ( ' ' );

      // Añadir el fin de cabecera de la clasificación
      si ( este . getSorting (). Para  ==  ' DESC ' ) {
        sortOrder . html ( ' (desc) ' );
      }
      otra cosa {
        sortOrder . html ( ' (asc) ' );
      }
    }
  },

  tipo :  función ( evento ) {
    var enlace =  $ ( evento . objetivo );
    var SortField =  esta . forma . encontrar ( ' [id = _order_by] ' );

    // Poner clasificación de datos en el campo oculto y seleccione la clasificación
    SortField . val ( enlace . de datos ( ' especie ' ) +  '  '  + ( este . getSorting (). Para  ==  ' ASC '  ?  ' DESC '  :  ' ASC ' ));
    este . selectSorting ();
    esta . forma . enviar ();
    volver  falsa ;
  }
});
