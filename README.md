My-softs is a softs installer generator for Linux. :sparkles:
It generates a shell script installing the softs you previously selected.
You can try it [here](https://kozlown.github.io/my-softs/) ! :running:

# Contribute

You can (please do so ! :bowtie:) contribute to this project mostly by adding/modifying installers
which are located in the `/src/Softs` folder.
Watch below the installer template:

```javascript
const mySoft = {
  name: 'My Soft',
  picture: 'my-soft.png', // icon which will be displayed on the website
  versions: ['1.6.2914', '1.5.2871'], // all available versions
  script: ({ version, os }) => { // function which will generate the shell script depending of soft version and os
    switch (os) {
      case 'ubuntu-xenial':
        return `
wget https://my-soft.com/download/my-soft-${version}.tar.gz
tar zxvf my-soft-${version}.tar.gz
mv my-soft-${version} /opt/
rm ./my-soft-${version}.tar.gz
ln -s /opt/my-soft-${version}/my-soft /usr/bin/my-soft
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default mySoft
```
