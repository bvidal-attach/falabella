var floodlightTaggingBXI = (function () {
  var me = {
    debug: false,
    methods: {
      floodlight: {
        __event: function (counter, type, cat, data) {
          // var dataLayer = (window.dtmLayer && window.dtmLayer.push) ? window.dtmLayer : window.dataLayer;
          var dataLayer = window.dtmLayer && window.dtmLayer.push ? window.dtmLayer : window.dataLayer;
          var eventData = {
            event: counter,
            fl_type: type,
            fl_cat: cat,
          };
          if (typeof data === 'object') {
            for (var key in data) {
              if (data.hasOwnProperty(key)) {
                eventData[key] = data[key];
              }
            }
          }
          me.methods.log('eventData :', eventData);
          if (!me.debug) {
            dataLayer.push(eventData);
          }
        },
        counter: function (type, cat, data) {
          me.methods.floodlight.__event('fl.counter', type, cat, data);
        },
        sales: function (type, cat, data) {
          me.methods.floodlight.__event('fl.sales', type, cat, data);
        },
      },
      log: function () {
        if (me.debug) {
          var printLog = /\{\s*\[native code\]\s*\}/.test(console.log.toString())
            ? console.log
            : /\{\s*\[native code\]\s*\}/.test(console.info.toString())
            ? console.info
            : function () {};
          var args = Array.prototype.slice.call(arguments);
          printLog('%cATM Debug', 'color:#2f7de1; font-size:11px; font-weight: 600;');
          printLog.apply(null, args);
        }
      },
    },
    run: function () {
      window.addEventListener('dataLayerPush', function (evt) {
        me.methods.log('evt.detail.event: ', evt.detail.event);
        me.methods.log('evt.detail.data: ', evt.detail.data);

        var eventName = evt.detail.event;
        if (/^customPageView$/.test(eventName)) {
          var pageviewPath = evt.detail.data.customPage || '';
          me.methods.log('pageviewPath: ', pageviewPath);

          /*
           * Login
           */

          /* Paso 1 */
          if (pageviewPath === '/BxI/Login' || eventName === '--- UNKNOWN ---') {
            me.methods.floodlight.counter('login', 'bxilo0', { fl_product_name: 'LOGIN', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Login.TipoDocumento' || eventName === '--- UNKNOWN ---') {
            /* Paso 2 */
            me.methods.floodlight.counter('login', 'bxilo0', { fl_product_name: 'LOGIN', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Login.NDocumento' || eventName === '--- UNKNOWN ---') {
            /* Paso 3 */
            me.methods.floodlight.counter('login', 'bxilo0', { fl_product_name: 'LOGIN', fl_step: 'PASO 3' });
          } else if (pageviewPath === '/BxI/Login.Exito' || eventName === '--- UNKNOWN ---') {
            /* Login exitoso */
            me.methods.floodlight.counter('login', 'bxilo0', { fl_product_name: 'LOGIN', fl_step: 'EXITO' });
          }

          // /*
          // ***********************
          // Creación de Clave de Internet
          // ***********************
          // */

          // /* Paso 1 */
          // else if (pageviewPath === '/BxI/CreaClaveInternet/Paso1' || eventName === '--- UNKNOWN ---') {

          //   me.methods.floodlight.counter('CLAVE INTERNET', '', { fl_product_name: 'CLAVE INTERNET', fl_step: 'PASO 1' });

          // }
          // /* Paso 2 */
          // else if (pageviewPath === '/BxI/CreaClaveInternet/Paso2' || eventName === '--- UNKNOWN ---') {

          //   me.methods.floodlight.counter('CLAVE INTERNET', '', { fl_product_name: 'CLAVE INTERNET', fl_step: 'PASO 2' });

          // }
          // /* Paso 3 */
          // else if (pageviewPath === '/BxI/CreaClaveInternet/Paso3' || eventName === '--- UNKNOWN ---') {

          //   me.methods.floodlight.counter('CLAVE INTERNET', '', { fl_product_name: 'CLAVE INTERNET', fl_step: 'PASO 3' });

          // }
          // /* Login exitoso */
          // else if (pageviewPath === '/BxI/CreaClaveInternet/Exito' || eventName === '--- UNKNOWN ---') {

          //   me.methods.floodlight.counter('CLAVE INTERNET', '', { fl_product_name: 'CLAVE INTERNET', fl_step: 'EXITO' });

          // }

          /* 
                ***********************
                Rapicash 
                ***********************
                */

          /* Simulador - Paso 1 */
          else if (pageviewPath === '/BxI/Simular/Rapicash/Paso1' || pageviewPath === 'pr-simular-rapicash-paso1' || eventName === 'pvBxISimRapP1') {
            me.methods.floodlight.counter('simular', 'bxisi0', { fl_product_name: 'SIMULAR RAPICASH', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Simular/Rapicash/Paso2' || pageviewPath === 'pr-simular-rapicash-paso2' || eventName === 'pvBxISimRapP2') {
            /* Simulador - Paso 2 */
            me.methods.floodlight.counter('simular', 'bxisi0', { fl_product_name: 'SIMULAR RAPICASH', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Solicitar/RapiCash/Paso1' || pageviewPath === 'pr-solicitar-rapicash-paso1' || eventName === 'pvBxISolicitarRapiCashP1') {
            /* Desembolso - Paso 1 */
            me.methods.floodlight.counter('simular', 'bxiso0', { fl_product_name: 'SOLICITAR RAPICASH', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Solicitar/RapiCash/Paso2' || pageviewPath === 'pr-solicitar-rapicash-paso2' || eventName === 'pvBxISolicitarRapiCashP2') {
            /* Desembolso - Paso 2 */
            me.methods.floodlight.counter('simular', 'bxiso0', { fl_product_name: 'SOLICITAR RAPICASH', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Solicitar/RapiCash/Paso3' || pageviewPath === 'pr-solicitar-rapicash-paso3' || eventName === 'pvBxISolicitarRapiCashP3') {
            /* Desembolso - Paso 3 */
            me.methods.floodlight.counter('simular', 'bxiso0', { fl_product_name: 'SOLICITAR RAPICASH', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxiso0', { fl_product_name: 'SOLICITAR RAPICASH', fl_transaction_id: transactionId, fl_amount: amount });
          } else if (pageviewPath === '/BxI/Simular/CreditoEfectivo/Paso1' || eventName === 'pvBxISimularCEfecP1') {
            /* 
                ***********************
                Crédito Efectivo 
                ***********************
                */

            /* Simulador - Paso 1 */
            me.methods.floodlight.counter('bxice0', 'bxisi0', { fl_product_name: 'SIMULAR CREDITO EFECTIVO', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Simular/CreditoEfectivo/Paso2' || eventName === 'pvBxISimularCEfecP2') {
            /* Simulador - Paso 2 */
            me.methods.floodlight.counter('bxice0', 'bxisi0', { fl_product_name: 'SIMULAR CREDITO EFECTIVO', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Solicitar/CreditoEfectivo/Paso1' || eventName === '--- UNKNOWN --') {
            /* Desembolso - Paso 1 */
            me.methods.floodlight.counter('bxice0', 'bxiso0', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Solicitar/CreditoEfectivo/Paso2' || eventName === '--- UNKNOWN --') {
            /* Desembolso - Paso 2 */
            me.methods.floodlight.counter('bxice0', 'bxiso0', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Solicitar/CreditoEfectivo/Paso3' || eventName === '--- UNKNOWN --') {
            /* Desembolso - Paso 3 */
            me.methods.floodlight.counter('bxice0', 'bxiso0', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxiso00', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_transaction_id: transactionId, fl_amount: amount });
          } else if (pageviewPath === 'pr-prestamoefectivo-paso1-formulariosimulacion') {
            /* 
                ***********************
                Préstamo Efectivo 
                ***********************
                */

            /* Paso 1 */
            me.methods.floodlight.counter('bxice0', 'bxisi0', { fl_product_name: 'SIMULAR CREDITO EFECTIVO', fl_step: 'PASO 1' });
          } else if (pageviewPath === 'pr-prestamoefectivo-paso2-resultadosimulacion') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxice0', 'bxisi0', { fl_product_name: 'SIMULAR CREDITO EFECTIVO', fl_step: 'PASO 2' });
          } else if (pageviewPath === 'pr-prestamoefectivo-paso3-seleccioncuenta') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxice0', 'bxiso0', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_step: 'PASO 1' });
          } else if (pageviewPath === 'pr-prestamoefectivo-paso4-validaciontransaccion') {
            /* Paso 4 */
            me.methods.floodlight.counter('bxice0', 'bxiso0', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_step: 'PASO 2' });
          } else if (pageviewPath === 'pr-prestamoefectivo-paso5-comprobante') {
            /* Paso 5 */
            me.methods.floodlight.counter('bxice0', 'bxiso0', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxiso00', { fl_product_name: 'SOLICITAR CREDITO EFECTIVO', fl_transaction_id: transactionId, fl_amount: amount });
          } else if (pageviewPath === '/BxI/AumentoLineaCredito/Paso1' || eventName === 'pvBxIALCP1') {
            /* 
                ***********************
                Aumento de Línea
                ***********************
                */

            /* Paso 1 */
            me.methods.floodlight.counter('bxiau0', 'bxiau0', { fl_product_name: 'SOLICITAR AUMENTO LINEA', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/AumentoLineaCredito/Paso2' || eventName === '--- UNKNOWN --') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxiau0', 'bxiau0', { fl_product_name: 'SOLICITAR AUMENTO LINEA', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/AumentoLineaCredito/Paso3' || eventName === '--- UNKNOWN --') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxiau0', 'bxiau0', { fl_product_name: 'SOLICITAR AUMENTO LINEA', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxiau0', { fl_product_name: 'SOLICITAR AUMENTO LINEA', fl_transaction_id: transactionId, fl_amount: amount });
          } else if (pageviewPath === '/BxI/Transferencias/CuentasPropias/Paso1' || eventName === 'pvBxITransCPropP1') {
            /* 
                ***********************
                Transferencias a cuentas propias
                ***********************
                */

            /* Paso 1 */
            me.methods.floodlight.counter('bxitr0', 'bxitr0', { fl_product_name: 'TRANSFERENCIAS - CUENTAS PROPIAS', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Transferencias/CuentasPropias/Paso2' || eventName === 'pvBxITransCPropP2') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxitr0', 'bxitr0', { fl_product_name: 'TRANSFERENCIAS - CUENTAS PROPIAS', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Transferencias/CuentasPropias/Paso3' || eventName === 'pvBxITransCPropP3') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxitr0', 'bxitr0', { fl_product_name: 'TRANSFERENCIAS - CUENTAS PROPIAS', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxitr0', { fl_product_name: 'TRANSFERENCIAS - CUENTAS PROPIAS', fl_transaction_id: transactionId, fl_amount: amount });
          } else if (pageviewPath === '/BxI/Transferencias/ATerceros/Paso1' || eventName === 'pvBxITransfATercP1') {
            /* 
                ***********************
                Transferencias a terceros
                ***********************
                */

            /* Paso 1 */
            me.methods.floodlight.counter('bxitr0', 'bxitr00', { fl_product_name: 'TRANSFERENCIAS - A TERCEROS', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Transferencias/ATerceros/Paso2' || eventName === 'pvBxITransfATercP2') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxitr0', 'bxitr00', { fl_product_name: 'TRANSFERENCIAS - A TERCEROS', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Transferencias/ATerceros/Paso3' || eventName === 'pvBxITransfATercP3') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxitr0', 'bxitr00', { fl_product_name: 'TRANSFERENCIAS - A TERCEROS', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxitr00', { fl_product_name: 'TRANSFERENCIAS - A TERCEROS', fl_transaction_id: transactionId, fl_amount: amount });
          } else if (pageviewPath === '/BxI/Transferencias/ConsultaDestinatariosFrecuentes' || eventName === 'pvBxITransCDestFrec') {
            /* 
                ***********************
                Transferencias a destinatario frecuente
                ***********************
                */

            /* Consulta */
            me.methods.floodlight.counter('bxitr0', 'bxitr000', { fl_product_name: 'TRANSFERENCIAS - DESTINATARIO FRECUENTE', fl_step: 'CONSULTA' });
          } else if (pageviewPath === '/BxI/Transferencias/AgregarDestinatarioFrecuente/Paso1.NDestinatario' || eventName === '--- UNKNOWN --') {
            /* Paso 1 */
            me.methods.floodlight.counter('bxitr0', 'bxitr000', { fl_product_name: 'TRANSFERENCIAS - DESTINATARIO FRECUENTE', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Transferencias/AgregarDestinatarioFrecuente/Paso2' || eventName === 'pvBxITransfADFP2') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxitr0', 'bxitr000', { fl_product_name: 'TRANSFERENCIAS - DESTINATARIO FRECUENTE', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Transferencias/AgregarDestinatarioFrecuente/Paso3' || eventName === 'pvBxITransfADFP3') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxitr0', 'bxitr000', { fl_product_name: 'TRANSFERENCIAS - DESTINATARIO FRECUENTE', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxitr000', {
              fl_product_name: 'TRANSFERENCIAS - DESTINATARIO FRECUENTE',
              fl_transaction_id: transactionId,
              fl_amount: amount,
            });
          } else if (pageviewPath === '/BxI/Pagos/Servicios' || eventName === 'pvBxIPaServ') {
            /* 
                ***********************
                Pago de servicios
                ***********************
                */

            /* Lista de servicios */
            me.methods.floodlight.counter('bxipa0', 'bxipa0', { fl_product_name: 'PAGOS - SERVICIOS', fl_step: 'LISTA DE SERVICIOS' });
          } else if (pageviewPath === '/BxI/Pagos/InscripcionServicios/Paso1' || eventName === 'pvBxIInsServP1') {
            /* Paso 1 */
            me.methods.floodlight.counter('bxipa0', 'bxipa0', { fl_product_name: 'PAGOS - SERVICIOS', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Pagos/InscripcionServicios/Paso2' || eventName === 'pvBxIInsServP2') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxipa0', 'bxipa0', { fl_product_name: 'PAGOS - SERVICIOS', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Pagos/InscripcionServicios/Paso3' || eventName === 'pvBxIInsServP3') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxipa0', 'bxipa0', { fl_product_name: 'PAGOS - SERVICIOS', fl_step: 'PASO 3' });
          }
          // Pago de tarjeta de crédito propia
          else if (pageviewPath === '/BxI/Pagos/TarjetaCreditoPropia/Paso1' || eventName === 'pvBxIPaTCPP1') {
            /* Paso 1 */
            me.methods.floodlight.counter('bxipa0', 'bxipa00', { fl_product_name: 'PAGOS - TARJETA PROPIA', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Pagos/TarjetaCreditoPropia/Paso2' || eventName === 'pvBxIPaTCPP2') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxipa0', 'bxipa00', { fl_product_name: 'PAGOS - TARJETA PROPIA', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Pagos/TarjetaCreditoPropia/Paso3' || eventName === 'pvBxIPaTCPP3') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxipa0', 'bxipa00', { fl_product_name: 'PAGOS - TARJETA PROPIA', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxipa0', { fl_product_name: 'PAGOS - TARJETA PROPIA', fl_transaction_id: transactionId, fl_amount: amount });
          } else if (pageviewPath === '/BxI/Pagos/TarjetaCreditoTercero/Paso1' || eventName === 'pvBxIPaTCTP1') {
            /* 
                ***********************
                Pago de tarjeta de terceros
                ***********************
                */

            /* Paso 1 */
            me.methods.floodlight.counter('bxipa0', 'bxipa000', { fl_product_name: 'PAGOS - TARJETA TERCEROS', fl_step: 'PASO 1' });
          } else if (pageviewPath === '/BxI/Pagos/TarjetaCreditoTercero/Paso2' || eventName === 'pvBxIPaTCTP2') {
            /* Paso 2 */
            me.methods.floodlight.counter('bxipa0', 'bxipa000', { fl_product_name: 'PAGOS - TARJETA TERCEROS', fl_step: 'PASO 2' });
          } else if (pageviewPath === '/BxI/Pagos/TarjetaCreditoTercero/Paso3' || eventName === 'pvBxIPaTCTP3') {
            /* Paso 3 */
            me.methods.floodlight.counter('bxipa0', 'bxipa000', { fl_product_name: 'PAGOS - TARJETA TERCEROS', fl_step: 'PASO 3' });

            /* Send Sales */
            var transactionId = 0;
            var amount = 0;
            me.methods.floodlight.sales('bxisa0', 'bxipa00', { fl_product_name: 'PAGOS - TARJETA TERCEROS', fl_transaction_id: transactionId, fl_amount: amount });
          }
          // Deposito Plazo Fijo
          // else if (pageviewPath === 'pr-depositoaplazoinversion-paso1-simulacion') {
          //   /* Paso 1 */
          //   me.methods.floodlight.counter('ld-cbf', 'bfpe-0');
          // }
        }
      });
    },
  };
  return me;
})();
floodlightTaggingBXI.run();
