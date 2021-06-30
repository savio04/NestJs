import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('adress')
class Adress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public_place: string;

  @Column()
  doc_id: string;

  @Column()
  district: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Adress;
