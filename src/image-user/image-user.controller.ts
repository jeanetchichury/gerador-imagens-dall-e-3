import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageUserService } from './image-user.service';
import { Prisma } from '@prisma/client';
Prisma

@Controller('image-user')
export class ImageUserController {
  constructor(private readonly imageUserService: ImageUserService) {}

  @Post()
  create(@Body() imageUserInput: Prisma.ImageUserUncheckedCreateInput) {
    return this.imageUserService.create(imageUserInput);
  }

  @Get()
  findAll() {
    return this.imageUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() imageUserInput: Prisma.ImageUserUncheckedUpdateInput) {
    return this.imageUserService.update(id, imageUserInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageUserService.remove(id);
  }
}
