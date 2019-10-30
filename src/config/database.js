// this file should use the common js syntax e.g. "require" and "module.exports"
// because the sequelize interface can not read the es5+ "import" and "export" syntax

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'willian.123',
  database: 'nodeappdemo-db',
  define: {
    // to add createAt/updatedAt columns in each table
    timestamps: true,
    // to create table using the syntax underscore
    underscored: true,
    underscoredAll: true,
  },
};
