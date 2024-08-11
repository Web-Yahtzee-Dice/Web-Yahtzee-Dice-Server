import { Injectable } from '@nestjs/common';
import { CreateRollDto } from './dto/create-roll.dto';
import { UpdateRollDto } from './dto/update-roll.dto';

@Injectable()
export class RollsService {
  create(createRollDto: CreateRollDto) {
    return 'This action adds a new roll';
  }

  findAll() {
    return `This action returns all rolls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roll`;
  }

  update(id: number, updateRollDto: UpdateRollDto) {
    return `This action updates a #${id} roll`;
  }

  remove(id: number) {
    return `This action removes a #${id} roll`;
  }
}
