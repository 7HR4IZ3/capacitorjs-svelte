import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gamerxville.comicdownloader',
  appName: 'comic-downloader',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
