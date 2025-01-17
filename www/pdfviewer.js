'use strict';

var PDFViewer = {

    // Callback when the user chooses the 'Done' button
    // called from native
    _onClose: function () {
        this.onClose();
    },

    /* The interface that you will use to access functionality */

    // Show a webpage, will result in a callback to onLocationChange
    showPDF: function (loc, options, callback) {
        var defaultOptions = {
            showButtons: 0, //0: no buttons; 1: ok button, 2: ok and cancel button
            cancel: "Cancel",
            ok: "OK",
//            save: "Save"
        };

        Object.keys(options).forEach(function (key) {
            defaultOptions[key] = options[key];
        });

        cordova.exec(callback, null, 'PDFViewer', 'showPDF', [loc, defaultOptions]);
    },

    // close the browser, will NOT result in close callback
    close: function () {
        cordova.exec(null, null, 'PDFViewer', 'close', []);
    }
};

module.exports = PDFViewer;