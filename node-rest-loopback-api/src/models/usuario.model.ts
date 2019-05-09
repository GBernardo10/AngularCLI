import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Usuario extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_Usuario: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  senha: string;

  @property({
    type: 'number',
    required: true,
  })
  fk_idSoft: number;

  @property({
    type: 'number',
    required: true,
  })
  fk_idAcesso: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}
