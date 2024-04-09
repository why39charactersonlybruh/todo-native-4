import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.imdprogram.todothingy',
  appName: 'todothingy',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
