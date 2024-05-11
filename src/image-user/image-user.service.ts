import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ImageUserService {

  constructor(
    private prisma: PrismaService
  ) {} 
  
  async create(imageUserInput: Prisma.ImageUserUncheckedCreateInput) {
    return await this.prisma.imageUser.create({
      data:{
        imageId:imageUserInput.imageId,
        userId: imageUserInput.userId
      }
    });
  }

  async findAll() {
    return this.prisma.imageUser.findMany();
  }

  async findOne(id: string) {
    const imageUser = await this.prisma.imageUser.findFirst({
      where:{
        id
      }
    });

    if (!imageUser) {
      throw new BadRequestException('Paciente não encontrado.')
    }

    return imageUser
  }

  async update(id: string, imageUserInput: Prisma.ImageUserUncheckedUpdateInput) {
    await this.findOne(id)

    return await this.prisma.imageUser.update({
      where:{
        id
      },
      data:{
        imageId:imageUserInput.imageId,
        userId: imageUserInput.userId
      }
    });
  }

  async remove(id: string) {
    await this.findOne(id)

    return this.prisma.imageUser.delete({
      where:{
        id
      }
    });
  }
}
