import { TestBed, inject } from '@angular/core/testing';

import { LocalSettingsService } from './local-settings.service';

describe('LocalSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalSettingsService]
    });
  });

  it(
    'should be created',
    inject([LocalSettingsService], (service: LocalSettingsService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'isSupported returns true when its available',
    inject([LocalSettingsService], (service: LocalSettingsService) => {
      const store = {};
      spyOn(localStorage, 'getItem').and.callFake((key: string) =>
        JSON.stringify(store[key])
      );
      spyOn(localStorage, 'setItem').and.callFake(
        (key: string, value: any) => (store[key] = '' + value)
      );
      expect((service as any).localStorageIsSupported()).toBeTruthy();
    })
  );
  it(
    'isSupported returns false when its not available',
    inject([LocalSettingsService], (service: LocalSettingsService) => {
      const store = {};
      spyOn(localStorage, 'getItem').and.throwError(
        'No Local storage supported'
      );
      spyOn(localStorage, 'setItem').and.throwError(
        'No Local storage supported'
      );
      expect((service as any).localStorageIsSupported()).toBeFalsy();
    })
  );

  it(
    'getConfig returns the DEFAULT_CONFIG if it does not exist',
    inject([LocalSettingsService], (service: LocalSettingsService) => {
      const store = {};
      const localSettingKey = ((service as any).DEFAULT_CONFIG = {
        testExistingValue: true
      });
      spyOn(localStorage, 'getItem').and.callFake((key: string) =>
        JSON.stringify(store[key])
      );
      spyOn(localStorage, 'setItem').and.callFake(
        (key: string, value: any) => (store[key] = '' + value)
      );

      expect((service as any).getConfig()['testExistingValue']).toBeTruthy();
    })
  );
  it(
    'getConfig returns the config, if it already exists',
    inject([LocalSettingsService], (service: LocalSettingsService) => {
      const localSettingKey = (service as any).LOCAL_SETTING_KEY;
      const store = {};
      store[localSettingKey] = {
        testValue: true
      };
      spyOn(localStorage, 'getItem').and.callFake((key: string) =>
        JSON.stringify(store[key])
      );
      // spyOn(localStorage, 'setItem').and.throwError('No Local storage supported');
      expect((service as any).getConfig()).toBeTruthy();
      expect((service as any).getConfig()['testValue']).toBeTruthy();
    })
  );
});
