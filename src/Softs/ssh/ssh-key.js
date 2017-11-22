const sshKey = {
  name: 'SSH Key',
  picture: 'ssh-key.png',
  versions: ['1.6.2914', '1.5.2871'],
  script: ({ version, os }) => {
    switch (os) {
      case 'ubuntu-xenial':
        return `
wget https://download.jetbrains.com/toolbox/jetbrains-toolbox-${version}.tar.gz
tar zxvf jetbrains-toolbox-${version}.tar.gz
mv jetbrains-toolbox-${version} /opt/
rm ./jetbrains-toolbox-${version}.tar.gz
ln -s /opt/jetbrains-toolbox-${version}/jetbrains-toolbox /usr/bin/jetbrains-toolbox
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default sshKey