App . AddChild ( ' Pago ' , {
  EL :  ' # pago motores ' ,

  activar :  la función () {
    var que =  esto ;
    $ . Obtener ( este . $ ( " #engine " ). Datos ( ' path ' )). Éxito ( de función ( datos ) {
      que . $ ( " #engine " ). html (datos);
    });
  },

  espectáculo :  la función () {
    este . $ EL . slideDown ( ' lenta ' );
  }

});
