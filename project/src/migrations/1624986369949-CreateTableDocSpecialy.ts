import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableDocSpecialy1624986369949 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doc_specialy',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'doc_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'spec_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'doc_docspec_fk',
            referencedTableName: 'doctors',
            referencedColumnNames: ['id'],
            columnNames: ['doc_id'],
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL',
          },
          {
            name: 'spec_docspec_fk',
            referencedTableName: 'specialties',
            referencedColumnNames: ['id'],
            columnNames: ['spec_id'],
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doc_specialy');
  }
}
