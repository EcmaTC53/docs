import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'ECMA-419 Docs',
    social: {
      github: 'https://github.com/ecmatc53/docs'
    },
    editLink: {
      baseUrl: "https://github.com/ecmatc53/docs/edit/main/"
    },
    customCss: [
      './src/styles/tailwind.css',
    ],
    sidebar: [{
      label: 'API',
      items: [{
        label: "Overview",
        link: "/api/"
      }, {
        label: "Base Class",
        link: "/api/base-class"
      }, {
        label: "IO Class",
        autogenerate: {
          directory: "/api/io-class"
        },
        collapsed: true
      }, {
        label: "IO Provider Class",
        link: "/api/io-provider-class"
      }, {
        label: "Peripheral Class",
        link: "/api/peripheral-class"
      }, {
        label: "Sensor Class",
        autogenerate: {
          directory: "/api/sensor-class"
        },
        collapsed: true
      }, {
        label: "Display Class",
        link: "/api/display-class"
      }, {
        label: "Real Time Clock Class",
        link: "/api/real-time-clock-class"
      }, {
        label: "Network Interface Class",
        autogenerate: {
          directory: "/api/network-interface-class"
        },
        collapsed: true
      }, {
        label: "DNS Resolver Class",
        link: "/api/dns-resolver-class"
      }, {
        label: "NTP Client Class",
        link: "/api/ntp-client-class"
      }, {
        label: "HTTP Client Class",
        link: "/api/http-client-class"
      }, {
        label: "HTTP Server Class",
        link: "/api/http-server-class"
      }, {
        label: "WebSocket Client Class",
        link: "/api/websocket-client-class"
      }, {
        label: "MQTT Client Class",
        link: "/api/mqtt-client-class"
      }, {
        label: "Host Provider",
        link: "/api/host-provider"
      }, {
        label: "Provenance Sensor Class",
        link: "/api/provenance-sensor-class"
      }]
    }, {
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  })]
});
