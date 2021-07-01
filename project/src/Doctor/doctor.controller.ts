import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DoctorCreateService } from './services/doctorCreate.service';
import { DoctorDeleteService } from './services/doctorDelete.service';
import { DoctorSelectService } from './services/doctorSelect.service';
import { DoctorUpdateService } from './services/doctorUpdate.service';
import { IDoctorDTO } from './dto/Doctor.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Doctors')
@Controller('mais-saude')
export class DoctorController {
  constructor(
    private createService: DoctorCreateService,
    private updateService: DoctorUpdateService,
    private deleteService: DoctorDeleteService,
    private selectService: DoctorSelectService,
  ) {}

  @Post('/client')
  async createDoctor(@Body() doctorDto: IDoctorDTO) {
    return await this.createService.createDoctor(doctorDto);
  }

  @Put('/client/:id')
  async updateDoctor(@Param('id') id: string, @Body() doctorDto: IDoctorDTO) {
    return await this.updateService.updateDoctor({
      id,
      ...doctorDto,
    });
  }

  @Get('/client')
  async selectDoctor(@Query() query: IDoctorDTO) {
    return await this.selectService.selectDoctor(query);
  }

  @Delete('/client/:id')
  @ApiOkResponse({ description: 'doctor deleted sucessfully' })
  async deleteDoctor(@Param('id') id: string) {
    return await this.deleteService.deleteDoctor(id);
  }
}
