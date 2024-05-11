import { Test, TestingModule } from '@nestjs/testing';
import { ImageUserController } from './image-user.controller';
import { ImageUserService } from './image-user.service';

describe('ImageUserController', () => {
  let controller: ImageUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageUserController],
      providers: [ImageUserService],
    }).compile();

    controller = module.get<ImageUserController>(ImageUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
