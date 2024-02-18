import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as fs from 'fs';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('match-data')
  matchData(@Body('fruitname') receivedFruitname: string): any {
    const data = this.authService.getAllData();
    for (let key in data) {
      if (receivedFruitname === data[key].name) return data[key];
    }
    return { error: 'no data found' };
  }
}
