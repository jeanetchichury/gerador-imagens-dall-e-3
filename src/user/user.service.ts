import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService
  ) {} 
  
  async create(dataInput: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data:{
        name: dataInput.name,
        password: dataInput.password,
        user: dataInput.user,
        ImageUser: dataInput.ImageUser || null
      }
    })
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where:{
        id
      }
    });

    if (!user) {
      throw new BadRequestException('Paciente não encontrado.')
    }

    return user
  }

  async update(id: string, dataInput: Prisma.UserUpdateInput) {
    
    await this.findOne(id)

    return await this.prisma.user.update({
      where:{
        id
      },
      data:{
        name: dataInput.name,
        password: dataInput.password,
        user: dataInput.user,
        ImageUser: dataInput.ImageUser || null
      }
    });
  }

  async remove(id: string) {
    
    await this.findOne(id)

    return await this.prisma.user.delete({
      where:{
        id
      }
    });
  }
}
