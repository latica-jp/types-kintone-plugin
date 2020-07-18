export declare namespace cybozu {
  export namespace data {
    export namespace page {
      export const FORM_DATA: {
        layout: Layout
        schema: Schema
        lookups: { [x: string]: Lookup }
      }
      
      export type Layout = (Row | Subtable)[]

      export type Row = {
        id: null
        type: 'ROW'
        isSubtable: false
        var: null
        label: null
        controlList: [RowField | RowReferenceTable | RowLabel | RowHr | RowSpacer]
      }

      export type Subtable = {
        id: string
        type: 'SUBTABLE'
        isSubtable: true
        var: string
        label: string
        controlList: [RowField]
      }

      export type RowField = {
        isVirtical: true
        type:
          | 'RECORD_NUMBER'
          | 'CREATOR'
          | 'CREATED_TIME'
          | 'MODIFIER'
          | 'UPDATED_TIME'
          | 'SINGLE_LINE_TEXT'
          | 'NUMBER'
          | 'CALC'
          | 'MULTI_LINE_TEXT'
          | 'RICH_TEXT'
          | 'CHECK_BOX'
          | 'RADIO_BUTTON'
          | 'DROP_DOWN'
          | 'MULTI_SELECT'
          | 'FILE'
          | 'LINK'
          | 'DATE'
          | 'TIME'
          | 'DATETIME'
          | 'USER_SELECT'
          | 'ORGANIZATION_SELECT'
          | 'GROUP_SELECT'
        styleMap: {
          width: number
        }
        var: string
        label: string
      }

      export type RowReferenceTable = {
        isVirtical: true
        type: 'REFERENCE_TABLE'
        styleMap: {}
        var: string
        label: string
      }

      export type RowLabel = {
        type: 'LABEL'
        formatted: string
      }

      export type RowHr = {
        type: 'HR'
      }

      export type RowSpacer = {
        elementId: string
        type: 'SPACER'
      }

      export type FieldMapping = {
        fieldId: string
        targetFieldId: string
      }

      export type LookupCondition = LookupConditionComparision | LookupConditionIn
      export type LookupConditionComparision = {
        key: string
        nest: number
        op: 'LIKE' | 'NOT_LIKE' | 'EQ' | 'NE' | 'LE' | 'LT' | 'GE' | 'GT' | 'IN' | 'NOT_IN'
        type: 'COMPARISION'
        value: {
          args: { type: string; value: string }[] | null
          type: 'STRING' | 'FUNCTION'
          value: string
        }
      }

      export type LookupConditionIn = {
        key: string
        nest: number
        op: 'IN'
        type: 'IN'
        values: {
          args: null
          type: 'STRING'
          value: string
        }[]
      }
      export type Schema = {
        table: {
          fieldList: {
            [x: string]: Field
          }
        }
        subTable: {
          [x: string]: {
            fieldList: {
              [x: string]: Field
            }
            var: string
          }
        }
      }

      export type Field = {
        id: string
        type: string
        var: string
      }

      export type Lookup = {
        id: string
        fieldMappings: FieldMapping[]
        keyMapping: FieldMapping
        keyTargetFieldAccessible: boolean
        listFields: string[]
        query: {
          condition: {
            children: LookupCondition[]
            op: 'AND' | 'OR'
            type: string
            nest: number
          }
          limit: string
          offset: string
          orders: { name: string; op: 'ASC' | 'DESC' }[]
        }
        targetApp: {
          id: string
          schema: {
            table: {
              fieldList: {
                [x: string]: {
                  id: string
                  label: string
                  type: string
                  var: string
                  properties: {
                    options: { id: string; label: string }[]
                  }
                }
              }
            }
          }
        }
        unAccessibleFieldIds: string[]
      }
    }
  }
}
