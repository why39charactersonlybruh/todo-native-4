import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.imdprogram.todothingy',
  appName: 'todothingy',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
