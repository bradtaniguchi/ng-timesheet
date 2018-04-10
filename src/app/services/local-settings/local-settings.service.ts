import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export interface LocalSettings {
  timeFormat: TimeFormat;
}
export type TimeFormat = 'military' | 'twelve-hour';
/**
 * LocalSettingService is used to interact with localStorage to hold some user configuration
 * and application settings which is not saved in the firestore database.
 */
@Injectable()
export class LocalSettingsService {
  // the default local storage settings key
  private readonly LOCAL_SETTING_KEY = 'settings';
  // the default config object, note this can still be modified at runtime.
  // this is OK, as this can only be done in memory, if localStorage doesn't exist
  // the settings will stay until the page is refreshed.
  private readonly DEFAULT_CONFIG: LocalSettings = {
    timeFormat: 'twelve-hour'
  };
  // an observable we can subscribe to outside of this service, any time the localSettings are changed.
  private readonly _config = new Subject<LocalSettings>();
  constructor() { }
  /**
   * isSupported returns if
   */
  private localStorageIsSupported(): boolean {
    const testVal = 'testVal';
    try {
      localStorage.setItem(testVal, testVal);
      localStorage.removeItem(testVal);
      return true;
    } catch (e) {
      return false;
    }
  }
  /**
   * setConfig sets the default config if it doesn't exist, and we return the
   * object at the end. This function also emits the config observable.
   * @param config the given config, if this is given we set the value as this.
   * Otherwise we use the DEFAULT_CONFIG object.
   */
  private setConfig(config?: LocalSettings): LocalSettings {
    const configToSet = config || this.DEFAULT_CONFIG;
    localStorage.setItem(this.LOCAL_SETTING_KEY, JSON.stringify(configToSet));
    this._config.next(configToSet);
    return configToSet;
  }
  /**
   * getConfig returns the current localSetting object. If the object does not exist, we
   * automatically add it to localStorage.
   */
  private getConfig(): LocalSettings {
    if (this.localStorageIsSupported()) {
      const config = localStorage.getItem(this.LOCAL_SETTING_KEY);
      if (config) {
        return JSON.parse(config);
      } else {
        return this.setConfig();
      }
    } else {
      return this.DEFAULT_CONFIG;
    }
  }
  get config(): Observable<LocalSettings> {
    return this._config.asObservable();
  }

  getTimeFormat(): TimeFormat {
    return this.getConfig().timeFormat;
  }

  setTimeFormat(format: TimeFormat): void {
    const config = this.getConfig();
    config.timeFormat = format;
    this.setConfig(config);
  }

}
