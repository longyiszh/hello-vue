import axios from 'axios';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';

const getRawData = async (url) => {
  try {
    let resp = await axios.get(url);
    let data = Observable.of(resp.data).distinctUntilChanged();
    return data;
  } catch (ex) {
    console.error(ex);
  }
};

export default {
  methods: {
    getRawData
  }
}