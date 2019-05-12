import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  Request,
  Response
} from '@loopback/rest';
import { Users } from '../models';
import { UserRepository } from '../repositories';
import { resolve } from 'dns';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Users } } },
      },
    },
  })
  async create(@requestBody() user: Users): Promise<Users> {
    return await this.userRepository.create(user);
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'User model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where,
  ): Promise<Count> {
    return await this.userRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of User model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Users } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Users)) filter?: Filter,
  ): Promise<Users[]> {
    return await this.userRepository.find(filter);
  }

  @patch('/users', {
    responses: {
      '200': {
        description: 'User PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() user: Users,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where,
  ): Promise<Count> {
    return await this.userRepository.updateAll(user, where);
  }

  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Users } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Users> {
    return await this.userRepository.findById(id);
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'User PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() user: Users,
  ): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  @put('/users/{id}', {
    responses: {
      '204': {
        description: 'User PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() user: Users,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del('/users/{id}', {
    responses: {
      '204': {
        description: 'User DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userRepository.deleteById(id);
  }

  // public async getUserName(req: Request, res: Response): Promise<void> {
  //   const {username} = req.params;
  //   const userGetName = await
  // };

  // @get('/users/{username}', {
  //   responses: {
  //     '200': {
  //       description: 'User model instance',
  //       content: { 'application/json': { schema: { 'x-ts-type': Users } } },
  //     },
  //   },
  // })
  // async countDois(
  //   @param.query.object('where', getWhereSchemaFor(Users)) where?: Where,
  // ): Promise<Count> {
  //   return await this.userRepository.count(where);
  // }
  // async getName(@param.path.string('username') username: string): Promise<Users> {
  //   return await this.userRepository.getName(username);
  // }

  //async getName(@param.query`select * from users where id=2` _username :string){
  @get('/users/nomes/', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Users } } },
      },
    },
  })
  // async whereByName(
  //   @param.query.object('where', getWhereSchemaFor(Users)) where?: Where, ): Promise<Users> {
  //   return await this.userRepository.find({ order: { username: DESC } });
  // }
  // async whereByName(
  //   @param.path.string('username') username: string,
  //   @param.query.object('where', getWhereSchemaFor(Users)) where?: Where, ): Promise<Users[]> {
  //   return await this.userRepository.find({ where: { username: username } });
  // }
  async whereByName(
    @param.query.string('username') username: string,
    @param.query.object('where', getWhereSchemaFor(Users)) where?: Where, ): Promise<Users[]> {
    return await this.userRepository.find({ where: { username: username } });
  }
}
