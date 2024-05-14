import { Module } from '@nestjs/common';
import { ImageUserService } from './image-user.service';
import { ImageUserController } from './image-user.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ImageUserController],
  providers: [ImageUserService, PrismaService],
  exports:[ImageUserService]
})
export class ImageUserModule {}
