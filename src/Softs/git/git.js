const git = {
  name: 'Git',
  picture: 'git.png',
  versions: [{
    name: 'latest',
    allowedOs: ['Ubuntu 16.04']
  }],
  script: ({ version, os }) => {
    switch (os) {
      case 'Ubuntu 16.04':
        return `
apt install git
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default git