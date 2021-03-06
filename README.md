# My-softs

My-softs is a softs installer generator for Linux. :sparkles:
It generates a shell script installing the softs you previously selected.
You can try it [here](https://kozlown.github.io/my-softs/) ! :running:

<p align="center">
  <a target="_blank" href="https://yarnpkg.com" title="Yarn"><img src="https://img.shields.io/badge/Yarn-100%25-green.svg"></a>
  <a target="_blank" href="https://reactjs.org/" title="Yarn"><img src="https://img.shields.io/badge/React-100%25-green.svg"></a>
  <a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/Pull%20Requests-Welcomed-green.svg"></a>
  <a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>

## Contribute

You can (please do so ! :bowtie:) contribute to this project mostly by adding/modifying installers
which are located in the `/src/Softs` folder.
Watch below the installer template:

```javascript
const mySoft = {
  name: 'My Soft',
  picture: 'my-soft.png', // icon which will be displayed on the website
  versions: [{
    name: '1.6.2914',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '1.5.2871',
    allowedOs: ['Ubuntu 16.04']
  }], // all available versions
  script: ({ version, os }) => { // function which will generate the shell script depending of soft version and os
    switch (os) {
      case 'Ubuntu 16.04':
        return `
wget https://my-soft.com/download/my-soft-${version.name}.tar.gz
tar zxvf my-soft-${version.name}.tar.gz
mv my-soft-${version.name} /opt/
rm ./my-soft-${version.name}.tar.gz
ln -s /opt/my-soft-${version.name}/my-soft /usr/bin/my-soft
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default mySoft
```

## Licence

MIT © [Nigel Kozlowski](https://github.com/kozlown)
