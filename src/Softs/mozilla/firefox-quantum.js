const firefoxQuantum = {
  name: 'Firefox Quantum',
  picture: 'firefox-quantum.png',
  versions: [{
    name: '57.0',
    allowedOs: ['Ubuntu 16.04']
  }],
  script: ({ version, os }) => {
    switch (os) {
      case 'Ubuntu 16.04':
        return `
wget https://download-installer.cdn.mozilla.net/pub/firefox/releases/${version.name}/linux-x86_64/en-US/firefox-${version.name}.tar.bz2
tar jxvf firefox-${version.name}.tar.bz2
mv firefox /opt/
rm ./firefox-${version.name}.tar.bz2
rm /usr/bin/firefox
ln -s /opt/firefox/firefox /usr/bin/firefox
bash -c "cat <<EOF > /usr/share/applications/firefox.desktop                                                                 
[Desktop Entry]
Name=Firefox
Comment=
Exec=/opt/firefox/firefox %u
Icon=/opt/firefox/browser/icons/mozicon128.png
Terminal=false
Type=Application
Categories=Internet
EOF"
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default firefoxQuantum