import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Postagem } from "../entities/postagem_entitys";
import { PostagemService } from "../service/postagem.service";

@Controller("/postagens")
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) { }

@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<Postagem[]> {
return this.postagemService.findAll();
}

}