import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, UserService, PrismaService],
})
export class LoginModule {}
