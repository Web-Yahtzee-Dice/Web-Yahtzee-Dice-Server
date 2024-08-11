import { Test, TestingModule } from '@nestjs/testing';
import { DicesController } from './dices.controller';
import { DicesService } from './dices.service';

describe('DicesController', () => {
  let controller: DicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DicesController],
      providers: [DicesService],
    }).compile();

    controller = module.get<DicesController>(DicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
