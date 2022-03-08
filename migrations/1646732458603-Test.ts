import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1646732458603 implements MigrationInterface {
    name = 'Test1646732458603'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`name\` char(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`name\` char(1) NOT NULL`);
    }

}
