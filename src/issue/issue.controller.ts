import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueService } from './issue.service';

@Controller()
@ApiTags('issues')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}
}
