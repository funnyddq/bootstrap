    console.log('======================================');
    // console.log('window = ' + window);
    console.log('self = ' + self);
    console.log('this = ' + this);
    console.log('globalThis = ' + globalThis);
    console.log('window === this ? ' + (window === this));
    console.log('window === self ? ' + (window === self));
    console.log('window === globalThis ? ' + (window === globalThis));
    console.log('this === self ? ' + (this === self));
    console.log('this ==== globalThis ? ' + (this === globalThis));
    console.log('self ==== globalThis ? ' + (self === globalThis));

    console.log('------------------------------------------------');
    console.log(typeof exports);
    console.log(typeof module);
    console.log(typeof difine);
    console.log(typeof globalThis);
    console.log(this === globalThis);
