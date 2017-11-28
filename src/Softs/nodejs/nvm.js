const nvm = {
  name: 'Nvm',
  picture: 'nvm.png',
  versions: [{
    name: '0.33.6',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '0.33.5',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '0.33.4',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '0.33.3',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '0.33.2',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '0.33.1',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '0.33.0',
    allowedOs: ['Ubuntu 16.04']
  }],
  script: ({ version, os }) => {
    switch (os) {
      case 'Ubuntu 16.04':
        return `
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v${version.name}/install.sh | bash
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default nvm