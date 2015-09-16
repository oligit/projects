// Para obtener una introducción a la plantilla En blanco, consulte la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) { //onactivated == window.onload
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: Esta aplicación se ha iniciado recientemente. Inicializar
                // la aplicación aquí.
                var num1 = document.querySelectorAll('input')[0];
                var num2 = document.querySelectorAll('input')[1];
                var salida;
                var second = false;
                var botones = document.querySelectorAll('button');
                console.dir(botones);
                //WinJS.Navigation.addEventListener('click', captura, false);
                for (var i = 0; i < botones.length; i++) {
                    botones[i].addEventListener('click', captura, false);
                }
                function captura(e) {
                    var _x = e.target.innerHTML;
                    var op;
                    var num = 0;
                    if (!isNaN(Number(_x))) {           //si es un numero......................
                        if (Number(num1.value) == 0) {  //si ya hay un cero borramos
                            num = Number(_x);
                            num1.value = num;

                        } else {//si no, concatenamos
                            num = num1.value;
                            num += Number(_x);
                            num1.value = num;
                        }
                        
                    } else { //si es una operacion aritmética..............
                        switch (_x) {
                            case '+':
                                op = '';
                                break;
                            default:
                                statements_def
                                break;
                        }
                    }
                    
                }
            } else {
                // TODO: Esta aplicación se ha reactivado tras estar suspendida.
                // Restaurar el estado de la aplicación aquí.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: Esta aplicación está a punto de suspenderse. Guardar cualquier estado
        // que deba mantenerse a través de las suspensiones aquí. Puede usar el
        // objeto WinJS.Application.sessionState, que se guarda y se restaura
        // automáticamente en las suspensiones. Si debe completar una
        // operación asincrónica antes de suspenderse la aplicación, llame a
        // args.setPromise().
    };

    app.start();
})();
