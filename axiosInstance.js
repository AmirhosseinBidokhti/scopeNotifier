import * as rax from "retry-axios";
import axios from "axios";

export const axiosInstance = axios.create();
axiosInstance.defaults.raxConfig = {
  instance: axiosInstance,
  onRetryAttempt: (err) => {
    const cfg = rax.getConfig(err);
    console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
  },
};
const interceptorId = rax.attach(axiosInstance);
