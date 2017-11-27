const firefoxQuantum = {
  name: 'Firefox Quantum',
  picture: 'firefox-quantum.png',
  versions: ['57.0'],
  script: ({ version, os }) => {
    switch (os) {
      case 'ubuntu-xenial':
        return `
wget https://download-installer.cdn.mozilla.net/pub/firefox/releases/${version}/linux-x86_64/en-US/firefox-${version}.tar.bz2
tar jxvf firefox-${version}.tar.bz2
mv firefox /opt/
rm ./firefox-${version}.tar.bz2
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