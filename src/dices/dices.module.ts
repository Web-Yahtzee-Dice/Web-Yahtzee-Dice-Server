import { Module } from '@nestjs/common';
import { DicesService } from './dices.service';
import { DicesController } from './dices.controller';

@Module({
  controllers: [DicesController],
  providers: [DicesService],
})
export class DicesModule {}
