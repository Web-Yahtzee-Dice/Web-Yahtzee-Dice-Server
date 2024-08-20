import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RollsService } from './rolls.service';
import { CreateRollDto } from './dto/create-roll.dto';
import { UpdateRollDto } from './dto/update-roll.dto';

@Controller('rolls')
export class RollsController {
  constructor(private readonly rollsService: RollsService) {}

  @Post()
  create(@Body() createRollDto: CreateRollDto) {
    return this.rollsService.create(createRollDto);
  }

  @Get()
  findAll() {
    return this.rollsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rollsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRollDto: UpdateRollDto) {
    return this.rollsService.update(+id, updateRollDto);
  }


}
