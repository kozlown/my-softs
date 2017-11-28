const nodejs = {
  name: 'Node.js',
  picture: 'nodejs.png',
  versions: ['8.9.1', '9.2.0'],
  script: ({ version, os }) => {
    switch (os) {
      case 'ubuntu-xenial':
        return `
wget https://nodejs.org/dist/v${version}/node-v${version}-linux-x64.tar.xz
tar xf node-v${version}-linux-x64.tar.xz
mv node-v${version}-linux-x64 /opt/
rm ./node-v${version}-linux-x64.tar.xz
ln -s /opt/node-v${version}-linux-x64/bin/node /usr/bin/node
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default nodejs