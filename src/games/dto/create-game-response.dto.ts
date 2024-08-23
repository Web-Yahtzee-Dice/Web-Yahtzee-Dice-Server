import {  IsNumber } from 'class-validator';


export class CreateGameResponseDto { 
    @IsNumber()
    id:number;

    constructor(data:{id:number}){
        this.id = data.id;
    }
}