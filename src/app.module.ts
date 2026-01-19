import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem_entitys';
import { PostagemModule } from './postagem/produto.module';
import { Tema } from './tema/entities/tema.entitys';
import { TemaModule } from './tema/tema.modules';
import { AuthModules } from './auth/auth.modules';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      process.env.NODE_ENV === 'test'
        ? {
            type: 'sqlite',
            database: ':memory:',
            entities: [Postagem, Tema, Usuario],
            synchronize: true,
            dropSchema: true,
            logging: false,
          }
        : {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_blogpessoal',
            entities: [Postagem, Tema, Usuario],
            synchronize: true,
            logging: true,
          },
    ),
    PostagemModule,
    TemaModule,
    AuthModules,
    UsuarioModule,
  ],
})
export class AppModule {}
