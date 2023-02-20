export type MockTemplate = Record<string, any>

export interface MockInput {
  body: Record<string, any>
}
export interface Mock {
  [key: string]: ((input: MockInput) => MockTemplate) | MockTemplate
}
