import { Test, TestingModule } from '@nestjs/testing';
import { DicesService } from './dices.service';

describe('DicesService', () => {
  let service: DicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DicesService],
    }).compile();

    service = module.get<DicesService>(DicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
