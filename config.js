const dev = {
  BASE_URL: "http://65.108.217.99:3333/"
}

const prod = {
  BASE_URL: "http://65.108.217.99:3333/"
}

// const config = process.env.REACT_APP_STAGE === "development" ? dev : prod;
const config = prod;

export default {
  ...config,
}