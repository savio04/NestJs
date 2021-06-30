import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Adress from 'src/models/adress.model';
import Doctor from 'src/models/doctor.model';
import DoctorSpecialy from 'src/models/doctorSpecialy.model';
import Specialties from 'src/models/specialties.model';
import getAdress from 'src/utils/apiCorreios';
import schema from 'src/utils/yup';
import { Repository } from 'typeorm';
import { IDoctorDTO } from '../dto/Doctor.dto';

interface IAdressApi {
  bairro: string;
  cidade: string;
  uf: string;
  logradouro: string;
}

@Injectable()
export class DoctorCreateService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
    @InjectRepository(DoctorSpecialy)
    private doctorSpecialtyReposiotry: Repository<DoctorSpecialy>,
    @InjectRepository(Specialties)
    private specialtyRepository: Repository<Specialties>,
    @InjectRepository(Adress)
    private adressRepository: Repository<Adress>,
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

  async createAdress(data: IAdressApi, doc_id: string) {
    const { bairro, cidade, logradouro, uf } = data;
    const adress = this.adressRepository.create({
      state: uf,
      district: bairro,
      doc_id,
      public_place: logradouro,
      city: cidade,
    });

    await this.adressRepository.save(adress);

    return adress;
  }

  async createDoctor({ name, crm, tel_fix, cell, cep, specialty }: IDoctorDTO) {
    const doctorExisting = await this.doctorRepository.findOne({ crm });

    //Não permite a criação de medicos com o mesmo crm
    if (doctorExisting) {
      throw new Error('Doctor already existe');
    }

    //Verifica o formato dos dados utilizando o Yup
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

    //Busca o endereço do medico a partir do cep
    const adressRequest = await getAdress(cep);
    if (adressRequest.message) {
      throw new Error(`${adressRequest.message}`);
    }

    //Cria o medico
    const doctor = this.doctorRepository.create({
      name,
      crm,
      tel_fix,
      cell,
      cep,
    });

    await this.doctorRepository.save(doctor);

    //Cria endereço
    const adress = await this.createAdress(
      adressRequest as IAdressApi,
      doctor.id,
    );

    //Cadastras as escificações do medico em questão
    await this.createSpecialties(specialty, doctor.id);

    return {
      doctor,
      adress,
    };
  }
}
