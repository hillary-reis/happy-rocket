// create map
const map = L.map('mapid').setView([-27.2198863,-49.6478308], 15);

// create and add tileLayer
L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon ({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remover icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});



// adicionar o campo de fotos
function addPhotoField () {
  // pegar o container de fotos #images
  const container = document.querySelector('#images');

  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // realizar o clone da ultima foto addTo
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // verificar se o campo está vazio, se sim, não add ao container
  const input = newFieldContainer.children[0];

  if (input.value == '') {
    return 
  };

  // limpar o campo
  input.value = '';
  
  // adicionar o clone ao container de fotos
  container.appendChild(newFieldContainer);
};

// deletar o campo de fotos
function deleteField (event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2) {
    // limpar o valor do campo
    span.parentNode.children[0].value = '';

    return
  };

  // deletar o campo
  
  span.parentNode.remove();
};



// select yes or no
function toggleSelect (event) {
  // pegar o botão clicado
  const button = event.currentTarget;

  // retirar a class active
  document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"');

  // verificar se é sim ou Não
  input.value = button.dataset.value;

  // colocar a class active no botão clicado
  button.classList.add('active');

};

function validate (event) {
  // validar se lat e lng estão preenchidos
  const needsLatAndLng = true

  if (needsLatAndLng) {
    event.preventDefalut()
    alert('Selecione um ponto no mapa')
  }
};