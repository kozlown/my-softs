const franz = {
  name: 'Franz',
  picture: 'franz.png',
  versions: [{
    name: '5.0.0-beta.14',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '5.0.0-beta.13',
    allowedOs: ['Ubuntu 16.04']
  }, {
    name: '5.0.0-beta.12',
    allowedOs: ['Ubuntu 16.04']
  }],
  script: ({ version, os }) => {
    switch (os) {
      case 'Ubuntu 16.04':
        return `
wget https://github.com/meetfranz/franz/releases/download/v${version.name}/franz_${version.name}_amd64.deb
dpkg -i ./franz_${version.name}_amd64.deb
rm ./franz_${version.name}_amd64.deb
wget "https://cdn-images-1.medium.com/max/360/1*v86tTomtFZIdqzMNpvwIZw.png" -O /opt/Franz/franz.png
bash -c "cat <<EOF > /usr/share/applications/franz.desktop                                                                 
[Desktop Entry]
Name=Franz
Comment=
Exec=/opt/Franz/franz
Icon=/opt/Franz/franz.png
Terminal=false
Type=Application
Categories=Messaging,Internet
EOF"
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default franz