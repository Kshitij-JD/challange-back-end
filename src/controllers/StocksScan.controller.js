const axios = require('axios');
const {response} = require('../helper')

const Details = async (req, res) => {
  const url = process.env.STOCK_SCAN_URL
  console.log(url);
  let scanDetails;
  try {
    scanDetails = await axios.get(url)
  } catch (error) {
    return response(res, false, "Stock Scan details fetch error", {}, 500)
  }
  return response(res, true, "Stock Scan details", {data:scanDetails.data}, 200)
}

module.exports = {
  Details,
}