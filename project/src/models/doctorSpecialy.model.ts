import {
  Column,
  CreateDateColumn,
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
}

export default DoctorSpecialy;
