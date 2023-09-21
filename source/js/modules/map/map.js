import leaflet from '../../vendor/leaflet';

let map = document.querySelector('.contacts__map');

if (map) {
  let map = L.map('map').setView([55.7753572, 37.6300319], 17);
  let masaIcon = L.icon({
    iconUrl: './img/sprite.svg#pin',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
  if (window.innerWidth >= 1200) {
    masaIcon = L.icon({
      iconUrl: './img/sprite.svg#pin',
      iconSize: [70, 70],
      iconAnchor: [35, 70],
    });
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    masaIcon = L.icon({
      iconUrl: './img/sprite.svg#pin',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
  }
  let marker = L.marker([55.7753572, 37.6300319], { icon: masaIcon }).addTo(map);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?{foo}', { foo: 'bar' }).addTo(map);
}
