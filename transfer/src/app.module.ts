import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { WebsocketGateway } from './websocket/websocket.gateway';

@Module({
  imports: [AuthModule],
  providers: [WebsocketGateway],
})
export class AppModule {}
