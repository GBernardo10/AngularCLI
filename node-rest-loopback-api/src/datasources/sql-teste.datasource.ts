import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './sql-teste.datasource.json';

export class SqlTesteDataSource extends juggler.DataSource {
  static dataSourceName = 'SQLTeste';

  constructor(
    @inject('datasources.config.SQLTeste', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
