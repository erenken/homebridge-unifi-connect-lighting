import { API } from 'homebridge';
import { PLATFORM_NAME } from './settings.js';
import { UniFiConnectLightingPlatform } from './connect-platform.js';

export default (api: API) => {
    api.registerPlatform(PLATFORM_NAME, UniFiConnectLightingPlatform);
  };