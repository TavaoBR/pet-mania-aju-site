const pm = (name) => `/petmania/${name}`
const team = (id) => `/petmania/team/team-${String(id).padStart(3, '0')}.jpg`
const clinic = (name) => `/petmania/clinic/${name}`

export const media = {
  logoMark: pm('pm-001.jpg'),
  hero: clinic('hall.jpg'),
  heroVideo: pm('video-hero-section.mp4'),
  heroPet: team(27),
  care: clinic('reception.jpg'),
  facade: clinic('facade.jpg'),
  teamGroup: clinic('team-group.jpg'),
  feline: clinic('feline.jpg'),
  consult: clinic('consult.jpg'),
  hall: clinic('hall.jpg'),
  reception: clinic('reception.jpg'),
}

/** Galeria Espaço / Instagram — layout estilo feed */
export const galleryItems = [
  {
    id: 'tour',
    type: 'video',
    src: pm('video-hero-section.mp4'),
    poster: clinic('hall.jpg'),
    label: 'Tour',
    alt: 'Vídeo do Centro Médico Veterinário',
  },
  {
    id: 'recepcao',
    type: 'image',
    src: clinic('reception.jpg'),
    label: 'Recepção',
    alt: 'Recepção da PetMania',
  },
  {
    id: 'felinos',
    type: 'image',
    src: clinic('feline.jpg'),
    label: 'Felinos',
    alt: 'Sala de espera exclusiva para felinos',
  },
  {
    id: 'corredor',
    type: 'image',
    src: clinic('hall.jpg'),
    label: 'Consultórios',
    alt: 'Corredor e consultórios',
  },
  {
    id: 'fachada',
    type: 'image',
    src: clinic('facade.jpg'),
    label: 'Fachada',
    alt: 'Fachada do Centro Médico Veterinário',
  },
  {
    id: 'equipe',
    type: 'image',
    src: clinic('team-group.jpg'),
    label: 'Equipe',
    alt: 'Equipe PetMania',
  },
]
