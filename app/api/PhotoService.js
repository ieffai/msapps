import {API_KEY, EXTRAS, METHOD_GET_RECENT} from '../utils/constants';
import {api} from './apiConfig';
import {usePhotos} from '../utils/usePhotos';
import {store} from '../redux/store';
import {setPhotos} from '../redux/photoSlice';
import {setIsLoading} from '../redux/appSlice';
export const getPhotos = async () => {
  store.dispatch(setIsLoading(true));
  try {
    const {data} = await api.get('/', {
      params: {
        method: METHOD_GET_RECENT,
        extras: EXTRAS,
        api_key: API_KEY,
      },
    });
    const photoList = usePhotos(data);
    store.dispatch(setPhotos(photoList));
    store.dispatch(setIsLoading(false));
  } catch (e) {
    throw e.message;
  }
};
