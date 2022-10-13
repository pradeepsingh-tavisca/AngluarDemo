import "zone.js/dist/zone";

// This is Accessed by the remote user using Live share

import AppModule from "./app/app.module"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

platformBrowserDynamic().bootstrapModule(AppModule) 