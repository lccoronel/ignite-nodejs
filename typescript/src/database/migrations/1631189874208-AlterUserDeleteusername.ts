import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserDeleteusername1631189874208
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'username');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({ name: 'sername', type: 'varchar' }),
    );
  }
}