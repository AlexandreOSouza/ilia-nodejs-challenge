export interface TRANSACTION<t> {
  list: (limit: number, page: number) => Promise<t[]>;
  create: (resource: t) => Promise<t>;
  readById: (id: string) => Promise<t[]>;
}
