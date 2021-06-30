import { Module } from '@nestjs/common';
import { DoctorCreateService } from './services/doctorCreate.service';
import { DoctorController } from './doctor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Doctor from 'src/models/doctor.model';
import DoctorSpecialy from 'src/models/doctorSpecialy.model';
import Specialties from 'src/models/specialties.model';
import { DoctorUpdateService } from './services/doctorUpdate.service';
import { DoctorDeleteService } from './services/doctorDelete.service';
import { DoctorSelectService } from './services/doctorSelect.service';
import Adress from 'src/models/adress.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctor, DoctorSpecialy, Specialties, Adress]),
  ],
  controllers: [DoctorController],
  providers: [
    DoctorCreateService,
    DoctorUpdateService,
    DoctorDeleteService,
    DoctorSelectService,
  ],
})
export class DoctorModule {}
