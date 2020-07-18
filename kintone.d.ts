export declare namespace kintone {
  export namespace events {
    export function on(event: string | string[], handler: (event: any) => any): void
    export function off(event: string | string[], handler: (event: any) => any): boolean
    export function off(event: string | string[]): boolean
    export function off(): boolean
  }

  export namespace api {
    export function url(path: string, detectGuestSpace?: boolean): string
    export function urlForGet(path: string, params: any, detectGuestSpace?: boolean): string

    export function getConcurrencyLimit(): Promise<{
      limit: number
      running: number
    }>
  }

  export function api(pathOrUrl: string, method: string, params: any): Promise<any>

  export function api(
    pathOrUrl: string,
    method: string,
    params: any,
    callback: (resp: any) => void,
    errback: (err: any) => void
  ): void

  export function getRequestToken(): string

  export function proxy(url: string, method: string, headers: any, data: any): Promise<any>

  export function proxy(
    url: string,
    method: string,
    headers: any,
    data: any,
    callback: (resp: any) => void,
    errback: (err: any) => void
  ): void

  class Promise<T> {
    constructor(callback: (resolve: (resolved: T) => any, reject: (rejected: any) => any) => void)

    then(callback: (resolved: T) => any): Promise<any>
    catch(callback: (rejected: any) => any): Promise<any>

    static resolve(resolved: any): Promise<any>
    static reject(rejected: any): Promise<any>
    static all(listOfPromise: Promise<any>[]): Promise<any>
  }

  export namespace proxy {
    export function upload(
      url: string,
      method: string,
      headers: any,
      data: any,
      callback: (resp: any) => void,
      errback: (err: any) => void
    ): void

    export function upload(url: string, method: string, headers: any, data: any): Promise<any>
  }

  export namespace app {
    export function getFieldElements(fieldCode: string): HTMLElement[] | null
    export function getHeaderMenuSpaceElement(): HTMLElement | null
    export function getHeaderSpaceElement(): HTMLElement | null
    export function getId(): number | null
    export function getLookupTargetAppId(fieldCode: string): string | null
    export function getQuery(): string | null
    export function getQueryCondition(): string | null
    export function getRelatedRecordsTargetAppId(fieldCode: string): string | null

    export namespace record {
      export function getId(): number | null
      export function get(): any | null
      export function getHeaderMenuSpaceElement(): HTMLElement | null
      export function getFieldElement(fieldCode: string): HTMLElement | null
      export function set(record: any): void
      export function getSpaceElement(id: string): HTMLElement | null
      export function setFieldShown(fieldCode: string, isShwon: boolean): void
      export function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void
    }
  }

  export namespace mobile {
    export namespace app {
      export function getHeaderSpaceElement(): HTMLElement | null
      export function getId(): number | null
      export function getLookupTargetAppId(fieldCode: string): string | null
      export function getQuery(): string | null
      export function getQueryCondition(): string | null
      export function getRelatedRecordsTargetAppId(fieldCode: string): string | null

      export namespace record {
        export function getId(): number | null
        export function get(): any | null
        export function set(record: any): void
        export function getSpaceElement(id: string): HTMLElement | null
        export function setFieldShown(fieldCode: string, isShwon: boolean): void
        export function setGroupFieldOpen(fieldCode: string, isOpen: boolean): void
      }
    }

    export namespace portal {
      export function getContentSpaceElement(): HTMLElement | null
    }
  }

  export namespace plugin {
    export const $PLUGIN_ID: string
    export namespace app {
      export function getConfig(pluginId: string): any
      export function setConfig(config: any, callback?: () => void): void

      export function proxy(
        pluginId: string,
        url: string,
        method: string,
        headers: any,
        data: any
      ): Promise<any>

      export function proxy(
        pluginId: string,
        url: string,
        method: string,
        headers: any,
        data: any,
        callback: (resp: any) => void,
        error: (err: any) => void
      ): void

      export function setProxyConfig(
        url: string,
        method: string,
        headers: any,
        data: any,
        callback?: () => void
      ): void

      export function getProxyConfig(url: string, method: string): any

      export namespace proxy {
        export function upload(
          pluginId: any,
          url: string,
          method: string,
          headers: any,
          data: any
        ): Promise<any>

        export function upload(
          pluginId: any,
          url: string,
          method: string,
          headers: any,
          data: any,
          callback: (resp: any) => void,
          error: (err: any) => void
        ): void
      }
    }
  }

  export namespace portal {
    export function getContentSpaceElement(): HTMLElement | null
  }

  export interface LoginUser {
    id: string
    code: string
    name: string
    email: string
    url: string
    employeeNumber: string
    phone: string
    mobilePhone: string
    extensionNumber: string
    timezone: string
    isGuest: boolean
    language: string
  }

  export function getLoginUser(): LoginUser
  export function getUiVersion(): 1 | 2

  export namespace fieldTypes {
    export interface SingleLineText {
      type?: 'SINGLE_LINE_TEXT'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface RichText {
      type?: 'RICH_TEXT'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface MultiLineText {
      type?: 'MULTI_LINE_TEXT'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface Number {
      type?: 'NUMBER'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface Calc {
      type: 'CALC'
      value: string
      disabled?: boolean
    }

    export interface RadioButton {
      type?: 'RADIO_BUTTON'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface DropDown {
      type?: 'DROP_DOWN'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface Date {
      type?: 'DATE'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface Time {
      type?: 'TIME'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface DateTime {
      type?: 'DATETIME'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface Link {
      type?: 'LINK'
      value: string
      disabled?: boolean
      error?: string
    }

    export interface CheckBox {
      type?: 'CHECK_BOX'
      value: string[]
      disabled?: boolean
      error?: string
    }

    export interface MultiSelect {
      type?: 'MULTI_SELECT'
      value: string[]
      disabled?: boolean
      error?: string
    }

    export interface UserSelect {
      type?: 'USER_SELECT'
      value: { code: string; name: string }[]
      disabled?: boolean
      error?: string
    }

    export interface OrganizationSelect {
      type?: 'ORGANIZATION_SELECT'
      value: { code: string; name: string }[]
      disabled?: boolean
      error?: string
    }

    export interface GroupSelect {
      type?: 'GROUP_SELECT'
      value: { code: string; name: string }[]
      disabled?: boolean
      error?: string
    }

    export interface File {
      type: 'FILE'
      value: {
        contentType: string
        fileKey: string
        name: string
        size: string
      }[]
      disabled?: boolean
      error?: string
    }

    export interface Id {
      type: '__ID__'
      value: string
    }

    export interface Revision {
      type: '__REVISION__'
      value: string
    }

    /**
     * field type of UserField is MODIFIER.
     * So error property not exists.
     */
    export interface Modifier {
      type: 'MODIFIER'
      value: { code: string; name: string }
    }

    /**
     * field type of UserField is CREATOR.
     * So error property not exists.
     */
    export interface Creator {
      type: 'CREATOR'
      value: { code: string; name: string }
    }

    export interface RecordNumber {
      type: 'RECORD_NUMBER'
      value: string
      error?: string
    }

    export interface UpdatedTime {
      type: 'UPDATED_TIME'
      value: string
      error?: string
    }

    export interface CreatedTime {
      type: 'CREATED_TIME'
      value: string
      error?: string
    }
  }
}
