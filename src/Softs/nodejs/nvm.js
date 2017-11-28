const nvm = {
  name: 'Nvm',
  picture: 'nvm.png',
  versions: ['0.33.6', '0.33.5', '0.33.4', '0.33.3', '0.33.2', '0.33.1', '0.33.0'],
  script: ({ version, os }) => {
    switch (os) {
      case 'ubuntu-xenial':
        return `
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v${version}/install.sh | bash
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default nvm