import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { PingModule } from './ping/ping.module';
import { PrismaModule } from './db/db.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, CourseModule, PingModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
