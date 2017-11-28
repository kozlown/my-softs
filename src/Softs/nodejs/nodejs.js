const nodejs = {
  name: 'Node.js',
  picture: 'nodejs.png',
  versions: [{
    name: '8.9.1',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '9.2.0',
    allowedOs: ['Ubuntu 16.04']
  }],
  script: ({ version, os }) => {
    switch (os) {
      case 'Ubuntu 16.04':
        return `
wget https://nodejs.org/dist/v${version.name}/node-v${version.name}-linux-x64.tar.xz
tar xf node-v${version.name}-linux-x64.tar.xz
mv node-v${version.name}-linux-x64 /opt/
rm ./node-v${version.name}-linux-x64.tar.xz
ln -s /opt/node-v${version.name}-linux-x64/bin/node /usr/bin/node
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default nodejs