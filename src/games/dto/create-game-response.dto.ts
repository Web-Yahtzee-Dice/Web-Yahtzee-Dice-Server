import {  IsNumber } from 'class-validator';


export class CreateGameResponseDto { 
    @IsNumber()
    game_id:number;

    constructor(data:{id:number}){
        this.game_id = data.id;
    }
}