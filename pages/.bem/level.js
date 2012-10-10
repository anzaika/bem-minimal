var extend = require('bem/lib/util').extend,
    PATH = require('path')
    BEM_BL = '../../.lib/bem-bl',
    BEM_TECHS = BEM_BL + '/blocks-common/i-bem/bem/techs';

// How does it work?
exports.getTechs = function() {
  return {
      'bemjson.js': '', // Where does it find this tech?
      'js': 'js-i',
      'bemhtml': PATH.join(BEM_TECHS, 'bemhtml.js'),
      'html': PATH.join(BEM_TECHS, 'html.js')
  };
};

// How does it work?
exports.getConfig = function() {
  return extend({}, this.__base() || {}, {
    bundleBuildLevels: this.resolvePaths([
      BEM_BL + '/blocks-common',
      BEM_BL + '/blocks-desktop',
    ])
  });
};
