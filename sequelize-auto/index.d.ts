// Type definitions for sequelize-auto 0.4
// Project: https://github.com/sequelize/sequelize-auto#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace sequelizeAuto {

  interface SequelizeAuto {
    new(database: string, username: string, password: string, options?: sequelizeAuto.SequelizeAutoOptions): SequelizeAuto;
    sequelize: string | {};
    queryInterface: {};
    tables: {};
    foreignKeys: {};
    dialect: {};
    options: {};
    build(callback: Function);
    run(callback: Function);
    write(attributes: any, callback: Function);
  }

  interface SequelizeAutoOptions {
    host?: string;
    port?: string;
    dialect?: string;
    directory?: boolean | string;
    camelCase?: boolean;
    freezeTableName?: true;
    tables?: string[];
    skipTables?: string[];
    indentation?: number;
    spaces?: boolean;
    additional?: {
      createdAt?: boolean;
      updatedAt?: boolean;
      deletedAt?: boolean;
      timestamps?: boolean;
    }
  }

}

declare var sequelizeAuto: sequelizeAuto.SequelizeAuto;

export = sequelizeAuto;
