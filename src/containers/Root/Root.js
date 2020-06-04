if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod').default; // eslint-disable-line global-require
} else {
    module.exports = require('./Root.dev').default; // eslint-disable-line global-require
}
