import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { forwardRef } from "@nestjs/common";
import { LocalStrategy } from "./strategy/local.strategy";
import { AuthService } from "./services/auth.service";
import { jwtConstants } from "./constants/constants";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { UsuarioModule } from "../usuario/usuario.module";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { AuthController } from "./controllers/auth.controller";



@Module({
imports: [
    forwardRef (() => UsuarioModule),
    PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h'},
    })
],

    controllers: [AuthController],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    exports: [Bcrypt],
})

export class AuthModules {};