import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  userId: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;
  // private userName: string;
  // public get username(): string {
  //   return this.userName;
  // }
  // public set username(value: string) {
  //   this.userName = value;
  // }

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;


  constructor(data?: Partial<Users>) {
    super(data);
  }
}
