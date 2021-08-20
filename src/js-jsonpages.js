(function () {
  var jsonPages = {
    //HOME
    'home privada': ['pr-home', '/BxI/HomeMisProducto'],
    'home publico': ['home-publico', '/'],
    //MOVIMIENTOS
    'cuenta sueldo': ['pr-mis-productos-cuenta-sueldo-grupo-falabella-soles'],
    'cuenta cts': ['pr-mis-productos-cts-cs-grupo-falabella'],
    'tarjeta cmr ultimos movimientos': ['pr-mis-productos-cmr-visa-ultimos-movimientos'],
    'tarjeta cmr detalle de tarjeta': ['pr-mis-productos-cmr-visa-detalle-de-tarjeta'],
    'tarjeta cmr estado de cuenta': ['pr-mis-productos-cmr-visa-estado-de-cuenta'],
    'credito efectivo detalle prestamo': ['pr-mis-productos-credito-efectivo-detalle-de-prestamo'],
    'credito efectivo detalle cuota': ['pr-mis-productos-credito-efectivo-detalle-de-cuota'],
    //TRANSFERENCIAS A TERCEROS
    'transferencias a terceros paso 1': ['pr-transferencias-a-terceros-paso1', '/BxI/Transferencias/ATerceros/Paso1'],
    'transferencias a terceros paso 2': ['pr-transferencias-a-terceros-paso2', '/BxI/Transferencias/ATerceros/Paso2'],
    'transferencias a terceros paso 3': ['pr-transferencias-a-terceros-paso3', '/BxI/Transferencias/ATerceros/Paso3'],
    //TRANSFERENCIAS ENTRE CUENTAS
    'transferencias entre cuentas paso 1': ['pr-transferencias-entre-cuentas-paso1', '/BxI/Transferencias/CuentasPropias/Paso1'],
    'transferencias entre cuentas paso 2': ['pr-transferencias-entre-cuentas-paso2', '/BxI/Transferencias/CuentasPropias/Paso2'],
    'transferencias entre cuentas paso 3': ['pr-transferencias-entre-cuentas-paso3', '/BxI/Transferencias/CuentasPropias/Paso3'],
    //DESTINATARIOS FRECUENTES
    'destinatarios frecuentes': ['pr-transferencias-destinatarios-frecuentes', '/BxI/Transferencias/DestinatariosFrecuentes'],
    //MODIFICAR DESTINATARIOS FRECUENTES
    'modificar destinatarios frecuentes paso 1': ['pr-modificar-destinatarios-frecuentes-paso1'],
    'modificar destinatarios frecuentes paso 2': ['pr-modificar-destinatarios-frecuentes-paso2'],
    'modificar destinatarios frecuentes paso 3': ['pr-modificar-destinatarios-frecuentes-paso3'],
    //AGREGAR DESTINATARIOS FRECUENTES
    'agregar destinatarios frecuentes paso 1': ['pr-transferencias-agregar-destinatarios-frecuentes-Paso1'],
    'agregar destinatarios frecuentes paso 2': ['pr-transferencias-agregar-destinatarios-frecuentes-Paso2', '/BxI/Transferencias/DestinatariosFrecuentes/Agregar/Paso2'],
    'agregar destinatarios frecuentes paso 3': ['pr-transferencias-agregar-destinatarios-frecuentes-Paso3', '/BxI/Transferencias/DestinatariosFrecuentes/Agregar/Paso3'],
    //PAGOS DE TARJETAS DE CRÉDITO PROPIA
    'pagos de tarjeta de credito propia paso 1': ['pr-pago-tarjeta-de-credito-propia-paso1', '/BxI/Pagos/TarjetaCreditoPropia/Paso1'],
    'pagos de tarjeta de credito propia paso 2': ['pr-pago-tarjeta-de-credito-propia-paso2', '/BxI/Pagos/TarjetaCreditoPropia/Paso2'],
    'pagos de tarjeta de credito propia paso 3': ['pr-pago-tarjeta-de-credito-propia-paso3', '/BxI/Pagos/TarjetaCreditoPropia/Paso3'],
    //PAGOS DE TARJETAS DE CRÉDITO TERCEROS
    'pagos de tarjeta de credito de terceros paso 1': ['pr-pago-tarjeta-de-credito-de-terceros-paso1', '/BxI/Pagos/TarjetaCreditoDeTercero/Paso1'],
    'pagos de tarjeta de credito de terceros paso 2': ['pr-pago-tarjeta-de-credito-de-terceros-paso2', '/BxI/Pagos/TarjetaCreditoDeTercero/Paso2'],
    'pagos de tarjeta de credito de terceros paso 3': ['pr-pago-tarjeta-de-credito-de-terceros-paso3', '/BxI/Pagos/TarjetaCreditoDeTercero/Paso3'],
    //CONSULTA PAGOS DE SERVICIOS
    'pagos de servicios': ['pr-pago-servicios', '/BxI/Pagos/Servicios'],
    //PAGOS DE SERVICIOS
    'pagos de servicios paso 1': ['pr-pago-servicios-paso1'],
    'pagos de servicios paso 2': ['pr-pago-servicios-paso2'],
    'pagos de servicios paso 3': ['pr-pago-servicios-paso3'],
    //INSCRIPCIÓN DE SERVICIOS
    'inscripcion de servicios paso 1': ['pr-pagos-servicios-inscripcion-nueva-cuenta-paso1', '/BxI/Pagos/Servicios/InscripcionNuevaCuenta/Paso1'],
    'inscripcion de servicios paso 2': ['pr-pagos-servicios-inscripcion-nueva-cuenta-paso2', '/BxI/Pagos/Servicios/InscripcionNuevaCuenta/Paso2'],
    'inscripcion de servicios paso 3': ['pr-pagos-servicios-inscripcion-nueva-cuenta-paso3', '/BxI/Pagos/Servicios/InscripcionNuevaCuenta/Paso3'],
    //PREPAGO DE CRÉDITOS
    'prepago de creditos': ['pr-prepagos-paso1-listadoCreditos'],
    //AUMENTO DE LINEA
    'aumento de linea paso 1': ['pr-aumento-de-linea-de-credito-paso1', '/BxI/AumentoLineaCredito/Paso1'],
    'aumento de linea paso 2': ['pr-aumento-de-linea-de-credito-paso2', '/BxI/AumentoLineaCredito/Paso2'],
    'aumento de linea paso 3': ['pr-aumento-de-linea-de-credito-paso3', '/BxI/AumentoLineaCredito/Paso3'],
    //SOLICITUD PRÉSTAMO EFECTIVO
    'solicitud prestamo efectivo': ['pr-prestamoefectivo-paso2-resultadosimulacion'],
    //SIMULAR RAPICASH
    'simular rapicash paso 1': ['pr-simular-rapicash-paso1', '/BxI/Simular/Rapicash/Paso1'],
    'simular rapicash paso 2': ['pr-simular-rapicash-paso2', '/BxI/Simular/Rapicash/Paso2'],
    //SOLICITAR RAPICASH
    'solicitar rapicash paso 1': ['pr-solicitar-rapicash-paso1', '/BxI/Solicitar/RapiCash/Paso1'],
    'solicitar rapicash paso 2': ['pr-solicitar-rapicash-paso2', '/BxI/Solicitar/RapiCash/Paso2'],
    'solicitar rapicash paso 3': ['pr-solicitar-rapicash-paso3', '/BxI/Solicitar/RapiCash/Paso3'],
    //CAMBIO DE CLAVE PIN
    'cambio de clave pin paso 1': ['pr-cambio-clave-pin-paso1'],
    'cambio de clave pin paso 2': ['pr-cambio-clave-pin-paso2'],
    'cambio de clave pin paso 3': ['pr-cambio-clave-pin-paso3'],
    //CAMBIO DE CLAVE INTERNET
    'cambio de clave internet paso 1': ['pr-cambio-clave-internet-paso1', '/BxI/CambioClaveInternet/Paso1'],
    'cambio de clave internet paso 2': ['pr-cambio-clave-internet-paso2', '/BxI/CambioClaveInternet/Exito'],
    //MIS DATOS PERSONALES
    'mis datos personales': ['pr-modificacion-de-datos-personales'],
    //MI CORRESPONDENCIA
    'mi correspondencia': ['pr-mi-correspondencia', 'pr-micorrespondencia-paso1-configuracionactual'],
    //MODIFICAR MI CORRESPONDENCIA
    'modificar mi correspondencia paso 1': ['pr-modificar-mi-correspondencia-paso1'],
    'modificar mi correspondencia paso 2': ['pr-modificar-mi-correspondencia-paso2'],
    'modificar mi correspondencia paso 3': ['pr-modificar-mi-correspondencia-paso3'],
    //CONFIGURACIÓN DE DATOS PERSONALES
    'configuracion de datos personales paso 1': ['pr-configurar-datos-personales-paso1'],
    //CMR PUNTOS
    'cmr puntos': ['pr-cmr-puntos'],
    //BLOQUEO DE TARJETA
    'bloqueo de tarjeta paso 1': ['pr-bloqueo-tarjeta-paso1'],
    'bloqueo de tarjeta paso 2': ['pr-bloqueo-tarjeta-paso2'],
    'bloqueo de tarjeta paso 3': ['pr-bloqueo-tarjeta-paso3'],
    //BANCA TELEFÓNICA
    'banca telefonica': ['pr-banca-telefonica'],
    //NOTIFICACIONES
    notificaciones: ['pr-notificaciones'],
    //SOLICITUDES Y RECLAMOS
    'solicitudes y reclamos': ['pr-solicitudes-y-reclamos'],
  };

  return jsonPages;
})();
