import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { RoundsModule } from './rounds/rounds.module';
import { RollsModule } from './rolls/rolls.module';
import { DicesModule } from './dices/dices.module';
import { ScoresModule } from './scores/scores.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역으로 사용 가능하게 설정
    }),
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: {
          client: 'mysql2',
          version: '8.3',
          useNullAsDefault: true,
          connection: {
            database: process.env.USER_NAME,
            user: process.env.db_user,
            password: process.env.db_pass,
            host: process.env.db_host,
            port: Number(process.env.db_port),
            ssl: false
          }
        },
      }),
    }),
    UsersModule,
    GamesModule,
    RoundsModule,
    RollsModule,
    DicesModule,
    ScoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
