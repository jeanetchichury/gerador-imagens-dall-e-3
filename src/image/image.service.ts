import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class ImageService {

  constructor(
    private prisma: PrismaService
  ) {} 
  
  async create(dataInput: Prisma.ImageCreateInput) {
    return await this.prisma.image.create({
      data:{
        url: dataInput.url,
        ImageUser: dataInput.ImageUser || undefined        
      }
    });
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
}
