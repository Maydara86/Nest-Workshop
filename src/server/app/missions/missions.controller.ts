import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MissionEntity } from '../data/mission.entity';
import { User } from '../models/user.model';
import { Roles } from '../util/roles.decorator';
import { MissionsService } from './missions.service';
import { GetUser } from '../util/getuser.decorator';
import { classToPlain } from 'class-transformer';

@Controller('missions')
export class MissionsController {
  constructor(private missionsService: MissionsService) {}

  @Get()
  async getMissions() {
    const missionEntities = await this.missionsService.getMissions();
    const missions = classToPlain(missionEntities);
    return missions;
  }
}
