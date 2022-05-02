import { Injectable } from '@nestjs/common';
import { ConfigService as NConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private nConfigService: NConfigService) {}
}
