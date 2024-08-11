import { Injectable } from '@nestjs/common';
import { CreateDiceDto } from './dto/create-dice.dto';
import { UpdateDiceDto } from './dto/update-dice.dto';

@Injectable()
export class DicesService {
  create(createDiceDto: CreateDiceDto) {
    return 'This action adds a new dice';
  }

  findAll() {
    return `This action returns all dices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dice`;
  }

  update(id: number, updateDiceDto: UpdateDiceDto) {
    return `This action updates a #${id} dice`;
  }

  remove(id: number) {
    return `This action removes a #${id} dice`;
  }
}
