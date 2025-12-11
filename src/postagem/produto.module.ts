import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem_entitys";
import { PostagemController } from "./controller/postagem.controller";
import { PostagemService } from "./service/postagem.service";
import { TemaModule } from "../tema/tema.modules";


@Module({

imports: [TypeOrmModule.forFeature ([Postagem]), TemaModule],
providers: [PostagemService],
controllers: [PostagemController],
exports: [],
})

export class PostagemModule {}