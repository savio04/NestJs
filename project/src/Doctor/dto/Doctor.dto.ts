import { ApiProperty } from '@nestjs/swagger';
export class IDoctorDTO {
  id?: string;

  @ApiProperty({
    type: String,
    default: '',
    required: false,
  })
  name: string;

  @ApiProperty({
    type: Number,
    default: '',
    required: false,
  })
  crm: string;

  @ApiProperty({
    type: Number,
    default: '',
    required: false,
  })
  tel_fix: string;

  @ApiProperty({
    type: Number,
    default: '',
    required: false,
  })
  cell: string;

  @ApiProperty({
    type: Number,
    default: '',
    required: false,
  })
  cep: string;

  @ApiProperty({
    type: Array,
    example: '["Alergologia","Angiologia"]',
    required: false,
  })
  specialty: string[];
}
