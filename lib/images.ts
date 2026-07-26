// Reference imagery pulled from Wikimedia Commons (CC-licensed) purely to test how the
// real layout feels with real photography instead of "Image slot A" text placeholders.
// Swap for @adventureishani archive / pilot-run shoots per LAYOUT-SPEC §7 before this ships.
function commons(file: string, width = 1600) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=${width}`
}

export const images = {
  // hero double exposure — two green Kangra frames screened over each other. deliberately
  // greenery-and-ridge rather than snow or a wing, so the homepage reads as mountain
  // culture rather than a paragliding operator or a trekking company
  heroTrail: {
    src: commons('Hiking_off_to_Laka_Got_from_Triund_(16285401872).jpg'),
    credit: 'Trail to Laka Got, Triund — Dhauladhar, Wikimedia Commons',
  },
  heroValley: {
    src: commons('Palampur_tea_plantation,_Himachal_Pradesh,_India.jpg'),
    credit: 'Palampur tea plantation — Kangra valley, Wikimedia Commons',
  },
  heroRidge: {
    src: commons('Dhauldhar_through_the_Canopy.jpg'),
    credit: 'Dhauladhar through the canopy, Wikimedia Commons',
  },

  // hero collage — deliberately four different worlds (sky, faith, fire, field),
  // not one dominant paragliding shot, so the homepage doesn't read as a paragliding operator
  heroFly: {
    src: commons('Bir-Billing.jpg'),
    credit: 'Bir-Billing, Wikimedia Commons',
  },
  heroFaith: {
    src: commons(
      'Tibetan_prayer_flags,_Norbulingka_Gardens,_Norbulingka_Institute,_Sidhpur,_Dharamsala.jpg',
    ),
    credit: 'Norbulingka Institute, Dharamsala — Kangra valley, Wikimedia Commons',
  },
  heroFire: {
    src: commons('People_sitting_around_a_camp_fire.jpg'),
    credit: 'People sitting around a camp fire, Wikimedia Commons',
  },
  heroField: {
    src: commons('Tea_garden_at_Nagri_in_the_Kangra_Valley_of_Himachal_Pradesh,_India.jpg'),
    credit: 'Tea garden, Nagri — Kangra valley, Wikimedia Commons',
  },

  reframeTexture: {
    src: commons('Campfire_flames_at_night.jpg', 900),
    credit: 'Campfire flames at night, Wikimedia Commons (CC BY-SA 4.0)',
  },
  cardBirImmersion: {
    src: commons('Hanuman_ji_ka_Tibba_of_Dhauladhar_Range_from_Triund.jpg'),
    credit: 'Hanuman ji ka Tibba, Dhauladhar Range — Himachal Pradesh, Wikimedia Commons',
  },
  cardRajgundha: {
    src: commons('Tents_at_Sarchu,_Jammu_and_Kashmir_(3803066983).jpg'),
    credit: 'Tents at Sarchu, Wikimedia Commons (CC BY-SA 2.0)',
  },
  cardStillness: {
    src: commons('Tabo_Monastery_-Tabo_Spiti_-Himachal_Pradesh_-D72_6869.jpg'),
    credit: 'Tabo Monastery, Spiti — Himachal Pradesh, Wikimedia Commons',
  },
  cardLongFlight: {
    src: commons('Bir-Billing.jpg'),
    credit: 'Bir-Billing, Wikimedia Commons',
  },
  fireCircle: {
    src: commons('People_sitting_around_a_camp_fire.jpg'),
    credit: 'People sitting around a camp fire, Wikimedia Commons',
  },
  trustPortrait: {
    src: commons('Hikers_IIT_Mandi_Griffon_Peak,_Himachal_Jan20_D72_13723.jpg'),
    credit: 'Hikers, Griffon Peak — Himachal Pradesh, Wikimedia Commons',
  },
  trustSecondary: {
    src: commons('Dhauladhar_layers.JPG', 900),
    credit: 'Dhauladhar layers, Wikimedia Commons',
  },
  community: {
    src: commons('Sunset_India_village.jpg'),
    credit: 'Sunset, India village, Wikimedia Commons',
  },
  waterfall: {
    src: commons('Jibhi_Waterfall,_Jibhi,_Himachal_Pradesh.jpg'),
    credit: 'Jibhi Waterfall, Himachal Pradesh, Wikimedia Commons',
  },
  baijnathTemple: {
    src: commons(
      '0051423_Baijnath_temple,_Vaidyanatha_mandir,_Baijnath_Himachal_Pradesh_135_(cropped).jpg',
    ),
    credit: 'Baijnath Temple, Kangra — Himachal Pradesh, Wikimedia Commons',
  },
  teaGarden: {
    src: commons('Tea_garden_at_Nagri_in_the_Kangra_Valley_of_Himachal_Pradesh,_India.jpg'),
    credit: 'Tea garden, Nagri — Kangra valley, Wikimedia Commons',
  },
  prayerFlags: {
    src: commons(
      'Tibetan_prayer_flags,_Norbulingka_Gardens,_Norbulingka_Institute,_Sidhpur,_Dharamsala.jpg',
    ),
    credit: 'Norbulingka Institute, Dharamsala — Kangra valley, Wikimedia Commons',
  },
  meadowTents: {
    src: commons('Tents_at_Sarchu,_Jammu_and_Kashmir_(3803066983).jpg'),
    credit: 'Tents at Sarchu, Wikimedia Commons (CC BY-SA 2.0)',
  },
  monastery: {
    src: commons('Tabo_Monastery_-Tabo_Spiti_-Himachal_Pradesh_-D72_6869.jpg'),
    credit: 'Tabo Monastery, Spiti — Himachal Pradesh, Wikimedia Commons',
  },
  dhauladhar: {
    src: commons('Hanuman_ji_ka_Tibba_of_Dhauladhar_Range_from_Triund.jpg'),
    credit: 'Hanuman ji ka Tibba, Dhauladhar Range — Himachal Pradesh, Wikimedia Commons',
  },
}
