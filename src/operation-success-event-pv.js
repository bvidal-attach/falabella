(function() {

    try {

      var handleError = {{js fun handleError}};
      var isActualPage = {{js isActualPage}};
      var cleanString = {{js fun cleanString}};
      var sendEvent = {{js fun sendEvent}};
      var getfromDataLayer = {{js fun getFromDataLayer}};

      var ruta = getfromDataLayer('customPage');
      var operacionExitosa = 'operacion exitosa';
      var label = 'paso 3';


      //OPERACIONES EXITOSAS

      //Transf. Entre cuentas
      if (isActualPage('transferencias entre cuentas paso 3')) {
        pushEvent('op :: transferencia entre cuentas', operacionExitosa, label)

      }
      //Transf. A terceros
      else if (isActualPage('transferencias a terceros paso 3')) {
        pushEvent('op :: transferencia a terceros', operacionExitosa, label)

      }
      //Modificar destinatarios frecuentes 
      else if (isActualPage('modificar destinatarios frecuentes paso 3')) {
        pushEvent('op :: modificar destinatarios frecuentes', operacionExitosa, label)

      }
      //Agregar destinatarios frecuentes 
      else if (isActualPage('agregar destinatarios frecuentes paso 3')) {
        pushEvent('op :: agregar destinatarios frecuentes', operacionExitosa, label)

      }
      //Pago tarjeta de crédito propia 
      else if (isActualPage('pagos de tarjeta de credito propia paso 3')) {
        pushEvent('op :: pago de tarjeta de credito propia', operacionExitosa, label)

      }
      //Pago tarjeta de crédito de terceros 
      else if (isActualPage('pagos de tarjeta de credito de terceros paso 3')) {
        pushEvent('op :: pago de tarjeta de credito de terceros', operacionExitosa, label)

      }
      //Inscripción de servicios
      else if (isActualPage('inscripcion de servicios paso 3')) {
        pushEvent('op ::  inscripcion de nueva cuenta', operacionExitosa, label)

      }
      //Pago de servicios
      else if (isActualPage('pagos de servicios paso 3')) {
        pushEvent('op :: pago de servicios', operacionExitosa, label)

      }
      //Pago de cuotas
      else if (ruta.indexOf('Cuotas/Paso3') > -1) {
        pushEvent('op :: pago de cuotas', operacionExitosa, label)

      }
      //Aumento línea de crédito
      else if (isActualPage('aumento de linea de compras paso 3')) {
        pushEvent('op :: aumento linea de credito', operacionExitosa, label)

      }
      //Solicitar Rapicash
      else if (isActualPage('solicitar rapicash paso 3')) {
        pushEvent('op :: solicitar rapicash', operacionExitosa, label)

      }
      //Solicitar Crédito
      else if (ruta.indexOf('CreditoEfectivo/Paso3') > -1) {
        pushEvent('op :: solicitar credito efectivo', operacionExitosa, label)

      }
      //Bloqueo de tarjeta
      else if (isActualPage('bloqueo de tarjeta paso 3')) {
        pushEvent('op :: bloqueo de tarjeta', operacionExitosa, label)

      }
      //Modificar mi correspondencia
      else if (isActualPage('modificar mi correspondencia paso 3')) {
        pushEvent('op :: mi correspondencia ', operacionExitosa, label)

      }
      //Cambio clave PIN
      else if (isActualPage('cambio de clave pin paso 3')) {
        pushEvent('op :: cambio de clave pin ', 'cambio exitoso', label)

      }
      //Cambio clave internet
      else if (isActualPage('cambio de clave internet paso 2')) {
        pushEvent('op ::cambio de clave de internet ', 'cambio exitoso', 'paso 2')

      }



    } catch (error) { handleError(error) }

    function pushEvent(c, a, l) {
      try {
        c = cleanString(c)
        a = cleanString(a)
        l = cleanString(l)
        sendEvent(c, a, l)
      } catch (e) { handleError(e) }
    }

  })()