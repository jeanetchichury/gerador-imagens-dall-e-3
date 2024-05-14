import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageService } from './image.service';
import { Prisma } from '@prisma/client';
import { OpenaiCreateImageDto } from './dto/openaiCreateImageDto';


@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post()
  create(@Body() dataInput: OpenaiCreateImageDto) {
    return this.imageService.create(dataInput);
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dataInput: Prisma.ImageUpdateInput) {
    return this.imageService.update(id, dataInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(id);
  }
}
