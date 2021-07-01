import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Adress from 'src/models/adress.model';
import Doctor from 'src/models/doctor.model';
import DoctorSpecialy from 'src/models/doctorSpecialy.model';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorDeleteService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
    @InjectRepository(Adress)
    private adressRepository: Repository<Adress>,
    @InjectRepository(DoctorSpecialy)
    private doctorSpecialtyRepository: Repository<DoctorSpecialy>,
  ) {}

  async deleteDoctor(id: string) {
    const idAdress = await this.adressRepository.query(
      `SELECT a.id 
      FROM doctors.adress a 
      WHERE a.doc_id  = ?
    `,
      [id],
    );

    const idDoc_specialties = await this.doctorSpecialtyRepository.query(
      `SELECT  ds.id
      FROM doctors.doc_specialy ds 
      WHERE ds.doc_id  = '9ebe7394-63bd-4c19-bbcb-2fde7c434541';
    `,
      [id],
    );

    await this.doctorSpecialtyRepository.softDelete(idDoc_specialties);
    await this.adressRepository.softDelete(idAdress);
    await this.doctorRepository.softDelete(id);
  }
}
