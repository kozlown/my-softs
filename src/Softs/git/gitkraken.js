const gitkraken = {
  name: 'GitKraken',
  picture: 'gitkraken.png',
  versions: ['latest'],
  script: ({ version, os }) => {
    switch (os) {
      case 'ubuntu-xenial':
        return `
wget https://release.gitkraken.com/linux/gitkraken-amd64.deb
dpkg -i gitkraken-amd64.deb
rm ./gitkraken-amd64.deb
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default gitkraken