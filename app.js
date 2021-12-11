import { Command } from "commander";
import { BANNER } from "./constants.js";
import {
  hackerone,
  bugcrowd,
  intigriti,
  hackenproof,
  yeswehack,
  federacy,
} from "./programs.js";

BANNER();

const cli = new Command();

cli.description(
  "Provide the desire platform as parameter and get the listed in scope domains and subdomains of programs"
    .cyan
);

cli.usage("node app.js [command]");

cli
  .command("hackerone")
  .description("Get all in scopes of hackerone platform.")
  .alias("ho")
  .action(hackerone);

cli
  .command("bugcrowd")
  .description("Get all in scopes of bugcrowd platform.")
  .alias("bc")
  .action(bugcrowd);

cli
  .command("intigriti")
  .description("Get all in scopes of intigriti platform.")
  .alias("in")
  .action(intigriti);

cli
  .command("hackenproof")
  .description("Get all in scopes of hackenproof platform.")
  .alias("hp")
  .action(hackenproof);

cli
  .command("yeswehack")
  .description("Get all in scopes of yeswehack platform.")
  .alias("ywh")
  .action(yeswehack);

cli
  .command("federacy")
  .description("Get all in scopes of federacy platform.")
  .alias("fed")
  .action(federacy);

cli.parse(process.argv);
