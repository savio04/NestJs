import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAdress1625061165906 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'adress',
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
            name: 'district',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'public_place',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'doc_adress_fk',
            referencedTableName: 'doctors',
            referencedColumnNames: ['id'],
            columnNames: ['doc_id'],
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('adress');
  }
}
