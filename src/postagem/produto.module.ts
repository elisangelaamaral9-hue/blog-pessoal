import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem_entitys";
import { PostagemController } from "./controller/produto.controller";
import { PostagemService } from "./service/postagem.service";


@Module({

imports: [TypeOrmModule.forFeature ([Postagem])],
providers: [PostagemService],
controllers: [PostagemController],
exports: [],
})

export class PostagemModule {}