export interface Score {
    score_id: number;
    user_id: number;
    score_aces: '0' | '1' | '2' | '3' | '4' | '5' | '6' | null;
    score_deuces: '0' | '2' | '4' | '6' | '8' | '10' | '12' | null;
    score_threes: '0' | '3' | '6' | '9' | '12' | '15' | '18' | null;
    score_fours: '0' | '4' | '8' | '12' | '16' | '20' | '24' | null;
    score_fives: '0' | '5' | '10' | '15' | '20' | '25' | '30' | null;
    score_sixes: '0' | '6' | '12' | '18' | '24' | '30' | '36' | null;
    score_bonus: '0' | '35' | null;
    score_choice: number | null;
    score_four_of_a_kind: number | null;
    score_full_house: number | null;
    score_small_straight: '0' | '15' | null;
    score_large_straight: '0' | '30' | null;
    score_yatch: '0' | '50' | null;
  }