module.exports = {
  sidebar: {
    '/guide/': [
      {
        text: 'Bruxelle',
        collapsible: true,
        children: [
          {
            text: 'A4',
            collapsible: true,
            children: [
              {
                text: 'Perfect',
                collapsible: true,
                children: [
                  `/guide/Bruxelle/A4/Perfect/blury.md`,
                  `/guide/Bruxelle/A4/Perfect/classic.md`,
                  `/guide/Bruxelle/A4/Perfect/coordone.md`,
                ],
              },
              `/guide/Bruxelle/A4/clenup.md`,
              `/guide/Bruxelle/A4/my_jouse.md`,
              `/guide/Bruxelle/A4/search.md`,
            ],
          },
          `/guide/Bruxelle/my_life.md`,
        ],
      },
      {
        text: 'started',
        collapsible: true,
        children: [
          `/guide/started/Administration-interface-to-manage-the-cluster.md`,
          {
            text: 'Stateur',
            collapsible: true,
            children: [
              {
                text: 'goo boys',
                collapsible: true,
                children: [
                  `/guide/started/Stateur/goo_boys/boys.md`,
                ],
              },
              `/guide/started/Stateur/Configuratuion.md`,
            ],
          },
          {
            text: 'Moula',
            collapsible: true,
            children: [
              `/guide/started/Moula/autre.md`,
              `/guide/started/Moula/test.md`,
            ],
          },
          `/guide/started/The-WAAP-in-the-cloud.md`,
          `/guide/started/Add-a-Reverse-Proxy.md`,
          `/guide/started/Add-a-Tunnel-to-secure-a-web-application.md`,
          `/guide/started/Administration-IP-and-WAAP-ports-to-open-on-network-firewall.md`,
          `/guide/started/Apply-the-configuration.md`,
          `/guide/started/Configure-IP-addresses,-routes-and-server-time.md`,
          `/guide/started/Configure-the-Management-or-Managed-mode.md`,
          `/guide/started/Get-started.md`,
          `/guide/started/Installation-from-the-ISO.md`,
          `/guide/started/Request-and-assign-a-WAAP-license.md`,
          `/guide/started/The-WAAP-on-a-virtual-machine.md`,
          `/guide/started/The-WAAP-on-an-appliance.md`,
          `/guide/started/UBIKA-Support---Contact.md`,
        ],
      },
    ],
  },
}
