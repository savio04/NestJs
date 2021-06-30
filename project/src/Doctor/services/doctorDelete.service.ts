import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Doctor from 'src/models/doctor.model';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorDeleteService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  async deleteDoctor(id: string) {
    await this.doctorRepository.delete(id);
  }
}
