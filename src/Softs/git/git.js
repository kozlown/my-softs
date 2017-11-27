const git = {
  name: 'Git',
  picture: 'git.png',
  versions: ['latest'],
  script: ({ version, os }) => {
    switch (os) {
      case 'ubuntu-xenial':
        return `
apt install git
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default git