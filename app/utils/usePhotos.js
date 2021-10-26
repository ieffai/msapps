import {DOMParser} from '@xmldom/xmldom';

export const usePhotos = data => {
  const parsedData = new DOMParser().parseFromString(data);
  let items = [];
  const photos = parsedData.getElementsByTagName('photo');
  for (let i = 0; i < photos.length; i++) {
    items.push({
      id: photos[i].getAttribute('id'),
      title: photos[i].getAttribute('title'),
      url_s: photos[i].getAttribute('url_s'),
      url_c: photos[i].getAttribute('url_c'),
    });
  }
  return items;
};
