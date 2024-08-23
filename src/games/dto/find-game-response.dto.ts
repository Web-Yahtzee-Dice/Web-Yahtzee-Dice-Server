import { IsNumber, IsDate, IsEnum, IsOptional } from 'class-validator';

export class FindGameResponseDto {
    @IsNumber()
    game_id: number;

    @IsNumber()
    @IsOptional()
    game_winner_id: number | null;

    @IsEnum(['wait', 'proceed', 'end'])
    game_status: 'wait' | 'proceed' | 'end';

    @IsDate()
    game_start_time: Date;

    @IsDate()
    @IsOptional()
    game_end_time: Date | null;

    constructor(data: {
        game_id: number;
        game_winner_id?: number | null;
        game_status: 'wait' | 'proceed' | 'end';
        game_start_time: Date | string;
        game_end_time?: Date | string | null;
    }) {
        this.game_id = data.game_id;
        this.game_winner_id = data.game_winner_id ?? null;
        this.game_status = data.game_status;
        this.game_start_time = new Date(data.game_start_time);
        this.game_end_time = data.game_end_time ? new Date(data.game_end_time) : null;
    }
}