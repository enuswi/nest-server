import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableUser1622949503009 implements MigrationInterface {
    name = 'AlterTableUser1622949503009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "ageRange" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ageRange"`);
    }

}
