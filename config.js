const dev = {
  BASE_URL: "http://127.0.0.1:3333/"
}

const prod = {
  BASE_URL: "http://65.21.146.141:3333/"
}

// const config = process.env.REACT_APP_STAGE === "development" ? dev : prod;
const config = prod;

export default {
  ...config,
}