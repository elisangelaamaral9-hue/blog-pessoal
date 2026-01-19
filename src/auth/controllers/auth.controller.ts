import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { UsuarioService } from "../../usuario/services/usuario.service";
import { AuthService } from "../services/auth.service";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";


@Controller("/usuarios")
export class AuthController{

    constructor(
        private readonly usuarioService: UsuarioService,
        private readonly authService: AuthService
    ){ }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.usuarioService.findById(id)
    }

    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario)
    }

    @Post('/logar')
    @HttpCode(HttpStatus.OK)
    async login(@Body() usuarioLogin: UsuarioLogin): Promise<any>{
        return this.authService.login(usuarioLogin)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.update(usuario)
    }

}