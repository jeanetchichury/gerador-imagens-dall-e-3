import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { PrismaService } from 'src/prisma.service';
import { ImageUserService } from 'src/image-user/image-user.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, PrismaService, ImageUserService],
})
export class ImageModule {}
