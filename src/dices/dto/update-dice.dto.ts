import { PartialType } from '@nestjs/mapped-types';
import { CreateDiceDto } from './create-dice.dto';

export class UpdateDiceDto extends PartialType(CreateDiceDto) {}
