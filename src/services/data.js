const axios = require('axios');

const getRawData = async (url) => {
  try {
    let resp = await axios.get(url);
    return resp;
  } catch (ex) {
    console.error(ex);
  }
};

export default {
  methods: {
    getRawData
  }
}