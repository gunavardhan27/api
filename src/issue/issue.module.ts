import { MiddlewareConsumer, Module } from '@nestjs/common';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';
import { UserMiddleware } from 'src/shared/pipes/middlewares/auth.middleware';

@Module({
  imports: [],
  controllers: [IssueController],
  providers: [IssueService],
})
export class IssueModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes(IssueController);
  }
}
