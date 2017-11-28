const jetbrainsToolbox = {
  name: 'JetBrains Toolbox',
  picture: 'jetbrains-toolbox.png',
  versions: [{
    name: '1.6.2914',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '1.5.2871',
    allowedOs: ['Ubuntu 16.04']
  }],
  script: ({ version, os }) => {
    switch (os) {
      case 'Ubuntu 16.04':
        return `
wget https://download.jetbrains.com/toolbox/jetbrains-toolbox-${version.name}.tar.gz
tar zxvf jetbrains-toolbox-${version.name}.tar.gz
mv jetbrains-toolbox-${version.name} /opt/
rm ./jetbrains-toolbox-${version.name}.tar.gz
ln -s /opt/jetbrains-toolbox-${version.name}/jetbrains-toolbox /usr/bin/jetbrains-toolbox
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default jetbrainsToolbox