import { DefaultCrudRepository } from '@loopback/repository';
import { Usuario } from '../models';
import { SevenSoftDbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id_Usuario
  > {
  constructor(
    @inject('datasources.SevenSoftDB') dataSource: SevenSoftDbDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
