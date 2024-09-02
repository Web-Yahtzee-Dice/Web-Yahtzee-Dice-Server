export interface Game {
    game_id: number;
    game_winner_id: number | null;
    game_status: 'wait' | 'proceed' | 'end';
    game_start_time: Date;
    game_end_time: Date | null;
  }