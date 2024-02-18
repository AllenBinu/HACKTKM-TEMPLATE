import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AuthService {
  private readonly data: any[];

  constructor() {
    const rawData = fs.readFileSync('data/fruits.json', 'utf-8');
    this.data = JSON.parse(rawData);
  }

  getAllData(): any[] {
    return this.data;
  }

  getDataById(id: string): any {
    return this.data.find((item) => item.id === id);
  }
}
