import * as shell from "shelljs";

shell.cp("-R", "resources", "dist/resources/");
shell.cp("-R", "public", "dist/public/");
