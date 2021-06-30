import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Doctor from 'src/models/doctor.model';
import DoctorSpecialy from 'src/models/doctorSpecialy.model';
import Specialties from 'src/models/specialties.model';
import schema from 'src/utils/yup';
import { Repository } from 'typeorm';
import { IDoctorDTO } from '../dto/Doctor.dto';

@Injectable()
export class DoctorUpdateService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
    @InjectRepository(DoctorSpecialy)
    private doctorSpecialtyReposiotry: Repository<DoctorSpecialy>,
    @InjectRepository(Specialties)
    private specialtyRepository: Repository<Specialties>,
  ) {}

  async createSpecialties(specialties: string[], doctor_id: string) {
    specialties.forEach(async (specialty) => {
      const specExisting = await this.specialtyRepository.findOne({
        where: { name: specialty },
      });

      if (specExisting) {
        const spec = this.doctorSpecialtyReposiotry.create({
          doc_id: doctor_id,
          spec_id: specExisting.id,
        });

        await this.doctorSpecialtyReposiotry.save(spec);
      }
    });
  }

  async updateDoctor({
    id,
    name,
    crm,
    tel_fix,
    cell,
    cep,
    specialty,
  }: IDoctorDTO) {
    let doctor = await this.doctorRepository.findOne({ id });

    if (!doctor) {
      throw new Error('Doctor not existing');
    }

    try {
      await schema.validate({
        name,
        crm,
        tel_fix,
        cell,
        cep,
        specialty,
      });
    } catch (err) {
      throw new Error(`${err.errors}`);
    }

    doctor = this.doctorRepository.create({
      id,
      name,
      cep,
      crm,
      tel_fix,
      cell,
    });

    await this.doctorRepository.save(doctor);
    await this.createSpecialties(specialty, doctor.id);
  }
}
