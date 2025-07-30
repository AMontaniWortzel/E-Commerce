import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private datasource: DataSource) {}

  async onModuleInit() {
    try { 
      await this.datasource.query('SELECT NOW()'); // Test the connection
      console.log('Database connection established successfully.');
    } catch (error) {
      console.error('Error establishing database connection:', error);
      throw error; 
  }}
  getHello(): string {
    return 'Hello World!';
  }
}
