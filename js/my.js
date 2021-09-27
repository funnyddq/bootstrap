/*!
  * Bootstrap v5.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
    console.log('global = ' + global);
    console.log('factory = ' + factory);
    console.log('window = ' + window);
    console.log('self = ' + self);
    console.log('this = ' + this);
    console.log('globalThis = ' + globalThis);
    console.log('window === this ? ' + (window === this));
    console.log('window === self ? ' + (window === self));
    console.log('window === global ? ' + (window === global));
    console.log('window === globalThis ? ' + (window === globalThis));
    console.log('this === self ? ' + (this === self));
    console.log('this ==== global ? ' + (this === global));
    console.log('this ==== globalThis ? ' + (this === globalThis));
    console.log('self ==== global ? ' + (self === global));
    console.log('self ==== globalThis ? ' + (self === globalThis));

    console.log('------------------------------------------------');
    console.log(typeof exports);
    console.log(typeof module);
    console.log(typeof define);

    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory());
})(this, function () {
    'use strict';
    console.log('in Inner function');
    var a = 1;
    var b = 2;
    var c = 3;
    var d = {a, b, c};
    return d;
});
