
jQuery(document).ready(function() {
    
    jQuery(function () {
        jQuery('[data-toggle="tooltip"]').tooltip();
        console.log("ready");
    });
    jQuery('#navbarDropdownAgenciaLink').tooltip({ boundary: 'window' })
});
