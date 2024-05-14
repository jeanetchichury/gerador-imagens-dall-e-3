import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import OpenAI from 'openai';
import { PrismaService } from 'src/prisma.service';
import { OpenaiCreateImageDto } from './dto/openaiCreateImageDto';
import { ImageUserService } from 'src/image-user/image-user.service';

@Injectable()
export class ImageService {

  constructor(
    private prisma: PrismaService,
    private imageUserService: ImageUserService
  ) {} 
  
  async create(dataInput: OpenaiCreateImageDto) {

    const openaiImageCreation = await this.openaiCreateImage(dataInput.prompt)[0]

    const imageGenerated = await this.prisma.image.create({
      data:{
        url: openaiImageCreation.url,
      }
    });

    const imageUser = await this.imageUserService.create({
      imageId: imageGenerated.id,
      userId: dataInput.userId
    })
    
    return imageUser
  }

  async findAll() {
    return await this.prisma.image.findMany();
  }

  async findOne(id: string) {
    const image = await this.prisma.image.findFirst({
      where:{
        id
      }
    });

    if (!image) {
      throw new BadRequestException('Paciente não encontrado.')
    }

    return image
  }

  async update(id: string, dataInput: Prisma.ImageUpdateInput) {
      await this.findOne(id)

    return await this.prisma.image.update({
      where:{
        id
      },
      data:{
        url: dataInput.url,
        ImageUser: dataInput.ImageUser || undefined        
      }
    });
  }

  async remove(id: string) {
    await this.findOne(id)

    return this.prisma.image.delete({
      where:{
        id
      }
    });
  }

  async openaiCreateImage(prompt) {
    
    const openai = new OpenAI()

    const image = await openai.images.generate({ model: "dall-e-3", prompt, n:1 });
  
    return image.data;
  }
}
