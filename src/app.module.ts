import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem_entitys';
import { PostagemModule } from './postagem/produto.module';
import { Tema } from './tema/entities/tema.entitys';
import { TemaModule } from './tema/tema.modules';
import { AuthModules } from './auth/auth.modules';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
	    useClass: ProdService,
      imports: [ConfigModule],

}),

    PostagemModule,
    TemaModule,
    AuthModules,
    UsuarioModule,
    
  ],
    controllers: [AppController],
    providers: [],

})
export class AppModule {}
