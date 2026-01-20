import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
import { AuthModules } from '../auth/auth.modules';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
  imports: 
  [TypeOrmModule.forFeature([Usuario]),
  forwardRef(() => AuthModules),

], 
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}