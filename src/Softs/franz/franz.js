const franz = {
  name: 'Franz',
  picture: 'franz.png',
  versions: ['5.0.0-beta.14', '5.0.0-beta.13', '5.0.0-beta.12'],
  script: ({ version, os }) => {
    switch (os) {
      case 'ubuntu-xenial':
        return `
wget https://github.com/meetfranz/franz/releases/download/v${version}/franz_${version}_amd64.deb
dpkg -i ./franz_${version}_amd64.deb
rm ./franz_${version}_amd64.deb
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