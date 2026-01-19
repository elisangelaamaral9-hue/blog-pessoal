import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
import { AuthModules } from '../auth/auth.modules';

@Module({
  imports: 
  [TypeOrmModule.forFeature([Usuario]),
  forwardRef(() => AuthModules),

], 
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}