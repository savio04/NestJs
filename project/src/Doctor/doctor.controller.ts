import { Controller, Delete, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DoctorCreateService } from './services/doctorCreate.service';
import { DoctorDeleteService } from './services/doctorDelete.service';
import { DoctorSelectService } from './services/doctorSelect.service';
import { DoctorUpdateService } from './services/doctorUpdate.service';

@Controller('mais-saude')
export class DoctorController {
  constructor(
    private createService: DoctorCreateService,
    private updateService: DoctorUpdateService,
    private deleteService: DoctorDeleteService,
    private selectService: DoctorSelectService,
  ) {}
  @Post('/client')
  async createDoctor(
    @Req()
    request: Request,
    @Res()
    response: Response,
  ) {
    const { name, crm, tel_fix, cell, cep, specialty } = request.body;
    try {
      const doctor = await this.createService.createDoctor({
        name,
        crm,
        tel_fix,
        cell,
        cep,
        specialty,
      });

      return response.status(200).json(doctor);
    } catch (err) {
      return response.status(400).json({
        message: `${err}`,
      });
    }
  }
  @Put('/client/:id')
  async updateDoctor(
    @Req()
    request: Request,
    @Res()
    response: Response,
  ) {
    const { id } = request.params;
    const { name, crm, tel_fix, cell, cep, specialty } = request.body;

    try {
      await this.updateService.updateDoctor({
        id,
        name,
        crm,
        cell,
        cep,
        specialty,
        tel_fix,
      });
      return response.status(201).json({
        message: 'update done successfully',
      });
    } catch (err) {
      return response.status(400).json({
        message: `${err.message}`,
      });
    }
  }

  @Get('/client')
  async selectDoctor(
    @Req()
    request: Request,
    @Res()
    response: Response,
  ) {
    const { id } = request.params;
    const { name, crm, tel_fix, cell, cep, specialty } = request.query;
    const doctors = await this.selectService.selectDoctor({
      id,
      name: name as string,
      crm: crm as string,
      cell: cell as string,
      cep: cep as string,
      tel_fix: tel_fix as string,
      specialty: specialty as string,
    });

    return response.json(doctors);
  }

  @Delete('/client/:id')
  async deleteDoctor(
    @Req()
    request: Request,
    @Res()
    response: Response,
  ) {
    const { id } = request.params;
    await this.deleteService.deleteDoctor(id);

    return response.status(201).send();
  }
}
