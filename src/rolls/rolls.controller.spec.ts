import { Test, TestingModule } from '@nestjs/testing';
import { RollsController } from './rolls.controller';
import { RollsService } from './rolls.service';

describe('RollsController', () => {
  let controller: RollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RollsController],
      providers: [RollsService],
    }).compile();

    controller = module.get<RollsController>(RollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
