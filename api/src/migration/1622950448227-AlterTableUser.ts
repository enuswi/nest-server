import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTableUser1622950448227 implements MigrationInterface {
    name = 'AlterTableUser1622950448227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "ageRange"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "ageRange" integer NOT NULL`);
    }

}
