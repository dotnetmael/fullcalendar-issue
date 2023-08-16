import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import 'zone.js'; // hack for StackBlitz

function bootstrap() {
                          platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
                        };


 if (document.readyState === 'complete') {
   bootstrap();
 } else {
   document.addEventListener('DOMContentLoaded', bootstrap);
 }
 
