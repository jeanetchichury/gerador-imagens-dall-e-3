import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ImageModule } from './image/image.module';
import { ImageUserModule } from './image-user/image-user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ImageModule, ImageUserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
