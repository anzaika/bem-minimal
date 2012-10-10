MAKE.decl('Arch', {
  getLibraries: function() {
    return {
      '.lib/bem-bl': {
        type: 'git',
        url:  'git://github.com/bem/bem-bl.git',
        treeish: '0.3'
      }
    }
  }
})
