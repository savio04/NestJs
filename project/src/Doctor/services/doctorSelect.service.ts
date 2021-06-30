import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Doctor from 'src/models/doctor.model';
import DoctorSpecialy from 'src/models/doctorSpecialy.model';
import Specialties from 'src/models/specialties.model';
import { Repository } from 'typeorm';

interface IRequest {
  id?: string;
  name: string;
  crm: string;
  tel_fix: string;
  cell: string;
  cep: string;
  specialty?: string;
}

@Injectable()
export class DoctorSelectService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
    @InjectRepository(DoctorSpecialy)
    private doctorSpecialtyReposiotry: Repository<DoctorSpecialy>,
    @InjectRepository(Specialties)
    private specialtyRepository: Repository<Specialties>,
  ) {}

  async selectDoctor({ name, crm, tel_fix, cell, cep }: IRequest) {
    const doctorQuery = this.doctorRepository.createQueryBuilder('doc');

    if (name) {
      doctorQuery.where('doc.name like :name', { name: `%${name}%` });
    }
    if (crm) {
      doctorQuery.andWhere('crm = :crm', { crm });
    }
    if (tel_fix) {
      doctorQuery.andWhere('tel_fix = :tel_fix', { tel_fix });
    }
    if (cell) {
      doctorQuery.andWhere('cell =:cell', { cell });
    }
    if (cep) {
      doctorQuery.andWhere('cep =:cep', { cep });
    }

    return await doctorQuery.getMany();
  }
}
