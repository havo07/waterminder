import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'waterminder',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  ios: {
    handleApplicationNotifications: false
  }
};

export default config;
