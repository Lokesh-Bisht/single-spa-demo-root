import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lokesh/navbar",
  app: () => System.import("@lokesh/navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
