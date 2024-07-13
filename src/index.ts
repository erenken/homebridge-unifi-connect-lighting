import { API } from 'homebridge';
import { PLATFORM_NAME } from './settings';
import { UniFiConnectLightingPlatform } from './connect-platform';

export default (api: API) => {
    api.registerPlatform(PLATFORM_NAME, UniFiConnectLightingPlatform);
  };