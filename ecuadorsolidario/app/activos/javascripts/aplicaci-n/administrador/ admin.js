App . AddChild ( ' admin ' , {
  EL :  ' .admin ' ,

  eventos : {
    ' Clic .project-admin-menú '  :  " toggleAdminMenu " ,
  },

  toggleAdminMenu :  función ( evento ) {
    var enlace =  $ ( evento . objetivo );
    este . $ desplegable  =  enlace . progenitor (). próxima ( ' nav ' );
    $ ( ' W - abierta ' ). No ( este . $ Desplegable ). RemoveClass ( ' w - abierta ' );
    este . $ desplegable . toggleClass ( ' w - abierta ' );
    volver  falsa ;
  },
});
