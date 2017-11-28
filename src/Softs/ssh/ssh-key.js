const sshKey = {
  name: 'SSH Key',
  picture: 'ssh-key.png',
  versions: [{
    name: 'latest',
    allowedOs: ['Ubuntu 16.04']
  }],
  script: ({ version, os }) => {
    switch (os) {
      case 'Ubuntu 16.04':
        return `
ssh_email=
while [ -z $ssh_email ]
do
    echo -n 'SSH Key email ? '
    read ssh_email
done
ssh_user=
while [ -z $ssh_user ]
do
    echo -n 'SSH Key Linux user ? '
    read ssh_user
done

runuser -l $ssh_user -c 'ssh-keygen -t rsa -b 4096 -C "$ssh_email"'
printf "Here is your public key:\n\n\n"
runuser -l $ssh_user -c 'cat ~/.ssh/id_rsa.pub'
`
      default:
        throw new Error ('Invalid os')
    }
  }
}

export default sshKey