App . AddChild ( ' ContributionDonation ' , {
  EL :  ' # contribución a la donación ' ,

  eventos : {
    ' Clic .show-respuesta-FAQ '  :  ' toggleQuestion '
  },

  toggleQuestion :  función ( evento ) {
    var $ cuestión =  $ ( evento . currentTarget ). encontrar ( ' .box-deslizador ' );
    $ cuestión . toggleClass ( ' cerrado ' );
    $ cuestión . toggleClass ( ' u-margintop-20 ' );
  },
});
