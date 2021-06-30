import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('doctors')
class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  crm: string;

  @Column()
  tel_fix: string;

  @Column()
  cell: string;

  @Column()
  cep: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Doctor;
