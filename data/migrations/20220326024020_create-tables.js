exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name", 200).notNullable();
      tbl.string("project_description", 300);
      tbl.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name", 200).notNullable().unique();
      tbl.string("resource_description", 200);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
