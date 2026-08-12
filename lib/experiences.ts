import { images } from '@/lib/images'

export type ArcFrame = { src: string; credit: string; alt: string }

export type ArcDay = {
  day: string
  location: string
  /** Short heading for the day — a few words, sentence case, no full stop. */
  title: string
  /** One very short sentence under the heading. Skimmable on its own. */
  hook: string
  summary: string
  /**
   * A day is several things — a walk, a practice, a table, a sky — so it gets several
   * frames rather than one. JourneyArc lays 3 out as a mosaic and 4 as a filled grid;
   * anything past the fourth is dropped, so put the day's strongest image first.
   */
  frames: ArcFrame[]
}

const frame = (photo: { src: string; credit: string }, alt: string): ArcFrame => ({
  src: photo.src,
  credit: photo.credit,
  alt,
})

export type MomentIcon =
  | 'circle'
  | 'meditation'
  | 'film'
  | 'hike'
  | 'sunset'
  | 'feast'
  | 'yoga'
  | 'flight'
  | 'waterfall'
  | 'monastery'
  | 'temple'
  | 'kit'
  | 'birds'
  | 'wind'
  | 'fire'

export type SignatureMoment = { title: string; icon: MomentIcon }

export type Experience = {
  slug: string
  name: string
  promise: string
  duration: string
  season: string
  heroImage: { src: string; credit: string }
  heroAlt: string
  intro: string
  facts: { groupSize: string; fitness: string; season: string; whoItsFor: string }
  forYouIf: string[]
  notForYouIf: string[]
  arc: ArcDay[]
  signatureMoments: SignatureMoment[]
  whatsHandled: string[]
  honesty: string[]
  isComingSoon?: boolean
}

export const experiences: Experience[] = [
  {
    slug: 'rajgundha-reset',
    name: 'The Rajgundha Reset',
    promise: 'Leave lighter than you arrived.',
    duration: 'Fri–Sun',
    season: 'Oct 9–11 & Oct 23–25',
    heroImage: images.uhlTowardsBilling,
    heroAlt: 'The Uhl valley behind Billing, on the way to Rajgundha',
    intro:
      'Three days in the Himalayas. A night of camping in a quiet valley the road barely reaches. Mornings that begin with mindfulness instead of notifications. And to finish, Himalayan paragliding over the very valley you walked through, if you choose it. Not a trekking package, not a paragliding package, a reset.',
    facts: {
      groupSize: '8–12, small on purpose',
      fitness: 'Genuinely easy. Sunday’s gradual hike up to Chaina Pass is the one real stretch, and the vehicle goes the same way for anyone who’d rather ride.',
      season: 'October–November and March–May. We don’t run this in monsoon.',
      whoItsFor: 'Anyone who needs to breathe. First-timers especially welcome, nothing here needs experience, only warm socks.',
    },
    forYouIf: [
      'Stillness makes more sense to you around a fire than on a cushion in a hall',
      'You want a night where the road runs out — no signal, no streetlights, just the valley and the stars',
      "A checklist weekend feels thin, but you can't disappear for a fortnight to fix it",
      "You'd like paragliding to be how the weekend ends, not the reason you came",
    ],
    notForYouIf: [
      'You need daily hot showers — camp night has none, and it’s worth it',
      'You want a packed itinerary — Saturday afternoon is deliberately, beautifully nothing',
    ],
    arc: [
      {
        day: 'Friday',
        location: 'Bir (~1,400 m)',
        title: 'Let the noise drop',
        hook: 'A mindful walk past a monastery, to a sunset worth standing still for.',
        summary:
          "Arrive, exhale. A ninety-minute welcome circle over chai, then a mindful walk straight out from where you're staying — quiet trails, past a monastery, to a sunset worth standing still for. Dinner together at one long table, and a bonfire.",
        frames: [
          frame(images.rajgundhaSunsetBir, 'Sunset over the Kangra valley from Bir'),
          frame(images.teaGarden, 'Dhauladhar view from kangra valley'),
          frame(images.choklingApproach, 'The monastery the evening walk passes through'),
          frame(images.fireCircle, 'A first-night bonfire, for anyone still up'),
        ],
      },
      {
        day: 'Saturday',
        location: 'Bir → Billing → Chaina Pass (~2,900 m) → Rajgundha (~2,500 m)',
        title: 'Where the road ends, the valley begins',
        hook: 'An afternoon of stillness, and a river to hike down to.',
        summary:
          "Out of Bir after a proper breakfast, no dawn starts here. We drive through Billing and stop at **Chaina Pass** for tea, with the whole Dhauladhar spread out in front of you. Then we drop into Rajgundha, where the road gives up and the valley takes over. Settle in, an afternoon of stillness, and let the afternoon be exactly as empty as you'd like it. Then we hike down to the river **Uhl** at half past three. Evening tea, the fire, a night ending with sky full of stars and the heart of the whole weekend.",
        frames: [
          frame(images.rajgundhaViewNew, 'The mountain view at Rajgundha'),
          frame(images.rajgundhaValley, 'The mountain view of rajgundha valley'),
          frame(images.rajgundhaRiverCrossing, 'The bridge over the Uhl, on the walk down to the river'),
          frame(images.rajgundhaTentsNew, 'Yellow tents pitched at the camp'),


        ],
      },
      {
        day: 'Sunday',
        location: 'Rajgundha → Chaina Pass (~2,900 m) → Billing (~2,430 m) → Bir',
        title: 'The last quiet, then the pass',
        hook: 'Meditation and yoga, a gradual climb to the pass, then the choice to fly home over everything you walked.',
        summary:
          'The last day opens at eight with meditation and yoga, nobody hurried out of this valley. Breakfast, then the walk up to **Chaina Pass**: a steady, gradual climb, paced kindly. Tea at the top and a long sit in front of the high Himalayas, and the vehicle meets us right there for the ride down to Billing. A simple lunch at the launch, then the way home is yours: fly. One final tea together closes the weekend.',
        frames: [
          frame(images.rajgundhaMeditation, 'Morning meditation looking down the valley'),
          frame(images.birSunsetGliders, 'The last wings against an orange sky over Bir'),
          frame(images.billingLaunch, 'Billing, where the ways home split'),
          frame(images.heroFly, 'Flying home over the valley you walked through'),
        ],
      },
    ],
    signatureMoments: [
      { title: 'The Friday welcome circle over chai — ninety unhurried minutes', icon: 'circle' },
      { title: 'A mindful walk to sunset on the first evening, past a monastery on the way', icon: 'sunset' },
      { title: 'A short river walk below Rajgundha — cold water, warm boulders, zero hurry', icon: 'waterfall' },
      { title: 'The Saturday-night fire circle at Rajgundha — the heart of the weekend', icon: 'fire' },
      { title: 'Meditation and yoga to open the last morning — no dawn alarm', icon: 'yoga' },
      { title: 'The walk up to Chaina Pass — tea, silence, the high Himalayas in front of you', icon: 'hike' },
      { title: 'Paragliding home over the very valley you walked through, if you choose it', icon: 'flight' },
    ],
    whatsHandled: [
      '2 nights’ stay: Bir + Rajgundha camp (Saturday)',
      'All ground transport from Bir onward',
      'Every meal, Friday dinner to Sunday goodbye tea',
      'Hosted walks, the sharing circle, morning meditation',
      'Tandem paragliding for those who opt in, no extra charge from us',
    ],
    honesty: [
      'Food up high is simple, not fancy: dal-rice, parathas, Maggi, honest mountain food.',
      'Meals are handled, but carry your own snacks and dry fruits for Saturday’s hike down to the river and sunday hike up to China pass',
      "Paragliding is your choice at booking, at no extra charge. Weather has the final word, if flying isn't possible, everyone comes down together by trail or vehicle.",
      "The cold is the real discomfort risk, not the walking, the kit list is firm for a reason.",
      'Network is decent in Bir, weak at Billing, basically none in Rajgundha, your family’s emergency contact line is set up before we lose signal.',
      'No alcohol on the trail or at the Saturday fire.',
    ],
  },
  {
    slug: 'understanding-the-sky',
    name: 'Understanding the Sky',
    promise: "Don't just take a flight. Understand the sky.",
    duration: 'Fri–Sun',
    season: 'Flying season',
    isComingSoon: true,
    heroImage: images.heroFly,
    heroAlt: 'A paraglider working the thermals over Bir-Billing',
    intro:
      'Most people fly Bir once, for fifteen minutes, and spend fourteen of them taking selfies. This weekend is the other way to do it: you learn what a wing actually is with the kit laid out in front of you, you walk the last stretch of the trail up to Billing so the mountain isn’t an abstraction, and then you take the long flight — up to an hour in Himalayan air, working real thermals, climbing like birds.',
    facts: {
      groupSize: '8–12 — kept small',
      fitness: 'Moderate. Saturday’s hike is the upper half of the Billing trail, ~2–2.5 hours, with a vehicle alternative.',
      season: 'October–November and March–May — the flying seasons. We don’t run this in monsoon.',
      whoItsFor: 'The curious — people who want to actually understand the sky, not just tick a flight off a list. This weekend moves at its own pace, built for people who want to get it, not just have done it.',
    },
    forYouIf: [
      'You’re curious what it actually feels like to fly like a vulture — riding thermals to travel across the sky, not just hang above one field',
      "An hour working real thermals sounds better than fifteen minutes of straight-line sinking",
      'You want to understand how a wing actually flies, and how you and your pilot talk to each other once you’re airborne',
      "You'd enjoy a Saturday-night debrief that decodes what the pilot actually did up there",
    ],
    notForYouIf: [
      'You want the cheapest, shortest possible flight — this weekend is built around comprehension, not speed',
      'You need a fixed script — this weekend is built to understand the sky at its own pace',
    ],
    arc: [
      {
        day: 'Friday',
        location: 'Bir (~1,400 m)',
        title: 'Reading the sky from the ground',
        hook: 'The wing out of its bag, and an evening of landings that finally make sense.',
        summary:
          'A welcome circle built around one question: what does it actually feel like to fly like a vulture? Then the kit session — a full paraglider comes out of its bag on the lawn and you get hands-on with it, the basics of how a wing actually flies, and how you and your pilot will talk to each other once you’re in the air. A sunset walk to the landing zone to watch the day’s last flights come in, now reading them as a language instead of scenery. Dinner together at a Tibetan family table, then an evening spent simply being together.',
        frames: [
          frame(images.birLandingZone, 'The Bir landing field as the day’s last flights come in'),
          frame(images.birSunsetGliders, 'Gliders against an orange sky over Bir'),
          frame(images.birVillageStreet, 'The Colony road through Bir in the evening'),
          frame(images.fireCircle, 'An evening spent together around a fire'),
        ],
      },
      {
        day: 'Saturday',
        location: 'Bir → Billing (~2,430 m) on foot → Bir by air',
        title: 'Climbing like birds',
        hook: 'An old shepherd route on foot, then an hour riding the thermals the vultures use.',
        summary:
          "We leave in the morning and walk the upper Billing trail through oak and rhododendron — an old shepherd route, paced kindly, every step up is height you'll spend in the air. We reach the launch by early afternoon, eat, and that's when things start: ground school first — wind cycles, thermals, why the birds circle where they circle. Then UNDERSTANDING THE SKY — up to an hour with an experienced tandem pilot, **climbing like birds**, riding ridge lift along the Dhauladhar's shoulder. A quiet sunset, then the flight debrief around the fire.",
        frames: [
          frame(images.birGaggle, 'Wings circling together in a thermal above Bir'),
          frame(images.birForest, 'The forested trail climbing out of Bir toward Billing'),
          frame(images.billingLaunch, 'Prayer flags at the Billing launch, ridges layered below'),
          frame(images.shepherds, 'Gaddi shepherds resting on the ridge'),
        ],
      },
      {
        day: 'Sunday',
        location: 'Bir → a hidden waterfall → Bir',
        title: 'The stillness after the sky',
        hook: 'Cold water and a quiet head, the morning after flight.',
        summary:
          "A slow morning — you were a bird yesterday. A mindful walk to a hidden waterfall, the contrast deliberate after Saturday's adrenaline. A long café lunch with flight photos finally allowed on the table, then a closing circle: one thing the sky taught you, one thing the water did.",
        frames: [
          frame(images.waterfall, 'Banghodu waterfall in its mossy gorge above Bir'),
          frame(images.forestClimb, 'The forest walk out to the waterfall'),
          frame(images.birVillageLane, 'A slow café morning on the Bir road'),
        ],
      },
    ],
    signatureMoments: [
      { title: 'The kit session — hands-on with a real wing, and how you’ll talk to your pilot in the air', icon: 'kit' },
      { title: 'The sunset of landings — reading the sky as a language, not scenery', icon: 'sunset' },
      { title: 'The upper Billing trail — an old shepherd route, every step height you’ll fly', icon: 'hike' },
      { title: 'Ground school at the launch — why the birds circle where they circle', icon: 'birds' },
      { title: 'UNDERSTANDING THE SKY — up to an hour, climbing like birds on real thermals', icon: 'wind' },
      { title: 'The Saturday-night flight debrief around the fire', icon: 'fire' },
      { title: 'A hidden waterfall the morning after — cold water, quiet head', icon: 'waterfall' },
    ],
    whatsHandled: [
      '2 nights’ stay in Bir — real beds, hot showers',
      'Transport to the trailhead and back',
      'Every meal, Friday dinner to Sunday goodbye tea',
      'The kit session, ground school, and flight debrief, hosted by Ishani and a local pilot',
      'The flight itself — no extra charge from us, weather and pilots permitting',
      'Your trip photos, shared as a digital album within the week',
    ],
    honesty: [
      'Flight duration is the day’s honest variable — pilots chase the best air, and the sky decides between ~30 and 60+ minutes.',
      'If the sky shuts on Saturday, flights move to Sunday morning’s window — built into the plan, not a scramble.',
      'Flying eligibility applies: typical weight limits ~20–95 kg, and restrictions around heart conditions, recent surgery, pregnancy, severe vertigo.',
      "Saturday's hike is the upper half of the Billing trail only — the vehicle covers the same ground for anyone who'd rather ride.",
      'No alcohol the night before flying — the sky demands a clear head.',
    ],
  },
  {
    slug: 'bir-immersion',
    name: 'The Bir Immersion',
    promise: 'A whole village slows you down — then the Himalayas lift you up.',
    duration: '2.5 days',
    season: 'Long season',
    isComingSoon: true,
    heroImage: images.birVillageStreet,
    heroAlt: 'The Colony road through Bir village',
    intro:
      "Two days woven into the life of Bir: Tibetan monasteries and tea gardens, meditation before breakfast, a film about the mountains you're sitting in, a hike to a sunset the road can't reach, a traditional Himachali dham served the way it has been for generations. And on the final afternoon — Himalayan paragliding from Billing, floating down over everything you've just walked through. This isn't sightseeing — it's an immersion, hosted the way we'd host our own friends.",
    facts: {
      groupSize: '8–12 — small on purpose',
      fitness: 'Easy throughout. One real walk (to Bari), pleasant and skippable.',
      season: 'Oct–Nov & Mar–May for the full flying experience; a no-flight edition can run in shoulder months.',
      whoItsFor: 'Anyone who wants the Himalayas and their culture. Nothing here needs experience, only curiosity.',
    },
    forYouIf: [
      "You want the Himalayas and the culture around them, not just a summit or a flight",
      'You like a village to feel lived-in — monasteries, family kitchens, tea gardens — not staged for tourists',
      'A traditional Himachali dham feast sounds like the headline, not a footnote',
    ],
    notForYouIf: [
      "You want a checklist of summits or activities — this weekend has one real walk and a lot of sitting still",
      "You'd rather skip culture and go straight for adrenaline",
    ],
    arc: [
      {
        day: 'Friday',
        location: 'Bir (~1,400 m)',
        title: "Slowing to the village's pace",
        hook: 'Ninety unhurried minutes, then a sunset that belongs to Bir.',
        summary:
          "Arrive to a long welcome brunch — ninety unhurried minutes that turn the weekend from a booking into a circle. A sunset walk, dinner at a table that belongs to Bir, then the Tibetan Colony by night: handicraft shops still glowing, an early-ish end before Saturday's stillness.",
        frames: [
          frame(images.birVillageStreet, 'The Colony road through Bir, shops still open'),
          frame(images.birStupa, 'A stupa and prayer flags in the Tibetan Colony'),
          frame(images.birSunsetFlight, 'Sunset over Bir'),
          frame(images.birMonasteryFlags, 'Prayer flags strung across a Bir monastery'),
        ],
      },
      {
        day: 'Saturday',
        location: 'Bir → Bari',
        title: 'Stillness first, then the climb',
        hook: 'Meditation as the village wakes, a kind walk up, and a feast to close the day.',
        summary:
          "Morning meditation as the village wakes, a Himalayan film screening, then the one real walk of the weekend — a steady climb to Bari, paced kindly, with the valley opening behind you. Hot chai and a mountain sunset at the top, then a traditional dham feast, cooked by a local boti, served the way it has been at village weddings for generations.",
        frames: [
          frame(images.birValley, 'The valley opening up behind the climb to Bari'),
          frame(images.lushRidge, 'The green ridge above the village'),
          frame(images.community, 'A village sunset from the top'),
          frame(images.billingDhauladhar, 'The Dhauladhar catching the last of the light'),
        ],
      },
      {
        day: 'Sunday',
        location: 'Bir → Billing → Bir',
        title: 'Stillness, then the sky',
        hook: 'Yoga as the valley wakes, then floating over everything you walked through.',
        summary:
          'A humane 8 AM start with curated meditation and yoga, then a slow café morning — the last of the Bir café magic. A flight briefing for anyone who opted in, then Himalayan paragliding from Billing: 15–30 minutes floating over Sherab Ling Monastery, the Colony. Everyone flying is in the air by ~2:30 at the latest, conditions permitting.',
        frames: [
          frame(images.heroFly, 'A paraglider descending over Bir'),
          frame(images.billingLaunch, 'The launch at Billing before take-off'),
          frame(images.choklingMonastery, 'Chokling Monastery, one of the roofs you fly over'),
          frame(images.birGaggle, 'Wings stacked over the valley'),
        ],
      },
    ],
    signatureMoments: [
      { title: 'The 90-minute welcome brunch that turns strangers into a circle', icon: 'circle' },
      { title: 'Guided morning meditation as the village wakes', icon: 'meditation' },
      { title: 'A Himalayan film screening, watched in the mountains it’s about', icon: 'film' },
      { title: 'The hike to Bari — the valley opening behind you with every step', icon: 'hike' },
      { title: 'The Bari sunset — Kangra gold below, Dhauladhar pink above', icon: 'sunset' },
      { title: 'A traditional Himachali dham, served the way villages have served it for generations', icon: 'feast' },
      { title: 'Sunday’s curated meditation and yoga — zero performance', icon: 'yoga' },
      { title: 'Everyone flying by ~2:30 Sunday, weather permitting', icon: 'flight' },
    ],
    whatsHandled: [
      '2 nights\' stay (Bir, or Bir + Bari camp)',
      'All ground transport within the weekend',
      'Every meal, Friday brunch to Sunday goodbye tea — including the dham',
      'Hosted meditation, yoga, film screening, sunset walk, fire circle',
      'Tandem paragliding for those who opt in — no extra charge from us',
      'Your trip photos, shared as a digital album within the week',
    ],
    honesty: [
      "The Sunday flight slot is the pilots' call — wind decides, never the schedule. If flying isn't safe, it doesn't happen.",
      'Flying eligibility applies if you opt in: typical weight limits ~20–95 kg, and restrictions around heart conditions, recent surgery, pregnancy, severe vertigo.',
      'The Bari hike is the one real effort — a steady climb at a kind pace, with a vehicle alternative.',
      'The dham is vegetarian by tradition and served in sittings — tell us dietary restrictions at booking.',
      'Network is thin at Bari — we set up your emergency-contact protocol before we walk up.',
    ],
  },
  {
    slug: 'stillness-and-sangha',
    name: 'Stillness & Sangha',
    promise: 'Two days inside the quietest tradition in the Himalayas.',
    duration: 'Fri–Sun',
    season: 'Year-round',
    isComingSoon: true,
    heroImage: images.choklingMonastery,
    heroAlt: 'Chokling Monastery in Bir’s Tibetan Colony',
    intro:
      "Bir is one of the few places in India where mindfulness isn't a retreat-brochure word — it's the neighbourhood. Tibetan monasteries hold evening prayers ten minutes from your bed. A world-respected institute teaches meditation on donation. An 800-year-old Shiva temple stands half an hour down the road. No tents, no trekking, no adrenaline required — just stillness, good tables, and a group small enough to become a sangha.",
    facts: {
      groupSize: '8–12 — monasteries welcome guests, not crowds',
      fitness: 'Gentle. The waterfall walk is the one real stretch, unhurried and mindful by design.',
      season: 'Genuinely year-round — our monsoon-proof, winter-friendly weekend.',
      whoItsFor: 'The tired-of-being-busy professional, parents escaping without gear-shopping first, anyone 25 to 75 who wants the mountains without a single cold night.',
    },
    forYouIf: [
      "You want the Himalayas without a single cold night or a piece of trekking gear",
      "You're curious about meditation but would never book a ten-day silent retreat",
      'Two living traditions — Buddhist and Shaiva — in one weekend sounds richer than one long hike',
      'Hot siddu, a dham feast, and a real bed matter as much as the practice does',
    ],
    notForYouIf: [
      'You came for adrenaline — the optional Sunday flight is a footnote here, not the headline',
      'You want camping — this weekend runs entirely from real beds in Bir',
    ],
    arc: [
      {
        day: 'Friday',
        location: 'Bir (~1,400 m)',
        title: 'Stepping into the quiet',
        hook: 'Prayer wheels, butter lamps, and a sunset over the tea gardens.',
        summary:
          "Early arrivals get a long brunch; everyone gets a 2 PM welcome circle — one honest sentence on what you're hoping gets quieter this weekend. A slow, hosted walk through the Tibetan Colony to Chokling Monastery — prayer wheels, butter lamps, standing quietly at the edge of prayers when timing allows. A tea-garden sunset, then dinner at a Tibetan family-run kitchen.",
        frames: [
          frame(images.choklingApproach, 'The walk up to Chokling Monastery through its gardens'),
          frame(images.birPrayerHall, 'Evening prayers in the hall, watched from the edge'),
          frame(images.birManiStones, 'Mani stones carved and painted with mantras'),
          frame(images.birMonasteryCourtyard, 'A monastery courtyard in the Colony'),
        ],
      },
      {
        day: 'Saturday',
        location: 'Bir → a hidden waterfall → Bir',
        title: 'Practice, and a walk in silence',
        hook: 'Sitting taught from zero, then one stretch of trail without words.',
        summary:
          'A proper guided sitting practice from zero, taught for first-timers. Then a mindful walk to a waterfall off the tourist map, one stretch of it in silence. Hot siddu and lunch back in Bir, a protected rest block, another sunset walk, a mountain film and Q&A, and a dham feast to close the day — followed by a gently hosted fire circle.',
        frames: [
          frame(images.waterfall, 'Banghodu waterfall, off the tourist map above Bir'),
          frame(images.forestClimb, 'The mindful walk out, one stretch of it in silence'),
          frame(images.birMonasteryGate, 'A monastery gate on the way back into the Colony'),
          frame(images.fireCircle, 'The gently hosted fire circle that closes the day'),
        ],
      },
      {
        day: 'Sunday',
        location: 'Bir → Baijnath → Bir',
        title: 'Two traditions, one morning',
        hook: 'A final sit, then an 800-year-old temple still in daily worship.',
        summary:
          'The final sit of the weekend at the Deer Park Institute, then Baijnath — an 800-year-old stone Shiva temple still in daily worship, timed for a quiet mid-morning visit. A long café lunch, a closing circle, and a take-the-practice-home card. Those who opted in head to Billing for an optional flight; everyone else has a free-flowing afternoon before goodbye tea.',
        frames: [
          frame(images.baijnathTemple, 'Baijnath’s 800-year-old stone Shiva temple'),
          frame(images.birInstituteCourt, 'The institute courtyard where the final sit happens'),
          frame(images.birInstitute, 'Institute grounds and stupas in Bir'),
          frame(images.birMonks, 'Monks in the Tibetan Colony'),
        ],
      },
    ],
    signatureMoments: [
      { title: 'Standing quietly at the edge of prayers at Chokling Monastery', icon: 'monastery' },
      { title: 'Guided sitting practice from zero — first-timers are the point', icon: 'meditation' },
      { title: 'A hidden waterfall, walked one stretch in silence', icon: 'waterfall' },
      { title: 'Hot siddu straight off the steamer', icon: 'feast' },
      { title: 'A mountain film + Q&A, when the calendar allows', icon: 'film' },
      { title: 'A dham feast, then a gently hosted fire circle', icon: 'fire' },
      { title: 'Morning meditation at the Deer Park Institute', icon: 'meditation' },
      { title: 'Baijnath’s 800-year-old Shiva temple, still in daily worship', icon: 'temple' },
    ],
    whatsHandled: [
      '2 nights’ stay in Bir — real beds, hot showers, every night',
      'All ground transport, including the Baijnath trip',
      'Every meal, Friday brunch to Sunday goodbye tea — including the dham',
      'Guided sitting practice, the monastery walk, the film + Q&A, the closing circle',
      'Optional tandem paragliding, weather and pilots permitting — no extra charge from us',
      'Your trip photos, shared as a digital album within the week',
    ],
    honesty: [
      'Monastery visits happen as respectful guests, never as tour operators — ceremony timings vary and are confirmed weekly.',
      'The waterfall walk is the one real stretch of the weekend — gentle, mindful, with plenty of sitting built in.',
      'The dham is vegetarian by tradition and gloriously abundant — tell us dietary needs at booking.',
      "The optional Sunday flight follows the flying seasons (Oct–Nov, Mar–May) and most guests on this weekend skip it — that's fine.",
      'No alcohol at the fire circle — stillness is better sober.',
    ],
  },

]

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug)
}
