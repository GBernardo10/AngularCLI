import { DefaultCrudRepository } from '@loopback/repository';
import { Users } from '../models';
import { SqlTesteDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.userId
  > {
  getName(username: string): Users | PromiseLike<Users> {
    throw new Error("Method not implemented.");
  }
  constructor(
    @inject('datasources.SQLTeste') dataSource: SqlTesteDataSource,
  ) {
    super(Users, dataSource);
  }
}
