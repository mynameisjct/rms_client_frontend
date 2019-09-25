import * as endPoints from '../endpoints';
import {fetchApi} from '../index';

export const getYear = (payload,params) => fetchApi(endPoints.year.get(),payload,'get');