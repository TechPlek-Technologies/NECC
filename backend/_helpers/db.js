const config = require("config.json");
const mysql = require("mysql2/promise");
const { Sequelize } = require("sequelize");

module.exports = db = {};

initialize();

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config.database;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
  });

  // init models and add them to the exported db object
  db.User = require("../mvc/users/user.model")(sequelize);
  db.Category = require("../mvc/categories/category.model")(sequelize);
  db.Event = require("../mvc/events/event.model")(sequelize);
  db.PdfFile = require("../mvc/pdfFile/pdfFile.model")(sequelize);
  db.Contact = require("../mvc/contact/contact.model")(sequelize);
  db.Address = require("../mvc/address/address.model")(sequelize);
  db.Pages = require("../mvc/page/page.model")(sequelize);
  db.Content = require("../mvc/carrier/content.model")(sequelize);
  db.Section = require("../mvc/pageSection/section.model")(sequelize);
  db.CsrCommittee = require("../mvc/csrCommittee/csrCommittee.model")(
    sequelize
  );
  db.CsrPdf = require("../mvc/csrPdf/csrPdf.model")(sequelize);
  db.CiPdf = require("../mvc/ciPdf/ciPdf.model")(sequelize);
  db.CiDirectors =
    require("../mvc/corporateInformation/corporateInformation.model")(
      sequelize
    );
  db.KeyPersonnel = require("../mvc/keyPersonnel/keyPersonnel.model")(
    sequelize
  );
  db.Branch = require("../mvc/branch/branch.model")(sequelize);

  // sync all models with database
  await sequelize.sync();
}
