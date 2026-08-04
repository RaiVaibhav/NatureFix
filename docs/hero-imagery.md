# Hero imagery — treatment recipe & candidate shortlist

Working notes for the site's hero backgrounds. Two things live here: the **grade recipe**
(how any photo gets turned into a Nature Fix hero) and the **candidate shortlist** researched
on 2026-07-26 for the home page.

Every image referenced here is a **Wikimedia Commons placeholder**. `lib/images.ts` flags the
whole set for replacement with the real archive before launch. Treat the shortlist as choosing
the *composition to shoot*, not the final asset.

---

## The grade recipe

Implemented in `components/HeroBackdrop.tsx`, used by the home hero and every experience hero.
Six layers, back to front — the order matters:

| # | Layer | What it does |
|---|---|---|
| 1 | Photo, `bg-cover bg-center` | the frame itself |
| 2 | Pine grade — deep→black gradient, `mix-blend-multiply` | pulls two different photographers' colour into one brand |
| 3 | Ember wash — radial from bottom-left, `mix-blend-screen` | warmth coming up off the valley floor |
| 4 | Vignette — radial, transparent centre → dark edge | holds the eye centre-frame |
| 5 | Reading scrim — left-to-right dark→transparent | keeps type legible without flattening the right side |
| 6 | Bottom fade → `accent-black` | lets the next section start on a dark edge |

Consequence worth remembering: **type sits left, so the left third of any photo gets crushed.**
That single fact decides most of the shortlist below.

---

## The geography rule

Added 2026-08-04, after an audit found four experience pages illustrated with the wrong valley.

**Every photograph on an experience page must be somewhere a guest could walk to that weekend.**
Bir, the Billing ridge above it, the Uhl valley behind it, Baijnath down the road. Nothing else.

A photo of the right *mood* from the wrong place reads as stock and quietly breaks the one thing
these pages are selling — that we know this specific place. The four that were caught:

| Was | Where that actually is | Now |
|---|---|---|
| `Jibhi_Waterfall` | Banjar valley, ~150 km away | `Banghodu_Waterfall` — in Bir-Billing |
| `Tents_at_Sarchu` | Ladakh road, high desert, ~300 km | `Uhl_above_Barot_towards_Billing` |
| `Tabo_Monastery` | Spiti, over the Kunzum La | `Chokling_Monastery,_Bir` |
| `Hanuman_ji_ka_Tibba` / `Norbulingka` | Triund & Dharamsala — far side of the range | Bir village and Colony frames |

Three Commons categories hold almost everything usable. Prefer them over keyword search,
which returns birds for "Bir Billing":

- **`Category:Bir (Kangra)`** — village, Colony, monasteries, mani stones, prayer halls (~200 files)
- **`Category:Bir-Billing`** — the launch, the landing field, gaggles, Bir sunsets, Banghodu (33 files)
- **`Category:Barot Valley`** — the Uhl, its side streams, the roadless valley behind Billing (19 files)

Rajgundha itself has no Commons coverage. The Uhl valley above Barot is its actual geography —
same river, same slate roofs, reached over the same ridge — so it stands in honestly.
One exception worth knowing: `Camping_at_foothills_of_himalayas.jpg` (Rajgundha's Saturday lead)
is the only frame on the site whose exact location Commons doesn't state. It's kept because
nothing else reads as "roadless valley of stone huts and grazing", and its credit claims
nothing more than "a roadless Himalayan valley" — but it's first in line to be replaced by
real photography.
Commons rejects requests without a `User-Agent` and rate-limits hard; `scripts/fetch-images.mjs`
handles both.

---

## Home page candidates

22 images pulled from Commons categories `Dhauladhar`, `Triund`, and `Kangra district`.
Triund sits in the Dhauladhar range above McLeod Ganj, so it qualifies as "around Dhauladhar".

### Work well
Subject sits right, left side open or already dark — the headline lands cleanly.

| # | Name | Commons file |
|---|---|---|
| 01 | Hikers on Triund meadow — **current pick** | `Hiking_off_to_Laka_Got_from_Triund_(16285401872).jpg` |
| 09 | Green carpet atop Triund | `A_green_carpet_on_the_top_of_triund.jpg` |
| 12 | Evening at Triund | `Beautiful_evening_at_Triund_(16285399662).jpg` |
| 13 | Palampur tea plantation | `Palampur_tea_plantation,_Himachal_Pradesh,_India.jpg` |

### Risky
Busy or bright exactly where the headline sits. Usable only if the type moves right or the
scrim is strengthened.

| # | Name | Commons file |
|---|---|---|
| 05 | Lush green | `Lush_green_(16285401182).jpg` |
| 10 | Gaddi shepherds | `Gaddi_shepherds_having_a_good_time_(16260304116).jpg` |
| 21 | Wild roses Dhauladhar | `Wild_roses_at_Dhauladhar_range.jpg` |

### Too dark
The grade crushes these to near-black — no usable contrast left.

02 `Trail_to_Triund`, 07 `The_valley_below_as_seen_from_the_trail`,
15 `Dhauldhar_through_the_Canopy`, 18 `Dharamsala_and_dhauladhar_range`,
22 `Beas_river_flowing_through_mountain_valleys_of_dhauladhar_2`

### Remainder
Neutral — neither strong nor disqualified: 03, 04, 06, 08, 11, 14, 16, 17, 19, 20.

---

## If a person in frame is wanted

Only three candidates actually have people:

- **01** — hikers walking away, mid-frame right. Currently live. Safest.
- **09** — small figures on the green ridge. Reads as scale rather than as characters.
- **10** — Gaddi shepherds. Most human and most editorial, but the brightest area is
  centre-left, so it needs the headline moved right or a stronger scrim.

---

## Open decisions

- [ ] Confirm the home hero pick (01 stands unless changed)
- [ ] Shoot real replacements for the chosen compositions — Commons placeholders ship nowhere near launch
- [ ] Re-check each experience hero against the grade once real photography lands
