import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './seven-soft-db.datasource.json';

export class SevenSoftDbDataSource extends juggler.DataSource {
  static dataSourceName = 'SevenSoftDB';

  constructor(
    @inject('datasources.config.SevenSoftDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
