import knex from 'knex';
import * as knexfile from './knexfile';

// 현재 환경에 따라 적절한 설정을 선택합니다.
const environment = 'development'||process.env.NODE_ENV ;
const knexConfig = knexfile[environment as keyof typeof knexfile];

export const db = knex(knexConfig);