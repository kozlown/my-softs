const jetbrainsToolbox = {
  name: 'JetBrains Toolbox',
  picture: 'jetbrains-toolbox.png',
  versions: ['1.6.2914', '1.5.2871'],
  script: ({ version }) => `
      wget https://download.jetbrains.com/toolbox/jetbrains-toolbox-${version}.tar.gz
      tar zxvf jetbrains-toolbox-${version}.tar.gz
      mv jetbrains-toolbox-${version} /opt/
      rm ./jetbrains-toolbox-${version}.tar.gz
      ln -s /opt/jetbrains-toolbox-${version}/jetbrains-toolbox /usr/bin/jetbrains-toolbox
    `
}

export default jetbrainsToolbox