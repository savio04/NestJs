import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('doc_specialy')
class DoctorSpecialy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  doc_id: string;

  @Column()
  spec_id: string;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}

export default DoctorSpecialy;
