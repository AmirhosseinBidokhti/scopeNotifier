import { axiosInstance as axios } from "./axiosInstance.js";

import colors from "colors";

import ora from "ora";

import { BUG_BOUNTY_PLATFORMS } from "./constants.js";

export const hackerone = async () => {
  try {
    const spinner = ora(
      "Fetching the in scope list of hackerone".yellow
    ).start();

    const { data } = await axios.get(BUG_BOUNTY_PLATFORMS.HACKERONE);
    data.map((program) => {
      program.targets.in_scope.map((scope) => {
        console.log(scope.asset_identifier);
      });
    });
    spinner.stop();
    console.log("[+] : Done fetching the list!".green);
  } catch (error) {
    console.error(error);
  }
};

export const bugcrowd = async () => {
  try {
    const spinner = ora(
      "Fetching the in scope list of bugcrowd".yellow
    ).start();

    const { data } = await axios.get(BUG_BOUNTY_PLATFORMS.BUGCROWD);
    data.map((program) => {
      program.targets.in_scope.map((scope) => {
        console.log(scope.target);
      });
    });
    spinner.stop();
    console.log("[+] : Done fetching the list!".green);
  } catch (error) {
    console.error(error);
  }
};

export const intigriti = async () => {
  try {
    const spinner = ora(
      "Fetching the in scope list of intigriti".yellow
    ).start();

    const { data } = await axios.get(BUG_BOUNTY_PLATFORMS.INTIGRITI);
    data.map((program) => {
      program.targets.in_scope.map((scope) => {
        console.log(scope.endpoint);
      });
    });
    spinner.stop();
    console.log("[+] : Done fetching the list!".green);
  } catch (error) {
    console.error(error);
  }
};

export const hackenproof = async () => {
  try {
    const spinner = ora(
      "Fetching the in scope list of hackenproof".yellow
    ).start();

    const { data } = await axios.get(BUG_BOUNTY_PLATFORMS.HACKENPROOF);
    data.map((program) => {
      program.targets.in_scope.map((scope) => {
        console.log(scope.target);
      });
    });
    spinner.stop();
    console.log("[+] : Done fetching the list!".green);
  } catch (error) {
    console.error(error);
  }
};

export const yeswehack = async () => {
  try {
    const spinner = ora(
      "Fetching the in scope list of yeswehack".yellow
    ).start();

    const { data } = await axios.get(BUG_BOUNTY_PLATFORMS.YESWEHACK);
    data.map((program) => {
      program.targets.in_scope.map((scope) => {
        console.log(scope.target);
      });
    });
    spinner.stop();
    console.log("[+] : Done fetching the list!".green);
  } catch (error) {
    console.error(error);
  }
};

export const federacy = async () => {
  try {
    const spinner = ora(
      "Fetching the in scope list of federacy".yellow
    ).start();

    const { data } = await axios.get(BUG_BOUNTY_PLATFORMS.FEDERACY);
    data.map((program) => {
      program.targets.in_scope.map((scope) => {
        console.log(scope.target);
      });
    });
    spinner.stop();
    console.log("[+] : Done fetching the list!".green);
  } catch (error) {
    console.error(error);
  }
};
