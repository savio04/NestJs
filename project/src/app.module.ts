import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from './Doctor/doctor.module';
import Adress from './models/adress.model';
import Doctor from './models/doctor.model';
import DoctorSpecialy from './models/doctorSpecialy.model';
import Specialties from './models/specialties.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Doctor, DoctorSpecialy, Specialties, Adress],
      synchronize: true,
    }),
    DoctorModule,
  ],
})
export class AppModule {}
