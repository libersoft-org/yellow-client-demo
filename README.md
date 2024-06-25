# Yellow Web Client

[![Created Badge](https://badges.pufler.dev/created/libersoft-org/yellow-client-web)](https://badges.pufler.dev) [![Updated Badge](https://badges.pufler.dev/updated/libersoft-org/yellow-client-web)](https://badges.pufler.dev) [![Visits Badge](https://badges.pufler.dev/visits/libersoft-org/yellow-client-web)](https://badges.pufler.dev)

This is the web client implementation of [**ODTP Protocol**](https://github.com/libersoft-org/odtp-documentation/).

If you just want to get your free [**Yellow**](https://yellow.libersoft.org) account hosted on our server, please navigate to:

[![YellowNet.io](https://raw.githubusercontent.com/libersoft-org/odtp-documentation/main/logo.png)](https://yellownet.io)

## Installation

**1. Download the latest version of Yellow Web Client:**

```bash
git clone https://github.com/libersoft-org/yellow-client-web.git
cd yellow-client-web
git checkout svelte
npm i
```

**2. Now you can either build the app and then host it on your web server or run a standalone web server:**

**a)** Build the app

```bash
./build.sh
```

... and then you can either host it on your web server (the content is in "build" directory) or run a web server for it:

```bash
npm run preview -- --host 0.0.0.0
```

**b)** Build the app and pack it

```bash
./build-pack.sh
```

... then you will find **yellow.tar.gz** file in project root directory. Running the build script again will delete the original packed file.

**b)** To start the standalone web server:

```bash
npm run liveserver
```

## Documentation

- [**Development roadmap**](./ROADMAP.md)
- [**License**](./LICENSE)

## Donations

Donations are important to support the ongoing development and maintenance of our open source projects. Your contributions help us cover costs and support our team in improving our software. We appreciate any support you can offer.

To find out how to donate our projects, please navigate here:

[![Donate](https://raw.githubusercontent.com/libersoft-org/documents/main/donate.png)](https://libersoft.org/donations)

Thank you for being a part of our projects' success!

## Star history

[![Star History Chart](https://api.star-history.com/svg?repos=libersoft-org/yellow-client-web&type=Date)](https://star-history.com/#libersoft-org/yellow-client-web&Date)
