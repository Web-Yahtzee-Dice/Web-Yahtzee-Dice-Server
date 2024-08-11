import { Test, TestingModule } from '@nestjs/testing';
import { RollsService } from './rolls.service';

describe('RollsService', () => {
  let service: RollsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RollsService],
    }).compile();

    service = module.get<RollsService>(RollsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
