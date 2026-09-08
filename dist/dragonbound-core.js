/* V30.0 — Velmora: Dragonbound cinematic menu launcher. */
(function(){
  const DRAGONBOUND_AUDIO='assets/dragonbound/dragonbound-menu.mp3';
  const DRAGONBOUND_NEW_GAME_AUDIO='assets/dragonbound/dragonbound-new-game-theme.mp3';
  const DRAGONBOUND_VALLEY_AUDIO='assets/dragonbound/dragonbound-valley-theme.mp3';
  const DRAGONBOUND_DIALOGUE_AUDIO='assets/dragonbound/dragonbound-dialogue-type.mp3';
  const DRAGONBOUND_MAELITH_VIDEO='assets/dragonbound/dragonbound-maelith-flight.mp4';
  const DRAGONBOUND_ADOPTION_IMAGE='assets/dragonbound/dragonbound-adoption-centre.png';
  const DRAGONBOUND_ADOPTION_INTERIOR_IMAGE='assets/dragonbound/dragonbound-adoption-interior.png';
  const DRAGONBOUND_ADOPTION_EXTERIOR_AUDIO='assets/dragonbound/dragonbound-adoption-exterior-ambience.mp3';
  const DRAGONBOUND_ADOPTION_INTERIOR_AUDIO='assets/dragonbound/dragonbound-adoption-interior-music.mp3';
  const DRAGONBOUND_BONNIE_MENU_IMAGE='assets/dragonbound/dragonbound-bonnie-menu.png';
  const DRAGONBOUND_ADOPT_EGG_MENU_IMAGE='assets/dragonbound/dragonbound-adopt-egg-menu.png';
  const DRAGONBOUND_STUDY_IMAGE='assets/dragonbound/dragonbound-study-your-dragon.png';
  const DRAGONBOUND_RULES_IMAGE='assets/dragonbound/dragonbound-rules-book.png';
  const DRAGONBOUND_ESTATE_EXTERIOR_IMAGE='assets/dragonbound/estate/dragonbound-estate-exterior.png';
  const DRAGONBOUND_ESTATE_INTERIOR_IMAGE='assets/dragonbound/estate/dragonbound-estate-interior.png';
  const DRAGONBOUND_ESTATE_INTERIOR_AUDIO='assets/dragonbound/estate/dragonbound-estate-interior-music.mp3';
  const DRAGONBOUND_PROPERTY_BOARD_IMAGE='assets/dragonbound/property/dragonbound-property-board.png';
  const DRAGONBOUND_ADOPTION_OPEN_AUDIO='assets/dragonbound/adoption/dragonbound-adoption-open.mp3';
  const DRAGONBOUND_ADOPTION_REVEAL_AUDIO='assets/dragonbound/adoption/dragonbound-egg-reveal.mp3';
  const DRAGONBOUND_ADOPTION_BASKET_FOREGROUND='assets/dragonbound/adoption/dragonbound-adopt-basket-foreground.png';
  const DRAGONBOUND_TREATS_BUTTON_IMAGE='assets/dragonbound/treats/dragon-bites-closed.png';
  const DRAGONBOUND_TREATS_OPEN_IMAGE='assets/dragonbound/treats/dragon-bites-open.png';
  const DRAGONBOUND_TREAT_IMAGE='assets/dragonbound/treats/dragon-bite-treat.png';
  const DRAGONBOUND_TREAT_SHAKE_AUDIO='assets/dragonbound/audio/dragon-treats-shake.mp3';
  const DRAGONBOUND_TREAT_COST=200;
  const DRAGONBOUND_ADOPTION_FRAMES=[
    'assets/dragonbound/adoption/frames/01_basket_closed.png',
    'assets/dragonbound/adoption/frames/02_hands_reaching.png',
    'assets/dragonbound/adoption/frames/03_hands_touching.png',
    'assets/dragonbound/adoption/frames/04_basket_shake.png',
    'assets/dragonbound/adoption/frames/05_lid_barely_open.png'
  ];
  const DRAGONBOUND_EGG_POOL=[
    ['Vardesh','assets/dragonbound/eggs/01_Vardesh_Dragon_Egg.png'],
    ['Lumerre','assets/dragonbound/eggs/02_Lumerre_Dragon_Egg.png'],
    ['Kordesh','assets/dragonbound/eggs/03_Kordesh_Dragon_Egg.png'],
    ['Nambara','assets/dragonbound/eggs/04_Nambara_Dragon_Egg.png'],
    ['Norveth','assets/dragonbound/eggs/05_Norveth_Dragon_Egg.png'],
    ['Zafran','assets/dragonbound/eggs/06_Zafran_Dragon_Egg.png'],
    ['Elvane','assets/dragonbound/eggs/07_Elvane_Dragon_Egg.png'],
    ['Qasmir','assets/dragonbound/eggs/08_Qasmir_Dragon_Egg.png'],
    ['Calvora','assets/dragonbound/eggs/09_Calvora_Dragon_Egg.png'],
    ['Rovarn','assets/dragonbound/eggs/10_Rovarn_Dragon_Egg.png'],
    ['Talune','assets/dragonbound/eggs/11_Talune_Dragon_Egg.png'],
    ['Drazhen','assets/dragonbound/eggs/12_Drazhen_Dragon_Egg.png'],
    ['Belros','assets/dragonbound/eggs/13_Belros_Dragon_Egg.png'],
    ['Marovar','assets/dragonbound/eggs/14_Marovar_Dragon_Egg.png'],
    ['Sorevia','assets/dragonbound/eggs/15_Sorevia_Dragon_Egg.png'],
    ['Iskandar','assets/dragonbound/eggs/16_Iskandar_Dragon_Egg.png'],
    ['Blackglass Coast','assets/dragonbound/eggs/17_Blackglass_Coast_Dragon_Egg.png'],
    ['Skallheim','assets/dragonbound/eggs/18_Skallheim_Dragon_Egg.png'],
    ['Hestholm Fjord','assets/dragonbound/eggs/19_Hestholm_Fjord_Dragon_Egg.png'],
    ['Nyrgate Aurora','assets/dragonbound/eggs/20_Nyrgate_Aurora_Dragon_Egg.png'],
    ['Warmvein / Krellhaven','assets/dragonbound/eggs/21_Warmvein_Krellhaven_Dragon_Egg.png'],
    ['Aurelia','assets/dragonbound/eggs/22_Aurelia_Dragon_Egg.png'],
    ['Orsanne','assets/dragonbound/eggs/23_Orsanne_Dragon_Egg.png'],
    ['Saint Ciro','assets/dragonbound/eggs/24_Saint_Ciro_Dragon_Egg.png'],
    ['Marenza','assets/dragonbound/eggs/25_Marenza_Dragon_Egg.png'],
    ['Grand Khor','assets/dragonbound/eggs/26_Grand_Khor_Dragon_Egg.png'],
    ['Rova End','assets/dragonbound/eggs/27_Rova_End_Dragon_Egg.png'],
    ['Zafir Row','assets/dragonbound/eggs/28_Zafir_Row_Dragon_Egg.png'],
    ['Ossa Mere','assets/dragonbound/eggs/29_Ossa_Mere_Dragon_Egg.png'],
    ['Ashwick / Cinderbank','assets/dragonbound/eggs/30_Ashwick_Cinderbank_Dragon_Egg.png']
  ].map(([name,src])=>({name,src}));
  const DRAGONBOUND_PROPERTY_FLAGS=[
    {country:'Vardesh',x:9.1,y:24.0,w:6.3,h:10.5},
    {country:'Lumerre',x:24.7,y:22.8,w:6.4,h:10.4},
    {country:'Kordesh',x:35.2,y:24.0,w:6.5,h:10.5},
    {country:'Nambara',x:51.0,y:24.3,w:6.6,h:10.5},
    {country:'Norveth',x:7.7,y:39.0,w:6.2,h:10.4},
    {country:'Zafran',x:18.3,y:40.5,w:6.2,h:10.4},
    {country:'Elvane',x:30.4,y:41.8,w:6.2,h:10.4},
    {country:'Qasmir',x:45.6,y:38.6,w:6.4,h:10.6},
    {country:'Calvora',x:59.0,y:45.2,w:6.5,h:10.5},
    {country:'Talune',x:9.3,y:57.0,w:6.3,h:10.4},
    {country:'Drazhen',x:22.0,y:58.4,w:6.2,h:10.5},
    {country:'Belros',x:32.2,y:60.4,w:6.3,h:10.5},
    {country:'Rovarn',x:41.9,y:54.8,w:6.4,h:10.5},
    {country:'Marovar',x:51.6,y:54.6,w:6.4,h:10.5},
    {country:'Sorevia',x:38.6,y:69.6,w:6.2,h:10.4},
    {country:'Iskandar',x:57.8,y:68.6,w:6.4,h:10.5}
  ];
  const DRAGONBOUND_PROPERTY_LISTINGS={
    Vardesh:[
      {id:'vardesh-hestholm-fjord-starter',name:'Hestholm Fjord Starter Cottage',area:'Hestholm Fjord',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/vardesh-hestholm-fjord-starter.webp',full:'assets/dragonbound/property/starters/vardesh-hestholm-fjord-starter.png'},
      {id:'vardesh-hrafnvik-cliff-street',name:'Hrafnvik Cliff Street House',area:'Hrafnvik',price:'30,000 GP',thumb:'assets/dragonbound/property/thumbs/vardesh-hrafnvik-cliff-street.webp'},
      {id:'vardesh-blackglass-coast',name:'Blackglass Coast House',area:'Blackglass Coast',price:'50,000 GP',thumb:'assets/dragonbound/property/thumbs/vardesh-blackglass-coast.webp'},
      {id:'vardesh-warmvein-mansion',name:'Warmvein Geothermal Mansion',area:'Warmvein',price:'75,000 GP',thumb:'assets/dragonbound/property/thumbs/vardesh-warmvein-mansion.webp'},
      {id:'vardesh-varns-rest-master',name:"Varn's Rest Master Home",area:"Varn's Rest",price:'100,000 GP',thumb:'assets/dragonbound/property/thumbs/vardesh-varns-rest-master.webp'}
    ],
    Lumerre:[
      {id:'lumerre-greenhollow-starter',name:'Greenhollow Starter Cottage',area:'Greenhollow',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/lumerre-greenhollow-starter.webp',full:'assets/dragonbound/property/starters/lumerre-greenhollow-starter.png'},
      {id:'lumerre-eldonvale-river',name:'Eldonvale River House',area:'Eldonvale',price:'30,000 GP',thumb:'assets/dragonbound/property/thumbs/lumerre-eldonvale-river.webp'},
      {id:'lumerre-sylvar-canopy',name:'Sylvar Canopy House',area:'Sylvar',price:'50,000 GP',thumb:'assets/dragonbound/property/thumbs/lumerre-sylvar-canopy.webp'},
      {id:'lumerre-valbrier-mansion',name:'Valbrier Flower Hill Mansion',area:'Valbrier',price:'75,000 GP',thumb:'assets/dragonbound/property/thumbs/lumerre-valbrier-mansion.webp'},
      {id:'lumerre-verdelume-master',name:'Verdelume Master Home',area:'Verdelume',price:'100,000 GP',thumb:'assets/dragonbound/property/thumbs/lumerre-verdelume-master.webp'}
    ],
    Nambara:[
      {id:'nambara-naskor-edge-starter',name:'Naskor Edge Moonlit House',area:'Naskor Edge',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/nambara-naskor-edge-starter.webp',full:'assets/dragonbound/property/starters/nambara-naskor-edge-starter.png'},
      {id:'nambara-canal-quarter',name:'Canal Quarter House',area:'Canal Quarter',price:'30,000 GP',thumb:'assets/dragonbound/property/thumbs/nambara-canal-quarter.webp'},
      {id:'nambara-lantern-market',name:'Lantern Market House',area:'Lantern Market',price:'50,000 GP',thumb:'assets/dragonbound/property/thumbs/nambara-lantern-market.webp'},
      {id:'nambara-wetland-mansion',name:'Wetland Mansion',area:'Nambara Wetlands',price:'75,000 GP',thumb:'assets/dragonbound/property/thumbs/nambara-wetland-mansion.webp'},
      {id:'nambara-lantern-terrace-master',name:'Lantern Terrace Master Home',area:'Lantern Terrace',price:'100,000 GP',thumb:'assets/dragonbound/property/thumbs/nambara-lantern-terrace-master.webp'}
    ],
    Norveth:[
      {id:'norveth-varka-fell-starter',name:'Varka Fell Highland Cottage',area:'Varka Fell',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/norveth-varka-fell-starter.webp',full:'assets/dragonbound/property/starters/norveth-varka-fell-starter.png'},
      {id:'norveth-pine-valley',name:'Pine Valley House',area:'Pine Valley',price:'30,000 GP',thumb:'assets/dragonbound/property/thumbs/norveth-pine-valley.webp'},
      {id:'norveth-varka-fell-lodge',name:'Varka Fell Lodge',area:'Varka Fell',price:'50,000 GP',thumb:'assets/dragonbound/property/thumbs/norveth-varka-fell-lodge.webp'},
      {id:'norveth-skarholt-mansion',name:'Skarholt Mansion',area:'Skarholt',price:'75,000 GP',thumb:'assets/dragonbound/property/thumbs/norveth-skarholt-mansion.webp'},
      {id:'norveth-master-manor',name:'Norveth Master Manor',area:'High Norveth',price:'100,000 GP',thumb:'assets/dragonbound/property/thumbs/norveth-master-manor.webp'}
    ],
    Elvane:[
      {id:'elvane-canto-plains-starter',name:'Sunlit Meadow Starter Cottage',area:'Canto Plains',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/elvane-canto-plains-starter.webp',full:'assets/dragonbound/property/starters/elvane-canto-plains-starter.png'},
      {id:'elvane-willowmere-creek',name:'Willowmere Creek House',area:'Willowmere',price:'30,000 GP',thumb:'assets/dragonbound/property/thumbs/elvane-willowmere-creek.webp'},
      {id:'elvane-ossa-mere-orchard',name:'Ossa Mere Orchard House',area:'Ossa Mere',price:'50,000 GP',thumb:'assets/dragonbound/property/thumbs/elvane-ossa-mere-orchard.webp'},
      {id:'elvane-alderfen-garden',name:'Alderfen Garden Lodge',area:'Alderfen',price:'75,000 GP',thumb:'assets/dragonbound/property/thumbs/elvane-alderfen-garden.webp'},
      {id:'elvane-elderbough-estate',name:'Elderbough Estate',area:'Elderbough',price:'100,000 GP',thumb:'assets/dragonbound/property/thumbs/elvane-elderbough-estate.webp'}
    ],
    Sorevia:[
      {id:'sorevia-lakeside-starter',name:'Sorevia Lakeside Starter Cottage',area:'Sorevia Lakes',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/sorevia-lakeside-starter.webp',full:'assets/dragonbound/property/starters/sorevia-lakeside-starter.png'}
    ],
    Iskandar:[
      {id:'iskandar-moonlit-starter',name:'Iskandar Moonlit Starter House',area:'Iskandar',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/iskandar-moonlit-starter.webp',full:'assets/dragonbound/property/starters/iskandar-moonlit-starter.png'}
    ],
    Drazhen:[
      {id:'drazhen-ashlands-starter',name:'Drazhen Ashlands Starter House',area:'Drazhen Ashlands',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/drazhen-ashlands-starter.webp',full:'assets/dragonbound/property/starters/drazhen-ashlands-starter.png'}
    ],
    Rovarn:[
      {id:'rovarn-redstone-starter',name:'Rovarn Redstone Starter House',area:'Rovarn',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/rovarn-redstone-starter.webp',full:'assets/dragonbound/property/starters/rovarn-redstone-starter.png'}
    ],
    Marovar:[
      {id:'marovar-crescent-starter',name:'Marovar Crescent Starter House',area:'Marovar',price:'FREE',starter:true,thumb:'assets/dragonbound/property/thumbs/marovar-crescent-starter.webp',full:'assets/dragonbound/property/starters/marovar-crescent-starter.png'}
    ]
  };
  const DRAGONBOUND_EGG_STUDY={
    'Vardesh':{
      profile:'A dense, cold-running shell with slate-blue ridges. It gives three faint taps before strong weather fronts and settles fastest beside wool, stone and a low hearth.',
      foundIn:'High Vardesh valleys, wind-cut passes, cliff barns and abandoned watch huts above the fjords.',
      dragonType:'Fjord Gale · Hearthguard',
      history:[
        'Vardeshi keepers say these eggs are never truly lost; they are “waiting out the weather.” Shepherds once carried found eggs into storm shelters and left three bowls nearby — water, salt and warm milk — to see which one the hatchling nudged first. The choice was believed to hint at whether it would bond most strongly to travel, home or herd.',
        'The shell is unusually sensitive to pressure changes. Old mountain families still treat a resting Vardesh egg as a living storm glass: when its inner tapping speeds up, shutters are closed, washing is brought in and every sensible goat is persuaded indoors.'
      ],
      threats:'Sudden dry heat can craze the shell. Keep it away from forge walls, repeated hard knocking and exposed cliff drafts once the internal tapping becomes regular.'
    },
    'Lumerre':{
      profile:'Warm ivory shell with pearly seams that seem brighter after music or conversation. It is one of the few eggs known to rock gently toward familiar voices.',
      foundIn:'Lumerre vineyard terraces, riverside gardens, old theatre lofts and the warm stone courtyards around village squares.',
      dragonType:'Sunvine · Chorus-Bonded',
      history:[
        'Lumerrean families traditionally refuse to incubate these eggs in silence. A found egg is placed somewhere people naturally gather — a kitchen, rehearsal room or courtyard — and allowed to learn the rhythm of a household before it ever sees the world. Travelling musicians used to claim that an egg which “kept time” with a chorus would hatch unusually confident around crowds.',
        'During the Lantern Weeks, children still leave folded paper songs near known nesting places. Most are terrible. The dragons, apparently, have always been very forgiving critics.'
      ],
      threats:'Long isolation can make the egg unusually still. Avoid sharp temperature drops, constant mechanical noise and moving it repeatedly between unfamiliar homes.'
    },
    'Kordesh':{
      profile:'Exceptionally heavy for its size, with a shell that feels more like polished stone than scale. A healthy egg answers slow rhythmic knocks with a deeper pulse from inside.',
      foundIn:'Kordesh mountain roads, caravan rest-houses, old gate towers and caves overlooking the Iron Route.',
      dragonType:'Ironback · Passwarden',
      history:[
        'Kordeshi road crews once kept discovered eggs beside toll fires until a licensed keeper could arrive. The custom created a superstition: travellers began touching two fingers to the shell before dangerous crossings for luck. Some eggs started tapping back, and the gesture survives on the Iron Route even where dragons have not nested for generations.',
        'An old surveyor’s journal describes one egg being carried for eleven days after a landslide. It remained silent until the caravan finally reached safe ground, then drummed so loudly against its crate that everyone in camp woke up laughing.'
      ],
      threats:'Do not test the shell by dropping, striking or rolling it; its weight invites bad ideas. Prolonged damp can soften the natural mineral seal around the lower ridges.'
    },
    'Nambara':{
      profile:'A humid-loving egg with velvet-dark pores that bead with clean water before rain. It often rotates a few degrees overnight to face the loudest living part of a room.',
      foundIn:'Nambara canopy hollows, monsoon shrines, giant root systems and raised huts close to seasonal floodwater.',
      dragonType:'Raincall · Canopy Seeker',
      history:[
        'Nambaran naturalists insist the egg is listening long before it hatches. In rainforest villages, found eggs were once placed near open shutters during the first rain of each week so they could “learn the forest’s name.” Keepers recorded different tapping patterns for frogs, drums, thunder and human laughter.',
        'One famous Nest record tells of an egg that refused every prepared bed until Bonnie’s predecessor put a dripping fern beside it. It rolled directly into the fern pot and stayed there for six days.'
      ],
      threats:'Dry indoor heat is the main danger. Never soak the shell directly; steady humidity is safer than flooding, and stagnant water around the base can encourage shell-mould.'
    },
    'Norveth':{
      profile:'Cool, quiet and slow to react during daylight. After dusk the shell warms slightly and faint internal movement becomes easier to feel with a resting palm.',
      foundIn:'Norveth snow forests, moonlit ridges, abandoned hunting lodges and sheltered hollows beneath old pines.',
      dragonType:'Snowveil · Nightwatch',
      history:[
        'Norvethi folklore calls these “late listeners.” Families were warned never to assume a motionless egg had failed; some remain nearly silent for weeks, then become active only after sunset. Night watchmen began volunteering to sit incubation duty and developed elaborate tea rituals around the job.',
        'A northern saying — “quiet as a Norveth egg at noon” — is still used for suspiciously well-behaved children. The second half of the proverb, usually omitted by parents, is “…and twice as troublesome after midnight.”'
      ],
      threats:'Rapid warming can distress the embryo. Avoid hot baths, fireplaces and bright heat lamps; gradual temperature changes and a cool, stable sleeping place are preferred.'
    },
    'Zafran':{
      profile:'Dry, warm shell with fine sand-like flecks that hold heat long after sunset. When comfortable, it produces a low vibration more felt in the fingertips than heard.',
      foundIn:'Zafran dune wells, shaded caravan courts, ruined observatories and rock shelves above desert trade roads.',
      dragonType:'Dune Ember · Wayfinder',
      history:[
        'Caravan keepers once wrapped these eggs in layered saddlecloth and carried them near the centre of a convoy, never at the front. The belief was that an unhoused hatchling should hear many footsteps before deciding which one to follow. Merchants later turned the practice into a ceremonial “first journey” around the courtyard before adoption.',
        'Some Zafran eggs subtly warm on the side facing a familiar route. Cartographers dismiss the idea as keeper imagination. Caravan drivers do not.'
      ],
      threats:'Cold stone floors can pull heat from the shell too quickly. Fine desert sand is harmless, but wet grit trapped in the seams can abrade the protective outer layer.'
    },
    'Elvane':{
      profile:'A softly textured egg that readily gathers harmless moss and lichen. Its pulse is strongest after rainfall and often settles when surrounded by growing plants.',
      foundIn:'Elvane woodland clearings, Canto meadow edges, hollow trees and the overgrown foundations of forgotten cottages.',
      dragonType:'Mossheart · Grovekeeper',
      history:[
        'Elvane villagers traditionally leave a newly found egg exactly where it is for one full sunrise while checking the area for a returning parent. If none appears, a ring of fresh herbs is placed around it before the egg is moved. The ritual was practical — crushed herbs revealed footprints — but eventually became part of local dragon lore.',
        'Keepers swear Elvane eggs dislike neat gardens. At the Second Nest they consistently roll toward the most overgrown corner, which Bonnie regards as excellent judgement.'
      ],
      threats:'Avoid chemical plant feeds, strong perfumes and stripping natural moss from the shell. The growth is usually protective; remove only anything a keeper identifies as harmful.'
    },
    'Qasmir':{
      profile:'Smooth glassy shell with shifting lines beneath the surface. In a quiet room it can make tiny bell-like ticks as the temperature changes.',
      foundIn:'Qasmir salt flats, shaded courtyards, wind towers, desert glass fields and the upper rooms of old observatories.',
      dragonType:'Glasswind · Mirage Reader',
      history:[
        'Qasmiri scholars spent centuries arguing over whether the moving lines on these eggs predict weather, direction or mood. No theory has survived contact with enough eggs. The only dependable observation is that the patterns become more complex when the egg is carried somewhere it has never been.',
        'A famous astronomer once mapped one shell every evening for a year and produced what she believed was a star chart. Her apprentice later noticed it matched the floor plan of the kitchen where the egg was kept.'
      ],
      threats:'The shell tolerates heat but dislikes sudden glare. Keep away from magnifying glass experiments, concentrated sunlight and severe temperature swings between desert day and night.'
    },
    'Calvora':{
      profile:'A lively warm egg with coppery seams and frequent little kicks. Activity often increases around cooking fires, morning sunlight and the smell of toasted grain.',
      foundIn:'Calvora hillside towns, warm sea cliffs, bakery roofs, old bathhouses and sheltered volcanic stone terraces.',
      dragonType:'Cindercrest · Hearthrunner',
      history:[
        'Calvoran egg keepers developed a habit of recording “first kicks” on kitchen walls, which is why some very respectable inns have dates and names scratched behind their ovens. The eggs gained a reputation for becoming active whenever breakfast started, leading to the local claim that no Calvoran dragon has ever willingly missed a meal.',
        'During coastal festivals, adopted eggs are carried once around the household table before being returned to their nest — a symbolic promise that there will always be a place for them there.'
      ],
      threats:'Overheating is easier than many new keepers expect. The shell should feel pleasantly warm, never hot; keep clear of open flames, oven ledges and prolonged direct sun.'
    },
    'Rovarn':{
      profile:'A waxy, water-resistant shell with slow rolling movements. Healthy eggs often tilt toward running water and become noticeably calmer near reed beds or fountains.',
      foundIn:'Rovarn marsh islands, reed houses, river locks, peat banks and low ruins exposed when seasonal water recedes.',
      dragonType:'Marshcoil · Reedstalker',
      history:[
        'Rovarn boat families used shallow cradle-baskets that could float beside a moored home without ever letting the egg touch open water. The practice supposedly taught hatchlings the sound of the current before their first journey. Modern keepers sensibly keep the basket on dry ground, but many still place a bowl of moving water nearby.',
        'An old lockkeeper named every egg he encountered after the gate number where it was found. This worked wonderfully until Gate Seven produced four eggs in the same spring.'
      ],
      threats:'Waterproof does not mean aquatic. Never submerge the egg, and avoid stagnant marsh water, sudden chilling after dampness and unsecured surfaces where the egg could roll.'
    },
    'Talune':{
      profile:'A light, fragrant shell whose scent changes subtly with temperature — usually grass, blossom or rain-soaked soil. It responds quickly to gentle touch.',
      foundIn:'Talune flower fields, orchard lanes, walled gardens, stream meadows and abandoned shepherd shelters.',
      dragonType:'Bloomtide · Garden Warden',
      history:[
        'Talune estate records mention “garden eggs” long before formal dragon keeping existed. Groundskeepers would find them tucked beside warm compost heaps or under flowering hedges and mark the spot with a ribbon until a keeper arrived. Different ribbon colours eventually became a village code for how active the egg seemed.',
        'The belief that Talune eggs hatch sooner near blooming flowers has never been proven. This has not stopped generations of keepers from spending unreasonable amounts of money on spring bulbs.'
      ],
      threats:'Strong pesticides, smoke and synthetic fragrances can overwhelm the porous shell. Avoid overhandling during periods of rapid rocking, when the hatchling may be repositioning.'
    },
    'Drazhen':{
      profile:'Dark, ash-dusted shell with long periods of complete stillness followed by sudden powerful movement. Warmth collects deep inside rather than on the surface.',
      foundIn:'Drazhen ruin fields, cooled lava shelves, old fortress cellars and ash valleys sheltered from the strongest winds.',
      dragonType:'Ashmaw · Ruin Sentinel',
      history:[
        'Drazhen eggs are responsible for one of the oldest mistakes in dragon keeping: declaring a silent egg empty. Archaeologists have uncovered viable eggs in sealed chambers where no one expected life to remain. The modern seven-check rule — warmth, weight, resonance, seam, scent, pulse and patience — was written largely because of them.',
        'Among ruin wardens, gifting an empty Drazhen shell fragment is a symbol of endurance. Taking one from a living egg is, naturally, a very good way to be thrown out of the profession.'
      ],
      threats:'Do not force activity with extra heat or vibration. Ash-packed seams should be brushed only lightly, and a long quiet phase should be assessed by a keeper rather than disturbed.'
    },
    'Belros':{
      profile:'Stone-toned shell with remarkable resonance. A soft spoken word near one side can sometimes be felt as a faint vibration on the opposite side.',
      foundIn:'Belros quarry caves, bell towers, mine shelters, echoing ravines and dry chambers behind worked stone.',
      dragonType:'Bellstone · Cavern Listener',
      history:[
        'Belros miners once used a practical test when an egg was found underground: everyone stopped work. If the shell answered distant hammering, the tunnel was cleared and the egg removed before mining resumed. Over time this became the “quiet minute,” a tradition still observed in several quarries whenever dragon signs are discovered.',
        'Bellmakers became especially fond of Belros eggs because some seem to react differently to each note. One workshop kept a chart of favourite bells. The egg’s favourite was, inconveniently, the largest one.'
      ],
      threats:'Heavy impact and sustained industrial vibration are dangerous despite the shell’s stony feel. Keep away from active blasting, machinery and places with repeated deep resonance.'
    },
    'Marovar':{
      profile:'Salt-flecked shell with a slow rocking rhythm that often matches nearby tides. It smells faintly of clean sea air even after days indoors.',
      foundIn:'Marovar harbour walls, sea caves, warehouse lofts, tidal steps and sheltered islands just beyond busy ports.',
      dragonType:'Tideforge · Dockwarden',
      history:[
        'Dockworkers historically reported Marovar eggs before cargo, storms or even wages — partly out of respect and partly because an unattended dragon egg could stop a whole quay. Harbour masters developed numbered “egg flags” so crews could warn one another without causing a crowd.',
        'The tradition of giving a newly adopted Marovar egg a tiny brass ship tag began as paperwork. Keepers liked it, hatchlings kept stealing the tags, and now nobody remembers which part was official.'
      ],
      threats:'Salt crust should never be scraped with metal. Avoid full seawater immersion, unsecured dock edges and rapid movement from cold harbour air into strong indoor heat.'
    },
    'Sorevia':{
      profile:'Surprisingly light shell with delicate internal movement. On calm days it may shift by itself on soft bedding as though reacting to air currents nobody else can feel.',
      foundIn:'Sorevia high meadows, windmills, hill chapels, cloud farms and lofts open to long stretches of sky.',
      dragonType:'Cloudpetal · Meadow Soarer',
      history:[
        'Sorevian farmers used broad straw nests because smaller baskets had a habit of ending up several inches from where they were left. Keepers blamed uneven floors until the same thing happened on stone. The accepted explanation now is simple: the hatchlings are restless long before hatching.',
        'A children’s game called “Where’s the Egg?” began from this behaviour. The real version is less charming at three in the morning, according to every Sorevian keeper Bonnie has ever met.'
      ],
      threats:'Use a deep stable nest and never leave the egg on a high ledge. Strong fans, open windows during gales and loose bedding can encourage dangerous rolling.'
    },
    'Iskandar':{
      profile:'Dark shell traced with tiny points that appear to shift over several nights. It becomes warmest under clear skies and unusually still during heavy cloud.',
      foundIn:'Iskandar desert plateaus, oasis libraries, rooftop observatories and old pilgrim shelters far from city light.',
      dragonType:'Starwell · Night Oracle',
      history:[
        'Iskandari observers have copied the tiny points on these shells for hundreds of years. Some maps resemble constellations; others resemble nothing at all. Keepers now think the pattern is partly biological and partly responsive to light, but that has not reduced the number of prophecies written about particularly dramatic eggs.',
        'One royal archive contains a prediction that an Iskandar hatchling would “open the western gate.” It eventually learned to unlatch a pantry. Technically, the prophecy was accurate.'
      ],
      threats:'Constant bright light can disrupt the shell’s natural night cycle. Avoid sudden chilling after sunset and do not paint, mark or trace directly onto the shell.'
    },
    'Blackglass Coast':{
      profile:'Glossy near-black shell that flashes with brief internal sparks during storms. The surface is smooth but not brittle, despite its glasslike appearance.',
      foundIn:'The Blackglass Coast of Vardesh, storm caves, basalt shelves and ruined lookout towers facing the northern sea.',
      dragonType:'Obsidian Gale · Stormbreaker',
      history:[
        'Blackglass eggs were once treated as bad omens because they were most often discovered after violent coastal storms. Modern records suggest the opposite: adults appear to choose exceptionally sheltered cracks that only become visible once waves clear the debris. Finding an egg after a storm therefore became a sign that something fragile had survived.',
        'Coast wardens still hang a black ribbon and a copper bell near a recovered egg. The ribbon warns visitors; the bell lets the egg hear the weather without being placed anywhere near it.'
      ],
      threats:'Electrical storms can make the egg dangerously active. Keep indoors during lightning, away from exposed metal, wet stone and anyone who suggests “seeing what happens” with static charge.'
    },
    'Skallheim':{
      profile:'An ice-cold egg with pale mineral seams that form temporary frost patterns. It may remain almost motionless until exposed to true winter air.',
      foundIn:'Skallheim ice valleys, glacier caves, snow-buried shrines and deep stone stores below northern settlements.',
      dragonType:'Frostcrown · Icebound Sentinel',
      history:[
        'Skallheim keepers learned early that warmth is not always kindness. The oldest incubation rooms are built half underground, with thick doors and no fireplace at all. Eggs are checked by touch, weight and frost pattern rather than by trying to warm them into movement.',
        'Local families carve tiny wooden suns and hang them above the nest as a promise: the hatchling will meet summer in its own time. Bonnie keeps one above every Skallheim egg that reaches the Second Nest.'
      ],
      threats:'Heat shock is the greatest risk. Never thaw surface frost with hot water, breath or flame; allow it to melt naturally and keep the environment cool and stable.'
    },
    'Hestholm Fjord':{
      profile:'Blue-grey shell with a deep internal slosh that is normal for the type. It reacts strongly to distant horns, boat knocks and the low vibration of moving water.',
      foundIn:'Hestholm Fjord sea caves, boathouses, cliff steps, seal beaches and sheltered ledges just above the high-tide line.',
      dragonType:'Brinewing · Fjord Diver',
      history:[
        'Hestholm fishers once believed these eggs had to hear the harbour horn every morning or they would hatch “without a sense of home.” There is no evidence for this, but eggs raised near familiar harbour sounds do often become calmer when those sounds return.',
        'One adoption ledger records an egg that rocked violently whenever a particular fishing boat arrived. The keeper later discovered the boat’s cook had been sneaking it bits of smoked herring through the window — before it had even hatched.'
      ],
      threats:'Do not mistake the internal liquid sound for damage. Never shake the egg to check it, and keep it away from incoming tides, slippery rock and concentrated salt deposits.'
    },
    'Nyrgate Aurora':{
      profile:'Iridescent shell whose colour bands slowly travel across the surface in darkness. Activity increases beneath aurora light but remains gentle and rhythmic.',
      foundIn:'Nyrgate rooftops, northern observatories, snowfields beyond the city lamps and old towers with clear views of the aurora.',
      dragonType:'Aurora · Lumenweaver',
      history:[
        'Nyrgate scholars once locked an egg in a windowless room to prove its colours came from stored daylight. The egg went dull, the scholars became miserable, and the caretaker quietly moved it back beneath the night sky. Its bands returned within an hour. The experiment was never repeated.',
        'Today, adopted Nyrgate eggs are often given a “first lights” evening: no ceremony, no crowd, just one trusted person sitting nearby while the aurora moves overhead.'
      ],
      threats:'Continuous artificial light can flatten the shell’s natural cycle. Avoid bright lamps overnight, sudden heat and reflective enclosures that trap glare around the egg.'
    },
    'Warmvein / Krellhaven':{
      profile:'A deep warm egg with slow, powerful pulses that can be felt through thick cloth. The seams brighten slightly near worked metal or geothermal stone.',
      foundIn:'Warmvein geothermal tunnels, Krellhaven forge districts, mineral springs and sealed chambers behind old furnace works.',
      dragonType:'Forgepulse · Magma Burrower',
      history:[
        'Warmvein miners originally mistook the first recorded eggs for strange ore deposits because they stayed hot after being removed from the rock. Krellhaven smiths quickly learned better when one began knocking in time with a hammer. The association with workshops has survived ever since.',
        'Responsible smithies now keep found eggs in a quiet side room, not beside the forge. The old phrase “give it heat and a hammer” has been replaced by Bonnie’s preferred version: “give it warmth and leave the hammer alone.”'
      ],
      threats:'Direct forge heat can overcook the outer membrane even when the shell seems comfortable. Keep away from molten metal, hammer benches and sealed boxes that cannot vent warmth.'
    },
    'Aurelia':{
      profile:'A bright, finely patterned egg that responds to voices from several directions at once. It tends to become more active in busy but calm social spaces.',
      foundIn:'Aurelia civic gardens, academy roofs, old courtyards, public bath terraces and the quiet upper floors of crowded neighbourhoods.',
      dragonType:'Gilded Chorus · Civic Companion',
      history:[
        'Aurelian records contain more communal incubations than anywhere else in Velmora. Neighbours would take turns sitting with a recovered egg so it learned the voices of an entire street before adoption. The practice became less formal over time, but many homes still invite friends to read aloud near a newly adopted egg.',
        'One municipal archive lists an egg as an official meeting attendee for six consecutive weeks because nobody knew which department was responsible for moving it.'
      ],
      threats:'Crowds are fine; chaos is not. Avoid shouting directly over the nest, constant handling by visitors and moving the egg from one social space to another without a quiet recovery period.'
    },
    'Orsanne':{
      profile:'Softly perfumed shell, commonly carrying notes of pear skin, herbs and wet bark. It rests best in woven natural fibres and becomes active around dawn.',
      foundIn:'Orsanne orchards, herb terraces, cider barns, misty lanes and dry hollows beneath ancient fruit trees.',
      dragonType:'Mistbloom · Orchard Keeper',
      history:[
        'Orsanne orchard workers used to place any found egg in an empty harvest basket and leave one piece of fruit beside it — not for eating, but so the scent of the orchard travelled with the egg. Modern keepers still favour woven baskets, though Bonnie strongly objects to the old habit of balancing them on carts.',
        'The first fallen blossom of spring is sometimes tucked beside an adopted egg as a local wish for patience. If the egg eats it after hatching, tradition says the wish worked.'
      ],
      threats:'Fermenting fruit produces more heat and gas than an incubation nest needs. Keep the egg away from active cider vats, mouldy straw and strong chemical cleaners.'
    },
    'Saint Ciro':{
      profile:'Golden-warm shell with a clear single tap often heard near sunrise. It is unusually tolerant of gentle handling but dislikes being completely covered.',
      foundIn:'Saint Ciro monastery roofs, sun courts, bell gardens, cliff chapels and warm stone alcoves overlooking Calvora.',
      dragonType:'Sunbell · Sanctuary Guardian',
      history:[
        'Caretakers around Saint Ciro traditionally opened shutters at dawn so recovered eggs received the first light of day. The timing mattered less than the routine: the same person, the same greeting and the same bell heard in the distance. Eggs raised this way became famous for recognising daily schedules.',
        'Monastery records mention one egg tapping exactly three minutes before breakfast for a month. The monks called it miraculous until they discovered the kitchen staff began chopping vegetables at the same time every morning.'
      ],
      threats:'Do not place directly in harsh midday sun. Heavy blankets can trap too much heat and block airflow; use light covers only when needed and keep a regular day-night rhythm.'
    },
    'Marenza':{
      profile:'Smooth blue-green shell with a waxed sheen and gentle side-to-side movement. It seems soothed by footsteps, boat creaks and the repeated rhythm of canal traffic.',
      foundIn:'Marenza canal houses, bridge cellars, garden docks, covered markets and dry ledges inside old water gates.',
      dragonType:'Canalwake · Watercourt Companion',
      history:[
        'Marenzan households once passed recovered eggs between canal districts by padded handcart, with each bridge keeper signing a tag tied to the basket. Those tags became cherished adoption keepsakes and are still copied for ceremonial first journeys today.',
        'The eggs are famous for sleeping through noise that would wake anything else, then becoming immediately active when the room goes silent. Bonnie says this is because Marenza dragons are born suspicious of peace and quiet.'
      ],
      threats:'Water gates and canal edges are obvious hazards. Less obvious is wax buildup: never polish the natural sheen, and keep the shell away from slippery oils or damp enclosed crates.'
    },
    'Grand Khor':{
      profile:'Hard-ridged shell that reacts strongly to floor vibration. It is calm during steady travel and noticeably restless when a journey stops unexpectedly.',
      foundIn:'Grand Khor caravan forts, mountain road stations, stone viaducts and sheltered camps along the Iron Route.',
      dragonType:'Ironroute · Caravan Warden',
      history:[
        'Grand Khor eggs have travelled more miles before hatching than almost any other recorded type. Route wardens developed suspended cradle-boxes that absorbed wagon jolts while preserving the steady vibration the eggs seemed to enjoy. The best boxes became family heirlooms.',
        'An old drivers’ superstition says a Grand Khor egg that goes completely quiet knows the road ahead is blocked. Modern surveys find no proof, but experienced drivers still check the map when it happens.'
      ],
      threats:'Abrupt heavy impacts are not the same as steady travel. Secure the nest during transport, avoid machinery floors and never use vibration deliberately to “wake” a quiet egg.'
    },
    'Rova End':{
      profile:'Dark marsh-toned shell dotted with tiny pale pores that glow faintly in very low light. It often becomes active just before fog forms.',
      foundIn:'Rova End fens, peat footpaths, lantern posts, abandoned ferry huts and raised patches of dry ground deep in the marsh.',
      dragonType:'Fenlight · Mire Guide',
      history:[
        'Rova End ferrymen used covered lanterns to mark discovered eggs during fog, creating lines of lights across the fens that travellers sometimes mistook for roads. The confusion gave rise to dozens of ghost stories and at least one deeply embarrassed tax inspector.',
        'Keepers later noticed the egg’s own pale pores brighten slightly in darkness. Local children call them “borrowed stars,” and families traditionally dim the room for a few minutes each evening to see them.'
      ],
      threats:'Peat water is acidic and should not contact the shell for long. Keep away from bog edges, smoke-heavy lanterns and completely sealed darkness without a normal day-night cycle.'
    },
    'Zafir Row':{
      profile:'Warm, lively shell with a faint spicy scent that changes around cooking. It often drums quick uneven rhythms when markets, music or conversation are nearby.',
      foundIn:'Zafir Row rooftop gardens, spice markets, storeroom rafters, awnings and warm courtyards above busy streets.',
      dragonType:'Spicewind · Rooftop Skimmer',
      history:[
        'Zafir Row merchants became experts at spotting eggs because hatchlings had an unfortunate habit of nesting near warm spice stores. A chalk symbol — half egg, half weather vane — was used to mark a building until a keeper arrived. Variations of it still decorate market signs today.',
        'Bonnie’s notes describe these as “incorrigible eavesdroppers before they have ears.” An egg may remain quiet all morning, then begin tapping the moment somebody starts gossiping nearby.'
      ],
      threats:'Strong spice dust can clog shell pores. Keep away from open sacks of fine powder, greasy kitchen smoke, unsecured balconies and prolonged direct rooftop sun.'
    },
    'Ossa Mere':{
      profile:'Pale lake-toned shell with tiny breathing pores that can whistle softly when air moves across them. Its motion is slow, deliberate and strongly tied to water sounds.',
      foundIn:'Ossa Mere reed islands, lakeside boathouses, fishing gardens, old piers and dry nests hidden above the waterline.',
      dragonType:'Reedwhisper · Lakekeeper',
      history:[
        'Ossa Mere keepers once identified healthy eggs by sitting absolutely still beside the reeds and listening for a faint whistle. The sound is simply air passing across the shell, but the tradition evolved into the “quiet watch,” a peaceful hour observed before an egg is moved from where it was found.',
        'There is a local belief that the first person to hear an Ossa Mere egg whistle will always be recognised by the hatchling. Bonnie calls it unproven and then immediately admits she always listens first.'
      ],
      threats:'Never block or oil the shell pores. Avoid full submersion, muddy water, reed fires and nests close enough to the lake that a rising level could reach them.'
    },
    'Ashwick / Cinderbank':{
      profile:'Soot-dark shell with ember-red warmth deep beneath the surface. It pulses in a steady rhythm around smithing, engines and other repetitive workshop sounds.',
      foundIn:'Ashwick yards, Cinderbank foundries, coal sheds, disused engine houses and warm brick tunnels beneath industrial districts.',
      dragonType:'Coalheart · Foundry Familiar',
      history:[
        'Ashwick and Cinderbank both claim the first proper care rules for these eggs, and neither side is likely to surrender the argument. What is certain is that factory crews learned to stop work around a newly found egg until it could be moved safely. The resulting “egg bell” became an early workplace safety signal.',
        'Recovered shells were once mounted above workshops as lucky charms. Modern conservation rules ended that practice, so smiths now hang carved wooden copies instead — usually larger, shinier and considerably less accurate.'
      ],
      threats:'Soot on the outside is harmless in small amounts; hot ash is not. Keep away from furnaces, moving machinery, coal dust clouds and any surface that vibrates hard enough to rattle the nest.'
    }
  };
  const DRAGONBOUND_ADOPTION_OPEN_DURATION=5564;
  const DRAGONBOUND_ADOPTION_REVEAL_DURATION=2926;
  const DRAGONBOUND_HOME_DOPPY_FRAMES=[
    'assets/dragonbound/home/doppy-frame-1.png',
    'assets/dragonbound/home/doppy-frame-2.png',
    'assets/dragonbound/home/doppy-frame-3.png'
  ];
  const DRAGONBOUND_HOME_EGG_BASKET='assets/dragonbound/home/egg-basket.png';
  const DRAGONBOUND_HOME_SIDEBAR_BUTTONS='assets/dragonbound/home/home-sidebar-buttons.png';
  const DRAGONBOUND_HOME_REVEAL_MUSIC='assets/dragonbound/home/dragon-reveal-custom.mp3';
  const DRAGONBOUND_HOME_OPEN_BAG_AUDIO='assets/dragonbound/home/open-bag.mp3';
  const DRAGONBOUND_HOME_BASKET_OPEN_FRAMES=[
    'assets/dragonbound/home/basket-open-frames/01_closed.png',
    'assets/dragonbound/home/basket-open-frames/02_unlocking.png',
    'assets/dragonbound/home/basket-open-frames/03_straps_removed.png',
    'assets/dragonbound/home/basket-open-frames/04_lid_lifting.png',
    'assets/dragonbound/home/basket-open-frames/05_quilt_corner.png',
    'assets/dragonbound/home/basket-open-frames/06_hidden_reach.png'
  ];
  const DRAGONBOUND_HOME_REVEAL_DURATION=5094;
  const DRAGONBOUND_ONE_AND_DONE_RESET_KEY='dragonboundOneAndDoneResetV1';
  const DRAGONBOUND_EGG_LOCK_KEY='dragonboundLockedEggV1';
  const DRAGONBOUND_NAMED_DRAGON_KEY='dragonboundNamedDragonV2';
  const DRAGONBOUND_STARTER_HOUSE_KEY='dragonboundSelectedStarterHouseV2';
  const DRAGONBOUND_DRAGON_REVEALS={
    'Vardesh':'assets/dragonbound/reveals/01_Vardesh_POV.png',
    'Lumerre':'assets/dragonbound/reveals/02_Lumerre_POV.png',
    'Kordesh':'assets/dragonbound/reveals/03_Kordesh_POV.png',
    'Nambara':'assets/dragonbound/reveals/04_Nambara_POV.png',
    'Norveth':'assets/dragonbound/reveals/05_Norveth_POV.png',
    'Zafran':'assets/dragonbound/reveals/06_Zafran_POV.png',
    'Elvane':'assets/dragonbound/reveals/07_Elvane_POV.png',
    'Qasmir':'assets/dragonbound/reveals/08_Qasmir_POV.png',
    'Calvora':'assets/dragonbound/reveals/09_Calvora_POV.png',
    'Rovarn':'assets/dragonbound/reveals/10_Rovarn_POV.png',
    'Talune':'assets/dragonbound/reveals/11_Talune_POV.png',
    'Drazhen':'assets/dragonbound/reveals/12_Drazhen_POV.png',
    'Belros':'assets/dragonbound/reveals/13_Belros_POV.png',
    'Marovar':'assets/dragonbound/reveals/14_Marovar_POV.png',
    'Sorevia':'assets/dragonbound/reveals/15_Sorevia_POV.png',
    'Iskandar':'assets/dragonbound/reveals/16_Iskandar_POV.png',
    'Blackglass Coast':'assets/dragonbound/reveals/17_Blackglass_Coast_POV.png',
    'Skallheim':'assets/dragonbound/reveals/18_Skallheim_POV.png',
    'Hestholm Fjord':'assets/dragonbound/reveals/19_Hestholm_Fjord_POV.png',
    'Nyrgate Aurora':'assets/dragonbound/reveals/20_Nyrgate_Aurora_POV.png',
    'Warmvein / Krellhaven':'assets/dragonbound/reveals/21_Warmvein_Krellhaven_POV.png',
    'Aurelia':'assets/dragonbound/reveals/22_Aurelia_POV.png',
    'Orsanne':'assets/dragonbound/reveals/23_Orsanne_POV.png',
    'Saint Ciro':'assets/dragonbound/reveals/24_Saint_Ciro_POV.png',
    'Marenza':'assets/dragonbound/reveals/25_Marenza_POV.png',
    'Grand Khor':'assets/dragonbound/reveals/26_Grand_Khor_POV.png',
    'Rova End':'assets/dragonbound/reveals/27_Rova_End_POV.png',
    'Zafir Row':'assets/dragonbound/reveals/28_Zafir_Row_POV.png',
    'Ossa Mere':'assets/dragonbound/reveals/29_Ossa_Mere_POV.png',
    'Ashwick / Cinderbank':'assets/dragonbound/reveals/30_Ashwick_Cinderbank_POV.png'
  };
  const DRAGONBOUND_PROLOGUE_PAGES=[
    `<p class="narration">The traveller stumbles through the forest, each step slower than the last.</p><p class="spoken">“Four days…”</p><p class="spoken">“Four days without a road, a roof, or another living soul.”</p>`,
    `<p class="narration">His stomach twists with hunger. He opens his satchel and finds only crumbs and an empty waterskin.</p><p class="spoken">“And now I’ve run out of food as well.”</p>`,
    `<p class="narration">He reaches a cluster of moss-covered rocks and eases himself down beside them.</p><p class="spoken">“I wanted a new life.”</p><p class="narration">A tired laugh escapes him.</p><p class="spoken">“I just never thought it would begin like this.”</p>`,
    `<p class="narration">He leans back against the cold stone and lets his eyes close.</p><p class="spoken">“Just a moment.”</p><p class="spoken">“Then I’ll get up and keep walking.”</p>`,
    `<p class="narration">The forest falls strangely quiet.</p><p class="narration">A soft current of air brushes across his face.</p><p class="spoken">“Wind?”</p>`,
    `<p class="narration">He opens his eyes. The canopy above him is completely still.</p><p class="narration">Another breeze passes over him, warmer this time, carrying the faint scent of rain, flowers, and distant woodsmoke.</p><p class="spoken">“That isn’t coming from the forest.”</p>`,
    `<p class="narration">He turns toward the rocks.</p><p class="narration">Behind them stands a wall of ivy, roots, and wet leaves so thick it should be solid.</p><p class="narration">Yet the vines move gently, as if something behind them is breathing.</p><p class="spoken">“There’s something back there.”</p>`,
    `<p class="narration">As he reaches toward the ivy, a strange feeling settles beneath his ribs.</p><p class="narration">Not pain. Not fear.</p><p class="narration">Recognition.</p><p class="spoken">“What was that?”</p>`,
    `<p class="narration">He slowly parts the vines.</p><p class="narration">A narrow crack opens between the stones, filled with darkness.</p><p class="spoken">“No path. No footprints…”</p><p class="spoken">“How long has this been here?”</p>`,
    `<p class="narration">Far inside, a faint teal marking flickers across the rock.</p><p class="narration">The warm breeze returns, carrying that distant scent of smoke.</p><p class="spoken">“Smoke means fire.”</p><p class="spoken">“And fire means people.”</p>`,
    `<p class="narration">He glances back at the empty road behind him.</p><p class="spoken">“Or it means I’ve finally lost my mind.”</p><p class="narration">The darkness ahead seems to breathe, waiting.</p>`,
    `<p class="narration">He tightens the strap of his satchel and squares his shoulders.</p><p class="spoken">“Well…”</p><p class="spoken">“I came looking for somewhere new.”</p><p class="narration">He slips through the opening and steps into the passage.</p><p class="spoken">“Let’s see where this goes.”</p><p class="narration">The vines draw shut behind him.</p>`
  ];
  const DRAGONBOUND_CAVE_PAGES=[
    `<p class="spoken">“Easy… what happened? I remember pulling back the vines and following the passage, but everything after that is gone. How long was I unconscious? And why does it feel as though I’ve travelled much farther than I walked?”</p>`,
    `<p class="spoken">“That marking is the same as the one at the entrance. That strange feeling has returned too—warm, somewhere beneath my ribs. It isn’t pulling me forward. It feels more like something ahead already knows I’m here… and is waiting.”</p>`,
    `<p class="spoken">“Is that sunlight? It can’t be. I should still be beneath the forest, yet there’s a stone path ahead. I can hear running water, birds… even a bell. Someone must live here. Wherever this cave has brought me, it isn’t the other side of the hill—and it isn’t anywhere I’ve ever known.”</p>`,
    `<p class="spoken">“All right. Find the people, find some food, and then work out what this place is.”</p>`
  ];
  const DRAGONBOUND_SECOND_NEST_PAGES=[
    `<p class="narration">The path ends beneath the roots of an enormous ancient tree. Warm light spills from tiny windows carved into its trunk. Somewhere beyond the doors, something gives a soft, muffled chirp.</p>`,
    `<p class="speaker">NARRATOR</p><p class="spoken">The Second Nest.</p><p class="spoken">For generations, young dragons without a home have been brought here from every corner of Velmora.</p>`,
    `<p class="spoken">Some are found abandoned.</p><p class="spoken">Some are surrendered by keepers who can no longer care for them.</p><p class="spoken">And some simply… arrive.</p><p class="spoken">Nobody has ever quite worked out how.</p>`,
    `<p class="narration">You look up at the enormous egg mounted above the doorway.</p><p class="speaker">NARRATOR</p><p class="spoken">The people who run the Nest have only one rule:</p><p class="spoken">You do not choose a dragon.</p><p class="spoken">You give one the chance to choose you.</p>`
  ];
  const DRAGONBOUND_BONNIE_INTRO_PAGES=[
    `<p class="narration">The room is impossibly cosy. Shelves overflow with blankets, feeding bottles, brushes, old dragon-care books and little wooden nameplates.</p><p class="narration">Behind the counter, an elderly woman is carefully repairing a tiny knitted dragon blanket.</p><p class="narration">She looks up.</p>`,
    `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Oh!</p><p class="spoken">Well, you’re certainly not the postman.</p><p class="narration">She peers at you over her spectacles.</p>`,
    `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">And you’ve got that look about you.</p><p class="speaker">YOU</p><p class="spoken">What look?</p>`,
    `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">The terrified one.</p><p class="narration">She smiles.</p><p class="spoken">First egg?</p><p class="speaker">YOU</p><p class="spoken">First egg.</p>`,
    `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Thought so.</p><p class="spoken">I’m Bonnie Bramble.</p><p class="spoken">Welcome to the Second Nest.</p>`
  ];
  const DRAGONBOUND_MIRA_HOME_PAGES=[
    `<p class="speaker">MIRA HEARTHVALE</p><p class="spoken">Well then… look at you. Homeowner.</p>`,
    `<p class="speaker">MIRA HEARTHVALE</p><p class="spoken">It might feel a little empty right now, but that’s half the fun. This place is yours to shape however you like.</p><p class="spoken">If you want to make it a bit more homely, pop back over to <strong>Bonnie’s Adoption Centre</strong>. She’s started stocking furniture, decorations, pet comforts and all sorts of little things for the house.</p>`,
    `<p class="speaker">MIRA HEARTHVALE</p><p class="spoken">Once you own some furniture, open <strong>Build Mode</strong> while you’re at home.</p>`,
    `<p class="speaker">MIRA HEARTHVALE</p><p class="spoken">From there, you can pick things up, move them around, rotate them and find the perfect spot. Changed your mind? Just put the item away and it’ll be safely stored until you want it again.</p><p class="spoken">And don’t worry about getting everything perfect straight away. Homes have a habit of growing with their owners.</p>`,
    `<p class="speaker">MIRA HEARTHVALE</p><p class="spoken">Before long, you’ll also be able to keep an eye on your pet’s needs from here — things like their mood, hunger and other little quirks.</p><p class="spoken">That part of the system isn’t quite ready yet, though. Velmora’s finest minds are apparently still arguing over what counts as ‘too many treats’.</p>`,
    `<p class="speaker">MIRA HEARTHVALE</p><p class="spoken">For now, make yourself comfortable. Explore your new home, visit Bonnie when you fancy furnishing the place…</p><p class="spoken">…and when you’re ready, start making it feel like somewhere you and your dragon actually belong.</p>`,
    `<p class="speaker">MIRA HEARTHVALE</p><p class="spoken">Welcome home.</p>`
  ];
  const DRAGONBOUND_DOPPY_HOME_PAGES=[
    `<p class="spoken">There’s a soft thump outside the front door… followed by the faint flutter of wings.</p><p class="speaker">DOPPY</p><p class="spoken">Delivery for the new Dragonbound!</p>`,
    `<p class="speaker">DOPPY</p><p class="spoken">Bonnie sent me over with your egg. Don’t worry — I’ve been very careful with it.</p>`,
    `<p class="speaker">DOPPY</p><p class="spoken">It’ll be waiting just outside your door in one of our specialized egg baskets. They’re padded, temperature-safe and built to keep even the fussiest eggs snug until you’re ready to open it.</p><p class="spoken">So there’s no need to rush. Your little passenger is perfectly safe in there.</p>`,
    `<p class="speaker">DOPPY</p><p class="spoken">When you’re ready… bring the basket inside and see who Bonnie’s sent home with you.</p>`,
    `<p class="speaker">DOPPY</p><p class="spoken">And if you’ve got any questions about the egg, its care, or what happens next, head back to Bonnie’s Adoption Centre. Bonnie knows more about eggs than anyone I’ve ever met.</p>`,
    `<p class="speaker">DOPPY</p><p class="spoken">Right! Another delivery waiting for me.</p><p class="spoken">Doppy gives an enthusiastic flap of his wings.</p>`,
    `<p class="speaker">DOPPY</p><p class="spoken">Good luck, Dragonbound. I’ve got a good feeling about this one.</p><p class="spoken">With another rush of wings, Doppy disappears down the road for his next delivery.</p>`
  ];
  const DRAGONBOUND_BONNIE_CHAT_TOPICS={
    secondNest:[
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Ahh. She’s older than she looks.</p><p class="spoken">Well… actually, she looks extremely old, so perhaps that isn’t saying much.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">The Second Nest was founded when the original dragon sanctuary could no longer keep up with the number of eggs being found across Velmora.</p><p class="spoken">Back then this was just an ancient tree, a mountain path and one very stubborn dragon keeper with a hammer.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Over the years, we built around the roots.</p><p class="spoken">Or perhaps the roots built around us.</p><p class="spoken">I’m still not entirely sure.</p><p class="spoken">Either way, every dragon that leaves through those doors becomes part of its story.</p>`
    ],
    eggs:[
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Oh, everywhere.</p><p class="spoken">You’d be amazed where people find them.</p><p class="spoken">Mountain caves. Old barns. Riverbanks. Chimneys.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">We once had one arrive in a fishing boat.</p><p class="spoken">Nobody knew how it got there.</p><p class="spoken">The fisherman certainly didn’t.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Some are brought here by travellers. Some come from sanctuaries elsewhere in Velmora.</p><p class="spoken">A few are simply left outside my door with a note.</p><p class="spoken">And every so often...</p><p class="narration">Bonnie lowers her voice.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">...an egg appears that nobody remembers bringing in at all.</p><p class="spoken">Those ones are usually trouble.</p>`
    ],
    adopting:[
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Very simple.</p><p class="spoken">You provide the home.</p><p class="spoken">The Nest provides the egg.</p><p class="spoken">And the dragon provides several years of chaos.</p><p class="narration">She smiles.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">You won't know exactly what you're taking home.</p><p class="spoken">That's rather the point.</p><p class="spoken">Every egg deserves the same chance, whether there's a common little woodland dragon inside...</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">...or something nobody in Velmora has seen for a hundred years.</p><p class="spoken">You give an egg a home.</p><p class="spoken">Then we find out who you've brought home together.</p>`
    ],
    keeper:[
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Patience.</p><p class="spoken">More patience.</p><p class="spoken">A sturdy pair of boots.</p><p class="spoken">And ideally furniture you aren't particularly attached to.</p><p class="narration">She laughs.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Dragons aren't pets in the usual sense.</p><p class="spoken">They have moods. Favourites. Fears.</p><p class="spoken">Some want to follow you everywhere.</p><p class="spoken">Some would happily sleep for three days and pretend you don't exist.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Learn what your dragon likes.</p><p class="spoken">Learn what it doesn't.</p><p class="spoken">Take care of it, and it'll take care of you.</p><p class="spoken">Well...</p><p class="spoken">Most of the time.</p>`
    ],
    bonnie:[
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Me?</p><p class="spoken">Oh, there's nothing terribly exciting about me.</p><p class="spoken">I've spent most of my life looking after creatures that bite, scratch, breathe fire or occasionally do all three at once.</p><p class="spoken">Wouldn't change it for the world.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">I've watched hundreds of dragons hatch in this room.</p><p class="spoken">And I've watched hundreds of nervous new keepers walk through that door pretending they weren't nervous.</p><p class="narration">She looks at you knowingly.</p>`,
      `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">They all had that same expression you're wearing now.</p><p class="spoken">Don't worry, dear.</p><p class="spoken">You'll do fine.</p><p class="spoken">Just...</p><p class="spoken">perhaps don't wear anything flammable for the first few days.</p>`
    ]
  };
  const DRAGONBOUND_MAELITH_PAGES=[
    `<p class="narration">The ancient dragon lowers her great head. Her golden eyes settle upon the keeper standing on the bridge.</p><p class="spoken">“Do not kneel.</p><p class="spoken">The age in which dragons demanded such things ended long ago.</p><p class="spoken">I am Maelith. The eldest among my kind call me Crownwing. The youngest call me Grandmother.</p><p class="spoken">To the dragons of Velmora, I am Queen.</p><p class="spoken">But I did not win that title through fire.”</p>`,
    `<p class="narration">She looks across the peaceful Canto Plains.</p><p class="spoken">“Hundreds of years before your first breath, these skies were divided between warring broods.</p><p class="spoken">Dragon fought dragon for mountains, nesting grounds and dominion over the clouds.</p><p class="spoken">The peoples of Velmora chose sides, and friendship slowly became servitude.”</p>`,
    `<p class="spoken">“Saddles became shackles. Bonds were forced where none had been freely given.</p><p class="spoken">We called those years the Wars of the Broken Sky.</p><p class="spoken">By their end, entire valleys had burned. Rivers had changed course.</p><p class="spoken">Eggs lay cold in nests whose guardians would never return.”</p>`,
    `<p class="narration">Maelith’s damaged horn catches the dying sunlight.</p><p class="spoken">“I received this wound in the final battle.</p><p class="spoken">I could have answered it with greater fire.</p><p class="spoken">Instead, upon this bridge, I lowered my wings.”</p>`,
    `<p class="spoken">“One dragon followed. Then another.</p><p class="spoken">Before the sun returned, every surviving brood had joined us.</p><p class="spoken">Together, dragons and people formed the First Accord:</p><p class="spoken">No dragon would ever again be owned.</p><p class="spoken">No egg would ever be taken.</p>`,
    `<p class="spoken">“And no bond would exist unless it had been chosen by both hearts.”</p><p class="narration">The runes along the bridge begin to glow softly.</p><p class="spoken">“That promise has held for centuries.</p><p class="spoken">I do not command every dragon in Velmora. I listen to them.”</p>`,
    `<p class="spoken">“I settle the quarrels between ancient broods, guard the nesting grounds and remind those who have forgotten what our anger once cost this world.</p><p class="spoken">That is why the Adoption Centre exists.</p><p class="spoken">The eggs waiting there are not possessions. They have been entrusted to us by dragon broods from across Velmora.”</p>`,
    `<p class="spoken">“Some carry the frost of Vardesh. Some the green waters of Elvane.</p><p class="spoken">Others hold the heat of Iskandar, the winds of Canto, or strange gifts belonging to places you have yet to see.</p><p class="spoken">Each contains a life waiting to begin.</p><p class="spoken">You may feel drawn toward one. It must also feel drawn toward you.”</p>`,
    `<p class="narration">Maelith leans closer, her voice becoming warm and almost grandmotherly.</p><p class="spoken">“You will give your dragon food, shelter and a home worth returning to.</p><p class="spoken">You will watch it stumble.</p><p class="spoken">You will watch it soar.”</p>`,
    `<p class="spoken">“And through every kindness, every mistake and every adventure, the creature inside that shell will become something no other dragon could have been.</p><p class="spoken">Not because you commanded it.</p><p class="spoken">Because you grew together.”</p>`,
    `<p class="narration">The Dragon Queen slowly raises her head as the last sunlight disappears behind the plains.</p><p class="spoken">“Peace is not merely the absence of war, little keeper.</p><p class="spoken">It is a promise renewed by every new bond.</p><p class="spoken">Go now. Your part in that promise is waiting inside its shell.”</p>`,
    `<p class="narration">Maelith closes her eyes. Then, with one thunderous sweep of her wings, she vaults into the sky and disappears into the fiery heavens, rising to watch over her sons and daughters across Velmora.</p>`
  ];

  function buildDragonboundOverlay(){
    if(document.getElementById('dragonboundOverlay')) return document.getElementById('dragonboundOverlay');
    const overlay=document.createElement('div');
    overlay.id='dragonboundOverlay';
    overlay.className='dragonbound-overlay';
    overlay.setAttribute('aria-hidden','true');
    overlay.innerHTML=`
      <div class="dragonbound-shell" role="dialog" aria-modal="true" aria-label="Velmora: Dragonbound main menu preview">
        <button type="button" class="dragonbound-close" id="closeDragonboundOverlay" aria-label="Close Velmora: Dragonbound">×</button>
        <div class="dragonbound-scene">
          <div class="dragonbound-bg dragonbound-bg-far"></div>
          <div class="dragonbound-bg dragonbound-bg-mid"></div>
          <div class="dragonbound-bg dragonbound-bg-foreground"></div>
          <div class="dragonbound-haze"></div>
          <div class="dragonbound-sun"></div>
          <div class="dragonbound-breezes"></div>
          <div class="dragonbound-leaves"></div>
          <div class="dragonbound-particles"></div>
          <div class="dragonbound-frame-glow"></div>
          <div class="dragonbound-vignette"></div>
          <div class="dragonbound-title-shine" aria-hidden="true"></div>
        </div>
        <div class="dragonbound-menu-actions" aria-label="Dragonbound menu">
          <div class="dragonbound-menu-action" data-dragonbound-action="new-game" role="button" tabindex="0" aria-label="New Game"></div>
          <div class="dragonbound-menu-action" data-dragonbound-action="load-game" role="button" tabindex="0" aria-label="Load Game"></div>
          <div class="dragonbound-menu-action" data-dragonbound-action="rules" role="button" tabindex="0" aria-label="Rules"></div>
        </div>
        <div class="dragonbound-menu-feedback" aria-live="polite"></div>
        <div class="dragonbound-rules-overlay" aria-hidden="true">
          <div class="dragonbound-rules-backdrop"></div>
          <div class="dragonbound-rules-panel" role="dialog" aria-modal="true" aria-label="Dragonbound rules and keeper's guide">
            <button class="dragonbound-rules-close" type="button" aria-label="Close Dragonbound rules">×</button>
            <div class="dragonbound-rules-shine" aria-hidden="true"></div>
            <img class="dragonbound-rules-image" alt="Dragonbound rules and keeper's guide">
          </div>
        </div>
        <div class="dragonbound-new-game-stage" aria-hidden="true">
          <div class="dragonbound-new-game-image dragonbound-new-game-image--forest"></div>
          <div class="dragonbound-new-game-image dragonbound-new-game-image--cave"></div>
          <div class="dragonbound-new-game-image dragonbound-new-game-image--valley"></div>
          <div class="dragonbound-new-game-image dragonbound-new-game-image--adoption"></div>
          <div class="dragonbound-new-game-image dragonbound-new-game-image--adoption-interior"></div>
          <div class="dragonbound-new-game-image dragonbound-new-game-image--estate-exterior"></div>
          <div class="dragonbound-new-game-image dragonbound-new-game-image--estate-interior"></div>
          <video class="dragonbound-new-game-video" playsinline preload="auto"></video>
          <div class="dragonbound-adoption-effects" aria-hidden="true">
            <div class="dragonbound-adoption-winds"></div>
            <div class="dragonbound-adoption-leaves"></div>
            <div class="dragonbound-adoption-particles"></div>
          </div>
          <button class="dragonbound-adoption-door-hotspot" type="button" aria-label="Enter the Dragon Adoption Centre"></button>
          <div class="dragonbound-adoption-interior-effects" aria-hidden="true">
            <div class="dragonbound-adoption-interior-depth"></div>
            <div class="dragonbound-adoption-interior-haze"></div>
            <div class="dragonbound-adoption-interior-shine"></div>
            <div class="dragonbound-fire-embers"></div>
            <div class="dragonbound-adoption-dust"></div>
          </div>
          <button class="dragonbound-bonnie-hotspot" type="button" aria-label="Speak to Bonnie Bramble"></button>
          <div class="dragonbound-estate-exterior-effects" aria-hidden="true">
            <div class="dragonbound-estate-exterior-winds"></div>
            <div class="dragonbound-estate-exterior-leaves"></div>
            <div class="dragonbound-estate-exterior-particles"></div>
            <div class="dragonbound-estate-exterior-glow"></div>
          </div>
          <button class="dragonbound-estate-door-hotspot" type="button" aria-label="Enter Velmora Hearth and Key"></button>
          <div class="dragonbound-estate-interior-effects" aria-hidden="true">
            <div class="dragonbound-estate-interior-sunshafts"></div>
            <div class="dragonbound-estate-interior-fireglow"></div>
            <div class="dragonbound-estate-fire-embers"></div>
            <div class="dragonbound-estate-interior-dust"></div>
          </div>
          <button class="dragonbound-mira-hotspot" type="button" aria-label="Speak to Mira Hearthvale"></button>
          <div class="dragonbound-property-overlay" aria-hidden="true">
            <div class="dragonbound-property-backdrop"></div>
            <div class="dragonbound-property-shell" role="dialog" aria-modal="true" aria-label="Velmora Hearth and Key property board">
              <div class="dragonbound-property-frame"></div>
              <div class="dragonbound-property-flag-hotspots" aria-label="Select a country"></div>
              <div class="dragonbound-property-list-panel" aria-live="polite"></div>
              <button class="dragonbound-property-back" type="button" aria-label="Back to Mira Hearthvale"></button>
            </div>
          </div>
          <div class="dragonbound-property-confirm" aria-hidden="true">
            <div class="dragonbound-property-confirm-backdrop"></div>
            <div class="dragonbound-property-confirm-panel" role="dialog" aria-modal="true" aria-labelledby="dragonboundPropertyConfirmTitle">
              <p class="dragonbound-property-confirm-kicker">VELMORA HEARTH &amp; KEY</p>
              <p class="dragonbound-property-confirm-title" id="dragonboundPropertyConfirmTitle">Make this your starter home?</p>
              <img class="dragonbound-property-confirm-image" alt="">
              <div class="dragonbound-property-confirm-copy"></div>
              <div class="dragonbound-property-confirm-actions">
                <button class="dragonbound-property-confirm-button dragonbound-property-confirm-button--yes" type="button">Yes — this is my home</button>
                <button class="dragonbound-property-confirm-button dragonbound-property-confirm-button--no" type="button">Keep looking</button>
              </div>
            </div>
          </div>
          <div class="dragonbound-home-scene" aria-hidden="true">
            <div class="dragonbound-home-world">
              <div class="dragonbound-home-image"></div>
              <div class="dragonbound-baby-dragon-layer" aria-hidden="true"></div>
            </div>
            <div class="dragonbound-home-light"></div>
            <div class="dragonbound-home-vignette"></div>
            <div class="dragonbound-home-sidebar" aria-hidden="true">
              <img class="dragonbound-home-sidebar-image" alt="Home menu buttons">
              <button class="dragonbound-home-sidebar-hotspot dragonbound-home-sidebar-hotspot--travel" type="button" aria-label="Travel around Velmora"></button>
              <button class="dragonbound-home-sidebar-hotspot dragonbound-home-sidebar-hotspot--book" type="button" aria-label="Open My Dragon journal"></button>
            </div>
            <div class="dragonbound-home-delivery" aria-hidden="true">
              <img class="dragonbound-home-doppy" alt="Doppy the Dropper Dragon">
            </div>
            <div class="dragonbound-home-basket-wrap" role="button" tabindex="-1" aria-label="Open delivered egg basket" aria-hidden="true">
              <img class="dragonbound-home-basket" alt="Specialized egg basket">
            </div>
          </div>
          <div class="dragonbound-my-dragon-overlay" aria-hidden="true">
            <div class="dragonbound-my-dragon-backdrop"></div>
            <section class="dragonbound-my-dragon-book" role="dialog" aria-modal="true" aria-labelledby="dragonboundMyDragonTitle">
              <button class="dragonbound-my-dragon-close" type="button" aria-label="Close My Dragon journal">×</button>
              <header class="dragonbound-my-dragon-header">
                <span>DRAGONBOUND KEEPER JOURNAL</span>
                <h2 id="dragonboundMyDragonTitle" data-dragon-profile-name>My Dragon</h2>
                <p data-dragon-profile-subtitle>Your dragon's life, personality and little habits.</p>
              </header>
              <div class="dragonbound-my-dragon-spread">
                <section class="dragonbound-my-dragon-page dragonbound-my-dragon-page--left">
                  <div class="dragonbound-my-dragon-portrait"><span class="dragonbound-my-dragon-portrait-glow"></span><img data-dragon-profile-portrait alt=""></div>
                  <div class="dragonbound-my-dragon-identity" data-dragon-profile-identity></div>
                  <div class="dragonbound-my-dragon-mood"><small>CURRENT MOOD</small><strong data-dragon-profile-mood>Content</strong><span data-dragon-profile-mood-copy>Feeling settled at home.</span></div>
                  <div class="dragonbound-my-dragon-care"><div class="dragonbound-my-dragon-section-title"><span>Live Care</span><small>Updated from your dragon right now</small></div><div class="dragonbound-my-dragon-care-bars" data-dragon-profile-care></div></div>
                  <div class="dragonbound-my-dragon-bond"><div><span>Bond</span><strong data-dragon-profile-bond>0 · New Keeper</strong></div><i><em data-dragon-profile-bond-bar></em></i><small data-dragon-profile-bond-note>Still learning who you are.</small></div>
                </section>
                <section class="dragonbound-my-dragon-page dragonbound-my-dragon-page--right">
                  <nav class="dragonbound-journal-tabs" role="tablist" aria-label="Dragon journal sections">
                    <button type="button" role="tab" data-dragon-journal-tab="nature" aria-selected="true"><span>Nature</span><small>Who they are</small></button>
                    <button type="button" role="tab" data-dragon-journal-tab="habits" aria-selected="false"><span>Habits</span><small>What they love</small></button>
                    <button type="button" role="tab" data-dragon-journal-tab="bonds" aria-selected="false"><span>Bonds</span><small>Who they trust</small></button>
                    <button type="button" role="tab" data-dragon-journal-tab="life" aria-selected="false"><span>Life</span><small>Growth & training</small></button>
                    <button type="button" role="tab" data-dragon-journal-tab="calendar" aria-selected="false"><span>Calendar</span><small>Velmoran days</small></button>
                    <button type="button" role="tab" data-dragon-journal-tab="scrapbook" aria-selected="false"><span>Scrapbook</span><small>Your story</small></button>
                  </nav>
                  <div class="dragonbound-journal-panel is-active" data-dragon-journal-panel="nature" role="tabpanel">
                    <div class="dragonbound-personality-titlecard"><div><small>KEEPER'S DESCRIPTION</small><strong data-dragon-profile-descriptor>Still Becoming Themselves</strong></div><span data-dragon-profile-together>Together today</span></div>
                    <div class="dragonbound-my-dragon-personality"><div class="dragonbound-my-dragon-section-title"><span>Personality</span><small data-dragon-profile-archetype>Individual</small></div><p data-dragon-profile-personality-copy></p><div class="dragonbound-my-dragon-traits" data-dragon-profile-traits></div><div class="dragonbound-personality-observation" data-dragon-profile-observation><small>BONNIE'S MARGIN NOTE</small><p>Keep watching what they choose when nobody tells them what to do.</p></div></div>
                    <div class="dragonbound-personality-book-grid">
                      <section class="dragonbound-personality-book-card"><div class="dragonbound-my-dragon-section-title"><span>Known Quirks</span><small>Little things that are uniquely theirs</small></div><div class="dragonbound-personality-quirks" data-dragon-profile-quirks></div></section>
                      <section class="dragonbound-personality-book-card"><div class="dragonbound-my-dragon-section-title"><span>Your Relationship</span><small>Trust never erases personality</small></div><div class="dragonbound-personality-relationship" data-dragon-profile-relationship></div></section>
                    </div>
                    <div class="dragonbound-personality-now"><div><small>CURRENT OBSESSION</small><strong data-dragon-profile-obsession>Still choosing</strong></div><p data-dragon-profile-keeper-note>Keep watching the little choices.</p></div>
                  </div>
                  <div class="dragonbound-journal-panel" data-dragon-journal-panel="habits" role="tabpanel" hidden>
                    <div class="dragonbound-my-dragon-favourites"><div class="dragonbound-my-dragon-section-title"><span>Favourites & Habits</span><small>Formed naturally from real choices</small></div><div class="dragonbound-my-dragon-favourite-grid" data-dragon-profile-favourites></div><div class="dragonbound-my-dragon-habits" data-dragon-profile-habits></div></div>
                    <div class="dragonbound-personality-book-grid dragonbound-personality-book-grid--preferences">
                      <section class="dragonbound-personality-book-card"><div class="dragonbound-my-dragon-section-title"><span>Comforts</span><small>Things they gravitate toward</small></div><div class="dragonbound-personality-preference-list is-comfort" data-dragon-profile-comforts></div></section>
                      <section class="dragonbound-personality-book-card"><div class="dragonbound-my-dragon-section-title"><span>Known Dislikes</span><small>Strong opinions, politely recorded</small></div><div class="dragonbound-personality-preference-list is-dislike" data-dragon-profile-dislikes></div></section>
                    </div>
                    <div class="dragonbound-my-dragon-today"><div class="dragonbound-my-dragon-section-title"><span>Today</span><small>Temporary quirks that pass naturally</small></div><div class="dragonbound-my-dragon-today-list" data-dragon-profile-today></div></div>
                    <div class="dragonbound-my-dragon-daily-life"><div class="dragonbound-my-dragon-section-title"><span>Daily Life</span><small>Soft routines, never a fixed schedule</small></div><div class="dragonbound-my-dragon-daily-grid" data-dragon-profile-daily-life></div></div>
                  </div>
                  <div class="dragonbound-journal-panel" data-dragon-journal-panel="bonds" role="tabpanel" hidden>
                    <div class="dragonbound-keeper-relationship-journal" data-dragon-profile-keeper-relationship></div>
                    <div class="dragonbound-social-journal" data-dragon-profile-bonds></div>
                  </div>
                  <div class="dragonbound-journal-panel" data-dragon-journal-panel="life" role="tabpanel" hidden>
                    <div class="dragonbound-my-dragon-growth"><div class="dragonbound-my-dragon-section-title"><span>Growth & Skills</span><small>Practice becomes ability</small></div><div class="dragonbound-my-dragon-growth-head"><div><small>GROWTH STAGE</small><strong data-dragon-profile-growth-stage>Baby</strong><span data-dragon-profile-growth-copy>Growing at their own pace.</span></div><b data-dragon-profile-growth-percent>0%</b></div><i class="dragonbound-my-dragon-growth-bar"><em data-dragon-profile-growth-bar></em></i><div class="dragonbound-my-dragon-skills" data-dragon-profile-skills></div><div class="dragonbound-my-dragon-aptitudes" data-dragon-profile-aptitudes></div><div class="dragonbound-skill-help-panel" data-dragon-profile-skill-help hidden><button type="button" class="dragonbound-skill-help-close" data-dragon-profile-skill-help-close aria-label="Close training help">×</button><small>HOW TO TRAIN THIS</small><h3 data-dragon-profile-skill-help-title>Agility</h3><p data-dragon-profile-skill-help-copy></p><div class="dragonbound-skill-help-owned" data-dragon-profile-skill-help-owned></div><span class="dragonbound-skill-help-note" data-dragon-profile-skill-help-note></span></div></div>
                    <div class="dragonbound-my-dragon-life"><div class="dragonbound-my-dragon-section-title"><span>Life Stats</span><small>The little things add up</small></div><div class="dragonbound-my-dragon-stat-grid" data-dragon-profile-stats></div></div>
                  </div>
                  <div class="dragonbound-journal-panel" data-dragon-journal-panel="calendar" role="tabpanel" hidden>
                    <div class="dragonbound-calendar-journal" data-dragon-profile-calendar></div>
                  </div>
                  <div class="dragonbound-journal-panel" data-dragon-journal-panel="scrapbook" role="tabpanel" hidden>
                    <div class="dragonbound-my-dragon-recent-moment" data-dragon-profile-recent-moment><small>RECENT MOMENT</small><p>Still waiting for the next little adventure.</p></div>
                    <div class="dragonbound-my-dragon-house-moments"><div class="dragonbound-my-dragon-section-title"><span>Recent Moments</span><small>Little incidents worth remembering</small></div><div class="dragonbound-my-dragon-house-moment-list" data-dragon-profile-house-moments><em>Nothing chaotic enough to write down yet.</em></div></div>
                    <div class="dragonbound-my-dragon-memories"><div class="dragonbound-my-dragon-section-title"><span>Keeper Scrapbook</span><small>Milestones, discoveries and the stories worth keeping</small></div><div class="dragonbound-my-dragon-memory-list" data-dragon-profile-memories></div></div>
                  </div>
                </section>
              </div>
              <div class="dragonbound-my-dragon-empty" data-dragon-profile-empty hidden><strong>No dragon lives here yet.</strong><span>When your egg hatches, this journal will begin filling itself in.</span></div>
            </section>
          </div>
          <button class="dragonbound-location-return-home" type="button" aria-label="Return to your house">
            <span class="dragonbound-location-return-home-icon" aria-hidden="true">⌂</span>
            <span>Return Home</span>
          </button>
          <div class="dragonbound-travel-menu" aria-hidden="true">
            <div class="dragonbound-travel-menu-backdrop"></div>
            <div class="dragonbound-travel-menu-panel" role="dialog" aria-modal="true" aria-labelledby="dragonboundTravelMenuTitle">
              <button class="dragonbound-travel-menu-close" type="button" aria-label="Close travel menu">×</button>
              <p class="dragonbound-travel-menu-kicker">VELMORA TRAVEL</p>
              <h2 class="dragonbound-travel-menu-title" id="dragonboundTravelMenuTitle">Where would you like to go?</h2>
              <p class="dragonbound-travel-menu-copy">Choose a familiar stop. You can return home at any time.</p>
              <div class="dragonbound-travel-menu-grid">
                <button class="dragonbound-travel-destination dragonbound-travel-destination--adoption" type="button" data-dragonbound-travel="adoption">
                  <span class="dragonbound-travel-destination-preview" aria-hidden="true"></span>
                  <span class="dragonbound-travel-destination-text"><strong>Bonnie's Adoption Centre</strong><small>Study your dragon, speak with Bonnie and visit the Adoption Centre.</small></span>
                  <span class="dragonbound-travel-destination-arrow" aria-hidden="true">›</span>
                </button>
                <button class="dragonbound-travel-destination dragonbound-travel-destination--estate" type="button" data-dragonbound-travel="estate">
                  <span class="dragonbound-travel-destination-preview" aria-hidden="true"></span>
                  <span class="dragonbound-travel-destination-text"><strong>Velmora Hearth &amp; Key</strong><small>Return to Mira and browse the estate agent's property board.</small></span>
                  <span class="dragonbound-travel-destination-arrow" aria-hidden="true">›</span>
                </button>
                <button class="dragonbound-travel-destination dragonbound-travel-destination--home" type="button" data-dragonbound-travel="home">
                  <span class="dragonbound-travel-destination-preview dragonbound-travel-destination-preview--home" aria-hidden="true"></span>
                  <span class="dragonbound-travel-destination-text"><strong>Your Home</strong><small>Head back to your house and your dragon.</small></span>
                  <span class="dragonbound-travel-destination-arrow" aria-hidden="true">›</span>
                </button>
                <button class="dragonbound-travel-destination dragonbound-travel-destination--keepers" type="button" data-dragonbound-travel="keepers">
                  <span class="dragonbound-travel-destination-preview" aria-hidden="true"></span>
                  <span class="dragonbound-travel-destination-text"><strong>Visit Other Keepers</strong><small>Look around another keeper's home, see their furniture exactly where they placed it and meet their dragon.</small></span>
                  <span class="dragonbound-travel-destination-arrow" aria-hidden="true">›</span>
                </button>
              </div>
            </div>
          </div>
          <div class="dragonbound-house-visits" aria-hidden="true">
            <div class="dragonbound-house-visits-backdrop"></div>
            <section class="dragonbound-house-visits-browser" role="dialog" aria-modal="true" aria-labelledby="dragonboundHouseVisitsTitle">
              <button class="dragonbound-house-visits-close" type="button" aria-label="Close keeper houses">×</button>
              <p class="dragonbound-house-visits-kicker">KEEPER HOMES</p>
              <h2 id="dragonboundHouseVisitsTitle">Visit another keeper</h2>
              <p class="dragonbound-house-visits-copy">Their house and furniture are shown exactly as they have them saved. Their dragon is a live preview, so it may be doing something different from what its keeper sees.</p>
              <label class="dragonbound-house-visits-search"><span>⌕</span><input type="search" placeholder="Search keeper or dragon…" autocomplete="off"></label>
              <div class="dragonbound-house-visits-status" aria-live="polite"></div>
              <div class="dragonbound-house-visits-grid"></div>
            </section>
            <section class="dragonbound-house-visit-preview" aria-hidden="true">
              <div class="dragonbound-house-visit-world">
                <div class="dragonbound-house-visit-image"></div>
                <div class="dragonbound-house-visit-furniture"></div>
                <div class="dragonbound-house-visit-dragon-layer"></div>
              </div>
              <div class="dragonbound-house-visit-light"></div>
              <div class="dragonbound-house-visit-vignette"></div>
              <div class="dragonbound-house-visit-plaque">
                <small>VISITING</small>
                <strong class="dragonbound-house-visit-owner"></strong>
                <span class="dragonbound-house-visit-dragon-name"></span>
              </div>
              <button class="dragonbound-house-visit-list-button" type="button">‹ Other homes</button>
              <button class="dragonbound-house-visit-home-button" type="button">⌂ Return Home</button>
            </section>
          </div>
          <div class="dragonbound-home-basket-confirm" aria-hidden="true">
            <div class="dragonbound-home-basket-confirm-backdrop"></div>
            <div class="dragonbound-home-basket-confirm-panel" role="dialog" aria-modal="true" aria-labelledby="dragonboundHomeBasketConfirmTitle">
              <p class="dragonbound-home-basket-confirm-kicker">SPECIAL DELIVERY</p>
              <p class="dragonbound-home-basket-confirm-title" id="dragonboundHomeBasketConfirmTitle">Open your egg basket?</p>
              <p class="dragonbound-home-basket-confirm-copy">Are you sure you want to open this?</p>
              <div class="dragonbound-home-basket-confirm-actions">
                <button class="dragonbound-home-basket-confirm-button dragonbound-home-basket-confirm-button--yes" type="button">Yes — open it</button>
                <button class="dragonbound-home-basket-confirm-button dragonbound-home-basket-confirm-button--no" type="button">Not yet</button>
              </div>
            </div>
          </div>
          <div class="dragonbound-home-hatch-reveal" aria-hidden="true">
            <div class="dragonbound-home-hatch-opening" aria-hidden="true">
              <div class="dragonbound-home-hatch-opening-glow"></div>
              <img class="dragonbound-home-hatch-opening-image" alt="Opening your Dragonbound egg basket">
              <div class="dragonbound-home-hatch-opening-shimmer"></div>
            </div>
            <div class="dragonbound-home-hatch-result" aria-hidden="true">
              <div class="dragonbound-home-hatch-stars" aria-hidden="true"></div>
              <div class="dragonbound-home-hatch-result-card">
                <p class="dragonbound-home-hatch-kicker">YOUR DRAGON HAS HATCHED</p>
                <div class="dragonbound-home-hatch-portrait-wrap">
                  <div class="dragonbound-home-hatch-portrait-glow"></div>
                  <img class="dragonbound-home-hatch-portrait" alt="">
                </div>
                <h2 class="dragonbound-home-hatch-type"></h2>
                <p class="dragonbound-home-hatch-origin"></p>
                <p class="dragonbound-home-hatch-gender" aria-live="polite"></p>
                <p class="dragonbound-home-hatch-nature-hint">Every dragon is born with a nature entirely their own. Only time will reveal who they become.</p>
                <div class="dragonbound-home-hatch-name-form">
                  <label for="dragonboundHomeDragonName">What will you call them?</label>
                  <div class="dragonbound-home-hatch-name-row">
                    <input id="dragonboundHomeDragonName" class="dragonbound-home-hatch-name-input" type="text" maxlength="16" autocomplete="off" spellcheck="false" placeholder="Enter a name…">
                    <button class="dragonbound-home-hatch-name-submit" type="button">Choose name</button>
                  </div>
                  <p class="dragonbound-home-hatch-name-feedback" aria-live="polite"></p>
                </div>
                <div class="dragonbound-home-hatch-named" aria-hidden="true">
                  <p class="dragonbound-home-hatch-named-copy"></p>
                  <button class="dragonbound-home-hatch-continue" type="button">Welcome home</button>
                </div>
              </div>
            </div>
          </div>
          <div class="dragonbound-bonnie-menu-overlay" aria-hidden="true">
            <div class="dragonbound-bonnie-menu-backdrop"></div>
            <div class="dragonbound-bonnie-menu-shell">
              <button class="dragonbound-bonnie-menu-close" type="button" aria-label="Close Bonnie Bramble menu"></button>
              <div class="dragonbound-bonnie-menu-frame"></div>
              <div class="dragonbound-bonnie-menu-shine"></div>
              <div class="dragonbound-bonnie-menu-motes"></div>
              <button class="dragonbound-bonnie-menu-action dragonbound-bonnie-menu-action--adopt" type="button" aria-label="Adopt an Egg"></button>
              <button class="dragonbound-bonnie-menu-action dragonbound-bonnie-menu-action--study" type="button" aria-label="Study your Dragon"></button>
              <button class="dragonbound-bonnie-menu-action dragonbound-bonnie-menu-action--shop" type="button" aria-label="Shop"></button>
            </div>
            <div class="dragonbound-bonnie-chat-wrap">
              <button class="dragonbound-bonnie-chat-launch" type="button">Have a chat with Bonnie</button>
              <div class="dragonbound-bonnie-chat-options" aria-hidden="true">
                <button class="dragonbound-bonnie-chat-option" type="button" data-bonnie-topic="secondNest">Tell me about the Second Nest.</button>
                <button class="dragonbound-bonnie-chat-option" type="button" data-bonnie-topic="eggs">Where do all the eggs come from?</button>
                <button class="dragonbound-bonnie-chat-option" type="button" data-bonnie-topic="adopting">How does adopting an egg work?</button>
                <button class="dragonbound-bonnie-chat-option" type="button" data-bonnie-topic="keeper">What makes a good dragon keeper?</button>
                <button class="dragonbound-bonnie-chat-option" type="button" data-bonnie-topic="bonnie">Tell me about yourself, Bonnie.</button>
              </div>
            </div>
          </div>
          <div class="dragonbound-adopt-menu-overlay" aria-hidden="true">
            <div class="dragonbound-adopt-menu-backdrop"></div>
            <div class="dragonbound-adopt-menu-shell">
              <button class="dragonbound-adopt-menu-close" type="button" aria-label="Close Adopt an Egg menu"></button>
              <div class="dragonbound-adopt-menu-frame"></div>
              <div class="dragonbound-adopt-menu-glow"></div>
              <div class="dragonbound-adopt-menu-motes"></div>
              <img class="dragonbound-adopt-menu-egg" alt="" aria-hidden="true">
              <img class="dragonbound-adopt-menu-foreground" alt="" aria-hidden="true">
              <button class="dragonbound-adopt-menu-action dragonbound-adopt-menu-action--confirm" type="button" aria-label="Give an Egg a Home"></button>
              <button class="dragonbound-adopt-menu-action dragonbound-adopt-menu-action--back" type="button" aria-label="Back"></button>
            </div>
          </div>
          <div class="dragonbound-study-overlay" aria-hidden="true">
            <div class="dragonbound-study-backdrop"></div>
            <div class="dragonbound-study-shell" role="dialog" aria-modal="true" aria-label="Study your Dragon egg guide">
              <div class="dragonbound-study-frame"></div>
              <div class="dragonbound-study-sheen" aria-hidden="true"></div>
              <div class="dragonbound-study-list" role="listbox" aria-label="Dragon egg types"></div>
              <img class="dragonbound-study-egg" alt="" aria-hidden="true">
              <div class="dragonbound-study-name"></div>
              <div class="dragonbound-study-profile"></div>
              <div class="dragonbound-study-found"></div>
              <div class="dragonbound-study-type"></div>
              <div class="dragonbound-study-history"></div>
              <div class="dragonbound-study-threats"></div>
              <button class="dragonbound-study-back" type="button" aria-label="Back to Bonnie Bramble"></button>
            </div>
          </div>
          <div class="dragonbound-estate-prompt" aria-hidden="true">
            <div class="dragonbound-estate-prompt-backdrop"></div>
            <div class="dragonbound-estate-prompt-panel" role="dialog" aria-modal="true" aria-labelledby="dragonboundEstatePromptTitle">
              <p class="dragonbound-estate-prompt-speaker" id="dragonboundEstatePromptTitle">BONNIE BRAMBLE</p>
              <div class="dragonbound-estate-prompt-copy"></div>
              <div class="dragonbound-estate-prompt-actions">
                <button class="dragonbound-estate-prompt-button dragonbound-estate-prompt-button--stay" type="button">Stay a little longer</button>
                <button class="dragonbound-estate-prompt-button dragonbound-estate-prompt-button--go" type="button">Okay let’s go now</button>
              </div>
            </div>
          </div>
          <div class="dragonbound-adopt-confirmation" aria-hidden="true">
            <div class="dragonbound-adopt-confirmation-backdrop"></div>
            <div class="dragonbound-adopt-confirmation-panel" role="dialog" aria-modal="true" aria-labelledby="dragonboundAdoptConfirmTitle">
              <div class="dragonbound-adopt-confirmation-knot" aria-hidden="true"></div>
              <p class="dragonbound-adopt-confirmation-title" id="dragonboundAdoptConfirmTitle">Adopt an Egg</p>
              <p class="dragonbound-adopt-confirmation-copy">Are you sure you want to adopt your first egg?</p>
              <p class="dragonbound-adopt-confirmation-status" aria-live="polite"></p>
              <div class="dragonbound-adopt-confirmation-actions">
                <button class="dragonbound-adopt-confirmation-button dragonbound-adopt-confirmation-button--yes" type="button">Yes</button>
                <button class="dragonbound-adopt-confirmation-button dragonbound-adopt-confirmation-button--no" type="button">No</button>
              </div>
            </div>
          </div>
          <div class="dragonbound-adoption-roll" aria-hidden="true">
            <div class="dragonbound-adoption-roll-stage">
              <div class="dragonbound-adoption-roll-opening">
                <img class="dragonbound-adoption-roll-frame" alt="Opening the adoption basket">
              </div>
              <div class="dragonbound-adoption-roll-reveal" aria-hidden="true">
                <div class="dragonbound-adoption-roll-menu-art"></div>
                <div class="dragonbound-adoption-roll-glow"></div>
                <img class="dragonbound-adoption-roll-egg" alt="">
                <img class="dragonbound-adoption-roll-foreground" alt="" aria-hidden="true">
              </div>
            </div>
          </div>
          <div class="dragonbound-video-continue" aria-hidden="true"></div>
          <div class="dragonbound-dialogue" aria-live="polite" aria-hidden="true">
            <div class="dragonbound-dialogue-head">
              <span class="dragonbound-dialogue-title">Prologue</span>
              <span class="dragonbound-dialogue-progress">1 / 1</span>
            </div>
            <div class="dragonbound-dialogue-body"></div>
            <div class="dragonbound-dialogue-footer">
              <span class="dragonbound-dialogue-prompt"></span>
              <button class="dragonbound-dialogue-next" type="button">Continue</button>
            </div>
          </div>
          <div class="dragonbound-dialogue-end-note" aria-hidden="true">Entered the passage</div>
        </div>
        <div class="dragonbound-blackout" aria-hidden="true"></div>
      </div>`;
    document.body.appendChild(overlay);

    const breezeHolder=overlay.querySelector('.dragonbound-breezes');
    const breezeConfigs=[
      {top:'18%',dur:11,delay:-1.4,w:'46%',h:'2px',o:.56,rot:-5},
      {top:'27%',dur:14,delay:-3.8,w:'58%',h:'3px',o:.42,rot:-3},
      {top:'38%',dur:10,delay:-2.2,w:'41%',h:'2px',o:.62,rot:-7},
      {top:'49%',dur:16,delay:-6.2,w:'65%',h:'4px',o:.26,rot:-2},
      {top:'58%',dur:12,delay:-4.1,w:'52%',h:'2px',o:.44,rot:-6},
      {top:'68%',dur:15,delay:-8.6,w:'48%',h:'3px',o:.3,rot:-4},
      {top:'79%',dur:13,delay:-5.4,w:'56%',h:'2px',o:.38,rot:-5}
    ];
    breezeConfigs.forEach(cfg=>{
      const line=document.createElement('span');
      line.className='dragonbound-breeze';
      line.style.top=cfg.top;
      line.style.setProperty('--dur', `${cfg.dur}s`);
      line.style.setProperty('--delay', `${cfg.delay}s`);
      line.style.setProperty('--w', cfg.w);
      line.style.setProperty('--h', cfg.h);
      line.style.setProperty('--o', cfg.o);
      line.style.setProperty('--rot', `${cfg.rot}deg`);
      line.style.setProperty('--blur', `${Math.random()*0.8}px`);
      breezeHolder.appendChild(line);
    });

    const leafPalettes=[
      ['#f0c677','#abc96b','#5f8b51'],
      ['#e8ba67','#8db064','#587f48'],
      ['#f3d08a','#c7bf72','#7b9a58'],
      ['#d9ab63','#9cbe69','#628e58']
    ];
    const leafHolder=overlay.querySelector('.dragonbound-leaves');
    const leafCount=28;
    for(let i=0;i<leafCount;i++){
      const leaf=document.createElement('span');
      leaf.className='dragonbound-leaf';
      const palette=leafPalettes[Math.floor(Math.random()*leafPalettes.length)];
      const size=10 + Math.random()*14;
      const x=-8 + Math.random()*112;
      leaf.style.setProperty('--x', `${x}%`);
      leaf.style.setProperty('--top', `${-12 + Math.random()*18}%`);
      leaf.style.setProperty('--dur', `${8 + Math.random()*8}s`);
      leaf.style.setProperty('--delay', `${-Math.random()*12}s`);
      leaf.style.setProperty('--size', `${size}px`);
      leaf.style.setProperty('--alpha', (0.45 + Math.random()*0.4).toFixed(2));
      leaf.style.setProperty('--scale', (0.76 + Math.random()*0.5).toFixed(2));
      leaf.style.setProperty('--drift1', `${(-8 + Math.random()*18).toFixed(1)}vw`);
      leaf.style.setProperty('--drift2', `${(-12 + Math.random()*24).toFixed(1)}vw`);
      leaf.style.setProperty('--drift3', `${(-16 + Math.random()*30).toFixed(1)}vw`);
      leaf.style.setProperty('--drift4', `${(-20 + Math.random()*40).toFixed(1)}vw`);
      leaf.style.setProperty('--rotEnd', `${360 + Math.random()*280}deg`);
      leaf.style.setProperty('--leaf-a', palette[0]);
      leaf.style.setProperty('--leaf-b', palette[1]);
      leaf.style.setProperty('--leaf-c', palette[2]);
      leafHolder.appendChild(leaf);
    }

    const particleHolder=overlay.querySelector('.dragonbound-particles');
    const particleCount=40;
    for(let i=0;i<particleCount;i++){
      const mote=document.createElement('span');
      mote.className='dragonbound-particle';
      const size=(1.5 + Math.random()*5.5).toFixed(2);
      mote.style.setProperty('--x', `${Math.random()*100}%`);
      mote.style.setProperty('--y', `${8 + Math.random()*78}%`);
      mote.style.setProperty('--size', `${size}px`);
      mote.style.setProperty('--alpha', (0.18 + Math.random()*0.45).toFixed(2));
      mote.style.setProperty('--blur', `${Math.random()*1.4}px`);
      mote.style.setProperty('--dur', `${7 + Math.random()*12}s`);
      mote.style.setProperty('--delay', `${-Math.random()*10}s`);
      mote.style.setProperty('--dx1', `${(-14 + Math.random()*28).toFixed(1)}px`);
      mote.style.setProperty('--dx2', `${(-18 + Math.random()*36).toFixed(1)}px`);
      mote.style.setProperty('--dx3', `${(-12 + Math.random()*24).toFixed(1)}px`);
      particleHolder.appendChild(mote);
    }

    const audio=document.createElement('audio');
    audio.id='dragonboundMenuAudio';
    audio.preload='metadata';
    audio.loop=true;
    audio.src=DRAGONBOUND_AUDIO;
    audio.volume=0.25;
    document.body.appendChild(audio);

    const newGameAudio=document.createElement('audio');
    newGameAudio.id='dragonboundNewGameAudio';
    newGameAudio.preload='metadata';
    newGameAudio.loop=true;
    newGameAudio.src=DRAGONBOUND_NEW_GAME_AUDIO;
    newGameAudio.volume=0.4;
    document.body.appendChild(newGameAudio);

    const valleyAudio=document.createElement('audio');
    valleyAudio.id='dragonboundValleyAudio';
    valleyAudio.preload='metadata';
    valleyAudio.loop=true;
    valleyAudio.src=DRAGONBOUND_VALLEY_AUDIO;
    valleyAudio.volume=0.4;
    document.body.appendChild(valleyAudio);

    const adoptionExteriorAudio=document.createElement('audio');
    adoptionExteriorAudio.id='dragonboundAdoptionExteriorAudio';
    adoptionExteriorAudio.preload='metadata';
    adoptionExteriorAudio.loop=true;
    adoptionExteriorAudio.src=DRAGONBOUND_ADOPTION_EXTERIOR_AUDIO;
    adoptionExteriorAudio.volume=0.5;
    document.body.appendChild(adoptionExteriorAudio);

    const adoptionInteriorAudio=document.createElement('audio');
    adoptionInteriorAudio.id='dragonboundAdoptionInteriorAudio';
    adoptionInteriorAudio.preload='metadata';
    adoptionInteriorAudio.loop=true;
    adoptionInteriorAudio.src=DRAGONBOUND_ADOPTION_INTERIOR_AUDIO;
    adoptionInteriorAudio.volume=0.6;
    document.body.appendChild(adoptionInteriorAudio);

    const adoptionOpenAudio=document.createElement('audio');
    adoptionOpenAudio.id='dragonboundAdoptionOpenAudio';
    adoptionOpenAudio.preload='auto';
    adoptionOpenAudio.src=DRAGONBOUND_ADOPTION_OPEN_AUDIO;
    adoptionOpenAudio.volume=0.92;
    document.body.appendChild(adoptionOpenAudio);

    const adoptionRevealAudio=document.createElement('audio');
    adoptionRevealAudio.id='dragonboundAdoptionRevealAudio';
    adoptionRevealAudio.preload='auto';
    adoptionRevealAudio.src=DRAGONBOUND_ADOPTION_REVEAL_AUDIO;
    adoptionRevealAudio.volume=0.96;
    document.body.appendChild(adoptionRevealAudio);

    const estateInteriorAudio=document.createElement('audio');
    estateInteriorAudio.id='dragonboundEstateInteriorAudio';
    estateInteriorAudio.preload='metadata';
    estateInteriorAudio.loop=true;
    estateInteriorAudio.src=DRAGONBOUND_ESTATE_INTERIOR_AUDIO;
    estateInteriorAudio.volume=0.5;
    document.body.appendChild(estateInteriorAudio);

    const homeRevealMusicAudio=document.createElement('audio');
    homeRevealMusicAudio.id='dragonboundHomeRevealMusicAudio';
    homeRevealMusicAudio.preload='metadata';
    homeRevealMusicAudio.src=DRAGONBOUND_HOME_REVEAL_MUSIC;
    homeRevealMusicAudio.volume=0.5;
    document.body.appendChild(homeRevealMusicAudio);

    const homeBagOpenAudio=document.createElement('audio');
    homeBagOpenAudio.id='dragonboundHomeBagOpenAudio';
    homeBagOpenAudio.preload='auto';
    homeBagOpenAudio.src=DRAGONBOUND_HOME_OPEN_BAG_AUDIO;
    homeBagOpenAudio.volume=0.82;
    document.body.appendChild(homeBagOpenAudio);

    const dialogueTypeAudios=Array.from({length:4},(_,index)=>{
      const node=document.createElement('audio');
      node.id=`dragonboundDialogueTypeAudio${index+1}`;
      node.preload='auto';
      node.src=DRAGONBOUND_DIALOGUE_AUDIO;
      node.volume=0.24;
      document.body.appendChild(node);
      return node;
    });

    const closeBtn=overlay.querySelector('#closeDragonboundOverlay');
    const blackout=overlay.querySelector('.dragonbound-blackout');
    const newGameStage=overlay.querySelector('.dragonbound-new-game-stage');
    const feedback=overlay.querySelector('.dragonbound-menu-feedback');
    const rulesOverlay=overlay.querySelector('.dragonbound-rules-overlay');
    const rulesImage=overlay.querySelector('.dragonbound-rules-image');
    const rulesClose=overlay.querySelector('.dragonbound-rules-close');
    const dialoguePanel=overlay.querySelector('.dragonbound-dialogue');
    const dialogueBody=overlay.querySelector('.dragonbound-dialogue-body');
    const dialogueTitle=overlay.querySelector('.dragonbound-dialogue-title');
    const dialogueProgress=overlay.querySelector('.dragonbound-dialogue-progress');
    const dialogueNext=overlay.querySelector('.dragonbound-dialogue-next');
    const dialogueEndNote=overlay.querySelector('.dragonbound-dialogue-end-note');
    const newGameVideo=overlay.querySelector('.dragonbound-new-game-video');
    const videoContinuePrompt=overlay.querySelector('.dragonbound-video-continue');
    const adoptionLeavesHolder=overlay.querySelector('.dragonbound-adoption-leaves');
    const adoptionParticlesHolder=overlay.querySelector('.dragonbound-adoption-particles');
    const adoptionWindsHolder=overlay.querySelector('.dragonbound-adoption-winds');
    const adoptionDoorHotspot=overlay.querySelector('.dragonbound-adoption-door-hotspot');
    const fireEmbersHolder=overlay.querySelector('.dragonbound-fire-embers');
    const adoptionDustHolder=overlay.querySelector('.dragonbound-adoption-dust');
    const bonnieHotspot=overlay.querySelector('.dragonbound-bonnie-hotspot');
    const estateExteriorLeavesHolder=overlay.querySelector('.dragonbound-estate-exterior-leaves');
    const estateExteriorParticlesHolder=overlay.querySelector('.dragonbound-estate-exterior-particles');
    const estateExteriorWindsHolder=overlay.querySelector('.dragonbound-estate-exterior-winds');
    const estateDoorHotspot=overlay.querySelector('.dragonbound-estate-door-hotspot');
    const estateFireEmbersHolder=overlay.querySelector('.dragonbound-estate-fire-embers');
    const estateInteriorDustHolder=overlay.querySelector('.dragonbound-estate-interior-dust');
    const miraHotspot=overlay.querySelector('.dragonbound-mira-hotspot');
    const propertyOverlay=overlay.querySelector('.dragonbound-property-overlay');
    const propertyFrame=overlay.querySelector('.dragonbound-property-frame');
    const propertyFlagHotspots=overlay.querySelector('.dragonbound-property-flag-hotspots');
    const propertyListPanel=overlay.querySelector('.dragonbound-property-list-panel');
    const propertyBack=overlay.querySelector('.dragonbound-property-back');
    const propertyConfirm=overlay.querySelector('.dragonbound-property-confirm');
    const propertyConfirmImage=overlay.querySelector('.dragonbound-property-confirm-image');
    const propertyConfirmCopy=overlay.querySelector('.dragonbound-property-confirm-copy');
    const propertyConfirmYes=overlay.querySelector('.dragonbound-property-confirm-button--yes');
    const propertyConfirmNo=overlay.querySelector('.dragonbound-property-confirm-button--no');
    const homeScene=overlay.querySelector('.dragonbound-home-scene');
    const homeWorld=overlay.querySelector('.dragonbound-home-world');
    const homeImage=overlay.querySelector('.dragonbound-home-image');
    const babyDragonLayer=overlay.querySelector('.dragonbound-baby-dragon-layer');
    const homeSidebar=overlay.querySelector('.dragonbound-home-sidebar');
    const homeSidebarImage=overlay.querySelector('.dragonbound-home-sidebar-image');
    const homeTravelHotspot=overlay.querySelector('.dragonbound-home-sidebar-hotspot--travel');
    const homeBookHotspot=overlay.querySelector('.dragonbound-home-sidebar-hotspot--book');
    const myDragonOverlay=overlay.querySelector('.dragonbound-my-dragon-overlay');
    const myDragonClose=overlay.querySelector('.dragonbound-my-dragon-close');
    const myDragonName=overlay.querySelector('[data-dragon-profile-name]');
    const myDragonSubtitle=overlay.querySelector('[data-dragon-profile-subtitle]');
    const myDragonPortrait=overlay.querySelector('[data-dragon-profile-portrait]');
    const myDragonIdentity=overlay.querySelector('[data-dragon-profile-identity]');
    const myDragonMood=overlay.querySelector('[data-dragon-profile-mood]');
    const myDragonMoodCopy=overlay.querySelector('[data-dragon-profile-mood-copy]');
    const myDragonCare=overlay.querySelector('[data-dragon-profile-care]');
    const myDragonBond=overlay.querySelector('[data-dragon-profile-bond]');
    const myDragonBondBar=overlay.querySelector('[data-dragon-profile-bond-bar]');
    const myDragonBondNote=overlay.querySelector('[data-dragon-profile-bond-note]');
    const myDragonArchetype=overlay.querySelector('[data-dragon-profile-archetype]');
    const myDragonPersonalityCopy=overlay.querySelector('[data-dragon-profile-personality-copy]');
    const myDragonTraits=overlay.querySelector('[data-dragon-profile-traits]');
    const myDragonDescriptor=overlay.querySelector('[data-dragon-profile-descriptor]');
    const myDragonTogether=overlay.querySelector('[data-dragon-profile-together]');
    const myDragonObservation=overlay.querySelector('[data-dragon-profile-observation]');
    const myDragonQuirks=overlay.querySelector('[data-dragon-profile-quirks]');
    const myDragonRelationship=overlay.querySelector('[data-dragon-profile-relationship]');
    const myDragonKeeperRelationship=overlay.querySelector('[data-dragon-profile-keeper-relationship]');
    const myDragonBonds=overlay.querySelector('[data-dragon-profile-bonds]');
    const myDragonObsession=overlay.querySelector('[data-dragon-profile-obsession]');
    const myDragonKeeperNote=overlay.querySelector('[data-dragon-profile-keeper-note]');
    const myDragonComforts=overlay.querySelector('[data-dragon-profile-comforts]');
    const myDragonDislikes=overlay.querySelector('[data-dragon-profile-dislikes]');
    const myDragonJournalTabs=Array.from(overlay.querySelectorAll('[data-dragon-journal-tab]'));
    const myDragonJournalPanels=Array.from(overlay.querySelectorAll('[data-dragon-journal-panel]'));
    const myDragonFavourites=overlay.querySelector('[data-dragon-profile-favourites]');
    const myDragonHabits=overlay.querySelector('[data-dragon-profile-habits]');
    const myDragonToday=overlay.querySelector('[data-dragon-profile-today]');
    const myDragonDailyLife=overlay.querySelector('[data-dragon-profile-daily-life]');
    const myDragonRecentMoment=overlay.querySelector('[data-dragon-profile-recent-moment]');
    const myDragonHouseMoments=overlay.querySelector('[data-dragon-profile-house-moments]');
    const myDragonGrowthStage=overlay.querySelector('[data-dragon-profile-growth-stage]');
    const myDragonGrowthCopy=overlay.querySelector('[data-dragon-profile-growth-copy]');
    const myDragonGrowthPercent=overlay.querySelector('[data-dragon-profile-growth-percent]');
    const myDragonGrowthBar=overlay.querySelector('[data-dragon-profile-growth-bar]');
    const myDragonSkills=overlay.querySelector('[data-dragon-profile-skills]');
    const myDragonAptitudes=overlay.querySelector('[data-dragon-profile-aptitudes]');
    const myDragonSkillHelp=overlay.querySelector('[data-dragon-profile-skill-help]');
    const myDragonSkillHelpTitle=overlay.querySelector('[data-dragon-profile-skill-help-title]');
    const myDragonSkillHelpCopy=overlay.querySelector('[data-dragon-profile-skill-help-copy]');
    const myDragonSkillHelpOwned=overlay.querySelector('[data-dragon-profile-skill-help-owned]');
    const myDragonSkillHelpNote=overlay.querySelector('[data-dragon-profile-skill-help-note]');
    const myDragonSkillHelpClose=overlay.querySelector('[data-dragon-profile-skill-help-close]');
    const myDragonStats=overlay.querySelector('[data-dragon-profile-stats]');
    const myDragonMemories=overlay.querySelector('[data-dragon-profile-memories]');
    const myDragonEmpty=overlay.querySelector('[data-dragon-profile-empty]');
    const travelMenu=overlay.querySelector('.dragonbound-travel-menu');
    const travelMenuClose=overlay.querySelector('.dragonbound-travel-menu-close');
    const travelDestinations=[...overlay.querySelectorAll('[data-dragonbound-travel]')];
    const travelHomePreview=overlay.querySelector('.dragonbound-travel-destination-preview--home');
    const houseVisits=overlay.querySelector('.dragonbound-house-visits');
    const houseVisitsBrowser=overlay.querySelector('.dragonbound-house-visits-browser');
    const houseVisitsClose=overlay.querySelector('.dragonbound-house-visits-close');
    const houseVisitsSearch=overlay.querySelector('.dragonbound-house-visits-search input');
    const houseVisitsStatus=overlay.querySelector('.dragonbound-house-visits-status');
    const houseVisitsGrid=overlay.querySelector('.dragonbound-house-visits-grid');
    const houseVisitPreview=overlay.querySelector('.dragonbound-house-visit-preview');
    const houseVisitWorld=overlay.querySelector('.dragonbound-house-visit-world');
    const houseVisitImage=overlay.querySelector('.dragonbound-house-visit-image');
    const houseVisitFurniture=overlay.querySelector('.dragonbound-house-visit-furniture');
    const houseVisitDragonLayer=overlay.querySelector('.dragonbound-house-visit-dragon-layer');
    const houseVisitOwner=overlay.querySelector('.dragonbound-house-visit-owner');
    const houseVisitDragonName=overlay.querySelector('.dragonbound-house-visit-dragon-name');
    const houseVisitListButton=overlay.querySelector('.dragonbound-house-visit-list-button');
    const houseVisitHomeButton=overlay.querySelector('.dragonbound-house-visit-home-button');
    const locationReturnHome=overlay.querySelector('.dragonbound-location-return-home');
    const homeDelivery=overlay.querySelector('.dragonbound-home-delivery');
    const homeDoppy=overlay.querySelector('.dragonbound-home-doppy');
    const homeBasketWrap=overlay.querySelector('.dragonbound-home-basket-wrap');
    const homeBasket=overlay.querySelector('.dragonbound-home-basket');
    const homeBasketConfirm=overlay.querySelector('.dragonbound-home-basket-confirm');
    const homeBasketConfirmYes=overlay.querySelector('.dragonbound-home-basket-confirm-button--yes');
    const homeBasketConfirmNo=overlay.querySelector('.dragonbound-home-basket-confirm-button--no');
    const homeHatchReveal=overlay.querySelector('.dragonbound-home-hatch-reveal');
    const homeHatchOpening=overlay.querySelector('.dragonbound-home-hatch-opening');
    const homeHatchOpeningImage=overlay.querySelector('.dragonbound-home-hatch-opening-image');
    const homeHatchResult=overlay.querySelector('.dragonbound-home-hatch-result');
    const homeHatchStars=overlay.querySelector('.dragonbound-home-hatch-stars');
    const homeHatchPortrait=overlay.querySelector('.dragonbound-home-hatch-portrait');
    const homeHatchType=overlay.querySelector('.dragonbound-home-hatch-type');
    const homeHatchOrigin=overlay.querySelector('.dragonbound-home-hatch-origin');
    const homeHatchGender=overlay.querySelector('.dragonbound-home-hatch-gender');
    const homeHatchNameForm=overlay.querySelector('.dragonbound-home-hatch-name-form');
    const homeHatchNameInput=overlay.querySelector('.dragonbound-home-hatch-name-input');
    const homeHatchNameSubmit=overlay.querySelector('.dragonbound-home-hatch-name-submit');
    const homeHatchNameFeedback=overlay.querySelector('.dragonbound-home-hatch-name-feedback');
    const homeHatchNamed=overlay.querySelector('.dragonbound-home-hatch-named');
    const homeHatchNamedCopy=overlay.querySelector('.dragonbound-home-hatch-named-copy');
    const homeHatchContinue=overlay.querySelector('.dragonbound-home-hatch-continue');
    const bonnieMenuOverlay=overlay.querySelector('.dragonbound-bonnie-menu-overlay');
    const bonnieMenuFrame=overlay.querySelector('.dragonbound-bonnie-menu-frame');
    const bonnieMenuMotes=overlay.querySelector('.dragonbound-bonnie-menu-motes');
    const bonnieMenuClose=overlay.querySelector('.dragonbound-bonnie-menu-close');
    const bonnieMenuActions=[...overlay.querySelectorAll('.dragonbound-bonnie-menu-action')];
    const bonnieChatLaunch=overlay.querySelector('.dragonbound-bonnie-chat-launch');
    const bonnieChatOptions=overlay.querySelector('.dragonbound-bonnie-chat-options');
    const bonnieChatOptionButtons=[...overlay.querySelectorAll('.dragonbound-bonnie-chat-option')];
    const adoptMenuOverlay=overlay.querySelector('.dragonbound-adopt-menu-overlay');
    const adoptMenuFrame=overlay.querySelector('.dragonbound-adopt-menu-frame');
    const adoptMenuMotes=overlay.querySelector('.dragonbound-adopt-menu-motes');
    const adoptMenuClose=overlay.querySelector('.dragonbound-adopt-menu-close');
    const adoptMenuActions=[...overlay.querySelectorAll('.dragonbound-adopt-menu-action')];
    const adoptMenuEgg=overlay.querySelector('.dragonbound-adopt-menu-egg');
    const adoptMenuForeground=overlay.querySelector('.dragonbound-adopt-menu-foreground');
    const studyMenuOverlay=overlay.querySelector('.dragonbound-study-overlay');
    const studyMenuFrame=overlay.querySelector('.dragonbound-study-frame');
    const studyMenuList=overlay.querySelector('.dragonbound-study-list');
    const studyMenuEgg=overlay.querySelector('.dragonbound-study-egg');
    const studyMenuName=overlay.querySelector('.dragonbound-study-name');
    const studyMenuProfile=overlay.querySelector('.dragonbound-study-profile');
    const studyMenuFound=overlay.querySelector('.dragonbound-study-found');
    const studyMenuType=overlay.querySelector('.dragonbound-study-type');
    const studyMenuHistory=overlay.querySelector('.dragonbound-study-history');
    const studyMenuThreats=overlay.querySelector('.dragonbound-study-threats');
    const studyMenuBack=overlay.querySelector('.dragonbound-study-back');
    const estatePrompt=overlay.querySelector('.dragonbound-estate-prompt');
    const estatePromptCopy=overlay.querySelector('.dragonbound-estate-prompt-copy');
    const estatePromptStay=overlay.querySelector('.dragonbound-estate-prompt-button--stay');
    const estatePromptGo=overlay.querySelector('.dragonbound-estate-prompt-button--go');
    const adoptConfirmation=overlay.querySelector('.dragonbound-adopt-confirmation');
    const adoptConfirmationYes=overlay.querySelector('.dragonbound-adopt-confirmation-button--yes');
    const adoptConfirmationNo=overlay.querySelector('.dragonbound-adopt-confirmation-button--no');
    const adoptConfirmationStatus=overlay.querySelector('.dragonbound-adopt-confirmation-status');
    const adoptionRoll=overlay.querySelector('.dragonbound-adoption-roll');
    const adoptionRollFrame=overlay.querySelector('.dragonbound-adoption-roll-frame');
    const adoptionRollReveal=overlay.querySelector('.dragonbound-adoption-roll-reveal');
    const adoptionRollMenuArt=overlay.querySelector('.dragonbound-adoption-roll-menu-art');
    const adoptionRollEgg=overlay.querySelector('.dragonbound-adoption-roll-egg');
    const adoptionRollForeground=overlay.querySelector('.dragonbound-adoption-roll-foreground');
    const menuActions=[...overlay.querySelectorAll('.dragonbound-menu-action')];

    let dragonTreatsBusy=false;
    let dragonTreatCooldownTimer=0;
    let dragonTreatShakeAudio=null;
    let dragonTreatCrunchAudio=null;
    let dragonTreatAbortToken=0;
    const DRAGON_TREAT_COOLDOWN_KEY='dragonboundTreatCooldownUntil';

    const homeTreatButton=homeSidebar?document.createElement('button'):null;
    const homeTreatConfirm=document.createElement('div');
    homeTreatConfirm.className='dragonbound-home-treats-confirm';
    homeTreatConfirm.setAttribute('aria-hidden','true');
    homeTreatConfirm.innerHTML=`
      <div class="dragonbound-home-treats-confirm-backdrop"></div>
      <div class="dragonbound-home-treats-confirm-panel" role="dialog" aria-modal="true" aria-labelledby="dragonboundHomeTreatsTitle">
        <p class="dragonbound-home-treats-confirm-kicker">DRAGON BITES</p>
        <h2 class="dragonbound-home-treats-confirm-title" id="dragonboundHomeTreatsTitle">Treat your dragon?</h2>
        <p class="dragonbound-home-treats-confirm-copy">Would you like to spend 200 GP on a pouch of Dragon Bites? We'll toss a few around the room for your little dragon to chase down.</p>
        <div class="dragonbound-home-treats-confirm-actions">
          <button class="dragonbound-home-treats-confirm-button dragonbound-home-treats-confirm-button--yes" type="button">Yes — 200 GP</button>
          <button class="dragonbound-home-treats-confirm-button dragonbound-home-treats-confirm-button--no" type="button">Not right now</button>
        </div>
      </div>`;
    overlay.appendChild(homeTreatConfirm);
    const homeTreatConfirmYes=homeTreatConfirm.querySelector('.dragonbound-home-treats-confirm-button--yes');
    const homeTreatConfirmNo=homeTreatConfirm.querySelector('.dragonbound-home-treats-confirm-button--no');
    const homeTreatConfirmCopy=homeTreatConfirm.querySelector('.dragonbound-home-treats-confirm-copy');

    const homeTreatStage=homeScene?document.createElement('div'):null;
    let homeTreatBagWrap=null;
    let homeTreatBagImage=null;
    let homeTreatStatus=null;
    let homeTreatGround=null;
    if(homeTreatStage){
      homeTreatStage.className='dragonbound-home-treat-stage';
      homeTreatStage.setAttribute('aria-hidden','true');
      homeTreatStage.innerHTML=`
        <div class="dragonbound-home-treat-bag-wrap"><img class="dragonbound-home-treat-bag-image" alt="Dragon Bites treats"></div>
        <div class="dragonbound-home-treat-status" aria-live="polite"></div>`;
      homeScene.appendChild(homeTreatStage);
      homeTreatBagWrap=homeTreatStage.querySelector('.dragonbound-home-treat-bag-wrap');
      homeTreatBagImage=homeTreatStage.querySelector('.dragonbound-home-treat-bag-image');
      homeTreatStatus=homeTreatStage.querySelector('.dragonbound-home-treat-status');
    }
    if(homeWorld){
      homeTreatGround=document.createElement('div');
      homeTreatGround.className='dragonbound-home-treat-ground';
      homeTreatGround.setAttribute('aria-hidden','true');
      homeWorld.appendChild(homeTreatGround);
    }
    if(homeTreatButton){
      homeTreatButton.type='button';
      homeTreatButton.className='dragonbound-home-treats-trigger';
      homeTreatButton.setAttribute('aria-label','Buy Dragon Bites treats for your dragon');
      homeTreatButton.innerHTML=`<img src="${DRAGONBOUND_TREATS_BUTTON_IMAGE}" alt="Dragon Bites Embercrunch Treats"><span class="dragonbound-home-treats-cooldown" aria-live="polite"></span>`;
      homeSidebar.appendChild(homeTreatButton);
    }

    try{dragonTreatShakeAudio=new Audio(DRAGONBOUND_TREAT_SHAKE_AUDIO);dragonTreatShakeAudio.preload='auto';dragonTreatShakeAudio.volume=.60;}catch(_error){dragonTreatShakeAudio=null;}
    try{dragonTreatCrunchAudio=new Audio('assets/dragonbound/audio/dragon-treat-crunch.mp3');dragonTreatCrunchAudio.preload='auto';dragonTreatCrunchAudio.volume=.60;}catch(_error){dragonTreatCrunchAudio=null;}
    [DRAGONBOUND_TREATS_BUTTON_IMAGE,DRAGONBOUND_TREATS_OPEN_IMAGE,DRAGONBOUND_TREAT_IMAGE].forEach(src=>{const img=new Image();img.src=src;});

    function dragonTreatDelay(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
    function dragonTreatToast(message,duration=3600){try{if(typeof toast==='function')toast(message,duration);}catch(_error){}}
    function dragonTreatBalance(){
      const fromCharacter=typeof character!=='undefined'&&character&&Number.isFinite(Number(character.gp))?Number(character.gp):NaN;
      if(Number.isFinite(fromCharacter)) return Math.max(0,fromCharacter);
      const fromBank=typeof bankState!=='undefined'&&bankState&&Number.isFinite(Number(bankState.gp))?Number(bankState.gp):0;
      return Math.max(0,fromBank);
    }
    function syncDragonTreatBalance(newGp){
      const value=Math.max(0,Number(newGp)||0);
      try{if(typeof character!=='undefined'&&character)character.gp=value;}catch(_error){}
      try{if(typeof bankState!=='undefined'&&bankState)bankState.gp=value;}catch(_error){}
      // Do not call renderCharacter() here. It emits repo-character-changed, which
      // rehydrates Dragonbound and used to replace the live actor with an older
      // server snapshot of its needs at the exact moment a treat was purchased.
      try{if(document.getElementById('bankDialog')?.open)renderBank?.();}catch(_error){}
    }
    function activeDragonTreatActor(){
      const engine=window.DragonboundBabyEngine;
      if(!engine?.actor||!newGameStage.classList.contains('is-home')||newGameStage.classList.contains('is-visiting-house')) return null;
      return engine.actor;
    }
    function dragonTreatTraitList(actor){
      return [...(Array.isArray(actor?.assignedTraits)?actor.assignedTraits:[]),...(Array.isArray(actor?.discoveredTraits)?actor.discoveredTraits:[])].map(v=>String(v||'').trim().toLowerCase()).filter(Boolean);
    }
    function dragonTreatLazyProfile(actor){
      const traits=dragonTreatTraitList(actor),lowEnergy=Number(actor?.coreStats?.energy||50)<40;
      return traits.some(trait=>trait.includes('couch potato')||trait.includes('professional napper')||trait.includes('deep sleeper')||trait.includes('fussy sleeper'))||lowEnergy;
    }
    function dragonTreatFoodProfile(actor){
      const traits=dragonTreatTraitList(actor),appetite=Number(actor?.coreStats?.appetite||50);
      return traits.some(trait=>trait.includes('food goblin')||trait.includes('greedy'))||appetite>66;
    }
    function formatTreatCooldown(ms){const total=Math.max(0,Math.ceil(ms/1000)),m=Math.floor(total/60),s=total%60;return `${m}:${String(s).padStart(2,'0')}`;}
    function getTreatCooldownUntil(){try{return Number(localStorage.getItem(DRAGON_TREAT_COOLDOWN_KEY)||0)||0;}catch(_){return 0;}}
    function setTreatCooldownUntil(value){const until=Number(new Date(value).getTime())||Number(value)||0;try{localStorage.setItem(DRAGON_TREAT_COOLDOWN_KEY,String(until));}catch(_){ }syncTreatCooldownUi();}
    function syncTreatCooldownUi(){
      if(!homeTreatButton)return;
      const remain=Math.max(0,getTreatCooldownUntil()-Date.now()),badge=homeTreatButton.querySelector('.dragonbound-home-treats-cooldown');
      homeTreatButton.classList.toggle('is-cooling-down',remain>0);
      homeTreatButton.disabled=remain>0||dragonTreatsBusy;
      homeTreatButton.setAttribute('aria-label',remain>0?`Dragon Bites available in ${formatTreatCooldown(remain)}`:'Buy Dragon Bites treats for your dragon');
      if(badge)badge.textContent=remain>0?formatTreatCooldown(remain):'';
    }
    // V33.75: keep the cooldown clock exact, but only touch its DOM while
    // Dragonbound is actually open and visible.
    dragonTreatCooldownTimer=setInterval(()=>{
      if(document.hidden||!overlay?.classList.contains('is-open'))return;
      syncTreatCooldownUi();
    },1000);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&overlay?.classList.contains('is-open'))syncTreatCooldownUi();},{passive:true});
    syncTreatCooldownUi();

    function resetDragonTreatStage(){
      dragonTreatAbortToken++;
      dragonTreatsBusy=false;
      homeTreatStage?.classList.remove('is-visible','is-open');
      homeTreatStage?.setAttribute('aria-hidden','true');
      homeTreatBagWrap?.classList.remove('is-shaking','is-opened');
      if(homeTreatBagImage)homeTreatBagImage.src=DRAGONBOUND_TREATS_BUTTON_IMAGE;
      if(homeTreatStatus)homeTreatStatus.textContent='';
      if(homeTreatGround)homeTreatGround.replaceChildren();
      const actor=activeDragonTreatActor();
      actor?.el?.classList.remove('is-treat-excited','is-treat-chewing');
      syncTreatCooldownUi();
    }
    function openDragonTreatConfirm(){
      if(dragonTreatsBusy)return;
      const remain=Math.max(0,getTreatCooldownUntil()-Date.now());
      if(remain>0){dragonTreatToast(`Dragon Bites will be ready again in ${formatTreatCooldown(remain)}.`);syncTreatCooldownUi();return;}
      const actor=activeDragonTreatActor();
      if(!actor){dragonTreatToast('Your dragon needs to be home before you can feed them treats.');return;}
      const name=actor?.dragon?.name||'your dragon';
      if(homeTreatConfirmCopy)homeTreatConfirmCopy.textContent=`Would you like to spend ${DRAGONBOUND_TREAT_COST.toLocaleString('en-GB')} GP on Dragon Bites for ${name}? We'll toss 3 or 4 treats around the room for them to chase and crunch up.`;
      homeTreatConfirm.classList.add('is-visible');homeTreatConfirm.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>homeTreatConfirmYes?.focus({preventScroll:true}));
    }
    function closeDragonTreatConfirm(){homeTreatConfirm.classList.remove('is-visible');homeTreatConfirm.setAttribute('aria-hidden','true');}

    function playTreatCrunch(){
      if(!dragonTreatCrunchAudio)return;
      try{dragonTreatCrunchAudio.pause();dragonTreatCrunchAudio.currentTime=0;dragonTreatCrunchAudio.volume=.60;dragonTreatCrunchAudio.play()?.catch?.(()=>{});}catch(_error){}
    }
    function worldPixelDistance(a,b){
      const engine=window.DragonboundBabyEngine;if(!engine?.toPixels)return Infinity;
      const p=engine.toPixels(a),q=engine.toPixels(b);return Math.hypot(p.x-q.x,p.y-q.y);
    }
    function buildDragonTreatRoute(count){
      const engine=window.DragonboundBabyEngine,actor=engine?.actor;if(!engine?.map||!actor)return[];
      const floorId=actor.floorId||'downstairs',floor=engine.map.floors.find(f=>f.id===floorId),candidates=[];
      (floor?.navigationNodes||[]).forEach(p=>{if(engine.isWalkable(floorId,p))candidates.push(p.slice());});
      for(let y=.60;y<=.735;y+=.027)for(let x=.28;x<=.76;x+=.055){const p=[+x.toFixed(3),+y.toFixed(3)];if(engine.isWalkable(floorId,p))candidates.push(p);}
      let from=actor.pos.slice(),route=[];
      for(let i=0;i<count;i++){
        const scored=candidates.map(p=>({p,d:worldPixelDistance(from,p),fromDragon:worldPixelDistance(actor.pos,p),path:engine.findPath(floorId,from,p)}))
          .filter(v=>v.path.length&&v.d>125&&v.fromDragon>90&&!route.some(old=>worldPixelDistance(old,v.p)<100))
          .sort((a,b)=>b.d-a.d);
        const pool=scored.slice(0,Math.min(8,scored.length));
        const pick=pool.length?pool[Math.floor(Math.random()*pool.length)]:null;
        if(!pick)break;
        route.push(pick.p.slice());from=pick.p.slice();
      }
      return route;
    }
    function createDragonTreatPiece(targetPoint,index){
      if(!homeTreatGround||!homeTreatBagWrap||!homeWorld)return null;
      const engine=window.DragonboundBabyEngine,worldRect=homeWorld.getBoundingClientRect(),bagRect=homeTreatBagWrap.getBoundingClientRect(),target=engine?.toPixels?.(targetPoint);
      if(!target)return null;
      const originX=bagRect.left-worldRect.left+bagRect.width*.62,originY=bagRect.top-worldRect.top+bagRect.height*.68;
      const piece=document.createElement('img');piece.className='dragonbound-home-treat-piece';piece.src=DRAGONBOUND_TREAT_IMAGE;piece.alt='';piece.setAttribute('aria-hidden','true');
      piece.style.left=`${originX}px`;piece.style.top=`${originY}px`;piece.style.setProperty('--dx',`${target.x-originX}px`);piece.style.setProperty('--dy',`${target.y-originY}px`);piece.style.setProperty('--rot',`${(-30+Math.random()*60).toFixed(1)}deg`);piece.style.zIndex=String(950000+index);
      homeTreatGround.appendChild(piece);piece.addEventListener('animationend',()=>piece.classList.add('is-landed'),{once:true});return piece;
    }
    function spawnDragonTreatCrunchBurst(target){
      if(!homeTreatGround)return;
      const point=window.DragonboundBabyEngine?.toPixels?.(target);if(!point)return;
      const burst=document.createElement('span');burst.className='dragonbound-home-treat-crunch-burst';burst.style.left=`${point.x}px`;burst.style.top=`${point.y}px`;burst.innerHTML='<b>CRUNCH!</b><i></i><i></i><i></i><i></i><i></i>';
      homeTreatGround.appendChild(burst);setTimeout(()=>burst.remove(),850);
    }
    function waitForDragonAtTreat(actor,target,token,maxMs=16000){
      return new Promise(resolve=>{
        const started=Date.now();
        const timer=setInterval(()=>{
          if(token!==dragonTreatAbortToken||!actor?.el?.isConnected){clearInterval(timer);resolve(false);return;}
          const arrived=worldPixelDistance(actor.pos,target)<68;
          if(arrived||Date.now()-started>maxMs){clearInterval(timer);resolve(arrived);}
        },120);
      });
    }
    async function runSingleDragonTreat(target,index,total,token){
      if(token!==dragonTreatAbortToken)return false;
      const actor=activeDragonTreatActor();if(!actor)return false;
      const name=actor.dragon?.name||'Your dragon',lazy=dragonTreatLazyProfile(actor),foodDriven=dragonTreatFoodProfile(actor),bond=Number(actor?.bond||0);
      const piece=createDragonTreatPiece(target,index);if(!piece)return false;
      if(homeTreatStatus)homeTreatStatus.textContent=`Treat ${index+1} of ${total} — tossed across the room…`;
      await dragonTreatDelay(900);
      if(token!==dragonTreatAbortToken)return false;
      try{if(typeof actor.finishFurnitureUse==='function')actor.finishFurnitureUse();actor.commandedFurniture=null;actor.furniturePlan=null;actor.path=[];actor.pathIndex=0;actor.pauseUntil=0;actor.setState('looking',lazy?950:600);}catch(_error){}
      actor.el?.classList.add('is-treat-excited');setTimeout(()=>actor.el?.classList.remove('is-treat-excited'),1600);
      const personalityTreatReaction=actor.personalityReaction?.('treat')||'';if(homeTreatStatus)homeTreatStatus.textContent=personalityTreatReaction|| (lazy?`${name} notices it… and takes their time.`:`${name} spots it and gets excited!`);
      await dragonTreatDelay(bond>=80?(lazy?650:260):bond>=60?(lazy?780:(foodDriven?360:500)):(lazy?950:(foodDriven?500:700)));
      if(token!==dragonTreatAbortToken)return false;
      const ok=actor.startWalk(target.slice(),'walking');
      if(!ok){piece.classList.add('is-eaten');await dragonTreatDelay(350);piece.remove();return false;}
      actor.walkSpeedBoost=4.0;
      if(homeTreatStatus)homeTreatStatus.textContent=`${name} bolts over to the treat!`;
      const arrived=await waitForDragonAtTreat(actor,target,token,lazy?19000:15000);
      if(token!==dragonTreatAbortToken)return false;
      if(!arrived){piece.classList.add('is-eaten');await dragonTreatDelay(350);piece.remove();return false;}
      try{actor.path=[];actor.pathIndex=0;actor.walkSpeedBoost=1;actor.setState('sitting',950);actor.nextDecision=performance.now()+1150;if(typeof actor.applyCareBenefit==='function'){actor.applyCareBenefit('hunger',6);actor.applyCareBenefit('fun',2);actor.applyCareBenefit('social',1);actor.addBond?.(.15);}else{actor.needs.hunger=Math.max(0,Number(actor.needs?.hunger||0)-6);actor.needs.social=Math.max(0,Number(actor.needs?.social||0)-1);actor.behaviourDirty=true;}const obs=actor.memory?.observationCounters||(actor.memory.observationCounters={});obs.dragonBitesEaten=(Number(obs.dragonBitesEaten)||0)+1;actor.noteKeeperRelationship?.('treat',{label:'Dragon Bites together'});actor.noteUniverseActivity?.('treat');actor.maybeShowDragonThought?.('treat');actor.openRoutineTrigger?.('keeper_treat',{durationMs:65000,source:'treat'});actor.rememberLifeEvent?.('treat','First Dragon Bite',`${name} discovered just how exciting Dragon Bites are.`,'first-dragon-bite');actor.behaviourDirty=true;window.DragonboundBabyEngine?.saveBehaviourLocal?.();}catch(_error){}
      actor.el?.classList.add('is-treat-chewing');playTreatCrunch();spawnDragonTreatCrunchBurst(target);piece.classList.add('is-eaten');
      if(homeTreatStatus)homeTreatStatus.textContent=actor.hasTrait?.('Foodie')?`Crunch! ${name} savours every bit.`:`Crunch! ${name} gobbles it up.`;
      await dragonTreatDelay(900);actor.el?.classList.remove('is-treat-chewing');piece.remove();
      return true;
    }
    async function purchaseDragonTreats(){
      if(typeof db==='undefined'||!db?.rpc)throw new Error('Dragon Bites could not reach the server.');
      const {data,error}=await db.rpc('dragonbound_buy_treats');if(error)throw error;
      const row=Array.isArray(data)?data[0]:data;if(!row||!Number.isFinite(Number(row.new_gp)))throw new Error('Dragon Bites returned an invalid purchase receipt.');
      syncDragonTreatBalance(Number(row.new_gp));setTreatCooldownUntil(row.cooldown_until||Date.now()+120000);return row;
    }
    async function startDragonTreatSequence(){
      const actor=activeDragonTreatActor();if(dragonTreatsBusy||!actor||!homeTreatStage||!homeTreatBagWrap||!homeTreatBagImage||!homeTreatGround)return;
      if(dragonTreatBalance()<DRAGONBOUND_TREAT_COST){closeDragonTreatConfirm();dragonTreatToast(`You need ${DRAGONBOUND_TREAT_COST.toLocaleString('en-GB')} GP to buy Dragon Bites.`);return;}
      const count=Math.random()<.48?4:3,route=buildDragonTreatRoute(count);
      if(route.length<3){closeDragonTreatConfirm();dragonTreatToast('There is not enough clear floor space for a treat chase right now.',4200);return;}
      dragonTreatsBusy=true;syncTreatCooldownUi();closeDragonTreatConfirm();
      try{await purchaseDragonTreats();}catch(error){
        dragonTreatsBusy=false;syncTreatCooldownUi();
        const message=String(error?.message||'Dragon Bites could not be purchased.').replace(/^Error:\s*/,'');
        const seconds=Number(message.match(/in\s+(\d+)\s+seconds?/i)?.[1]||0);if(seconds>0)setTreatCooldownUntil(Date.now()+seconds*1000);
        dragonTreatToast(message,4500);return;
      }
      const token=++dragonTreatAbortToken;
      homeTreatGround.replaceChildren();homeTreatStage.classList.add('is-visible');homeTreatStage.setAttribute('aria-hidden','false');homeTreatBagImage.src=DRAGONBOUND_TREATS_BUTTON_IMAGE;homeTreatBagWrap.classList.add('is-shaking');
      if(homeTreatStatus)homeTreatStatus.textContent='Shaking up a fresh pouch of Dragon Bites…';
      if(dragonTreatShakeAudio){try{dragonTreatShakeAudio.pause();dragonTreatShakeAudio.currentTime=0;dragonTreatShakeAudio.volume=.60;dragonTreatShakeAudio.play()?.catch?.(()=>{});}catch(_error){}}
      await dragonTreatDelay(1000);if(token!==dragonTreatAbortToken)return;
      homeTreatBagWrap.classList.remove('is-shaking');homeTreatBagWrap.classList.add('is-opened');homeTreatStage.classList.add('is-open');homeTreatBagImage.src=DRAGONBOUND_TREATS_OPEN_IMAGE;
      if(homeTreatStatus)homeTreatStatus.textContent=`Let's make ${actor.dragon?.name||'your dragon'} work for these…`;
      await dragonTreatDelay(450);
      for(let i=0;i<route.length;i++){
        if(token!==dragonTreatAbortToken)break;
        await runSingleDragonTreat(route[i],i,route.length,token);
        if(i<route.length-1)await dragonTreatDelay(550);
      }
      if(token===dragonTreatAbortToken){if(homeTreatStatus)homeTreatStatus.textContent=`All gone! ${actor.dragon?.name||'Your dragon'} cleaned up every Dragon Bite.`;try{actor.addBond?.(.35);window.DragonboundBabyEngine?.saveBehaviour?.(true);}catch(_error){}await dragonTreatDelay(1400);}
      if(token===dragonTreatAbortToken)resetDragonTreatStage();
    }

    if(rulesImage) rulesImage.src=DRAGONBOUND_RULES_IMAGE;

    if(fireEmbersHolder){
      for(let i=0;i<24;i++){
        const ember=document.createElement('span');
        ember.className='dragonbound-fire-ember';
        ember.style.setProperty('--x', `${8 + Math.random()*84}%`);
        ember.style.setProperty('--delay', `${-Math.random()*3.5}s`);
        ember.style.setProperty('--dur', `${2.2 + Math.random()*2.6}s`);
        ember.style.setProperty('--size', `${1.5 + Math.random()*3.2}px`);
        ember.style.setProperty('--drift', `${-12 + Math.random()*24}px`);
        fireEmbersHolder.appendChild(ember);
      }
    }

    if(adoptionDustHolder){
      for(let i=0;i<28;i++){
        const mote=document.createElement('span');
        mote.className='dragonbound-adoption-dust-mote';
        mote.style.setProperty('--x', `${Math.random()*100}%`);
        mote.style.setProperty('--y', `${Math.random()*100}%`);
        mote.style.setProperty('--size', `${1.4 + Math.random()*4.2}px`);
        mote.style.setProperty('--dur', `${8 + Math.random()*8}s`);
        mote.style.setProperty('--delay', `${-Math.random()*10}s`);
        adoptionDustHolder.appendChild(mote);
      }
    }

    if(bonnieMenuFrame){
      bonnieMenuFrame.style.backgroundImage=`url('${DRAGONBOUND_BONNIE_MENU_IMAGE}')`;
    }
    if(bonnieMenuMotes){
      for(let i=0;i<22;i++){
        const mote=document.createElement('span');
        mote.className='dragonbound-bonnie-menu-mote';
        mote.style.setProperty('--x', `${Math.random()*100}%`);
        mote.style.setProperty('--y', `${Math.random()*100}%`);
        mote.style.setProperty('--size', `${1.6 + Math.random()*5.4}px`);
        mote.style.setProperty('--dur', `${5 + Math.random()*8}s`);
        mote.style.setProperty('--delay', `${-Math.random()*8}s`);
        bonnieMenuMotes.appendChild(mote);
      }
    }
    if(adoptMenuFrame){
      adoptMenuFrame.style.backgroundImage=`url('${DRAGONBOUND_ADOPT_EGG_MENU_IMAGE}')`;
    }
    if(studyMenuFrame) studyMenuFrame.style.backgroundImage=`url('${DRAGONBOUND_STUDY_IMAGE}')`;
    const estateExteriorImage=overlay.querySelector('.dragonbound-new-game-image--estate-exterior');
    const estateInteriorImage=overlay.querySelector('.dragonbound-new-game-image--estate-interior');
    if(estateExteriorImage) estateExteriorImage.style.backgroundImage=`url('${DRAGONBOUND_ESTATE_EXTERIOR_IMAGE}')`;
    if(estateInteriorImage) estateInteriorImage.style.backgroundImage=`url('${DRAGONBOUND_ESTATE_INTERIOR_IMAGE}')`;
    if(propertyFrame) propertyFrame.style.backgroundImage=`url('${DRAGONBOUND_PROPERTY_BOARD_IMAGE}')`;
    if(adoptMenuForeground) adoptMenuForeground.src=DRAGONBOUND_ADOPTION_BASKET_FOREGROUND;
    if(adoptionRollMenuArt) adoptionRollMenuArt.style.backgroundImage=`url('${DRAGONBOUND_ADOPT_EGG_MENU_IMAGE}')`;
    if(adoptionRollForeground) adoptionRollForeground.src=DRAGONBOUND_ADOPTION_BASKET_FOREGROUND;
    let dragonboundSequenceAssetsPreloaded=false;
    const preloadDragonboundSequenceAssets=()=>{
      if(dragonboundSequenceAssetsPreloaded)return;
      dragonboundSequenceAssetsPreloaded=true;
      const preload=()=>[...DRAGONBOUND_ADOPTION_FRAMES,...DRAGONBOUND_HOME_BASKET_OPEN_FRAMES].forEach(src=>{const img=new Image();img.decoding='async';img.src=src;});
      if('requestIdleCallback' in window)requestIdleCallback(preload,{timeout:1200});else setTimeout(preload,180);
    };
    if(adoptMenuMotes){
      for(let i=0;i<26;i++){
        const mote=document.createElement('span');
        mote.className='dragonbound-adopt-menu-mote';
        mote.style.setProperty('--x', `${Math.random()*100}%`);
        mote.style.setProperty('--y', `${Math.random()*100}%`);
        mote.style.setProperty('--size', `${1.8 + Math.random()*4.8}px`);
        mote.style.setProperty('--dur', `${6 + Math.random()*8}s`);
        mote.style.setProperty('--delay', `${-Math.random()*8}s`);
        adoptMenuMotes.appendChild(mote);
      }
    }

    const adoptionBreezeConfigs=[
      {top:'16%',dur:10,delay:-2.4,w:'36%',h:'2px',o:.24,rot:-6},
      {top:'34%',dur:12,delay:-4.1,w:'44%',h:'2px',o:.18,rot:-4},
      {top:'58%',dur:11,delay:-3.2,w:'40%',h:'2px',o:.22,rot:-5},
      {top:'77%',dur:13,delay:-5.6,w:'48%',h:'3px',o:.14,rot:-3}
    ];
    adoptionBreezeConfigs.forEach(cfg=>{
      const line=document.createElement('span');
      line.className='dragonbound-adoption-breeze';
      line.style.top=cfg.top;
      line.style.setProperty('--dur', `${cfg.dur}s`);
      line.style.setProperty('--delay', `${cfg.delay}s`);
      line.style.setProperty('--w', cfg.w);
      line.style.setProperty('--h', cfg.h);
      line.style.setProperty('--o', cfg.o);
      line.style.setProperty('--rot', `${cfg.rot}deg`);
      adoptionWindsHolder.appendChild(line);
    });
    for(let i=0;i<18;i++){
      const leaf=document.createElement('span');
      leaf.className='dragonbound-adoption-leaf';
      const palette=leafPalettes[Math.floor(Math.random()*leafPalettes.length)];
      const size=8 + Math.random()*12;
      leaf.style.setProperty('--x', `${Math.random()*100}%`);
      leaf.style.setProperty('--top', `${-6 + Math.random()*20}%`);
      leaf.style.setProperty('--dur', `${10 + Math.random()*10}s`);
      leaf.style.setProperty('--delay', `${-Math.random()*12}s`);
      leaf.style.setProperty('--size', `${size}px`);
      leaf.style.setProperty('--alpha', (0.32 + Math.random()*0.3).toFixed(2));
      leaf.style.setProperty('--drift1', `${(-5 + Math.random()*12).toFixed(1)}vw`);
      leaf.style.setProperty('--drift2', `${(-8 + Math.random()*18).toFixed(1)}vw`);
      leaf.style.setProperty('--drift3', `${(-10 + Math.random()*24).toFixed(1)}vw`);
      leaf.style.setProperty('--rotEnd', `${280 + Math.random()*220}deg`);
      leaf.style.setProperty('--leaf-a', palette[0]);
      leaf.style.setProperty('--leaf-b', palette[1]);
      leaf.style.setProperty('--leaf-c', palette[2]);
      adoptionLeavesHolder.appendChild(leaf);
    }
    for(let i=0;i<34;i++){
      const mote=document.createElement('span');
      mote.className='dragonbound-adoption-particle';
      const size=(1.5 + Math.random()*4.8).toFixed(2);
      mote.style.setProperty('--x', `${Math.random()*100}%`);
      mote.style.setProperty('--y', `${8 + Math.random()*82}%`);
      mote.style.setProperty('--size', `${size}px`);
      mote.style.setProperty('--dur', `${5 + Math.random()*6}s`);
      mote.style.setProperty('--delay', `${-Math.random()*7}s`);
      adoptionParticlesHolder.appendChild(mote);
    }
    const estateBreezeConfigs=[
      {top:'14%',dur:12,delay:-1.2,w:'32%',h:'2px',o:.18,rot:-8},
      {top:'31%',dur:11,delay:-3.8,w:'40%',h:'2px',o:.14,rot:-5},
      {top:'52%',dur:14,delay:-5.1,w:'36%',h:'2px',o:.17,rot:-4},
      {top:'72%',dur:13,delay:-2.7,w:'42%',h:'3px',o:.12,rot:-3}
    ];
    estateBreezeConfigs.forEach(cfg=>{
      const line=document.createElement('span');
      line.className='dragonbound-estate-breeze';
      line.style.top=cfg.top;
      line.style.setProperty('--dur', `${cfg.dur}s`);
      line.style.setProperty('--delay', `${cfg.delay}s`);
      line.style.setProperty('--w', cfg.w);
      line.style.setProperty('--h', cfg.h);
      line.style.setProperty('--o', cfg.o);
      line.style.setProperty('--rot', `${cfg.rot}deg`);
      estateExteriorWindsHolder.appendChild(line);
    });
    for(let i=0;i<16;i++){
      const leaf=document.createElement('span');
      leaf.className='dragonbound-estate-leaf';
      const palette=leafPalettes[Math.floor(Math.random()*leafPalettes.length)];
      const size=8 + Math.random()*11;
      leaf.style.setProperty('--x', `${Math.random()*100}%`);
      leaf.style.setProperty('--top', `${-8 + Math.random()*20}%`);
      leaf.style.setProperty('--dur', `${12 + Math.random()*11}s`);
      leaf.style.setProperty('--delay', `${-Math.random()*11}s`);
      leaf.style.setProperty('--size', `${size}px`);
      leaf.style.setProperty('--alpha', (0.24 + Math.random()*0.24).toFixed(2));
      leaf.style.setProperty('--drift1', `${(-6 + Math.random()*12).toFixed(1)}vw`);
      leaf.style.setProperty('--drift2', `${(-8 + Math.random()*18).toFixed(1)}vw`);
      leaf.style.setProperty('--drift3', `${(-10 + Math.random()*24).toFixed(1)}vw`);
      leaf.style.setProperty('--rotEnd', `${260 + Math.random()*240}deg`);
      leaf.style.setProperty('--leaf-a', palette[0]);
      leaf.style.setProperty('--leaf-b', palette[1]);
      leaf.style.setProperty('--leaf-c', palette[2]);
      estateExteriorLeavesHolder.appendChild(leaf);
    }
    for(let i=0;i<24;i++){
      const mote=document.createElement('span');
      mote.className='dragonbound-estate-particle';
      mote.style.setProperty('--x', `${Math.random()*100}%`);
      mote.style.setProperty('--y', `${10 + Math.random()*75}%`);
      mote.style.setProperty('--size', `${(1.4 + Math.random()*4).toFixed(2)}px`);
      mote.style.setProperty('--dur', `${6 + Math.random()*7}s`);
      mote.style.setProperty('--delay', `${-Math.random()*8}s`);
      estateExteriorParticlesHolder.appendChild(mote);
    }
    for(let i=0;i<22;i++){
      const ember=document.createElement('span');
      ember.className='dragonbound-estate-fire-ember';
      ember.style.setProperty('--x', `${8 + Math.random()*84}%`);
      ember.style.setProperty('--size', `${2 + Math.random()*5}px`);
      ember.style.setProperty('--dur', `${2.6 + Math.random()*2.6}s`);
      ember.style.setProperty('--delay', `${-Math.random()*3.4}s`);
      estateFireEmbersHolder.appendChild(ember);
    }
    for(let i=0;i<26;i++){
      const mote=document.createElement('span');
      mote.className='dragonbound-estate-dust-mote';
      mote.style.setProperty('--x', `${Math.random()*100}%`);
      mote.style.setProperty('--y', `${Math.random()*100}%`);
      mote.style.setProperty('--size', `${1.4 + Math.random()*3.8}px`);
      mote.style.setProperty('--dur', `${7 + Math.random()*7}s`);
      mote.style.setProperty('--delay', `${-Math.random()*9}s`);
      estateInteriorDustHolder.appendChild(mote);
    }

    newGameVideo.src=DRAGONBOUND_MAELITH_VIDEO;
    newGameVideo.preload='metadata';
    newGameVideo.setAttribute('playsinline','');
    newGameVideo.setAttribute('webkit-playsinline','');
    newGameVideo.controls=false;
    newGameVideo.draggable=false;
    newGameVideo.volume=1;
    let feedbackTimer=0;
    let transitionTimerA=0;
    let transitionTimerB=0;
    let transitionTimerC=0;
    let transitionTimerD=0;
    let transitionTimerE=0;
    let dialogueIndex=0;
    let dialogueMode='menu';
    let lastAdvanceAt=0;
    let dialogueTyping=false;
    let dialogueTypingTimer=0;
    let dialogueTypingToken=0;
    let dialogueCurrentHtml='';
    let dialogueSequence='forest';
    let dialoguePages=DRAGONBOUND_PROLOGUE_PAGES;
    let bonnieChatReturnToMenu=false;
    let bonnieChatOptionsOpen=false;
    let dialogueTypePulseTimer=0;
    let dialogueTypePulseIndex=0;
    let videoContinueReady=false;
    let videoProgressUnlocked=false;
    let videoUnlockTimeout=0;
    let adoptionConfirmationOpen=false;
    let adoptionRolling=false;
    let adoptionClaimPending=false;
    let selectedAdoptionEgg=null;
    let adoptionRollToken=0;
    let adoptionFrameTimers=[];
    let adoptionRevealFallbackTimer=0;
    let adoptionOpenFallbackTimer=0;
    let adoptionBonnieTimer=0;
    let selectedStudyEggName='';
    let studyEstatePromptTimer=0;
    let studyEstatePromptDismissed=false;
    let estateJourneyStarted=false;
    let selectedPropertyCountry='';
    let pendingStarterProperty=null;
    let selectedStarterHome=null;
    let doppyFrameTimer=0;
    let doppyArrivalTimer=0;
    let doppyDepartureTimer=0;
    let doppyFootstepTimer=0;
    let doppyFootstepStopTimer=0;
    let doppyMotionAnimation=null;
    let homeDeliveryFinished=false;
    let homeBasketReady=false;
    let homeBasketOpened=false;
    let homeHatchTimer=0;
    let homeHatchFrameTimers=[];
    let selectedDragonName='';
    let selectedDragonGender='';
    let homeDragonGenderPromise=null;

    const dragonboundCurrentUsername=()=>{
      try{
        const fromCharacter=(typeof character!=='undefined'&&character?.username)?String(character.username):'';
        const fromPassport=document.getElementById('passportUsername')?.textContent||'';
        return String(fromCharacter||fromPassport||'guest').trim();
      }catch(_e){return 'guest';}
    };
    const dragonboundAccountSlug=()=>dragonboundCurrentUsername().toLowerCase().replace(/[^a-z0-9_-]+/g,'-').replace(/^-+|-+$/g,'')||'guest';
    const dragonboundIsAdminTester=()=>dragonboundCurrentUsername().trim().toLowerCase()==='admin';
    const normaliseDragonGender=value=>{
      const gender=String(value||'').trim().toLowerCase();
      return gender==='male'||gender==='female'?gender:'';
    };
    const dragonGenderDisplay=gender=>normaliseDragonGender(gender)==='female'?'Female':normaliseDragonGender(gender)==='male'?'Male':'';
    const dragonGenderRevealCopy=gender=>normaliseDragonGender(gender)==='female'?"It's a girl — FEMALE":normaliseDragonGender(gender)==='male'?"It's a boy — MALE":'';
    const DRAGONBOUND_TRAIT_OBSERVATIONS={
      'Professional Napper':'Your dragon has shown an unusually serious commitment to finding time for a nap.',
      'Zoomies':'Sudden bursts of energy seem to arrive with very little warning.',
      'Coward':'Unfamiliar situations make this dragon noticeably cautious.',
      'Fearless':'New places and strange situations rarely seem to put this dragon off.',
      'Tiny Menace':'Curiosity and mischief appear to be working together rather too effectively.',
      'Velcro Baby':'This dragon seems happiest when familiar company is close by.',
      'Explorer':'Your dragon rarely seems satisfied visiting the same place twice.',
      'Independent Spirit':'This dragon is perfectly content inventing its own plans.',
      'Introvert':'Quiet familiar spaces seem to suit this dragon best.',
      'Social Butterfly':'This dragon appears unusually interested in whatever everyone else is doing.',
      'Creature of Habit':'Your dragon keeps returning to familiar places and routines.',
      'Little Pilot':'Taking to the air seems to come very naturally to this dragon.',
      'Grounded':'Despite having wings, this dragon appears much happier keeping its feet on the floor.',
      'Food Goblin':'Anything connected to food receives an impressive amount of attention.',
      'Watcher':'Your dragon spends a surprising amount of time simply watching the world.',
      'Gentle Soul':'Calm, quiet behaviour seems to come naturally to this dragon.',
      'Couch Potato':'Comfort is clearly being treated as a very high priority.',
      'Furniture Inspector':'New surroundings are subjected to a thorough little inspection.',
      'Toy Obsessed':'Play seems to occupy a rather large part of this dragon’s thoughts.',
      'Routine Lover':'Once this dragon finds a routine it likes, it tends to stick with it.',
      'Restless':'Sitting still for too long does not appear to be this dragon’s strong point.',
      'Attention Seeker':'This dragon has developed a knack for making sure it gets noticed.',
      'Night Owl':'Long stretches of wakefulness seem to suit this dragon.',
      'Deep Sleeper':'Once asleep, this dragon takes the job extremely seriously.',
      'Adventurous':'New routes and unfamiliar corners hold a strong appeal.',
      'Patient':'This dragon is unusually comfortable waiting and watching.'
    };
    const dragonProfileTraitObservation=trait=>DRAGONBOUND_TRAIT_OBSERVATIONS[trait]||window.DragonboundPersonalityUniverseRegistry?.traits?.[trait]?.note||'A distinctive part of this dragon’s nature has begun to reveal itself.';
    const dragonboundEscapeHtml=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const dragonboundScopedKey=base=>`${base}:${dragonboundAccountSlug()}`;
    const clearLegacyDragonboundOwnershipOnce=()=>{
      try{
        if(localStorage.getItem(DRAGONBOUND_ONE_AND_DONE_RESET_KEY)==='1') return;
        const remove=[];
        for(let i=0;i<localStorage.length;i++){
          const key=localStorage.key(i)||'';
          if(key==='dragonboundNamedDragon' || key.startsWith('dragonboundNamedDragonV') || key.startsWith('dragonboundLockedEggV') || key.startsWith('dragonboundBabyDragonStateV') || key.startsWith('dragonboundBabyHouseMovementV')) remove.push(key);
        }
        remove.forEach(key=>localStorage.removeItem(key));
        localStorage.setItem(DRAGONBOUND_ONE_AND_DONE_RESET_KEY,'1');
        window.dispatchEvent(new CustomEvent('dragonbound:dragon-cleared'));
      }catch(_e){}
    };
    const lockedEggForCurrentAccount=()=>{
      if(dragonboundIsAdminTester()) return null;
      try{
        const raw=localStorage.getItem(dragonboundScopedKey(DRAGONBOUND_EGG_LOCK_KEY));
        if(!raw) return null;
        const saved=JSON.parse(raw);
        const name=typeof saved==='string'?saved:saved?.name;
        return DRAGONBOUND_EGG_POOL.find(item=>item.name===name)||null;
      }catch(_e){return null;}
    };
    const persistLockedEgg=(egg)=>{
      if(!egg || dragonboundIsAdminTester()) return;
      try{localStorage.setItem(dragonboundScopedKey(DRAGONBOUND_EGG_LOCK_KEY),JSON.stringify({name:egg.name,lockedAt:Date.now()}));}catch(_e){}
    };
    const clearLockedEggForCurrentAccount=()=>{
      if(dragonboundIsAdminTester()) return;
      try{localStorage.removeItem(dragonboundScopedKey(DRAGONBOUND_EGG_LOCK_KEY));}catch(_e){}
      selectedAdoptionEgg=null;
    };
    const restoreLockedEgg=()=>{
      const egg=lockedEggForCurrentAccount();
      if(egg) selectedAdoptionEgg=egg;
      return egg;
    };
    const namedDragonForCurrentAccount=()=>{
      try{return JSON.parse(localStorage.getItem(dragonboundScopedKey(DRAGONBOUND_NAMED_DRAGON_KEY))||'null');}catch(_e){return null;}
    };
    const engineDragonForCurrentAccount=()=>{
      try{return JSON.parse(localStorage.getItem(`dragonboundBabyDragonStateV2:${dragonboundAccountSlug()}`)||'null');}catch(_e){return null;}
    };
    const dragonboundMemorySavedAt=memory=>{
      const parsed=Date.parse(String(memory?.lastSavedAt||''));return Number.isFinite(parsed)?parsed:0;
    };
    const newestLocalDragonboundSnapshot=()=>{
      const candidates=[namedDragonForCurrentAccount(),engineDragonForCurrentAccount()].filter(Boolean);
      if(!candidates.length)return null;
      candidates.sort((a,b)=>dragonboundMemorySavedAt(b?.memory)-dragonboundMemorySavedAt(a?.memory));
      return candidates[0]||null;
    };
    const ensureAdoptionLockNotice=()=>{
      const shell=adoptMenuOverlay?.querySelector('.dragonbound-adopt-menu-shell');
      if(!shell) return null;
      let notice=shell.querySelector('.dragonbound-adopt-lock-notice');
      if(!notice){
        notice=document.createElement('div');
        notice.className='dragonbound-adopt-lock-notice';
        notice.setAttribute('aria-live','polite');
        shell.appendChild(notice);
      }
      return notice;
    };
    const syncAdoptionOneAndDoneUI=()=>{
      const locked=restoreLockedEgg();
      const confirm=adoptMenuOverlay?.querySelector('.dragonbound-adopt-menu-action--confirm');
      const notice=ensureAdoptionLockNotice();
      const admin=dragonboundIsAdminTester();
      adoptMenuOverlay?.classList.toggle('is-one-and-done-locked',!!locked&&!admin);
      adoptMenuOverlay?.classList.toggle('is-admin-reroll',admin);
      if(confirm){
        confirm.disabled=!!locked&&!admin;
        confirm.setAttribute('aria-disabled',confirm.disabled?'true':'false');
        confirm.setAttribute('aria-label',admin?'Give an Egg a Home — Admin reroll':locked?'Your Dragonbound egg is already chosen':'Give an Egg a Home');
      }
      if(notice){
        notice.classList.toggle('is-visible',admin||!!locked);
        notice.classList.toggle('is-admin',admin);
        notice.textContent=admin?'ADMIN TEST MODE · UNLIMITED EGG REROLLS':locked?`YOUR EGG IS LOCKED IN · ${locked.name.toUpperCase()}`:'';
      }
      return locked;
    };
    let dragonboundProfileHydration=null;
    let dragonboundHydratedAccount='';
    let dragonboundLastProfile=null;
    let dragonboundMoodRefreshTimer=0;
    let dragonboundDailyPreferencesRefreshTimer=0;
    let dragonboundFurniturePreferenceRefreshTimer=0;
    let dragonboundLastDailyPreferences={version:1,preferences:[],nextChangeAt:null};
    let dragonboundLastLearnedRoutines={version:1,routines:[]};
    let dragonboundRoutineObservationQueue=[];
    let dragonboundRoutineFlushTimer=0;
    let dragonboundRoutineSaveInFlight=false;
    const dragonboundMoodExpiryMs=mood=>{const parsed=Date.parse(String(mood?.expiresAt||''));return Number.isFinite(parsed)?parsed:0;};
    const scheduleDragonboundMoodRefresh=mood=>{
      clearTimeout(dragonboundMoodRefreshTimer);dragonboundMoodRefreshTimer=0;
      const expiry=dragonboundMoodExpiryMs(mood);if(!expiry)return;
      const delay=Math.max(1500,Math.min(2147483000,expiry-Date.now()+1200));
      dragonboundMoodRefreshTimer=setTimeout(()=>{dragonboundMoodRefreshTimer=0;void refreshDragonboundMoodServer({announce:true});},delay);
    };
    const applyDragonboundMood=(mood,{announce=false}={})=>{
      if(!mood||typeof mood!=='object'||!String(mood.name||''))return null;
      if(dragonboundLastProfile&&typeof dragonboundLastProfile==='object')dragonboundLastProfile.dragon_mood=mood;else dragonboundLastProfile={dragon_mood:mood};
      try{
        const local=namedDragonForCurrentAccount();
        if(local){
          const updated={...local,mood};const encoded=JSON.stringify(updated),account=dragonboundAccountSlug();
          localStorage.setItem(dragonboundScopedKey(DRAGONBOUND_NAMED_DRAGON_KEY),encoded);
          localStorage.setItem(`dragonboundBabyDragonStateV2:${account}`,encoded);
        }
      }catch(_e){}
      window.dispatchEvent(new CustomEvent('dragonbound:mood-updated',{detail:{mood,announce}}));
      scheduleDragonboundMoodRefresh(mood);
      return mood;
    };
    const refreshDragonboundMoodServer=async({announce=false}={})=>{
      if(dragonboundAccountSlug()==='guest')return null;
      try{
        const {data,error}=await db.rpc('dragonbound_get_current_mood');if(error)throw error;
        const mood=Array.isArray(data)?data[0]:data;if(!mood||typeof mood!=='object')return null;
        applyDragonboundMood(mood,{announce});return mood;
      }catch(error){console.warn('[Dragonbound] Current mood could not be refreshed yet.',error);return null;}
    };
    const normaliseDragonboundDailyPreferences=raw=>{
      const src=raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:{},list=Array.isArray(src.preferences)?src.preferences:[],nowMs=Date.now();
      const preferences=list.map(row=>{const generatedAt=Date.parse(String(row?.generatedAt||'')),expiresAt=Date.parse(String(row?.expiresAt||''));return{id:String(row?.id||''),type:String(row?.type||''),label:String(row?.label||'').slice(0,64),story:String(row?.story||'').slice(0,360),targetPlacementId:String(row?.targetPlacementId||''),targetItemId:String(row?.targetItemId||''),targetName:String(row?.targetName||'').slice(0,90),generatedAt:Number.isFinite(generatedAt)?generatedAt:0,expiresAt:Number.isFinite(expiresAt)?expiresAt:0};}).filter(row=>row.id&&row.type&&(!row.expiresAt||row.expiresAt>nowMs));
      const nextParsed=Date.parse(String(src.nextChangeAt||'')),fallback=preferences.map(v=>v.expiresAt).filter(Boolean).sort((a,b)=>a-b)[0]||0;
      return{version:Number(src.version||1),preferences,nextChangeAt:Number.isFinite(nextParsed)?nextParsed:fallback};
    };
    const dragonboundDailyPreferencesExpiryMs=payload=>{const normal=normaliseDragonboundDailyPreferences(payload);return Number(normal.nextChangeAt||0);};
    const scheduleDragonboundDailyPreferencesRefresh=payload=>{
      clearTimeout(dragonboundDailyPreferencesRefreshTimer);dragonboundDailyPreferencesRefreshTimer=0;
      const expiry=dragonboundDailyPreferencesExpiryMs(payload);if(!expiry)return;
      const delay=Math.max(1500,Math.min(2147483000,expiry-Date.now()+1400));
      dragonboundDailyPreferencesRefreshTimer=setTimeout(()=>{dragonboundDailyPreferencesRefreshTimer=0;void refreshDragonboundDailyPreferencesServer({announce:true});},delay);
    };
    const applyDragonboundDailyPreferences=(payload,{announce=false}={})=>{
      const next=normaliseDragonboundDailyPreferences(payload),beforeIds=(dragonboundLastDailyPreferences?.preferences||[]).map(v=>v.id).join('|'),afterIds=next.preferences.map(v=>v.id).join('|'),changed=beforeIds!==afterIds;
      dragonboundLastDailyPreferences=next;
      if(dragonboundLastProfile&&typeof dragonboundLastProfile==='object')dragonboundLastProfile.dragon_daily_preferences=next;
      window.dispatchEvent(new CustomEvent('dragonbound:daily-preferences-updated',{detail:{preferences:next,announce:!!announce&&changed}}));
      scheduleDragonboundDailyPreferencesRefresh(next);
      return next;
    };
    const refreshDragonboundDailyPreferencesServer=async({announce=false}={})=>{
      if(dragonboundAccountSlug()==='guest')return dragonboundLastDailyPreferences;
      try{
        const {data,error}=await db.rpc('dragonbound_get_daily_preferences');if(error)throw error;
        const payload=Array.isArray(data)?data[0]:data;if(!payload||typeof payload!=='object')return dragonboundLastDailyPreferences;
        return applyDragonboundDailyPreferences(payload,{announce});
      }catch(error){console.warn('[Dragonbound] Daily preferences could not be refreshed yet.',error);return dragonboundLastDailyPreferences;}
    };

    const normaliseDragonboundLearnedRoutines=raw=>{
      const src=raw&&typeof raw==='object'&&!Array.isArray(raw)?raw:{},rows=Array.isArray(src.routines)?src.routines:[],parse=v=>{const n=Date.parse(String(v||''));return Number.isFinite(n)?n:0;};
      return{version:Number(src.version||1),routines:rows.map(row=>({key:String(row?.key||''),category:String(row?.category||''),trigger:String(row?.trigger||''),response:String(row?.response||''),targetPlacementId:String(row?.targetPlacementId||''),targetItemId:String(row?.targetItemId||''),targetName:String(row?.targetName||'').slice(0,90),targetHouseId:String(row?.targetHouseId||''),observations:Math.max(0,Number(row?.observations)||0),successes:Math.max(0,Number(row?.successes)||0),confidence:Math.max(0,Math.min(1,Number(row?.confidence)||0)),status:String(row?.status||'forming'),firstObservedAt:parse(row?.firstObservedAt),lastObservedAt:parse(row?.lastObservedAt),recognisedAt:parse(row?.recognisedAt),establishedAt:parse(row?.establishedAt)})).filter(row=>row.key&&row.trigger&&row.response).slice(0,50)};
    };
    const applyDragonboundLearnedRoutines=(payload,{announce=false}={})=>{
      const before=new Set((dragonboundLastLearnedRoutines?.routines||[]).filter(r=>['recognized','established'].includes(r.status)).map(r=>r.key)),next=normaliseDragonboundLearnedRoutines(payload),newlyVisible=next.routines.some(r=>['recognized','established'].includes(r.status)&&!before.has(r.key));
      dragonboundLastLearnedRoutines=next;if(dragonboundLastProfile&&typeof dragonboundLastProfile==='object')dragonboundLastProfile.dragon_learned_routines=next;
      window.dispatchEvent(new CustomEvent('dragonbound:learned-routines-updated',{detail:{routines:next,announce:!!announce&&newlyVisible}}));return next;
    };
    const refreshDragonboundLearnedRoutinesServer=async({announce=false}={})=>{
      if(dragonboundAccountSlug()==='guest')return dragonboundLastLearnedRoutines;
      try{const {data,error}=await db.rpc('dragonbound_get_learned_routines');if(error)throw error;const payload=Array.isArray(data)?data[0]:data;if(!payload||typeof payload!=='object')return dragonboundLastLearnedRoutines;return applyDragonboundLearnedRoutines(payload,{announce});}
      catch(error){console.warn('[Dragonbound] Learned routines could not be refreshed yet.',error);return dragonboundLastLearnedRoutines;}
    };
    const scheduleDragonboundRoutineFlush=(delay=45000)=>{if(dragonboundRoutineFlushTimer||dragonboundAccountSlug()==='guest')return;dragonboundRoutineFlushTimer=setTimeout(()=>{dragonboundRoutineFlushTimer=0;void flushDragonboundRoutineObservations();},Math.max(800,delay));};
    const flushDragonboundRoutineObservations=async()=>{
      if(dragonboundRoutineSaveInFlight||dragonboundAccountSlug()==='guest'||!dragonboundRoutineObservationQueue.length)return;
      dragonboundRoutineSaveInFlight=true;const batch=dragonboundRoutineObservationQueue.splice(0,20);
      try{const {data,error}=await db.rpc('dragonbound_record_routine_observations',{p_events:batch});if(error)throw error;const payload=Array.isArray(data)?data[0]:data;if(payload)applyDragonboundLearnedRoutines(payload,{announce:true});}
      catch(error){console.warn('[Dragonbound] Routine observations will retry later.',error);dragonboundRoutineObservationQueue=[...batch,...dragonboundRoutineObservationQueue].slice(-40);}
      finally{dragonboundRoutineSaveInFlight=false;if(dragonboundRoutineObservationQueue.length)scheduleDragonboundRoutineFlush(dragonboundRoutineObservationQueue.length>=20?1200:35000);}
    };
    const dragonboundRoutineCategoryLabel=row=>{const t=String(row?.trigger||''),map={wake:'WAKE-UP',bedtime:'BEDTIME',eat:'AFTER EATING',drink:'AFTER DRINKING',bath:'AFTER BATH',play:'AFTER PLAYING',training:'AFTER TRAINING',keeper_return:'KEEPER GREETING',keeper_pet:'AFTER A CUDDLE',keeper_treat:'AFTER TREATS',race_win:'WINNING RITUAL',race_loss:'POST-RACE',unsettled:'SAFE PLACE'};if(t.startsWith('period:'))return`${t.split(':')[1].toUpperCase()} ROUTINE`;return map[t]||'LITTLE RITUAL';};
    const dragonboundRoutineTitle=row=>{const t=String(row?.trigger||''),map={wake:'Wake-up Routine',bedtime:'Bedtime Ritual',eat:'After Eating',drink:'After Drinking',bath:'After Bath',play:'After Playing',training:'After Training',keeper_return:'Keeper Greeting',keeper_pet:'After a Cuddle',keeper_treat:'After Treats',race_win:'Winning Ritual',race_loss:'Race Ritual',unsettled:'Safe Place'};if(t.startsWith('period:'))return`${t.split(':')[1].replace(/^./,m=>m.toUpperCase())} Routine`;return map[t]||'Little Ritual';};
    const dragonboundRoutineStory=(row,name='Your dragon')=>{const target=String(row?.targetName||''),response=String(row?.response||''),resp={sleep:'settles down to sleep',rest:'finds somewhere comfortable to rest',sit:'sits quietly for a while',explore:'goes exploring',training:'looks for some practice',play:target?`goes looking for ${target}`:'looks for something to play with',eat:'checks the food',drink:'goes for a drink',bath:'looks for a wash',window:target?`checks ${target}`:'looks out at the world',hide:target?`retreats to ${target}`:'finds a quiet hiding place',inspect:target?`checks ${target}`:'goes to inspect something'}[response]||`chooses ${response.replace(/_/g,' ')}`;const t=String(row?.trigger||'');if(t==='bedtime')return`${name} usually ${resp} before settling down for the night.`;if(t==='wake')return`${name} usually ${resp} after waking up.`;if(t==='eat')return`${name} often ${resp} after eating.`;if(t==='drink')return`${name} often ${resp} after a drink.`;if(t==='bath')return`${name} usually ${resp} after a bath.`;if(t==='play')return`${name} tends to ${resp} after playing.`;if(t==='training')return`${name} usually ${resp} after training.`;if(t==='race_loss')return`${name} often ${resp} after a disappointing race.`;if(t==='race_win')return`${name} often ${resp} after winning a race.`;if(t==='keeper_return')return`${name} has developed a familiar little ritual when you come home: ${resp}.`;if(t==='unsettled')return`When ${name} feels unsettled, they usually ${resp}.`;if(t.startsWith('period:'))return`${name} often ${resp} during the ${t.split(':')[1]}.`;return`${name} has started repeating the same little routine: ${resp}.`;};

    const saveStarterHouseLocally=houseId=>{
      try{
        if(houseId) localStorage.setItem(dragonboundScopedKey(DRAGONBOUND_STARTER_HOUSE_KEY),houseId);
      }catch(_e){}
    };
    const readStarterHouseLocally=()=>{
      try{
        const scoped=localStorage.getItem(dragonboundScopedKey(DRAGONBOUND_STARTER_HOUSE_KEY));
        if(scoped) return scoped;
        const legacy=localStorage.getItem('dragonboundSelectedStarterHouse')||'';
        if(legacy){saveStarterHouseLocally(legacy);if(dragonboundAccountSlug()!=='guest')localStorage.removeItem('dragonboundSelectedStarterHouse');return legacy;}
      }catch(_e){}
      return '';
    };
    const dragonboundHasPlayableSave=(profile=dragonboundLastProfile)=>{
      if(profile?.starter_house_id || profile?.locked_egg || profile?.dragon_name || profile?.breed_id) return true;
      return !!(readStarterHouseLocally() || lockedEggForCurrentAccount() || namedDragonForCurrentAccount());
    };
    const syncDragonboundMainMenuSaveState=(profile=dragonboundLastProfile)=>{
      const hasSave=dragonboundHasPlayableSave(profile);
      const admin=dragonboundIsAdminTester();
      const newGameAction=menuActions.find(button=>button.dataset.dragonboundAction==='new-game');
      const loadGameAction=menuActions.find(button=>button.dataset.dragonboundAction==='load-game');
      const newBlocked=hasSave&&!admin;
      if(newGameAction){
        newGameAction.classList.toggle('is-save-disabled',newBlocked);
        newGameAction.setAttribute('aria-disabled',newBlocked?'true':'false');
        newGameAction.setAttribute('tabindex',newBlocked?'-1':'0');
        newGameAction.title=newBlocked?'A Dragonbound save already exists. Use Load Game.':'Start a new Dragonbound game';
      }
      if(loadGameAction){
        loadGameAction.classList.toggle('is-save-disabled',!hasSave);
        loadGameAction.classList.toggle('is-save-ready',hasSave);
        loadGameAction.setAttribute('aria-disabled',hasSave?'false':'true');
        loadGameAction.setAttribute('tabindex',hasSave?'0':'-1');
        loadGameAction.title=hasSave?'Continue your Dragonbound save':'No Dragonbound save yet';
      }
      return hasSave;
    };
    const hydrateDragonboundProfile=async({force=false}={})=>{
      const account=dragonboundAccountSlug();
      if(account==='guest') return null;
      if(!force && dragonboundHydratedAccount===account){
        syncDragonboundMainMenuSaveState(dragonboundLastProfile);
        return dragonboundLastProfile;
      }
      if(dragonboundProfileHydration) return dragonboundProfileHydration;
      dragonboundProfileHydration=(async()=>{
        try{
          // RLS already restricts this table to auth.uid(), so do not depend on
          // get_my_character() exposing user_id (it intentionally does not).
          const {data,error}=await db.from('dragonbound_profiles').select('locked_egg,dragon_name,breed_id,gender,dragon_hatched_at,starter_house_id,personality,dragon_traits,dragon_preferences,dragon_memory,personality_version,personality_generated_at,dragon_mood').maybeSingle();
          if(error) throw error;
          dragonboundLastProfile=data||null;
          if(data){
            // V33.96: signature personality is server-owned and permanent. Repair any
            // older hatched profile that does not yet have its 2-3 signature traits.
            if(data.dragon_name&&data.breed_id&&data.dragon_hatched_at){
              const existingSignature=Array.isArray(data?.dragon_traits?.signature)?data.dragon_traits.signature:[];
              if(existingSignature.length<2||existingSignature.length>3){
                try{
                  const {data:signatureData,error:signatureError}=await db.rpc('dragonbound_ensure_my_personality_v2');
                  if(signatureError)throw signatureError;
                  const signature=Array.isArray(signatureData)?signatureData:[];
                  if(signature.length>=2)data.dragon_traits={...(data.dragon_traits||{}),signature:signature.slice(0,3),signatureVersion:2};
                }catch(signatureError){console.warn('[Dragonbound] Signature personality could not be hydrated yet.',signatureError);}
              }
            }
            if(data.dragon_name&&data.breed_id&&data.dragon_hatched_at){
              const mood=await refreshDragonboundMoodServer({announce:false});
              if(mood)data.dragon_mood=mood;
              const dailyPreferences=await refreshDragonboundDailyPreferencesServer({announce:false});
              data.dragon_daily_preferences=dailyPreferences;
              const learnedRoutines=await refreshDragonboundLearnedRoutinesServer({announce:false});
              data.dragon_learned_routines=learnedRoutines;
            }
            if(!dragonboundIsAdminTester()){
              if(data.locked_egg){
                const egg=DRAGONBOUND_EGG_POOL.find(item=>item.name===data.locked_egg);
                if(egg){persistLockedEgg(egg);selectedAdoptionEgg=egg;}
                else clearLockedEggForCurrentAccount();
              }else{
                // Supabase is authoritative. If an admin reset the account's egg,
                // remove any stale browser lock left from before that reset.
                clearLockedEggForCurrentAccount();
              }
            }
            if(data.starter_house_id){
              saveStarterHouseLocally(data.starter_house_id);
            }

            // Recovery path for the old hatch-sync bug: if the browser already has a
            // named dragon that matches the account's locked egg, but Supabase never
            // received the hatch/name RPC, repair the server record automatically.
            if(!data.dragon_name && !data.breed_id && data.locked_egg){
              const pending=namedDragonForCurrentAccount();
              const locked=DRAGONBOUND_EGG_POOL.find(item=>item.name===data.locked_egg);
              const expectedBreed=locked?(window.DragonboundBreedIdForEgg?window.DragonboundBreedIdForEgg(locked.name):locked.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')):'';
              if(pending?.name && pending?.breedId && expectedBreed && pending.breedId===expectedBreed){
                try{
                  const {data:syncData,error:syncError}=await db.rpc('dragonbound_name_dragon',{p_dragon_name:pending.name,p_breed_id:pending.breedId});
                  if(syncError) throw syncError;
                  const syncRow=Array.isArray(syncData)?syncData[0]:syncData;
                  data.dragon_name=pending.name;
                  data.breed_id=pending.breedId;
                  data.dragon_hatched_at=syncRow?.hatched_at||new Date(Number(pending.hatchedAt)||Date.now()).toISOString();
                  try{
                    const {data:repairedProfile,error:repairedError}=await db.from('dragonbound_profiles').select('locked_egg,dragon_name,breed_id,gender,dragon_hatched_at,starter_house_id,personality,dragon_traits,dragon_preferences,dragon_memory,personality_version,personality_generated_at,dragon_mood').maybeSingle();
                    if(repairedError) throw repairedError;
                    if(repairedProfile) Object.assign(data,repairedProfile);
                    data.gender=normaliseDragonGender(data.gender||pending.gender);
                  }catch(_profileError){data.gender=normaliseDragonGender(pending.gender);}
                  dragonboundLastProfile={...data};
                }catch(syncError){
                  console.warn('[Dragonbound] Pending local hatch could not be repaired yet.',syncError);
                }
              }
            }

            if(data.dragon_name && data.breed_id){
              // V32.89: a reload used to be able to restore an older Supabase snapshot
              // if the final async behaviour save was cancelled by navigation. Prefer the
              // newest timestamped local behaviour copy and repair Supabase in the background.
              const localCandidate=newestLocalDragonboundSnapshot();
              const sameLocal=!!(localCandidate&&localCandidate.breedId===data.breed_id&&String(localCandidate.name||'')===String(data.dragon_name||''));
              const localSavedAt=sameLocal?dragonboundMemorySavedAt(localCandidate.memory):0,serverSavedAt=dragonboundMemorySavedAt(data.dragon_memory);
              if(sameLocal&&localSavedAt>serverSavedAt+250){
                data.dragon_memory=localCandidate.memory||data.dragon_memory||{};
                data.dragon_preferences=localCandidate.preferences||data.dragon_preferences||{};
                const serverTraits=data.dragon_traits||{},localTraits=localCandidate.traits||{};
                const assigned=Array.isArray(serverTraits.assigned)&&serverTraits.assigned.length?serverTraits.assigned:(Array.isArray(localTraits.assigned)?localTraits.assigned:[]);
                const discovered=[...new Set([...(Array.isArray(serverTraits.discovered)?serverTraits.discovered:[]),...(Array.isArray(localTraits.discovered)?localTraits.discovered:[])])].slice(0,20);
                const signature=Array.isArray(serverTraits.signature)&&serverTraits.signature.length>=2?serverTraits.signature:(Array.isArray(localTraits.signature)?localTraits.signature:[]);
                data.dragon_traits={...serverTraits,...localTraits,assigned,discovered,signature:signature.slice(0,3)};
                db.rpc('dragonbound_save_behaviour',{p_memory:data.dragon_memory,p_preferences:data.dragon_preferences||{},p_discovered_traits:discovered}).then(({data:repairData,error:repairError})=>{
                  if(repairError){console.warn('[Dragonbound] Newer local care snapshot could not be repaired to Supabase yet.',repairError);return;}
                  const repairRow=Array.isArray(repairData)?repairData[0]:repairData;if(repairRow)dragonboundLastProfile={...(dragonboundLastProfile||data),dragon_memory:repairRow.dragon_memory,dragon_preferences:repairRow.dragon_preferences,dragon_traits:repairRow.dragon_traits};
                }).catch(()=>{});
              }
              const ownerUsername=dragonboundCurrentUsername();
              const identity={id:`dragon-${account}-${data.breed_id}`,breedId:data.breed_id,name:data.dragon_name,eggName:data.locked_egg||'',ownerUsername,gender:normaliseDragonGender(data.gender),hatchedAt:data.dragon_hatched_at?Date.parse(data.dragon_hatched_at):Date.now(),personality:data.personality||null,traits:data.dragon_traits||{},preferences:data.dragon_preferences||{},memory:data.dragon_memory||{},mood:data.dragon_mood||{},dailyPreferences:data.dragon_daily_preferences||dragonboundLastDailyPreferences,learnedRoutines:data.dragon_learned_routines||dragonboundLastLearnedRoutines,personalityVersion:Number(data.personality_version||1)};
              try{
                const encoded=JSON.stringify(identity);
                localStorage.setItem(dragonboundScopedKey(DRAGONBOUND_NAMED_DRAGON_KEY),encoded);
                localStorage.setItem(`dragonboundBabyDragonStateV2:${account}`,encoded);
              }catch(_e){}
              window.dispatchEvent(new CustomEvent('dragonbound:dragon-named',{detail:identity}));
            }
          }
          dragonboundHydratedAccount=account;
          syncAdoptionOneAndDoneUI();
          syncDragonboundMainMenuSaveState(data||null);
          return data||null;
        }catch(error){
          console.warn('[Dragonbound] Could not hydrate account profile.',error);
          syncDragonboundMainMenuSaveState(dragonboundLastProfile);
          return dragonboundLastProfile;
        }finally{dragonboundProfileHydration=null;}
      })();
      return dragonboundProfileHydration;
    };
    const claimDragonboundEggServer=async(candidate)=>{
      if(!candidate) return null;
      const {data,error}=await db.rpc('dragonbound_claim_egg',{p_egg_name:candidate.name});
      if(error) throw error;
      const row=Array.isArray(data)?data[0]:data;
      const egg=DRAGONBOUND_EGG_POOL.find(item=>item.name===row?.locked_egg)||null;
      if(!egg) throw new Error('Dragonbound returned an unknown egg.');
      if(!row?.is_admin){
        persistLockedEgg(egg);
        dragonboundLastProfile={...(dragonboundLastProfile||{}),locked_egg:egg.name};
      }
      syncDragonboundMainMenuSaveState(dragonboundLastProfile);
      return {egg,isAdmin:!!row?.is_admin};
    };
    const persistStarterHouseServer=async houseId=>{
      if(!houseId || dragonboundAccountSlug()==='guest') return true;
      const {error}=await db.rpc('dragonbound_set_starter_house',{p_house_id:houseId});
      if(error){console.warn('[Dragonbound] Could not save starter house.',error);return false;}
      dragonboundLastProfile={...(dragonboundLastProfile||{}),starter_house_id:houseId};
      syncDragonboundMainMenuSaveState(dragonboundLastProfile);return true;
    };
    const persistNamedDragonServer=async identity=>{
      if(!identity || dragonboundAccountSlug()==='guest') return {localOnly:true};
      const {data,error}=await db.rpc('dragonbound_name_dragon',{p_dragon_name:identity.name,p_breed_id:identity.breedId});
      if(error){console.warn('[Dragonbound] Could not save named dragon.',error);throw error;}
      const row=Array.isArray(data)?data[0]:data;
      const {data:profile,error:profileError}=await db.from('dragonbound_profiles').select('locked_egg,dragon_name,breed_id,gender,dragon_hatched_at,starter_house_id,personality,dragon_traits,dragon_preferences,dragon_memory,personality_version,personality_generated_at,dragon_mood').maybeSingle();
      if(profileError) throw profileError;
      if(!profile?.personality || !profile?.dragon_traits) throw new Error('Dragonbound personality was not finalised by the server.');
      dragonboundLastProfile={...profile,gender:normaliseDragonGender(profile.gender)||normaliseDragonGender(identity.gender)};
      const mood=await refreshDragonboundMoodServer({announce:true});if(mood)profile.dragon_mood=mood;
      const dailyPreferences=await refreshDragonboundDailyPreferencesServer({announce:true});profile.dragon_daily_preferences=dailyPreferences;
      const learnedRoutines=await refreshDragonboundLearnedRoutinesServer({announce:false});profile.dragon_learned_routines=learnedRoutines;
      dragonboundLastProfile={...(dragonboundLastProfile||profile),dragon_mood:mood||profile.dragon_mood||{},dragon_daily_preferences:dailyPreferences,dragon_learned_routines:learnedRoutines};
      syncDragonboundMainMenuSaveState(dragonboundLastProfile);
      return {...(row||{}),...profile,dragon_mood:mood||profile.dragon_mood||{},dragon_daily_preferences:dailyPreferences,dragon_learned_routines:learnedRoutines};
    };

    clearLegacyDragonboundOwnershipOnce();
    window.addEventListener('repo-character-changed',()=>{clearTimeout(dragonboundMoodRefreshTimer);dragonboundMoodRefreshTimer=0;clearTimeout(dragonboundDailyPreferencesRefreshTimer);dragonboundDailyPreferencesRefreshTimer=0;clearTimeout(dragonboundFurniturePreferenceRefreshTimer);dragonboundFurniturePreferenceRefreshTimer=0;dragonboundLastDailyPreferences={version:1,preferences:[],nextChangeAt:null};dragonboundLastLearnedRoutines={version:1,routines:[]};dragonboundRoutineObservationQueue=[];clearTimeout(dragonboundRoutineFlushTimer);dragonboundRoutineFlushTimer=0;dragonboundHydratedAccount='';dragonboundLastProfile=null;syncDragonboundMainMenuSaveState(null);void hydrateDragonboundProfile({force:true});});
    window.addEventListener('dragonbound:furniture-changed',()=>{if(dragonboundAccountSlug()==='guest')return;clearTimeout(dragonboundFurniturePreferenceRefreshTimer);dragonboundFurniturePreferenceRefreshTimer=setTimeout(()=>{dragonboundFurniturePreferenceRefreshTimer=0;void refreshDragonboundDailyPreferencesServer({announce:false});void refreshDragonboundLearnedRoutinesServer({announce:false});},650);});
    window.addEventListener('dragonbound:routine-observation',event=>{
      if(dragonboundAccountSlug()==='guest')return;const d=event.detail||{},trigger=String(d.trigger||''),response=String(d.response||'');if(!trigger||!response)return;
      const entry={trigger,response,targetPlacementId:String(d.targetPlacementId||''),targetItemId:String(d.targetItemId||''),targetName:String(d.targetName||'').slice(0,90),houseId:String(d.houseId||''),autonomous:d.autonomous!==false,at:Number(d.at)||Date.now()};dragonboundRoutineObservationQueue.push(entry);dragonboundRoutineObservationQueue=dragonboundRoutineObservationQueue.slice(-40);scheduleDragonboundRoutineFlush(dragonboundRoutineObservationQueue.length>=12?1200:45000);
    });
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&dragonboundRoutineObservationQueue.length)void flushDragonboundRoutineObservations();});
    window.addEventListener('pagehide',()=>{if(dragonboundRoutineObservationQueue.length)void flushDragonboundRoutineObservations();});
    let dragonboundBehaviourSaveQueue=Promise.resolve();
    window.addEventListener('dragonbound:behaviour-memory-save',event=>{
      const detail=event.detail||{};if(dragonboundAccountSlug()==='guest'||!detail.memory)return;
      // Write the same care/behaviour snapshot to the named-dragon browser record
      // immediately. This survives F5/reload even if the network request is interrupted.
      try{
        const local=namedDragonForCurrentAccount();
        if(local){
          const currentTraits=local.traits||{},discovered=Array.isArray(detail.discoveredTraits)?detail.discoveredTraits:[];
          const updated={...local,memory:detail.memory,preferences:{...(local.preferences||{}),...(detail.preferences||{})},traits:{...currentTraits,discovered}};
          const encoded=JSON.stringify(updated);
          localStorage.setItem(dragonboundScopedKey(DRAGONBOUND_NAMED_DRAGON_KEY),encoded);
          localStorage.setItem(`dragonboundBabyDragonStateV2:${dragonboundAccountSlug()}`,encoded);
        }
      }catch(_e){}
      dragonboundBehaviourSaveQueue=dragonboundBehaviourSaveQueue.catch(()=>{}).then(async()=>{
        const {data,error}=await db.rpc('dragonbound_save_behaviour',{p_memory:detail.memory,p_preferences:detail.preferences||{},p_discovered_traits:Array.isArray(detail.discoveredTraits)?detail.discoveredTraits:[]});
        if(error){console.warn('[Dragonbound] Behaviour memory save failed.',error);return;}
        const row=Array.isArray(data)?data[0]:data;if(!row)return;
        dragonboundLastProfile={...(dragonboundLastProfile||{}),dragon_memory:row.dragon_memory,dragon_preferences:row.dragon_preferences,dragon_traits:row.dragon_traits};
        // Never let a slower network response replace a more recent browser care
        // snapshot. Needs/Bond are written locally every couple of seconds.
        const local=newestLocalDragonboundSnapshot(),serverAt=dragonboundMemorySavedAt(row.dragon_memory),localAt=dragonboundMemorySavedAt(local?.memory);
        if(local&&serverAt>=localAt){
          const updated={...local,memory:row.dragon_memory,preferences:row.dragon_preferences,traits:row.dragon_traits};
          try{const encoded=JSON.stringify(updated);localStorage.setItem(dragonboundScopedKey(DRAGONBOUND_NAMED_DRAGON_KEY),encoded);localStorage.setItem(`dragonboundBabyDragonStateV2:${dragonboundAccountSlug()}`,encoded);}catch(_e){}
        }
      });
    });

    window.addEventListener('dragonbound:bond-milestone',event=>{
      const detail=event.detail||{},name=detail.name||'Your dragon',stage=detail.stage||'closer to you';
      try{toast?.(`${name}'s bond grew: ${stage} — ${detail.note||'your trust is growing.'}`,5200);}catch(_error){}
    });

    window.addEventListener('dragonbound:skill-rank-up',event=>{
      const detail=event.detail||{};try{toast?.(`${detail.label||'A skill'} improved — ${detail.rank||'new rank'}!`,4300);}catch(_error){}
    });
    window.addEventListener('dragonbound:skill-session-finished',event=>{
      const detail=event.detail||{},gains=Object.entries(detail.gains||{}).sort((a,b)=>Number(b[1])-Number(a[1]));if(!gains.length||!detail.completed)return;
      const labels={flying:'Flying',agility:'Agility',strength:'Strength',fireControl:'Fire Control',intelligence:'Intelligence',confidence:'Confidence'},summary=gains.slice(0,2).map(([key,value])=>`${labels[key]||key} +${Number(value).toFixed(1)}`).join(' · ');
      try{if(Number(detail.total||0)>=.5)toast?.(`${detail.source||'Training'} · ${summary}`,2800);}catch(_error){}
    });

    const DRAGONBOUND_SKILL_MARK_REWARDS={10:5,20:7,30:10,40:12,50:15,60:18,70:22,80:28,90:40,95:50,100:75};
    let dragonboundSkillRewardState={balance:0,baselines:{},claimed:[]},dragonboundSkillRewardBusy=new Set();
    const refreshDragonboundSkillRewardState=async()=>{try{const {data,error}=await db.rpc('dragonbound_get_skill_reward_state');if(error)throw error;if(data)dragonboundSkillRewardState=data;return data;}catch(err){console.warn('[Dragonbound] Skill reward state unavailable.',err);return null;}};
    const claimDragonboundSkillReward=async detail=>{
      const skill=String(detail?.skill||''),milestone=Number(detail?.milestone||0),token=`${skill}:${milestone}`;if(!DRAGONBOUND_SKILL_MARK_REWARDS[milestone]||dragonboundSkillRewardBusy.has(token)||dragonboundAccountSlug()==='guest')return;
      dragonboundSkillRewardBusy.add(token);
      try{
        // Push the exact current skill snapshot first; the secure RPC verifies the
        // authoritative server-side dragon_memory rather than trusting the client.
        window.DragonboundBabyEngine?.saveBehaviourLocal?.();window.DragonboundBabyEngine?.saveBehaviour?.(true);await dragonboundBehaviourSaveQueue.catch(()=>{});
        const {data,error}=await db.rpc('dragonbound_claim_skill_reward',{p_skill:skill,p_milestone:milestone});if(error)throw error;
        if(data&&!data.alreadyClaimed&&Number(data.marks||0)>0){
          dragonboundSkillRewardState.balance=Number(data.balance||0);dragonboundSkillRewardState.claimed=[...(dragonboundSkillRewardState.claimed||[]),{skill,milestone,marks:Number(data.marks||0),claimedAt:new Date().toISOString()}];
          const actor=window.DragonboundBabyEngine?.actor;if(actor){actor.memory.skillRewards=actor.memory.skillRewards||{};actor.memory.skillRewards[skill]={...(actor.memory.skillRewards[skill]||{}),[String(milestone)]:Date.now()};actor.rememberLifeEvent?.('reward',`${DRAGONBOUND_PROFILE_SKILL_LABELS[skill]||skill} milestone reward`,`Reached level ${milestone} and earned ${Number(data.marks).toLocaleString('en-GB')} Keeper Marks.`,`skill-marks-${skill}-${milestone}`);actor.behaviourDirty=true;window.DragonboundBabyEngine?.saveBehaviourLocal?.();window.DragonboundBabyEngine?.saveBehaviour?.(true);}
          try{toast?.(`${DRAGONBOUND_PROFILE_SKILL_LABELS[skill]||'Skill'} reached ${milestone} · +${Number(data.marks).toLocaleString('en-GB')} Keeper Marks`,5200);}catch(_e){}
          try{window.DragonboundFurniture?.refresh?.();}catch(_e){}
        }
      }catch(err){const msg=String(err?.message||'');if(!/predates|already|not reached/i.test(msg))console.warn('[Dragonbound] Skill reward claim failed.',err);}
      finally{dragonboundSkillRewardBusy.delete(token);}
    };
    window.addEventListener('dragonbound:skill-reward-ready',event=>{void claimDragonboundSkillReward(event.detail||{});});
    const registerDragonboundSkillRewardBaseline=async()=>{const actor=window.DragonboundBabyEngine?.actor;if(!actor||dragonboundAccountSlug()==='guest')return null;const registered=dragonboundSkillRewardState.registered||{};if(Object.keys(actor.skills||{}).every(k=>registered?.[k]===true))return dragonboundSkillRewardState;const levels=Object.fromEntries(Object.entries(actor.skills||{}).map(([k,v])=>[k,Number(v?.level||0)]));try{const {data,error}=await db.rpc('dragonbound_register_skill_reward_baseline',{p_levels:levels});if(error)throw error;if(data){dragonboundSkillRewardState.baselines=data.baselines||dragonboundSkillRewardState.baselines||{};dragonboundSkillRewardState.registered=data.registered||{};}return data;}catch(err){console.warn('[Dragonbound] Could not register skill-reward baseline.',err);return null;}};
    const scanDragonboundSkillRewards=async()=>{const actor=window.DragonboundBabyEngine?.actor;if(!actor||dragonboundAccountSlug()==='guest')return;await registerDragonboundSkillRewardBaseline();const registered=dragonboundSkillRewardState.registered||{};if(!Object.keys(actor.skills||{}).every(k=>registered?.[k]===true))return;const claimed=new Set((dragonboundSkillRewardState.claimed||[]).map(v=>`${v.skill}:${Number(v.milestone)}`)),baselines=dragonboundSkillRewardState.baselines||{},steps=Object.keys(DRAGONBOUND_SKILL_MARK_REWARDS).map(Number).sort((a,b)=>a-b);for(const skill of Object.keys(actor.skills||{})){const level=Number(actor.skills?.[skill]?.level||0),baseline=Number(baselines?.[skill]||0);for(const milestone of steps){if(milestone<=Math.floor(baseline)||milestone>level||claimed.has(`${skill}:${milestone}`))continue;await claimDragonboundSkillReward({skill,milestone});return;}}};
    window.DragonboundSkillRewardDebug={inspect:()=>typeof structuredClone==='function'?structuredClone(dragonboundSkillRewardState):JSON.parse(JSON.stringify(dragonboundSkillRewardState)),state:()=>typeof structuredClone==='function'?structuredClone(dragonboundSkillRewardState):JSON.parse(JSON.stringify(dragonboundSkillRewardState)),refresh:refreshDragonboundSkillRewardState,register:registerDragonboundSkillRewardBaseline,scan:scanDragonboundSkillRewards};
    void refreshDragonboundSkillRewardState().then(()=>scanDragonboundSkillRewards());
    // V33.75: the event-driven reward path remains immediate; this periodic safety
    // scan should not perform background RPC work while Dragonbound is closed.
    setInterval(()=>{
      if(document.hidden||!overlay?.classList.contains('is-open'))return;
      void scanDragonboundSkillRewards();
    },12000);

    if(homeSidebarImage) homeSidebarImage.src=DRAGONBOUND_HOME_SIDEBAR_BUTTONS;
    if(homeBasket) homeBasket.src=DRAGONBOUND_HOME_EGG_BASKET;
    if(homeHatchOpeningImage) homeHatchOpeningImage.src=DRAGONBOUND_HOME_BASKET_OPEN_FRAMES[0];

    if(homeHatchStars){
      for(let i=0;i<42;i++){
        const star=document.createElement('span');
        star.className='dragonbound-home-hatch-star';
        star.style.setProperty('--x',`${6+Math.random()*88}%`);
        star.style.setProperty('--y',`${4+Math.random()*88}%`);
        star.style.setProperty('--size',`${1.5+Math.random()*4.2}px`);
        star.style.setProperty('--delay',`${-Math.random()*4}s`);
        star.style.setProperty('--dur',`${2.4+Math.random()*3.8}s`);
        homeHatchStars.appendChild(star);
      }
    }

    window.dispatchEvent(new CustomEvent('dragonbound:engine-attach',{detail:{stage:newGameStage,homeScene,world:homeWorld,layer:babyDragonLayer}}));
    setTimeout(()=>dragonboundResumeActivePlaydate(),1800);

    const stopDialogueTypeAudio=()=>{
      clearInterval(dialogueTypePulseTimer);
      dialogueTypePulseTimer=0;
      dialogueTypeAudios.forEach(node=>{
        try{node.pause();node.currentTime=0;node.volume=0.24}catch(_e){}
      });
    };
    const startDialogueTypeAudio=()=>{
      stopDialogueTypeAudio();
      const pulse=()=>{
        const node=dialogueTypeAudios[dialogueTypePulseIndex % dialogueTypeAudios.length];
        dialogueTypePulseIndex+=1;
        try{
          node.pause();
          node.currentTime=0;
          node.volume=0.24;
          const p=node.play();
          if(p&&typeof p.catch==='function')p.catch(()=>{});
        }catch(_e){}
      };
      pulse();
      dialogueTypePulseTimer=setInterval(pulse, 96);
    };
    const cancelDialogueTyping=()=>{
      dialogueTypingToken+=1;
      dialogueTyping=false;
      clearTimeout(dialogueTypingTimer);
      dialogueBody.classList.remove('is-typing');
      stopDialogueTypeAudio();
    };
    const finishDialogueTyping=()=>{
      if(!dialogueTyping)return false;
      cancelDialogueTyping();
      dialogueBody.innerHTML=dialogueCurrentHtml;
      return true;
    };
    const typeDialoguePage=(html)=>{
      cancelDialogueTyping();
      dialogueCurrentHtml=html;
      dialogueBody.innerHTML='';
      const source=document.createElement('div');
      source.innerHTML=html;
      const paragraphs=Array.from(source.querySelectorAll('p')).map(p=>({
        className:p.className||'',
        text:p.textContent||''
      }));
      if(!paragraphs.length){
        dialogueBody.innerHTML=html;
        return;
      }
      dialogueTyping=true;
      dialogueBody.classList.add('is-typing');
      const token=++dialogueTypingToken;
      startDialogueTypeAudio();
      let paragraphIndex=0;
      let characterIndex=0;
      let current=document.createElement('p');
      current.className=paragraphs[0].className;
      dialogueBody.appendChild(current);
      const tick=()=>{
        if(token!==dialogueTypingToken||!dialogueTyping)return;
        const paragraph=paragraphs[paragraphIndex];
        if(characterIndex<paragraph.text.length){
          const ch=paragraph.text.charAt(characterIndex++);
          current.textContent+=ch;
          const delay=/[.!?]/.test(ch)?82:/[,;:\u2026]/.test(ch)?48:22;
          dialogueTypingTimer=setTimeout(tick,delay);
          return;
        }
        paragraphIndex+=1;
        characterIndex=0;
        if(paragraphIndex>=paragraphs.length){
          dialogueTyping=false;
          dialogueBody.classList.remove('is-typing');
          stopDialogueTypeAudio();
          return;
        }
        current=document.createElement('p');
        current.className=paragraphs[paragraphIndex].className;
        dialogueBody.appendChild(current);
        dialogueTypingTimer=setTimeout(tick,105);
      };
      tick();
    };
    const setDialoguePage=(index)=>{
      const total=dialoguePages.length;
      dialogueIndex=Math.max(0,Math.min(index,total-1));
      applyDialoguePresentation();
      dialogueProgress.textContent=`${dialogueIndex+1} / ${total}`;
      dialoguePanel.setAttribute('aria-hidden','false');
      dialoguePanel.classList.add('is-visible');
      const isLast=dialogueIndex===total-1;
      let nextLabel='Continue';
      if(isLast){
        if(dialogueSequence==='forest') nextLabel='Enter Cave';
        else if(dialogueSequence==='cave') nextLabel='Step Forward';
        else if(dialogueSequence==='adoption-exterior') nextLabel='Approach the Door';
        else if(dialogueSequence==='adoption-interior') nextLabel='Meet Bonnie';
        else if(dialogueSequence==='mira-home') nextLabel='Settle In';
        else if(dialogueSequence==='doppy-home') nextLabel='See You Soon';
        else nextLabel='Continue';
      }
      dialogueNext.textContent=nextLabel;
      typeDialoguePage(dialoguePages[dialogueIndex]);
    };
    const clearDialogue=()=>{
      cancelDialogueTyping();
      dialoguePanel.classList.remove('is-visible');
      dialoguePanel.setAttribute('aria-hidden','true');
      dialogueBody.innerHTML='';
      dialogueProgress.textContent='';
      dialogueCurrentHtml='';
      dialogueNext.textContent='Continue';
    };
    const applyDialoguePresentation=()=>{
      dialoguePanel.classList.remove('dragonbound-dialogue--maelith','dragonbound-dialogue--adoption','dragonbound-dialogue--bonnie','dragonbound-dialogue--mira','dragonbound-dialogue--doppy');
      let title='Prologue';
      if(dialogueSequence==='cave') title='The Passage';
      if(dialogueSequence==='adoption-exterior'){
        title='The Second Nest';
        dialoguePanel.classList.add('dragonbound-dialogue--adoption');
      }
      if(dialogueSequence==='adoption-interior'){
        title='';
        dialoguePanel.classList.add('dragonbound-dialogue--bonnie');
      }
      if(dialogueSequence==='bonnie-chat'){
        title='Bonnie Bramble';
        dialoguePanel.classList.add('dragonbound-dialogue--bonnie');
      }
      if(dialogueSequence==='adoption-result'){
        title='Bonnie Bramble';
        dialoguePanel.classList.add('dragonbound-dialogue--bonnie');
      }
      if(dialogueSequence==='mira-home'){
        title='';
        dialoguePanel.classList.add('dragonbound-dialogue--mira');
      }
      if(dialogueSequence==='doppy-home'){
        title='';
        dialoguePanel.classList.add('dragonbound-dialogue--doppy');
      }
      if(dialogueSequence==='maelith'){
        title='Maelith, the Crownwing';
        dialoguePanel.classList.add('dragonbound-dialogue--maelith');
      }
      if(dialogueTitle) dialogueTitle.textContent=title;
    };
    const fadeAudio=(node,target,duration=700)=>{
      if(!node)return;
      const from=Number(node.volume)||0;
      const steps=Math.max(1,Math.round(duration/50));
      let step=0;
      const timer=setInterval(()=>{
        step+=1;
        const p=Math.min(1,step/steps);
        node.volume=Math.max(0,Math.min(1,from+(target-from)*p));
        if(p>=1)clearInterval(timer);
      },50);
      return timer;
    };
    const showFeedback=(text)=>{
      clearTimeout(feedbackTimer);
      feedback.textContent=text;
      feedback.classList.add('is-visible');
      feedbackTimer=setTimeout(()=>feedback.classList.remove('is-visible'),1500);
    };
    const closeRulesOverlay=()=>{
      rulesOverlay?.classList.remove('is-visible');
      rulesOverlay?.setAttribute('aria-hidden','true');
    };
    const openRulesOverlay=()=>{
      if(!rulesOverlay || overlay.classList.contains('is-new-game')) return;
      rulesOverlay.classList.add('is-visible');
      rulesOverlay.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>rulesClose?.focus({preventScroll:true}));
    };
    const stopDoppyFootsteps=()=>{
      clearInterval(doppyFootstepTimer);
      clearTimeout(doppyFootstepStopTimer);
      doppyFootstepTimer=0;
      doppyFootstepStopTimer=0;
    };
    const playDoppyFootstep=()=>{
      try{
        const Ctx=window.AudioContext||window.webkitAudioContext;
        if(!Ctx) return;
        const ctx=window.__dragonboundDoppyStepCtx || (window.__dragonboundDoppyStepCtx=new Ctx());
        if(ctx.state==='suspended') ctx.resume();
        const start=ctx.currentTime;
        const osc=ctx.createOscillator();
        const toneGain=ctx.createGain();
        const toneFilter=ctx.createBiquadFilter();
        toneFilter.type='lowpass';
        toneFilter.frequency.setValueAtTime(220,start);
        osc.type='triangle';
        osc.frequency.setValueAtTime(92,start);
        osc.frequency.exponentialRampToValueAtTime(58,start+.1);
        toneGain.gain.setValueAtTime(0.0001,start);
        toneGain.gain.exponentialRampToValueAtTime(0.034,start+.014);
        toneGain.gain.exponentialRampToValueAtTime(0.0001,start+.16);
        osc.connect(toneFilter).connect(toneGain).connect(ctx.destination);
        osc.start(start);
        osc.stop(start+.17);
        const buffer=ctx.createBuffer(1, Math.floor(ctx.sampleRate*.12), ctx.sampleRate);
        const data=buffer.getChannelData(0);
        for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*Math.exp(-i/(ctx.sampleRate*.02));
        const noise=ctx.createBufferSource();
        const noiseFilter=ctx.createBiquadFilter();
        const noiseGain=ctx.createGain();
        noise.buffer=buffer;
        noiseFilter.type='lowpass';
        noiseFilter.frequency.setValueAtTime(460,start);
        noiseGain.gain.setValueAtTime(0.0001,start);
        noiseGain.gain.exponentialRampToValueAtTime(0.024,start+.008);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001,start+.1);
        noise.connect(noiseFilter).connect(noiseGain).connect(ctx.destination);
        noise.start(start+.01);
        noise.stop(start+.11);
      }catch(_e){}
    };
    const startDoppyFootsteps=(duration=2250,stepMs=290)=>{
      stopDoppyFootsteps();
      playDoppyFootstep();
      doppyFootstepTimer=setInterval(playDoppyFootstep,stepMs);
      doppyFootstepStopTimer=setTimeout(()=>stopDoppyFootsteps(),duration);
    };

    const playEstateDoorSound=()=>{
      try{
        const Ctx=window.AudioContext||window.webkitAudioContext;
        if(!Ctx) return;
        const ctx=window.__dragonboundEstateDoorCtx || (window.__dragonboundEstateDoorCtx=new Ctx());
        if(ctx.state==='suspended') ctx.resume();
        const start=ctx.currentTime;
        const osc=ctx.createOscillator();
        const gain=ctx.createGain();
        osc.type='sawtooth';
        osc.frequency.setValueAtTime(128,start);
        osc.frequency.exponentialRampToValueAtTime(74,start+.34);
        gain.gain.setValueAtTime(0.0001,start);
        gain.gain.exponentialRampToValueAtTime(0.042,start+.03);
        gain.gain.exponentialRampToValueAtTime(0.0001,start+.42);
        osc.connect(gain).connect(ctx.destination);
        osc.start(start);
        osc.stop(start+.44);
        const buffer=ctx.createBuffer(1, Math.floor(ctx.sampleRate*.22), ctx.sampleRate);
        const data=buffer.getChannelData(0);
        for(let i=0;i<data.length;i++) data[i]=(Math.random()*2-1)*Math.exp(-i/(ctx.sampleRate*.038));
        const noise=ctx.createBufferSource();
        const filter=ctx.createBiquadFilter();
        const clickGain=ctx.createGain();
        noise.buffer=buffer;
        filter.type='bandpass';
        filter.frequency.setValueAtTime(940,start);
        clickGain.gain.setValueAtTime(0.0001,start);
        clickGain.gain.exponentialRampToValueAtTime(0.038,start+.012);
        clickGain.gain.exponentialRampToValueAtTime(0.0001,start+.09);
        noise.connect(filter).connect(clickGain).connect(ctx.destination);
        noise.start(start+.02);
        noise.stop(start+.11);
      }catch(_e){}
    };
    const clearStudyEstatePromptTimer=()=>{
      clearTimeout(studyEstatePromptTimer);
      studyEstatePromptTimer=0;
    };
    const setBonnieChatOptionsOpen=(open)=>{
      bonnieChatOptionsOpen=!!open;
      if(!bonnieChatOptions) return;
      bonnieChatOptions.classList.toggle('is-visible', bonnieChatOptionsOpen);
      bonnieChatOptions.setAttribute('aria-hidden', bonnieChatOptionsOpen ? 'false' : 'true');
      bonnieChatLaunch?.classList.toggle('is-active', bonnieChatOptionsOpen);
    };
    const closeBonnieMenu=()=>{
      bonnieMenuOverlay?.classList.remove('is-visible');
      bonnieMenuOverlay?.setAttribute('aria-hidden','true');
      setBonnieChatOptionsOpen(false);
    };
    const closeEstatePrompt=()=>{
      estatePrompt?.classList.remove('is-visible');
      estatePrompt?.setAttribute('aria-hidden','true');
    };
    const scheduleStudyEstatePrompt=()=>{
      clearStudyEstatePromptTimer();
      closeEstatePrompt();
      if(studyEstatePromptDismissed || estateJourneyStarted) return;
      if(!studyMenuOverlay?.classList.contains('is-visible')) return;
      if(!selectedAdoptionEgg || selectedStudyEggName!==selectedAdoptionEgg.name) return;
      studyEstatePromptTimer=setTimeout(()=>{
        if(studyEstatePromptDismissed || estateJourneyStarted) return;
        if(!studyMenuOverlay?.classList.contains('is-visible')) return;
        if(!selectedAdoptionEgg || selectedStudyEggName!==selectedAdoptionEgg.name) return;
        const article=eggWithArticle(selectedAdoptionEgg.name);
        const ownedHome=resolveOwnedStarterHome();
        if(namedDragonForCurrentAccount() && !dragonboundIsAdminTester()) return;
        if(estatePromptGo) estatePromptGo.dataset.destination=ownedHome?'home':'estate';
        if(estatePromptCopy){
          estatePromptCopy.innerHTML=ownedHome
            ? `<p>It looks like your egg is super duper close to cracking! I’ll get ${article} safely into one of our hatching rooms, then have a <strong>Dropper Dragon</strong> bring them straight to your current home.</p><p>Your keys are already registered, so there’s no need to visit Hearth &amp; Key again unless you fancy swapping starter homes.</p>`
            : `<p>It looks like your egg is super duper close to cracking! I will safely take ${article} to our hatching rooms and have our <strong>Dropper Dragons</strong> carefully drop them at your house.</p><p>Oh! You don’t have a house here yet, do you? You should go visit the estate agents in the rich side of Belros called <strong>Velmora Hearth &amp; Key</strong>.</p>`;
        }
        estatePrompt?.classList.add('is-visible');
        estatePrompt?.setAttribute('aria-hidden','false');
        requestAnimationFrame(()=>estatePromptGo?.focus({preventScroll:true}));
      },2350);
    };
    const setAdoptedEggInMenu=(egg,{animate=false}={})=>{
      selectedAdoptionEgg=egg||null;
      if(!adoptMenuEgg) return;
      adoptMenuEgg.classList.remove('is-visible','is-arriving','is-alive');
      if(!egg){
        adoptMenuEgg.removeAttribute('src');
        adoptMenuEgg.alt='';
        adoptMenuEgg.setAttribute('aria-hidden','true');
        return;
      }
      adoptMenuEgg.src=egg.src;
      adoptMenuEgg.alt=`${egg.name} Dragon Egg`;
      adoptMenuEgg.setAttribute('aria-hidden','false');
      void adoptMenuEgg.offsetWidth;
      adoptMenuEgg.classList.add('is-visible','is-alive');
      if(animate) adoptMenuEgg.classList.add('is-arriving');
    };
    const setAdoptionConfirmationBusy=(busy)=>{
      if(adoptConfirmationYes){
        adoptConfirmationYes.disabled=!!busy;
        adoptConfirmationYes.textContent=busy?'Choosing…':'Yes';
      }
      if(adoptConfirmationNo) adoptConfirmationNo.disabled=!!busy;
      adoptConfirmation?.classList.toggle('is-pending',!!busy);
    };
    const setAdoptionConfirmationStatus=(message='',kind='')=>{
      if(!adoptConfirmationStatus) return;
      adoptConfirmationStatus.textContent=message;
      adoptConfirmationStatus.classList.toggle('is-visible',!!message);
      adoptConfirmationStatus.classList.toggle('is-error',kind==='error');
    };
    const closeAdoptionConfirmation=()=>{
      adoptionConfirmationOpen=false;
      setAdoptionConfirmationBusy(false);
      setAdoptionConfirmationStatus('');
      adoptConfirmation?.classList.remove('is-visible');
      adoptConfirmation?.setAttribute('aria-hidden','true');
    };
    const openAdoptionConfirmation=async()=>{
      if(adoptionRolling || dialogueMode!=='adoption-interior') return;
      await hydrateDragonboundProfile({force:true});
      const locked=syncAdoptionOneAndDoneUI();
      if(locked && !dragonboundIsAdminTester()){
        setAdoptedEggInMenu(locked);
        showFeedback(`${locked.name} is already your Dragonbound egg.`);
        return;
      }
      setAdoptionConfirmationBusy(false);
      setAdoptionConfirmationStatus('');
      adoptionConfirmationOpen=true;
      adoptConfirmation?.classList.add('is-visible');
      adoptConfirmation?.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>adoptConfirmationYes?.focus({preventScroll:true}));
    };
    const clearAdoptionFrameTimers=()=>{
      adoptionFrameTimers.forEach(clearTimeout);
      adoptionFrameTimers=[];
      clearTimeout(adoptionOpenFallbackTimer);
      clearTimeout(adoptionRevealFallbackTimer);
      clearTimeout(adoptionBonnieTimer);
      adoptionOpenFallbackTimer=0;
      adoptionRevealFallbackTimer=0;
      adoptionBonnieTimer=0;
    };
    const stopAdoptionRollAudio=()=>{
      [adoptionOpenAudio,adoptionRevealAudio].forEach(node=>{
        try{node.pause();node.currentTime=0}catch(_e){}
      });
    };
    const hideAdoptionRoll=()=>{
      adoptionRoll?.classList.remove('is-visible','is-revealing');
      adoptionRoll?.setAttribute('aria-hidden','true');
      adoptionRollReveal?.setAttribute('aria-hidden','true');
      if(adoptionRollFrame) adoptionRollFrame.classList.remove('is-frame-changing');
      if(adoptionRollEgg){
        adoptionRollEgg.classList.remove('is-visible');
        adoptionRollEgg.removeAttribute('src');
        adoptionRollEgg.alt='';
      }
    };
    const eggWithArticle=name=>`${/^[aeiou]/i.test(String(name||'').trim())?'an':'a'} ${name} egg`;
    const renderStudyEgg=(egg)=>{
      if(!egg) return;
      selectedStudyEggName=egg.name;
      const study=DRAGONBOUND_EGG_STUDY[egg.name]||{};
      if(studyMenuEgg){
        studyMenuEgg.src=egg.src;
        studyMenuEgg.alt=`${egg.name} Dragon Egg`;
        studyMenuEgg.setAttribute('aria-hidden','false');
      }
      if(studyMenuName) studyMenuName.textContent=`${egg.name} Dragon Egg`;
      if(studyMenuProfile) studyMenuProfile.textContent=study.profile||'Bonnie has not finished this field note yet.';
      if(studyMenuFound) studyMenuFound.textContent=study.foundIn||'Recorded across Velmora.';
      if(studyMenuType) studyMenuType.textContent=study.dragonType||'Unclassified';
      if(studyMenuHistory){
        const history=(study.history||[]).map(text=>`<p>${text}</p>`);
        const isOwnHatched=!!(dragonboundLastProfile?.dragon_name&&dragonboundLastProfile?.breed_id&&dragonboundLastProfile?.locked_egg===egg.name);
        if(isOwnHatched){
          const assigned=Array.isArray(dragonboundLastProfile?.dragon_traits?.assigned)?dragonboundLastProfile.dragon_traits.assigned:[];
          const discovered=Array.isArray(dragonboundLastProfile?.dragon_traits?.discovered)?dragonboundLastProfile.dragon_traits.discovered:[];
          const observation=discovered.length?discovered.map(trait=>`<strong>${dragonboundEscapeHtml(trait)}</strong> — ${dragonboundEscapeHtml(dragonProfileTraitObservation(trait))}`).join('<br><br>'):'<strong>Still learning…</strong><br>Spend time with your dragon at home. Bonnie’s notes will fill in as its habits reveal themselves.';
          history.push(`<p class="dragonbound-study-observed-nature"><span>OBSERVED NATURE</span>${observation}</p>`);
          const formed=dragonboundLastProfile?.dragon_preferences?.formed||{};
          const favouriteFurniture=formed?.favouriteFurniture?.name||'';
          const favouriteSleep=formed?.favouriteSleepSpot?.floorId==='upstairs'?'Upstairs sleeper':formed?.favouriteSleepSpot?.floorId==='downstairs'?'Downstairs sleeper':'';
          const activityCounts=dragonboundLastProfile?.dragon_memory?.activityCounts||{};
          const topActivity=Object.entries(activityCounts).sort((a,b)=>Number(b?.[1]||0)-Number(a?.[1]||0))[0]?.[0]||'';
          const activityLabel=({walking:'wandering',explore:'exploring',furniture:'using favourite furniture',resting:'resting',sleeping:'sleeping',looking:'watching',zoomies:'zoomies',stairs:'roaming the stairs',flight:'flying indoors'}[topActivity]||'');
          const preferredFloor=dragonboundLastProfile?.dragon_preferences?.preferredFloor==='upstairs'?'upstairs':'downstairs';
          const favouriteLine=favouriteFurniture&&favouriteSleep?`Favourite furniture: <strong>${dragonboundEscapeHtml(favouriteFurniture)}</strong> · <strong>${dragonboundEscapeHtml(favouriteSleep)}</strong>`:favouriteFurniture?`Favourite furniture: <strong>${dragonboundEscapeHtml(favouriteFurniture)}</strong>`:favouriteSleep?`Favourite routine: <strong>${dragonboundEscapeHtml(favouriteSleep)}</strong>`:'Favourite furnishings are still forming.';
          const routineLine=activityLabel?`Most often found <strong>${dragonboundEscapeHtml(activityLabel)}</strong> and usually prefers the <strong>${dragonboundEscapeHtml(preferredFloor)}</strong> floor.`:`Still settling into routines around the house.`;
          const slotTarget=Math.min(4,Math.max(3,assigned.length||0));
          const discoveredSet=new Set(discovered);
          const traitPills=[];
          assigned.forEach(trait=>{if(discoveredSet.has(trait)&&traitPills.length<slotTarget)traitPills.push(`<b>${dragonboundEscapeHtml(trait)}</b>`);});
          while(traitPills.length<slotTarget)traitPills.push('<b class="is-hidden">???</b>');
          history.push(`<p class="dragonbound-study-dragon-dossier"><span>DRAGON DOSSIER</span><em>${favouriteLine}</em><em>${routineLine}</em><div class="dragonbound-study-trait-pills">${traitPills.join('')}</div></p>`);
        }
        studyMenuHistory.innerHTML=history.join('');
      }
      if(studyMenuThreats) studyMenuThreats.textContent=study.threats||'No special risks recorded beyond normal dragon-egg care.';
      studyMenuList?.querySelectorAll('.dragonbound-study-list-item').forEach(button=>{
        const active=button.dataset.eggName===egg.name;
        button.classList.toggle('is-selected',active);
        button.setAttribute('aria-selected',active?'true':'false');
        button.classList.toggle('is-yours',!!selectedAdoptionEgg && button.dataset.eggName===selectedAdoptionEgg.name);
      });
      if(studyMenuOverlay?.classList.contains('is-visible')) scheduleStudyEstatePrompt();
    };
    const buildStudyList=()=>{
      if(!studyMenuList)return;studyMenuList.replaceChildren();
      const own=namedDragonForCurrentAccount(),hasHatched=!!(own?.name||dragonboundLastProfile?.dragon_name);
      if(hasHatched){
        const profileButton=document.createElement('button');profileButton.type='button';profileButton.className='dragonbound-study-list-item dragonbound-study-list-item--my-dragon';profileButton.setAttribute('role','option');profileButton.setAttribute('aria-selected','false');profileButton.innerHTML=`<span>${dragonboundEscapeHtml(own?.name||dragonboundLastProfile?.dragon_name||'My Dragon')}</span><small>My Dragon · Life Journal</small>`;
        profileButton.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();openMyDragonProfile({fromStudy:true});});studyMenuList.appendChild(profileButton);
      }
      DRAGONBOUND_EGG_POOL.forEach((egg,index)=>{
        const button=document.createElement('button');
        button.type='button';
        button.className='dragonbound-study-list-item';
        button.dataset.eggName=egg.name;
        button.setAttribute('role','option');
        button.setAttribute('aria-selected','false');
        button.innerHTML=`<span>${egg.name}</span><small>Dragon Egg</small>`;
        button.addEventListener('click',event=>{
          event.preventDefault();
          event.stopPropagation();
          renderStudyEgg(egg);
        });
        studyMenuList.appendChild(button);
      });
    };
    const closeStudyMenu=()=>{
      clearStudyEstatePromptTimer();
      closeEstatePrompt();
      studyMenuOverlay?.classList.remove('is-visible');
      studyMenuOverlay?.setAttribute('aria-hidden','true');
    };
    const openStudyMenu=async()=>{
      if(dialogueMode!=='adoption-interior' || adoptionRolling) return;
      await hydrateDragonboundProfile({force:true});
      restoreLockedEgg();
      closeBonnieMenu();
      closeAdoptEggMenu();
      studyEstatePromptDismissed=false;
      buildStudyList();
      const egg=DRAGONBOUND_EGG_POOL.find(item=>item.name===(selectedAdoptionEgg?.name||selectedStudyEggName))||DRAGONBOUND_EGG_POOL[0];
      renderStudyEgg(egg);
      studyMenuOverlay?.classList.add('is-visible');
      studyMenuOverlay?.setAttribute('aria-hidden','false');
      scheduleStudyEstatePrompt();
      requestAnimationFrame(()=>{
        const active=studyMenuList?.querySelector('.dragonbound-study-list-item.is-selected');
        active?.scrollIntoView({block:'nearest'});
      });
    };
    const startAdoptionBonnieDialogue=(egg)=>{
      if(!egg || dialogueMode!=='adoption-interior') return;
      closeAdoptEggMenu();
      closeStudyMenu();
      const article=eggWithArticle(egg.name);
      dialogueMode='dialogue';
      dialogueSequence='adoption-result';
      dialoguePages=[
        `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Oh, wow — ${article}!</p><p class="spoken">There’s a restless little heartbeat in that shell already. I’d say somebody is rather keen to meet you.</p>`,
        `<p class="speaker">BONNIE BRAMBLE</p><p class="spoken">Go and have a look in <strong>Study your Dragon</strong> on my menu. I’ve written down everything we know about eggs like yours — where they’re found, what sort of dragon may be waiting inside, old stories, and the things a new keeper ought to watch for.</p>`
      ];
      dialogueIndex=0;
      setDialoguePage(0);
    };
    const finishAdoptionReveal=(token)=>{
      if(token!==adoptionRollToken || !adoptionRolling) return;
      clearTimeout(adoptionRevealFallbackTimer);
      adoptionRevealFallbackTimer=0;
      adoptionRolling=false;
      hideAdoptionRoll();
      openAdoptEggMenu();
      setAdoptedEggInMenu(selectedAdoptionEgg,{animate:true});
      fadeAudio(adoptionInteriorAudio,0.6,650);
      clearTimeout(adoptionBonnieTimer);
      adoptionBonnieTimer=setTimeout(()=>{
        adoptionBonnieTimer=0;
        startAdoptionBonnieDialogue(selectedAdoptionEgg);
      },1250);
    };
    const beginAdoptionReveal=(token,egg)=>{
      if(token!==adoptionRollToken || !adoptionRolling || adoptionRoll?.classList.contains('is-revealing')) return;
      clearTimeout(adoptionOpenFallbackTimer);
      adoptionOpenFallbackTimer=0;
      adoptionFrameTimers.forEach(clearTimeout);
      adoptionFrameTimers=[];
      adoptionRoll?.classList.add('is-revealing');
      adoptionRollReveal?.setAttribute('aria-hidden','false');
      if(adoptionRollEgg){
        adoptionRollEgg.src=egg.src;
        adoptionRollEgg.alt=`${egg.name} Dragon Egg`;
        adoptionRollEgg.classList.remove('is-visible');
        requestAnimationFrame(()=>requestAnimationFrame(()=>adoptionRollEgg.classList.add('is-visible')));
      }
      try{
        adoptionRevealAudio.pause();
        adoptionRevealAudio.currentTime=0;
        adoptionRevealAudio.volume=0.96;
        const p=adoptionRevealAudio.play();
        if(p&&typeof p.catch==='function')p.catch(()=>{});
      }catch(_e){}
      const onRevealEnded=()=>finishAdoptionReveal(token);
      adoptionRevealAudio.addEventListener('ended',onRevealEnded,{once:true});
      adoptionRevealFallbackTimer=setTimeout(onRevealEnded,DRAGONBOUND_ADOPTION_REVEAL_DURATION+450);
    };
    const startAdoptionRoll=async()=>{
      if(adoptionRolling || adoptionClaimPending || dialogueMode!=='adoption-interior' || !DRAGONBOUND_EGG_POOL.length) return;
      adoptionClaimPending=true;
      setAdoptionConfirmationBusy(true);
      setAdoptionConfirmationStatus('Bonnie is registering your egg…');
      await hydrateDragonboundProfile({force:true});
      const existing=lockedEggForCurrentAccount();
      if(existing && !dragonboundIsAdminTester()){
        closeAdoptionConfirmation();
        selectedAdoptionEgg=existing;
        openAdoptEggMenu();
        setAdoptedEggInMenu(existing);
        syncAdoptionOneAndDoneUI();
        showFeedback(`${existing.name} is already your Dragonbound egg.`);
        adoptionClaimPending=false;
        return;
      }
      const candidate=DRAGONBOUND_EGG_POOL[Math.floor(Math.random()*DRAGONBOUND_EGG_POOL.length)];
      let claim=null;
      try{claim=await claimDragonboundEggServer(candidate);}catch(error){
        console.error('[Dragonbound] Egg claim failed.',error);
        adoptionClaimPending=false;
        setAdoptionConfirmationBusy(false);
        setAdoptionConfirmationStatus('The Nest could not register your egg. Please click Yes again.','error');
        showFeedback('Your egg could not be verified. Please try again.');
        return;
      }
      const egg=claim?.egg||candidate;
      closeAdoptionConfirmation();
      closeAdoptEggMenu();
      adoptionRolling=true;
      adoptionClaimPending=false;
      const token=++adoptionRollToken;
      selectedAdoptionEgg=egg;
      if(!claim?.isAdmin) persistLockedEgg(egg);
      const preloadEgg=new Image();
      preloadEgg.src=egg.src;
      clearAdoptionFrameTimers();
      stopAdoptionRollAudio();
      adoptionRoll?.classList.remove('is-revealing');
      adoptionRoll?.classList.add('is-visible');
      adoptionRoll?.setAttribute('aria-hidden','false');
      adoptionRollReveal?.setAttribute('aria-hidden','true');
      if(adoptionRollFrame){
        adoptionRollFrame.src=DRAGONBOUND_ADOPTION_FRAMES[0];
        adoptionRollFrame.classList.remove('is-frame-changing');
      }
      fadeAudio(adoptionInteriorAudio,0.12,450);
      const frameTimes=[0,980,2110,3330,4510];
      DRAGONBOUND_ADOPTION_FRAMES.forEach((src,index)=>{
        if(index===0) return;
        adoptionFrameTimers.push(setTimeout(()=>{
          if(token!==adoptionRollToken || !adoptionRolling || !adoptionRollFrame) return;
          adoptionRollFrame.classList.add('is-frame-changing');
          setTimeout(()=>{
            if(token!==adoptionRollToken || !adoptionRolling || !adoptionRollFrame) return;
            adoptionRollFrame.src=src;
            adoptionRollFrame.classList.remove('is-frame-changing');
          },70);
        },frameTimes[index]));
      });
      try{
        adoptionOpenAudio.pause();
        adoptionOpenAudio.currentTime=0;
        adoptionOpenAudio.volume=0.92;
        const p=adoptionOpenAudio.play();
        if(p&&typeof p.catch==='function')p.catch(()=>{});
      }catch(_e){}
      const onOpenEnded=()=>beginAdoptionReveal(token,egg);
      adoptionOpenAudio.addEventListener('ended',onOpenEnded,{once:true});
      adoptionOpenFallbackTimer=setTimeout(onOpenEnded,DRAGONBOUND_ADOPTION_OPEN_DURATION+500);
    };
    const closeAdoptEggMenu=()=>{
      adoptMenuOverlay?.classList.remove('is-visible','is-egg-reveal');
      adoptMenuOverlay?.setAttribute('aria-hidden','true');
    };
    const openAdoptEggMenu=()=>{
      if(dialogueMode!=='adoption-interior' || adoptionRolling) return;
      const locked=syncAdoptionOneAndDoneUI();
      if(locked) selectedAdoptionEgg=locked;
      closeBonnieMenu();
      closeStudyMenu();
      adoptMenuOverlay?.classList.add('is-visible');
      adoptMenuOverlay?.setAttribute('aria-hidden','false');
      setAdoptedEggInMenu(selectedAdoptionEgg);
      syncAdoptionOneAndDoneUI();
      void hydrateDragonboundProfile({force:true}).then(()=>{
        if(!adoptMenuOverlay?.classList.contains('is-visible')) return;
        const serverLocked=syncAdoptionOneAndDoneUI();
        if(serverLocked) setAdoptedEggInMenu(serverLocked);
        else setAdoptedEggInMenu(null);
      });
    };
    const openBonnieMenu=()=>{
      if(dialogueMode!=='adoption-interior' || !newGameStage.classList.contains('is-adoption-interior')) return;
      closeAdoptEggMenu();
      closeStudyMenu();
      bonnieMenuOverlay?.classList.add('is-visible');
      bonnieMenuOverlay?.setAttribute('aria-hidden','false');
      setBonnieChatOptionsOpen(false);
    };
    const renderPropertyListings=(country)=>{
      selectedPropertyCountry=country||'';
      propertyFlagHotspots?.querySelectorAll('.dragonbound-property-flag-hotspot').forEach(button=>{
        const active=button.dataset.country===selectedPropertyCountry;
        button.classList.toggle('is-selected',active);
        button.setAttribute('aria-pressed',active?'true':'false');
      });
      if(!propertyListPanel) return;
      const listings=DRAGONBOUND_PROPERTY_LISTINGS[country]||[];
      if(!listings.length){
        propertyListPanel.innerHTML=`<div class="dragonbound-property-empty"><strong>${country}</strong><span>No public listings are ready here yet.</span><small>Mira is still waiting for the regional ledgers to arrive at Hearth &amp; Key.</small></div>`;
        return;
      }
      propertyListPanel.innerHTML=`<div class="dragonbound-property-country-title">${country}</div><div class="dragonbound-property-card-list"></div>`;
      const list=propertyListPanel.querySelector('.dragonbound-property-card-list');
      listings.forEach((property,index)=>{
        const card=document.createElement('button');
        card.type='button';
        card.className=`dragonbound-property-card ${property.starter?'is-starter':'is-locked'}`;
        card.dataset.propertyId=property.id;
        card.disabled=!property.starter;
        const currentHome=resolveOwnedStarterHome();
        const isCurrent=!!currentHome&&currentHome.id===property.id;
        const starterStatus=isCurrent?'CURRENT HOME':currentHome?'SWAP HOME':'CHOOSE';
        card.innerHTML=`<img src="${property.thumb}" alt=""><span class="dragonbound-property-card-copy"><strong>${property.name}</strong><small>${property.area}</small><em>${property.starter?'FREE STARTER HOME':`LOCKED · ${property.price}`}</em></span><span class="dragonbound-property-card-status">${property.starter?starterStatus:'🔒'}</span>`;
        if(property.starter){
          card.addEventListener('click',event=>{
            event.preventDefault();event.stopPropagation();openPropertyConfirmation(property);
          });
        }
        list.appendChild(card);
      });
    };
    const buildPropertyFlags=()=>{
      if(!propertyFlagHotspots || propertyFlagHotspots.childElementCount) return;
      DRAGONBOUND_PROPERTY_FLAGS.forEach(flag=>{
        const button=document.createElement('button');
        button.type='button';
        button.className='dragonbound-property-flag-hotspot';
        button.dataset.country=flag.country;
        button.setAttribute('aria-label',`View ${flag.country} properties`);
        button.setAttribute('aria-pressed','false');
        button.style.left=`${flag.x}%`;
        button.style.top=`${flag.y}%`;
        button.style.width=`${flag.w}%`;
        button.style.height=`${flag.h}%`;
        button.addEventListener('click',event=>{
          event.preventDefault();event.stopPropagation();renderPropertyListings(flag.country);
        });
        propertyFlagHotspots.appendChild(button);
      });
    };
    const closePropertyConfirmation=()=>{
      pendingStarterProperty=null;
      propertyConfirm?.classList.remove('is-visible');
      propertyConfirm?.setAttribute('aria-hidden','true');
    };
    const openPropertyConfirmation=(property)=>{
      if(!property?.starter) return;
      pendingStarterProperty=property;
      if(propertyConfirmImage){propertyConfirmImage.src=property.thumb;propertyConfirmImage.alt=property.name;}
      const existingHome=resolveOwnedStarterHome();
      const swapping=!!existingHome;
      if(propertyConfirmCopy) propertyConfirmCopy.innerHTML=`<strong>${property.name}</strong><span>${property.area}, ${selectedPropertyCountry}</span><em>Starter price: <b>FREE</b></em><p>${swapping?'This will become your active starter home. You can swap between starter homes whenever you like.':'Mira will register the keys in your name immediately. You can move in now.'}</p>`;
      propertyConfirm?.classList.add('is-visible');
      propertyConfirm?.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>propertyConfirmYes?.focus({preventScroll:true}));
    };
    const closePropertyBoard=()=>{
      closePropertyConfirmation();
      propertyOverlay?.classList.remove('is-visible');
      propertyOverlay?.setAttribute('aria-hidden','true');
    };
    const openPropertyBoard=()=>{
      if(dialogueMode!=='estate-interior') return;
      buildPropertyFlags();
      closePropertyConfirmation();
      propertyOverlay?.classList.add('is-visible');
      propertyOverlay?.setAttribute('aria-hidden','false');
      if(!selectedPropertyCountry && propertyListPanel){
        propertyListPanel.innerHTML=`<div class="dragonbound-property-empty"><strong>Choose a Country</strong><span>Select a flag on the map to open Mira's property ledger.</span><small>Starter homes are currently free. Larger homes are visible for a sneak peek, but remain locked for now.</small></div>`;
      }
    };
    const moveIntoStarterHome=async(property)=>{
      if(!property?.starter || !property.full) return;
      const hadHomeBefore=!!resolveOwnedStarterHome(),previousHouse=resolveOwnedStarterHome()?.id||'';
      const saved=await persistStarterHouseServer(property.id);if(saved===false){return;}
      selectedStarterHome=property;
      newGameStage.dataset.dragonboundHouseId=property.id;
      newGameStage.classList.add('has-owned-home');
      saveStarterHouseLocally(property.id);
      window.dispatchEvent(new CustomEvent('dragonbound:house-selected',{detail:{houseId:property.id,previousHouseId:previousHouse,furniturePacked:!!previousHouse&&previousHouse!==property.id}}));
      setTimeout(()=>{try{window.DragonboundFurniture?.refresh?.();}catch(_e){}void refreshDragonboundDailyPreferencesServer({announce:false});void refreshDragonboundLearnedRoutinesServer({announce:false});},500);
      closePropertyConfirmation();
      closePropertyBoard();
      closeBonnieMenu();
      setBonnieChatOptionsOpen(false);
      bonnieChatReturnToMenu=false;
      dialogueMode='transition';
      blackout.classList.add('is-black');
      fadeAudio(estateInteriorAudio,0,500);
      transitionTimerD=setTimeout(()=>{
        try{estateInteriorAudio.pause();estateInteriorAudio.currentTime=0;estateInteriorAudio.volume=0.5}catch(_e){}
        if(homeImage) homeImage.style.backgroundImage=`url('${property.full}')`;
        if(!hadHomeBefore) resetHomeDeliveryScene();
        homeScene?.classList.add('is-visible');
        homeScene?.setAttribute('aria-hidden','false');
        newGameStage.classList.add('is-home');
        newGameStage.classList.remove('is-estate-interior','is-estate-exterior','is-adoption','is-adoption-interior','is-video','is-valley','is-cave');
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          dialogueMode='home';
          if(hadHomeBefore){
            showHomeSidebar();
            return;
          }
          setTimeout(()=>{
            if(newGameStage.classList.contains('is-home')) startMiraHomeDialogue();
          },220);
        },220);
      },720);
    };
    const goToEstateExterior=()=>{
      estateJourneyStarted=true;
      clearStudyEstatePromptTimer();
      closeEstatePrompt();
      closeStudyMenu();
      closeBonnieMenu();
      closeAdoptEggMenu();
      closeAdoptionConfirmation();
      clearDialogue();
      dialogueMode='transition';
      if(bonnieHotspot){ bonnieHotspot.disabled=true; bonnieHotspot.style.pointerEvents='none'; }
      if(estateDoorHotspot){ estateDoorHotspot.disabled=true; estateDoorHotspot.style.pointerEvents='none'; }
      blackout.classList.add('is-black');
      fadeAudio(adoptionInteriorAudio,0,420);
      transitionTimerD=setTimeout(()=>{
        try{adoptionInteriorAudio.pause();adoptionInteriorAudio.currentTime=0;adoptionInteriorAudio.volume=0.6}catch(_e){}
        try{estateInteriorAudio.pause();estateInteriorAudio.currentTime=0;estateInteriorAudio.volume=0.5}catch(_e){}
        newGameStage.classList.remove('is-adoption','is-adoption-interior','is-estate-interior','is-video','is-valley','is-cave','is-home');
        newGameStage.classList.add('is-estate-exterior');
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          dialogueMode='estate-exterior';
          if(estateDoorHotspot){ estateDoorHotspot.disabled=false; estateDoorHotspot.style.pointerEvents='auto'; }
        },180);
      },540);
    };
    const enterEstateAgent=()=>{
      if(dialogueMode!=='estate-exterior' || !newGameStage.classList.contains('is-estate-exterior')) return;
      clearDialogue();
      closeBonnieMenu();
      closeEstatePrompt();
      if(estateDoorHotspot){ estateDoorHotspot.disabled=true; estateDoorHotspot.style.pointerEvents='none'; }
      playEstateDoorSound();
      dialogueMode='transition';
      blackout.classList.add('is-black');
      transitionTimerD=setTimeout(()=>{
        newGameStage.classList.remove('is-estate-exterior','is-adoption','is-adoption-interior','is-video','is-valley','is-cave','is-home');
        newGameStage.classList.add('is-estate-interior');
        estateInteriorAudio.volume=0;
        const p=estateInteriorAudio.play();
        if(p&&typeof p.catch==='function')p.catch(()=>{});
        fadeAudio(estateInteriorAudio,0.5,900);
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          dialogueMode='estate-interior';
        },180);
      },430);
    };
    const resetDragonboundScene=()=>{
      clearTimeout(transitionTimerA);clearTimeout(transitionTimerB);clearTimeout(transitionTimerC);clearTimeout(transitionTimerD);clearTimeout(transitionTimerE);clearTimeout(feedbackTimer);clearTimeout(videoUnlockTimeout);
      overlay.classList.remove('is-new-game');
      blackout.classList.remove('is-black');
      newGameStage.classList.remove('is-active','is-revealed','is-cave','is-valley','is-video','is-adoption','is-adoption-interior','is-estate-exterior','is-estate-interior','is-home','has-owned-home');
      newGameStage.setAttribute('aria-hidden','true');
      feedback.classList.remove('is-visible');
      closeRulesOverlay();
      closeTravelMenu();
      dialoguePanel.classList.remove('dragonbound-dialogue--maelith','dragonbound-dialogue--mira','dragonbound-dialogue--doppy');
      dialogueEndNote.classList.remove('is-visible');
      dialogueEndNote.setAttribute('aria-hidden','true');
      videoContinueReady=false;
      videoProgressUnlocked=false;
      videoContinuePrompt.classList.remove('is-visible');
      videoContinuePrompt.setAttribute('aria-hidden','true');
      clearDialogue();
      dialogueMode='menu';
      dialogueIndex=0;
      dialogueSequence='forest';
      dialoguePages=DRAGONBOUND_PROLOGUE_PAGES;
      bonnieChatReturnToMenu=false;
      bonnieChatOptionsOpen=false;
      adoptionConfirmationOpen=false;
      adoptionRolling=false;
      adoptionClaimPending=false;
      selectedAdoptionEgg=null;
      studyEstatePromptDismissed=false;
      estateJourneyStarted=false;
      selectedPropertyCountry='';
      pendingStarterProperty=null;
      selectedStarterHome=null;
      adoptionRollToken+=1;
      clearAdoptionFrameTimers();
      stopAdoptionRollAudio();
      closeAdoptionConfirmation();
      hideAdoptionRoll();
      setAdoptedEggInMenu(null);
      try{newGameAudio.pause();newGameAudio.currentTime=0;newGameAudio.volume=0.4}catch(_e){}
      try{valleyAudio.pause();valleyAudio.currentTime=0;valleyAudio.volume=0.4}catch(_e){}
      try{newGameVideo.pause();newGameVideo.currentTime=0;newGameVideo.volume=1;}catch(_e){}
      try{adoptionExteriorAudio.pause();adoptionExteriorAudio.currentTime=0;adoptionExteriorAudio.volume=0.5}catch(_e){}
      try{adoptionInteriorAudio.pause();adoptionInteriorAudio.currentTime=0;adoptionInteriorAudio.volume=0.6}catch(_e){}
      try{adoptionOpenAudio.pause();adoptionOpenAudio.currentTime=0;adoptionOpenAudio.volume=0.92}catch(_e){}
      try{adoptionRevealAudio.pause();adoptionRevealAudio.currentTime=0;adoptionRevealAudio.volume=0.96}catch(_e){}
      stopDialogueTypeAudio();
      closeBonnieMenu();
      closeAdoptEggMenu();
      closeStudyMenu();
      closeEstatePrompt();
      closePropertyBoard();
      homeScene?.classList.remove('is-visible');
      homeScene?.setAttribute('aria-hidden','true');
      resetHomeDeliveryScene();
      if(homeImage) homeImage.style.backgroundImage='';
      clearStudyEstatePromptTimer();
      clearTimeout(adoptionBonnieTimer);
      adoptionBonnieTimer=0;
      selectedStudyEggName='';
      if(bonnieHotspot){ bonnieHotspot.disabled=false; bonnieHotspot.style.pointerEvents=''; }
      if(estateDoorHotspot){ estateDoorHotspot.disabled=false; estateDoorHotspot.style.pointerEvents=''; }
      try{estateInteriorAudio.pause();estateInteriorAudio.currentTime=0;estateInteriorAudio.volume=0.5}catch(_e){}
    };
    const showCaveScene=()=>{
      dialogueMode='transition';
      blackout.classList.add('is-black');
      clearDialogue();
      dialogueEndNote.classList.remove('is-visible');
      transitionTimerD=setTimeout(()=>{
        newGameStage.classList.add('is-cave');
        newGameStage.classList.remove('is-valley');
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          dialogueMode='dialogue';
          dialogueSequence='cave';
          dialoguePages=DRAGONBOUND_CAVE_PAGES;
          dialogueIndex=0;
          setDialoguePage(0);
        },180);
      },700);
    };
    const revealValleyScene=()=>{
      dialogueMode='transition';
      blackout.classList.add('is-black');
      clearDialogue();
      fadeAudio(newGameAudio,0,520);
      transitionTimerD=setTimeout(()=>{
        try{newGameAudio.pause();newGameAudio.currentTime=0;newGameAudio.volume=0.4}catch(_e){}
        newGameStage.classList.add('is-valley');
        newGameStage.classList.remove('is-cave');
        valleyAudio.volume=0;
        const p=valleyAudio.play();
        if(p&&typeof p.catch==='function')p.catch(()=>{});
        fadeAudio(valleyAudio,0.3,1100);
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          dialogueMode='dialogue';
          dialogueSequence='maelith';
          dialoguePages=DRAGONBOUND_MAELITH_PAGES;
          dialogueIndex=0;
          setDialoguePage(0);
        },220);
      },720);
    };
    const startAdoptionExteriorDialogue=()=>{
      dialogueMode='dialogue';
      dialogueSequence='adoption-exterior';
      dialoguePages=DRAGONBOUND_SECOND_NEST_PAGES;
      dialogueIndex=0;
      setDialoguePage(0);
    };
    const startBonnieIntroDialogue=()=>{
      dialogueMode='dialogue';
      dialogueSequence='adoption-interior';
      dialoguePages=DRAGONBOUND_BONNIE_INTRO_PAGES;
      dialogueIndex=0;
      setDialoguePage(0);
    };
    const startBonnieChat=topic=>{
      const pages=DRAGONBOUND_BONNIE_CHAT_TOPICS[topic];
      if(!pages) return;
      bonnieChatReturnToMenu=true;
      closeBonnieMenu();
      dialogueMode='dialogue';
      dialogueSequence='bonnie-chat';
      dialoguePages=pages;
      dialogueIndex=0;
      setDialoguePage(0);
    };
    const stopDoppyFrameCycle=()=>{
      clearInterval(doppyFrameTimer);
      doppyFrameTimer=0;
    };
    const startDoppyFrameCycle=()=>{
      stopDoppyFrameCycle();
      if(!homeDoppy) return;
      let frameIndex=0;
      homeDoppy.src=DRAGONBOUND_HOME_DOPPY_FRAMES[0];
      doppyFrameTimer=setInterval(()=>{
        frameIndex=(frameIndex+1)%DRAGONBOUND_HOME_DOPPY_FRAMES.length;
        homeDoppy.src=DRAGONBOUND_HOME_DOPPY_FRAMES[frameIndex];
      },235);
    };
    const cancelDoppyMotion=()=>{
      try{doppyMotionAnimation?.cancel?.();}catch(_e){}
      doppyMotionAnimation=null;
      if(homeDelivery) homeDelivery.style.transform='';
    };
    const showHomeSidebar=()=>{
      homeSidebar?.classList.add('is-visible');
      homeSidebar?.setAttribute('aria-hidden','false');
      try{window.dispatchEvent(new CustomEvent('dragonbound:home-visible'));}catch(_e){}
    };
    const hideHomeSidebar=()=>{
      homeSidebar?.classList.remove('is-visible');
      homeSidebar?.setAttribute('aria-hidden','true');
    };
    const resolveOwnedStarterHome=()=>{
      if(selectedStarterHome?.starter && selectedStarterHome?.full) return selectedStarterHome;
      let id=newGameStage.dataset.dragonboundHouseId||'';
      if(!id) id=readStarterHouseLocally();
      if(!id) return null;
      const property=Object.values(DRAGONBOUND_PROPERTY_LISTINGS).flat().find(item=>item.id===id && item.starter) || null;
      if(property){selectedStarterHome=property;newGameStage.dataset.dragonboundHouseId=property.id;}
      return property;
    };
    const closeTravelMenu=()=>{
      travelMenu?.classList.remove('is-visible');
      travelMenu?.setAttribute('aria-hidden','true');
    };
    const openTravelMenu=()=>{
      if(!newGameStage.classList.contains('is-home')) return;
      const property=resolveOwnedStarterHome();
      if(!property) return;
      if(travelHomePreview && property.full) travelHomePreview.style.backgroundImage=`linear-gradient(180deg,rgba(3,13,16,.05),rgba(3,13,16,.38)),url('${property.full}')`;
      travelMenu?.classList.add('is-visible');
      travelMenu?.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>travelMenuClose?.focus({preventScroll:true}));
    };

    const DRAGONBOUND_PROFILE_BOND_STAGES=[
      {min:0,name:'New Keeper',note:'Still learning who you are and what life with you feels like.'},
      {min:20,name:'Getting Comfortable',note:'Recognises your voice, touch and familiar routines.'},
      {min:40,name:'Trusting',note:'Starts choosing to check in with you on their own.'},
      {min:60,name:'Attached',note:'Feels safe enough to relax and seek you out.'},
      {min:80,name:'Close Companion',note:'Treats you as a familiar part of home.'},
      {min:95,name:'Inseparable',note:'Complete trust, expressed in their own personality.'}
    ];
    const dragonProfileBondStage=value=>{const v=Math.max(0,Math.min(100,Number(value)||0));let stage=DRAGONBOUND_PROFILE_BOND_STAGES[0];for(const row of DRAGONBOUND_PROFILE_BOND_STAGES){if(v>=row.min)stage=row;else break;}return stage;};
    const dragonProfileKeeperRelationshipFallback=(name,bond,memory={})=>{const stage=dragonProfileBondStage(bond),rel=memory?.keeperRelationshipV3405||{},shared=rel.sharedActivities||{},top=Object.entries(shared).sort((a,b)=>Number(b[1]||0)-Number(a[1]||0))[0]?.[0]||'',label=({pet:'Quiet affection',treat:'Dragon Bites',command:'Commands & tricks',training:'Training together',checkin:'Keeping each other company',rest:'Resting nearby',play:'Playing together',care:'Care time',race:'Racing together'}[top]||'Still forming'),period=Object.entries(rel.visitPeriods||{}).sort((a,b)=>Number(b[1]||0)-Number(a[1]||0))[0]?.[0]||'',n=String(name||'Your dragon');let description=stage.note;if(Number(bond)<20)description=`${n} is still learning your routines and deciding what kind of keeper you are.`;else if(Number(bond)<40)description=`${n} recognises you now and is beginning to treat your presence as part of home.`;else if(Number(bond)>=80)description=`${n} treats you as a close companion while still showing trust in their own way.`;else if(Number(bond)>=60)description=`${n} feels safe around you and increasingly chooses to stay nearby.`;else description=`${n} trusts your routines and has started checking in without being asked.`;return{version:1,bond:Number(bond)||0,stage:stage.name,note:stage.note,description,greetingStyle:Number(bond)>=80?'Recognises your return and chooses a familiar greeting':'Still forming a personal greeting style',favouriteSharedActivity:label,usualVisit:period?period[0].toUpperCase()+period.slice(1):'Still learning',greetings:Number(rel.greetings||0),checkIns:Number(rel.checkIns||0),nearbyRests:Number(rel.nearbyRests||0),pets:Number(rel.pets||0),treats:Number(rel.treats||0),commands:Number(rel.commands||0),returns:Number(rel.returnCount||0),lastReturnAt:Number(rel.lastReturnAt||0),lastReturnBand:String(rel.lastReturnBand||''),recentMoment:Array.isArray(rel.recentMoments)?rel.recentMoments.slice(-1)[0]||{}:{}};};
    const dragonProfileTimestamp=value=>{if(value===null||value===undefined||value==='')return NaN;const numeric=Number(value);if(Number.isFinite(numeric)&&numeric>10000000000)return numeric;const parsed=Date.parse(String(value));return Number.isFinite(parsed)?parsed:NaN;};
    const dragonProfileAge=hatchedAt=>{const t=dragonProfileTimestamp(hatchedAt);if(!Number.isFinite(t))return'Unknown';const ms=Math.max(0,Date.now()-t),hours=Math.floor(ms/3600000),days=Math.floor(hours/24);if(days>=2)return`${days} days old`;if(days===1)return'1 day old';if(hours>=1)return`${hours} hour${hours===1?'':'s'} old`;return'Newly hatched';};
    const dragonProfileDate=value=>{const t=dragonProfileTimestamp(value);if(!Number.isFinite(t))return'Recorded';try{return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric'}).format(new Date(t));}catch(_e){return new Date(t).toLocaleDateString('en-GB');}};
    const dragonProfileCareFromMemory=memory=>{const n=memory?.runtimeNeeds||{};const care=v=>Math.round(Math.max(0,Math.min(100,100-(Number(v)||0))));return{hunger:care(n.hunger),hygiene:care(n.hygiene),energy:care(n.rest),fun:care(n.stimulation)};};
    const dragonProfileMoodFallback=care=>{const vals=[care.hunger,care.hygiene,care.energy,care.fun],avg=vals.reduce((a,b)=>a+b,0)/Math.max(1,vals.length),low=Math.min(...vals);if(low<=12)return care.hunger===low?'Hungry':care.hygiene===low?'Scruffy':care.energy===low?'Sleepy':'Bored';if(vals.filter(v=>v<34).length>=2&&avg<42)return'Grumpy';if(care.fun<28&&care.energy>45)return'Restless';if(avg>=90)return'Thriving';if(avg>=78)return'Content';if(avg>=62)return'Okay';return'Grumpy';};
    const dragonProfileMoodCopy=mood=>({Thriving:'Absolutely flourishing right now.',Content:'Feeling settled, safe and nicely looked after.',Okay:'Doing fine, with a little room for extra care.',Hungry:'Very interested in the next meal.',Scruffy:'Could really use a bath or grooming session.',Sleepy:'Looking for somewhere cosy to curl up.',Bored:'Needs a toy, activity or something interesting to investigate.',Grumpy:'A bit fed up. Some gentle care should cheer them up.',Restless:'Full of fidgety energy and looking for something to do.',Sulking:'Keeping to themselves for a little while.',Excited:'Something has completely grabbed their attention.',Cosy:'Perfectly comfortable and in no hurry to move.',Playful:'In the mood to mess around.',Proud:'Very pleased with that bit of training.',Curious:'Busy studying everything around them.'}[mood]||'Taking life one little dragon moment at a time.');
    const dragonProfileMoodRemaining=mood=>{const expiry=dragonboundMoodExpiryMs(mood),ms=Math.max(0,expiry-Date.now());if(!expiry||ms<=0)return'Changing soon';const minutes=Math.ceil(ms/60000);if(minutes<60)return`About ${minutes}m left`;const hours=Math.floor(minutes/60),rest=minutes%60,rounded=Math.round(rest/10)*10;if(rounded>=60)return`About ${hours+1}h left`;return`About ${hours}h${rounded>=20?` ${rounded}m`:''} left`;};
    const dragonProfileDailyPreferenceRemaining=payload=>{const normal=normaliseDragonboundDailyPreferences(payload),expiry=Number(normal.nextChangeAt||0),ms=Math.max(0,expiry-Date.now());if(!expiry||ms<=0)return'Changing soon';const minutes=Math.ceil(ms/60000);if(minutes<60)return`About ${minutes}m left`;const hours=Math.floor(minutes/60),rest=minutes%60,rounded=Math.round(rest/10)*10;if(rounded>=60)return`About ${hours+1}h left`;return`About ${hours}h${rounded>=20?` ${rounded}m`:''} left`;};
    const dragonProfileActivityLabel=key=>({walking:'Wandering',explore:'Exploring',furniture:'Furniture time',resting:'Resting',sleeping:'Napping',looking:'Watching',zoomies:'Zoomies',stairs:'Roaming',flight:'Flying',sitting:'Sitting quietly',idle:'Lounging'}[key]||'Still deciding');
    const dragonProfilePickAffinity=(memory,kinds)=>Object.entries(memory?.furnitureAffinity||{}).map(([id,v])=>({id,...(v||{}),count:Number(v?.count||0)})).filter(v=>kinds.includes(String(v.lastKind||''))).sort((a,b)=>b.count-a.count)[0]||null;
    const DRAGONBOUND_PROFILE_SKILLS=['flying','agility','strength','fireControl','intelligence','confidence'];
    const DRAGONBOUND_PROFILE_SKILL_LABELS={flying:'Flying',agility:'Agility',strength:'Strength',fireControl:'Fire Control',intelligence:'Intelligence',confidence:'Confidence'};
    const DRAGONBOUND_PROFILE_SKILL_ICONS={flying:'↗',agility:'◇',strength:'◆',fireControl:'✦',intelligence:'⌁',confidence:'★'};
    const DRAGONBOUND_PROFILE_SKILL_RANKS=[{min:0,name:'Untrained'},{min:10,name:'Beginner'},{min:25,name:'Developing'},{min:45,name:'Capable'},{min:65,name:'Skilled'},{min:80,name:'Talented'},{min:90,name:'Exceptional'},{min:97,name:'Masterful'}];
    const dragonProfileSkillRank=level=>{let r=DRAGONBOUND_PROFILE_SKILL_RANKS[0];for(const row of DRAGONBOUND_PROFILE_SKILL_RANKS){if(Number(level||0)>=row.min)r=row;else break;}return r;};
    const dragonProfileSkillNext=level=>DRAGONBOUND_PROFILE_SKILL_RANKS.find(row=>row.min>Number(level||0))||null;
    const dragonProfileSkillCooldown=(src,key)=>{
      if(src?.actor?.skillCooldownStatus){const st=src.actor.skillCooldownStatus(key);return{ready:!!st.ready,remainingMs:Number(st.remainingMs||0)};}
      const until=Number(src?.memory?.skillCooldowns?.[key]?.until||0),remainingMs=Math.max(0,until-Date.now());return{ready:remainingMs<=0,remainingMs};
    };
    const dragonProfileFormatCooldown=ms=>{const total=Math.max(0,Math.ceil(Number(ms||0)/60000));if(total<=0)return'Ready to train';if(total<60)return`Recovery: ${total}m`;const h=Math.floor(total/60),m=total%60;return`Recovery: ${h}h${m?` ${m}m`:''}`;};
    const dragonProfileGrowthFallback=hatchedAt=>{const t=dragonProfileTimestamp(hatchedAt),days=Number.isFinite(t)?Math.max(0,(Date.now()-t)/86400000):0,stages=[{min:0,max:3,name:'Newly Hatched'},{min:3,max:90,name:'Baby'},{min:90,max:180,name:'Growing Baby'},{min:180,max:365,name:'Young Dragon'},{min:365,max:Infinity,name:'Juvenile'}],capIndex=2;let current=stages[0],index=0;for(let i=0;i<stages.length;i++){if(days>=stages[i].min){current=stages[i];index=i;}else break;}index=Math.min(index,capIndex);current=stages[index];const progress=days>=current.max&&index===capIndex?100:Number.isFinite(current.max)?Math.max(0,Math.min(100,((days-current.min)/(current.max-current.min))*100)):100;return{name:current.name,index,days,progress,next:index>=capIndex?null:(stages[index+1]?.name||null),nextAtDays:index>=capIndex?null:(stages[index+1]?.min??null),growthLocked:index>=capIndex&&days>=current.max};};
    const dragonProfileAptitudes=src=>{if((src.discovered||[]).length<2)return[];const stats=src.personality?.coreStats||{},out=[];const add=(label,score)=>{if(Number(score)>=67&&!out.includes(label))out.push(label);};add('Quick Learner',stats.intelligence);add('Naturally Curious',stats.curiosity);add('Physically Energetic',stats.energy);add('Brave Heart',stats.bravery);if(Number(src.personality?.flightLikelihood||0)>=.62)out.push('Strong Flyer');return out.slice(0,3);};
    const DRAGONBOUND_PROFILE_LIFE_LABELS={'toy-carry':'Toy carrying','ball-chase':'Ball chasing','hoard-trip':'Hoard checking','cupboard-mischief':'Cupboard investigating','new-furniture':'New furniture investigating','window-watch':'Window watching','cosy-nap':'Cosy napping','bath-fun':'Bath splashing','food-check':'Food checking','training-practice':'Training','flight-practice':'Flight practice','quiet-hide':'Quiet time','zoomies':'Zoomies','curious-wander':'Exploring'};
    const dragonProfileLifeLabel=key=>DRAGONBOUND_PROFILE_LIFE_LABELS[key]||String(key||'Still forming').replace(/-/g,' ').replace(/\b\w/g,m=>m.toUpperCase());
    const dragonProfileSkillSourceFallback=(item,key)=>{
      const tags=new Set((item?.tags||[]).map(v=>String(v||'').toLowerCase())),text=`${item?.name||''} ${item?.item_id||item?.itemId||''} ${item?.category||''}`.toLowerCase();
      const strength=/weight|dumbbell|resistance|sled|push|pull|strength|heavy|cable|lifting|power|punching bag/.test(text),agility=tags.has('agility')||tags.has('climbable')||/agility|weave|balance|hurdle|landing target|sprint|climb|pegboard|roller|obstacle|jump|treadmill|exercise wheel|stretch ring/.test(text),flight=tags.has('flight-practice')||/flight|flying|wing landing|launch perch|hover/.test(text),fire=tags.has('fire-practice')||/fire[- ]?breath|flame practice|fire control|tiny flames|soot[- ]?proof practice dummy/.test(text),puzzle=tags.has('puzzle')||/puzzle|sorting|memory game|navigation table|logic|maze|reaction console|rune learning|learning board/.test(text),reading=tags.has('reading')||/book|reading|scribe|study/.test(text),training=tags.has('training')||tags.has('exercise');
      if(key==='flying')return flight ? .42 : 0;
      if(key==='agility')return agility ? .42 : (flight ? .12 : (/reaction console/.test(text) ? .18 : (training ? .16 : 0)));
      if(key==='strength')return strength ? .44 : (tags.has('climbable') ? .16 : (tags.has('diggable') ? .18 : (training ? .13 : 0)));
      if(key==='fireControl')return fire ? .48 : 0;
      if(key==='intelligence')return puzzle ? .40 : (reading ? .25 : (tags.has('diggable') ? .10 : 0));
      if(key==='confidence')return (flight||fire||strength||agility||tags.has('noisy')) ? .055 : (/navigation|celestial|map table/.test(text) ? .03 : 0);
      return 0;
    };
    const dragonProfileOwnedSkillExamples=(src,key)=>{
      const rows=[],liveOwned=window.DragonboundFurniture?.ownedItems?.();
      let catalog=[];
      if(Array.isArray(liveOwned)&&liveOwned.length){catalog=liveOwned.map(item=>({...item,item_id:item.itemId||item.item_id,footprint_w:item.footprintW||item.footprint_w,footprint_h:item.footprintH||item.footprint_h}));}
      else{
        const state=window.DragonboundFurniture?.state?.()||{},inv=state.inventory||{},placedIds=new Set((state.placements||[]).map(v=>String(v.itemId||'')));
        let fallback=[];try{fallback=Array.isArray(DRAGONBOUND_VISIT_FURNITURE_CATALOG)?DRAGONBOUND_VISIT_FURNITURE_CATALOG:[];}catch(_e){fallback=[];}
        catalog=fallback.filter(item=>Number(inv?.[String(item.item_id||item.itemId||'')]?.owned||0)>0).map(item=>({...item,owned:Number(inv?.[String(item.item_id||item.itemId||'')]?.owned||0),placed:placedIds.has(String(item.item_id||item.itemId||''))}));
      }
      for(const item of catalog){const id=String(item.item_id||item.itemId||''),owned=Number(item.owned||1);if(owned<1)continue;const meta={itemId:id,name:item.name,category:item.category,tags:item.tags||[],footprintW:item.footprint_w||item.footprintW,footprintH:item.footprint_h||item.footprintH};let rate=0;if(src.actor?.furnitureSkillSources){const kind=src.actor.furnitureKind?.(meta)||'';rate=Number(src.actor.furnitureSkillSources(meta,kind).find(v=>v.skill===key)?.rate||0);}else rate=dragonProfileSkillSourceFallback(item,key);if(rate<=.02)continue;rows.push({id,name:item.name||id,category:item.category||'',rate,owned,placed:!!item.placed});}
      return rows.sort((a,b)=>(Number(b.placed)-Number(a.placed))||(b.rate-a.rate)||a.name.localeCompare(b.name)).slice(0,6);
    };
    const dragonProfileSkillHelpCopy=key=>({flying:'Builds through real flying practice. Launch perches and landing/wing equipment are the strongest home trainers.',agility:'Builds through weaving, balancing, climbing, sprinting and obstacle work.',strength:'Builds through resistance, pushing, pulling, weights and some climbing/digging equipment.',fireControl:'Builds through careful flame-control furniture. This trains precision, not raw destructive power.',intelligence:'Builds through puzzles, sorting, reading, navigation and learning furniture.',confidence:'Builds mostly through successful new experiences. Challenging training furniture can help, but repeating the same safe activity gives very little.'}[key]||'Practice this skill through relevant activities and furniture.');
    const dragonProfileSkillPassiveNote=key=>({flying:'Normal indoor flights can also give tiny Flying progress when the passive-flight cooldown is ready.',agility:'Zoomies and stairs can give tiny passive Agility progress, with their own cooldowns.',strength:'Strength mainly comes from proper equipment rather than passive wandering.',fireControl:'Fire Control only grows through proper controlled practice.',intelligence:'Basic inspection can give a tiny amount, but puzzles and learning furniture are far better.',confidence:'Exploring genuinely new places, flying and completing unfamiliar challenges also build Confidence slowly.'}[key]||'');
    const dragonProfileUniverseFallback=(memory,bond=0,hatchedAt=0)=>{
      const u=memory?.personalityUniverse||{},registry=window.DragonboundPersonalityUniverseRegistry||{},knownTraits=Array.isArray(u.discoveredTraits)?u.discoveredTraits:[],quirks=Array.isArray(u.quirks)?u.quirks:[],knownQuirks=quirks.filter(q=>u.discoveredQuirks?.includes?.(q.id)).map(q=>registry.quirks?.[q.id]||q),habits=Object.values(u.habits||{}).sort((a,b)=>Number(b.evidence||0)-Number(a.evidence||0)),recent=Array.isArray(u.recentActivity)?u.recentActivity:[],last=recent[recent.length-1];
      const traitNames=[...(u.innateTraits||[]),...(u.secondaryTraits||[])],comforts=[];if(traitNames.some(v=>['Nap Lover','Heavy Sleeper','Bed Loyalist','Cosy Corner Lover','Sunbather'].includes(v)))comforts.push('Cosy sleeping spots');if(traitNames.some(v=>['Water Baby','Bath Lover','Rain Lover'].includes(v)))comforts.push('Water and bath time');if(traitNames.some(v=>['Playful','Toy Obsessed','Puzzle Lover'].includes(v)))comforts.push('Playtime');if(traitNames.some(v=>['Garden Lover','Explorer','Plant Inspector'].includes(v)))comforts.push('Natural spaces');if(traitNames.some(v=>['Affectionate','Cuddlebug','Shadow'].includes(v)))comforts.push('Familiar company');
      const dislikes=[];if(traitNames.includes('Bath Hater'))dislikes.push('Bath time');if(traitNames.includes('Suspicious of New Food'))dislikes.push('Unfamiliar food');if(traitNames.includes('Shy'))dislikes.push('Noisy, busy spaces');if(traitNames.includes('Reluctant Trainee'))dislikes.push('Being rushed into training');
      return{version:Number(u.version||0),title:String(u.descriptor||'Still Becoming Themselves'),knownTraits,hiddenTraits:Math.max(0,traitNames.length-knownTraits.length),tentative:String(u.observations?.tentativeTrait||''),knownQuirks,hiddenQuirks:Math.max(0,quirks.length-knownQuirks.length),habits,comforts:comforts.slice(0,5),dislikes:dislikes.slice(0,5),relationship:bond>=80?'Deeply trusting, but still unmistakably themselves':bond>=60?'Comfortable and secure around you':bond>=40?'Beginning to trust your routines':'Still learning what life with you feels like',currentObsession:String(last?.name||'Still choosing'),keeperNote:'Keep watching the little choices — the journal only records what your dragon actually shows you.',togetherDays:hatchedAt?Math.max(0,Math.floor((Date.now()-Number(hatchedAt))/86400000)):0,axes:{...(u.axes||{})}};
    };
    const DRAGONBOUND_SIGNATURE_TRAIT_COPY={
      'Lazy':'loves taking life at an unhurried pace and gravitates toward cosy places',
      'Energetic':'is rarely still for long and is always looking for something to do',
      'Curious':'cannot resist investigating new furniture, corners and little changes',
      'Mischievous':'has a harmless troublesome streak and likes getting into things',
      'Clingy':'likes staying close to their keeper and checks in often',
      'Independent':'is happiest making their own choices and exploring at their own pace',
      'Food Obsessed':'takes a very serious interest in snacks and feeding spots',
      'Sleepy':'rarely turns down a good nap or a comfortable place to curl up',
      'Playful':'is drawn to toys, games and anything that looks entertaining',
      'Brave':'approaches unfamiliar things with confidence',
      'Shy':'prefers familiar, quieter spaces until they feel secure',
      'Competitive':'takes training and racing unusually seriously',
      'Stubborn':'sometimes needs a moment before deciding that your idea was theirs too',
      'Affectionate':'actively seeks warmth, company and attention from their keeper',
      'Clean':'notices when they could do with a wash earlier than most dragons',
      'Messy':'is quite content getting grubby before deciding a wash is necessary',
      'Easily Excited':'gets swept up in treats, play and exciting moments very quickly',
      'Calm':'moves through home life in a steady, relaxed way',
      'Adventurous':'is naturally drawn toward exploring, climbing and new experiences'
    };
    const dragonProfileSignatureDescription=(name,traits=[])=>{
      const clean=[...new Set((Array.isArray(traits)?traits:[]).filter(Boolean))].slice(0,3);
      if(!clean.length)return`${name}'s core personality is still being recorded.`;
      const bits=clean.map(t=>DRAGONBOUND_SIGNATURE_TRAIT_COPY[t]).filter(Boolean);
      if(!bits.length)return`${name} has a distinct ${clean.map(v=>v.toLowerCase()).join(', ')} personality.`;
      if(bits.length===1)return`${name} ${bits[0]}.`;
      if(bits.length===2)return`${name} ${bits[0]}, but also ${bits[1]}.`;
      return`${name} ${bits[0]}; ${bits[1]}; and ${bits[2]}.`;
    };
    const dragonProfileSource=()=>{
      const actor=window.DragonboundBabyEngine?.actor||null,local=namedDragonForCurrentAccount()||{},profile=dragonboundLastProfile||{};
      const dragon=actor?.dragon||local||{},name=actor?.dragon?.name||local.name||profile.dragon_name||'',breedId=actor?.dragon?.breedId||local.breedId||profile.breed_id||'',eggName=actor?.dragon?.eggName||local.eggName||profile.locked_egg||'',gender=normaliseDragonGender(actor?.dragon?.gender||local.gender||profile.gender),hatchedAt=Number(actor?.dragon?.hatchedAt||local.hatchedAt)||Date.parse(String(profile.dragon_hatched_at||''))||0;
      const memory=actor?.memory||local.memory||profile.dragon_memory||{},preferences=actor?.preferences||local.preferences||profile.dragon_preferences||{},personality=actor?.dragon?.personality||local.personality||profile.personality||{};
      const legacyAssigned=Array.isArray(actor?.assignedTraits)?actor.assignedTraits:(Array.isArray(local?.traits?.assigned)?local.traits.assigned:(Array.isArray(profile?.dragon_traits?.assigned)?profile.dragon_traits.assigned:[]));
      const legacyDiscovered=Array.isArray(actor?.discoveredTraits)?actor.discoveredTraits:(Array.isArray(local?.traits?.discovered)?local.traits.discovered:(Array.isArray(profile?.dragon_traits?.discovered)?profile.dragon_traits.discovered:[]));
      const signatureTraits=Array.isArray(actor?.signatureTraits)&&actor.signatureTraits.length?actor.signatureTraits:(Array.isArray(local?.traits?.signature)&&local.traits.signature.length?local.traits.signature:(Array.isArray(profile?.dragon_traits?.signature)?profile.dragon_traits.signature:[]));
      const care=actor?.careStats?actor.careStats():dragonProfileCareFromMemory(memory),bond=Math.max(0,Math.min(100,Number(actor?.bond??memory?.bond??18)||0)),mood=actor?.moodSummary?actor.moodSummary():dragonProfileMoodFallback(care),dailyMood=actor?.dailyMood?.name?actor.dailyMood:(local?.mood?.name?local.mood:(profile.dragon_mood||{})),dailyPreferences=actor?.dailyPreferencesState?.version?actor.dailyPreferencesState:(local?.dailyPreferences?.version?normaliseDragonboundDailyPreferences(local.dailyPreferences):(profile.dragon_daily_preferences||dragonboundLastDailyPreferences)),registry=window.DragonboundBabyRegistry?.[breedId],portrait=actor?.def?.animations?.idle?.frames?.[0]?.src||registry?.animations?.idle?.frames?.[0]?.src||DRAGONBOUND_EGG_POOL.find(e=>e.name===eggName)?.src||'';
      const universe=actor?.personalityUniverseSummary?.()||dragonProfileUniverseFallback(memory,bond,hatchedAt),universeRaw=actor?.personalityUniverse||memory?.personalityUniverse||{},assigned=[...new Set([...legacyAssigned,...(universeRaw.innateTraits||[]),...(universeRaw.secondaryTraits||[])])],discovered=[...new Set([...legacyDiscovered,...(universe.knownTraits||[])])];
      const keeperRelationship=actor?.keeperRelationshipSummary?.()||dragonProfileKeeperRelationshipFallback(name,bond,memory),learnedRoutines=actor?.learnedRoutinesState?.version?actor.learnedRoutinesState:(local?.learnedRoutines?.version?normaliseDragonboundLearnedRoutines(local.learnedRoutines):(profile.dragon_learned_routines||dragonboundLastLearnedRoutines)),skills=actor?.skills||memory?.skills||{},growth=actor?.growthInfo?actor.growthInfo():dragonProfileGrowthFallback(hatchedAt);
      return{hasDragon:!!(name&&breedId),actor,local,profile,dragon,name,breedId,breedName:registry?.displayName||eggName||String(breedId).replace(/-/g,' ').replace(/\b\w/g,m=>m.toUpperCase()),eggName,gender,hatchedAt,memory,preferences,personality,signatureTraits:signatureTraits.slice(0,3),assigned,discovered,care,bond,mood,dailyMood,dailyPreferences:normaliseDragonboundDailyPreferences(dailyPreferences),learnedRoutines:normaliseDragonboundLearnedRoutines(learnedRoutines),portrait,skills,growth,universe,universeRaw,keeperRelationship};
    };
    let dragonProfileSelectedSkill='';
    let dragonProfileSelectedTab='nature';
    const syncDragonJournalTab=()=>{const allowed=new Set(['nature','habits','bonds','life','calendar','scrapbook']);if(!allowed.has(dragonProfileSelectedTab))dragonProfileSelectedTab='nature';myDragonJournalTabs.forEach(tab=>{const active=tab.dataset.dragonJournalTab===dragonProfileSelectedTab;tab.classList.toggle('is-active',active);tab.setAttribute('aria-selected',active?'true':'false');tab.tabIndex=active?0:-1;});myDragonJournalPanels.forEach(panel=>{const active=panel.dataset.dragonJournalPanel===dragonProfileSelectedTab;panel.classList.toggle('is-active',active);panel.hidden=!active;});};
    const renderMyDragonProfile=()=>{
      const src=dragonProfileSource(),book=myDragonOverlay?.querySelector('.dragonbound-my-dragon-book');if(!book)return;syncDragonJournalTab();
      book.classList.toggle('is-empty',!src.hasDragon);if(myDragonEmpty)myDragonEmpty.hidden=src.hasDragon;
      if(!src.hasDragon){if(myDragonName)myDragonName.textContent='My Dragon';if(myDragonSubtitle)myDragonSubtitle.textContent='Your keeper journal will begin when your first dragon hatches.';return;}
      const study=DRAGONBOUND_EGG_STUDY[src.eggName]||{},stage=dragonProfileBondStage(src.bond),obs=src.memory?.observationCounters||{},formed=src.preferences?.formed||{},favByKind=formed.favouritesByKind||{},overall=formed.favouriteFurniture||null,bed=favByKind.bed||null,toy=favByKind.toy||null,feeding=favByKind.feeding||null,activity=Object.entries(src.memory?.activityCounts||{}).sort((a,b)=>Number(b[1]||0)-Number(a[1]||0))[0],floorChoice=Object.entries(src.memory?.floorVisits||{}).sort((a,b)=>Number(b[1]||0)-Number(a[1]||0))[0];
      if(myDragonName)myDragonName.textContent=src.name;if(myDragonSubtitle)myDragonSubtitle.textContent=`${src.breedName} · ${src.gender?dragonGenderDisplay(src.gender):'Gender unknown'} · ${dragonProfileAge(src.hatchedAt)}`;
      if(myDragonPortrait){myDragonPortrait.src=src.portrait;myDragonPortrait.alt=`${src.name}, ${src.breedName} baby dragon`;}
      if(myDragonIdentity)myDragonIdentity.innerHTML=[['Breed',src.breedName],['Gender',src.gender?dragonGenderDisplay(src.gender):'Unknown'],['Age',dragonProfileAge(src.hatchedAt)],['Hatched',dragonProfileDate(src.hatchedAt)],['Egg origin',study.foundIn||'Velmora'],['Dragon type',study.dragonType||src.breedName]].map(([k,v])=>`<div><small>${dragonboundEscapeHtml(k)}</small><strong>${dragonboundEscapeHtml(v)}</strong></div>`).join('');
      const persistentMoodName=String(src.dailyMood?.name||src.mood),persistentMoodStory=String(src.dailyMood?.story||dragonProfileMoodCopy(src.mood)),moodPanel=myDragonMood?.closest('.dragonbound-my-dragon-mood');
      if(myDragonMood)myDragonMood.textContent=persistentMoodName;if(myDragonMoodCopy){myDragonMoodCopy.textContent=persistentMoodStory;myDragonMoodCopy.title=`${dragonProfileMoodRemaining(src.dailyMood)} · Right now: ${src.mood}`;}if(moodPanel)moodPanel.dataset.mood=persistentMoodName.toLowerCase();
      if(myDragonCare)myDragonCare.innerHTML=[['hunger','Hunger'],['hygiene','Hygiene'],['energy','Energy'],['fun','Fun']].map(([key,label])=>{const v=Math.max(0,Math.min(100,Number(src.care[key])||0));return`<div class="dragonbound-my-dragon-care-row" data-level="${v<=20?'critical':v<=45?'low':v<=70?'mid':'good'}"><span>${label}</span><i><em style="width:${v}%"></em></i><b>${Math.round(v)}%</b></div>`;}).join('');
      if(myDragonBond)myDragonBond.textContent=`${Math.round(src.bond)} · ${stage.name}`;if(myDragonBondBar)myDragonBondBar.style.width=`${src.bond}%`;if(myDragonBondNote)myDragonBondNote.textContent=stage.note;
      const universe=src.universe||{},archetype=String(universe.title||src.personality?.archetype||'Individual');if(myDragonArchetype)myDragonArchetype.textContent='Core personality';if(myDragonDescriptor)myDragonDescriptor.textContent=archetype;if(myDragonTogether)myDragonTogether.textContent=Number(universe.togetherDays||0)>0?`Together for ${Number(universe.togetherDays)} day${Number(universe.togetherDays)===1?'':'s'}`:'Your story is just beginning';
      if(myDragonPersonalityCopy)myDragonPersonalityCopy.textContent=dragonProfileSignatureDescription(src.name,src.signatureTraits);
      if(myDragonTraits){const signature=src.signatureTraits.slice(0,3),observed=src.discovered.filter(t=>!signature.includes(t)).slice(0,3);myDragonTraits.innerHTML=[...signature.map(t=>`<span class="is-signature" title="Permanent core personality trait">${dragonboundEscapeHtml(t)}</span>`),...observed.map(t=>`<span class="is-observed" title="${dragonboundEscapeHtml(dragonProfileTraitObservation(t))}">${dragonboundEscapeHtml(t)}</span>`)].join('');}
      if(myDragonObservation){const tentative=String(universe.tentative||'');myDragonObservation.innerHTML=tentative?`<small>UNCONFIRMED OBSERVATION</small><p>${dragonboundEscapeHtml(src.name)} may be <strong>${dragonboundEscapeHtml(tentative.toLowerCase())}</strong>. Bonnie's notes need a little more evidence before calling it a trait.</p>`:`<small>BONNIE'S MARGIN NOTE</small><p>${dragonboundEscapeHtml(universe.keeperNote||'Keep watching what they choose when nobody tells them what to do.')}</p>`;}
      if(myDragonQuirks){const quirks=Array.isArray(universe.knownQuirks)?universe.knownQuirks:[];myDragonQuirks.innerHTML=quirks.length?quirks.slice(0,5).map(q=>`<article><i>✦</i><div><strong>${dragonboundEscapeHtml(q.label||q.name||'Little quirk')}</strong><span>${dragonboundEscapeHtml(q.note||'A little habit has become hard to miss.')}</span></div></article>`).join(''):`<div class="dragonbound-personality-undiscovered"><b>?</b><span>No quirks confirmed yet.<small>Odd little habits take longer to be sure about.</small></span></div>`;}
      const keeperRel=src.keeperRelationship||dragonProfileKeeperRelationshipFallback(src.name,src.bond,src.memory);if(myDragonRelationship)myDragonRelationship.innerHTML=`<strong>${dragonboundEscapeHtml(keeperRel.stage||stage.name)}</strong><p>${dragonboundEscapeHtml(keeperRel.description||universe.relationship||stage.note)}</p><small>${dragonboundEscapeHtml(keeperRel.greetingStyle||'A personal greeting style is still forming.')}</small>`;
      if(myDragonObsession)myDragonObsession.textContent=universe.currentObsession||'Still choosing';if(myDragonKeeperNote)myDragonKeeperNote.textContent=universe.keeperNote||'Keep watching the little choices.';
      const preferredFloor=src.preferences?.preferredFloor==='upstairs'?'Upstairs':'Downstairs',confirmedFloor=floorChoice&&Number(floorChoice[1]||0)>=4?`${floorChoice[0]==='upstairs'?'Upstairs':'Downstairs'}`:'Still choosing',confirmedActivity=activity&&Number(activity[1]||0)>=5?dragonProfileActivityLabel(activity[0]):'Still choosing',favItems=[
        {label:'Favourite Place',value:overall?.name||'Still choosing',evidence:overall?.count?`Chosen ${Number(overall.count)} times`:''},
        {label:'Favourite Bed',value:bed?.name||'Still choosing',evidence:bed?.count?`Chosen ${Number(bed.count)} times`:''},
        {label:'Favourite Toy',value:toy?.name||'Still choosing',evidence:toy?.count?`Chosen ${Number(toy.count)} times`:''},
        {label:'Favourite Feeding Spot',value:feeding?.name||'Still choosing',evidence:feeding?.count?`Chosen ${Number(feeding.count)} times`:''},
        {label:'Favourite Floor',value:confirmedFloor,evidence:confirmedFloor!=='Still choosing'?`Visited ${Number(floorChoice?.[1]||0)} times`:''},
        {label:'Favourite Activity',value:confirmedActivity,evidence:confirmedActivity!=='Still choosing'?`Observed ${Number(activity?.[1]||0)} times`:''}
      ];
      if(myDragonFavourites)myDragonFavourites.innerHTML=favItems.map(item=>{const confirmed=item.value!=='Still choosing';return`<div class="${confirmed?'is-confirmed':'is-forming'}"><small>${dragonboundEscapeHtml(item.label)}</small><strong>${dragonboundEscapeHtml(item.value)}</strong><em>${confirmed&&item.evidence?dragonboundEscapeHtml(item.evidence):'Still forming naturally'}</em></div>`;}).join('');
      const learnedVisible=(src.learnedRoutines?.routines||[]).filter(r=>['recognized','established'].includes(r.status)).sort((a,b)=>(b.status==='established')-(a.status==='established')||Number(b.confidence||0)-Number(a.confidence||0)||Number(b.successes||0)-Number(a.successes||0)).slice(0,9);
      if(myDragonHabits){if(learnedVisible.length){myDragonHabits.innerHTML=learnedVisible.map(r=>`<article class="dragonbound-learned-routine ${r.status==='established'?'is-established':'is-recognised'}"><small>${dragonboundEscapeHtml(dragonboundRoutineCategoryLabel(r))}</small><strong>${dragonboundEscapeHtml(dragonboundRoutineTitle(r))}</strong><span>${dragonboundEscapeHtml(dragonboundRoutineStory(r,src.name))}</span></article>`).join('');}else myDragonHabits.innerHTML='<span>Still forming routines</span>';}
      if(myDragonComforts){const vals=Array.isArray(universe.comforts)?universe.comforts:[];myDragonComforts.innerHTML=vals.length?vals.map(v=>`<span><i>♥</i>${dragonboundEscapeHtml(v)}</span>`).join(''):'<em>Still learning what feels like home.</em>';}if(myDragonDislikes){const vals=Array.isArray(universe.dislikes)?universe.dislikes:[];myDragonDislikes.innerHTML=vals.length?vals.map(v=>`<span><i>×</i>${dragonboundEscapeHtml(v)}</span>`).join(''):'<em>No strong dislikes confirmed yet.</em>';}

      const daily=src.memory?.dailyLife||{},hour=new Date().getHours(),period=hour>=6&&hour<11?'morning':hour>=11&&hour<17?'day':hour>=17&&hour<22?'evening':'night',routineRows=Object.entries(daily?.routineCounts?.[period]||{}).sort((a,b)=>Number(b[1]||0)-Number(a[1]||0)),formedRoutineKey=period==='morning'?'preferredMorningActivity':period==='evening'?'preferredEveningActivity':period==='night'?'preferredNightActivity':'preferredDayActivity',favouriteRoutine=routineRows[0]?.[0]||src.preferences?.formed?.[formedRoutineKey]||'',moodRows=Object.entries(daily?.moodCounts||{}).sort((a,b)=>Number(b[1]||0)-Number(a[1]||0)),commonMood=moodRows[0]?.[0]||src.mood;
      if(myDragonToday){const today=Array.isArray(src.dailyPreferences?.preferences)?src.dailyPreferences.preferences:[],remaining=dragonProfileDailyPreferenceRemaining(src.dailyPreferences);myDragonToday.innerHTML=today.length?today.map((pref,index)=>`<article class="dragonbound-my-dragon-today-card" data-preference-type="${dragonboundEscapeHtml(pref.type||'')}"><div><small>${index===0?"TODAY'S QUIRK":'ALSO TODAY'}</small><strong>${dragonboundEscapeHtml(pref.label||'Little Change')}</strong><span>${dragonboundEscapeHtml(remaining)}</span></div><p>${dragonboundEscapeHtml(pref.story||'A small change of routine has caught their attention.')}</p></article>`).join(''):`<article class="dragonbound-my-dragon-today-card is-quiet"><div><small>TODAY</small><strong>Nothing unusual</strong><span>${dragonboundEscapeHtml(remaining)}</span></div><p>${dragonboundEscapeHtml(`${src.name} seems content to simply be themselves for a while.`)}</p></article>`;}
      if(myDragonDailyLife){const dailyCards=[['Current mood',persistentMoodName],['Right now',src.mood],['Mood changes',dragonProfileMoodRemaining(src.dailyMood)],[`Usual ${period}`,favouriteRoutine?dragonProfileLifeLabel(favouriteRoutine):'Still forming'],['Most common care mood',commonMood],['Most common activity',activity?dragonProfileActivityLabel(activity[0]):'Still deciding']];myDragonDailyLife.innerHTML=dailyCards.map(([label,value])=>`<div><small>${dragonboundEscapeHtml(label)}</small><strong>${dragonboundEscapeHtml(value)}</strong></div>`).join('');}
      if(myDragonRecentMoment){const recent=daily?.lastMeaningfulMoment||{},when=recent.at?dragonProfileDate(recent.at):'';myDragonRecentMoment.innerHTML=recent?.detail?`<small>RECENT MOMENT${when?` · ${dragonboundEscapeHtml(when)}`:''}</small><strong>${dragonboundEscapeHtml(recent.label||dragonProfileLifeLabel(recent.type))}</strong><p>${dragonboundEscapeHtml(recent.detail)}</p>`:'<small>RECENT MOMENT</small><p>Still waiting for the next little adventure.</p>'; }
      if(myDragonHouseMoments){const moments=(Array.isArray(daily?.recentMoments)?daily.recentMoments:[]).slice().sort((a,b)=>Number(b?.at||0)-Number(a?.at||0)).slice(0,12);myDragonHouseMoments.innerHTML=moments.length?moments.map(moment=>{const when=moment?.at?dragonProfileDate(moment.at):'';return`<article><div><small>${when?dragonboundEscapeHtml(when):'AT HOME'}</small><strong>${dragonboundEscapeHtml(moment?.title||'A Little Moment')}</strong></div><p>${dragonboundEscapeHtml(moment?.detail||'A small bit of dragon chaos worth remembering.')}</p>${moment?.targetName?`<span>${dragonboundEscapeHtml(moment.targetName)}</span>`:''}</article>`;}).join(''):'<em>Nothing chaotic enough to write down yet.</em>'; }
      const growth=src.growth||dragonProfileGrowthFallback(src.hatchedAt),growthPercent=Math.max(0,Math.min(100,Number(growth.progress)||0));
      if(myDragonGrowthStage)myDragonGrowthStage.textContent=growth.name||'Baby';
      if(myDragonGrowthPercent)myDragonGrowthPercent.textContent=`${Math.round(growthPercent)}%`;
      if(myDragonGrowthBar)myDragonGrowthBar.style.width=`${growthPercent}%`;
      if(myDragonGrowthCopy)myDragonGrowthCopy.textContent=growth.next?`Growing very slowly toward ${growth.next}. Dragonbound is deliberately keeping dragons in their baby-era for months while the later-life artwork is still being built.`:'Still using the baby-era art. Adult growth is locked until dedicated adult sprites exist.';
      if(myDragonSkills)myDragonSkills.innerHTML=DRAGONBOUND_PROFILE_SKILLS.map(key=>{const skill=src.skills?.[key]||{},level=Math.max(0,Math.min(100,Number(skill.level)||0)),rank=src.actor?.skillRank?src.actor.skillRank(key):dragonProfileSkillRank(level),progressInfo=src.actor?.skillProgress?src.actor.skillProgress(key):null,nextRank=dragonProfileSkillNext(level),progress=progressInfo?Number(progressInfo.percent||0):(nextRank?Math.max(0,Math.min(100,((level-rank.min)/(nextRank.min-rank.min))*100)):100),nextName=progressInfo?.next||nextRank?.name||'',rewardSteps={10:5,20:7,30:10,40:12,50:15,60:18,70:22,80:28,90:40,95:50,100:75},nextReward=Object.keys(rewardSteps).map(Number).sort((a,b)=>a-b).find(v=>v>level),cooldown=dragonProfileSkillCooldown(src,key),selected=dragonProfileSelectedSkill===key;return`<button type="button" class="dragonbound-my-dragon-skill-card${selected?' is-selected':''}" data-skill="${key}" data-training-ready="${cooldown.ready?'1':'0'}" aria-expanded="${selected?'true':'false'}"><span>${DRAGONBOUND_PROFILE_SKILL_ICONS[key]||'•'}</span><div><div><strong>${DRAGONBOUND_PROFILE_SKILL_LABELS[key]}</strong><b>${Math.floor(level)}</b></div><small>${dragonboundEscapeHtml(rank.name||String(rank))}${nextName?` · ${Math.round(progress)}% to ${dragonboundEscapeHtml(nextName)}`:' · Peak rank'}</small><i><em style="width:${progress}%"></em></i><small class="dragonbound-skill-cooldown${cooldown.ready?' is-ready':''}">${dragonProfileFormatCooldown(cooldown.remainingMs)}</small>${nextReward?`<small class="dragonbound-skill-mark-next">Next Marks: Lv ${nextReward} · +${rewardSteps[nextReward]}</small>`:''}<small class="dragonbound-skill-help-hint">Click for training ideas</small></div></button>`;}).join('');
      const aptitudes=dragonProfileAptitudes(src);if(myDragonAptitudes)myDragonAptitudes.innerHTML=aptitudes.length?`<small>NATURAL APTITUDES</small>${aptitudes.map(a=>`<span>${dragonboundEscapeHtml(a)}</span>`).join('')}`:'';
      if(myDragonSkillHelp){const key=dragonProfileSelectedSkill,valid=DRAGONBOUND_PROFILE_SKILLS.includes(key);myDragonSkillHelp.hidden=!valid;if(valid){const examples=dragonProfileOwnedSkillExamples(src,key),cooldown=dragonProfileSkillCooldown(src,key);if(myDragonSkillHelpTitle)myDragonSkillHelpTitle.textContent=DRAGONBOUND_PROFILE_SKILL_LABELS[key]||key;if(myDragonSkillHelpCopy)myDragonSkillHelpCopy.textContent=dragonProfileSkillHelpCopy(key);if(myDragonSkillHelpOwned)myDragonSkillHelpOwned.innerHTML=examples.length?examples.map(item=>`<div><strong>${dragonboundEscapeHtml(item.name)}</strong><span>${item.placed?'Placed in your home':'Owned in Build Inventory'}${item.owned>1?` · ×${item.owned}`:''}</span></div>`).join(''):`<div class="is-empty"><strong>No matching training furniture owned yet</strong><span>Bonnie's furniture shop may have something suitable.</span></div>`;if(myDragonSkillHelpNote)myDragonSkillHelpNote.textContent=`${dragonProfileSkillPassiveNote(key)} ${cooldown.ready?'This skill is ready to earn XP now.':`${dragonProfileFormatCooldown(cooldown.remainingMs)} — practice is still allowed, but it will not award more XP until recovery finishes.`}`;}}
      const lifeMomentCount=Object.values(src.memory?.dailyLife?.eventCounts||{}).reduce((sum,v)=>sum+(Number(v)||0),0),lifeStats=[['Pets',Number(obs.petsReceived||0)],['Dragon Bites',Number(obs.dragonBitesEaten||0)],['Baths',Number(obs.bathUses||0)],['Naps',Number(obs.bedSleeps||0)+Number(obs.sleepSessions||0)],['Objects carried',Number(obs.objectsCarried||0)],['Toy plays',Number(obs.toyPlays||0)+Number(obs.puzzleUses||0)],['Training',Number(obs.trainingUses||0)],['Furniture uses',Number(obs.furnitureInteractions||0)],['Flights',Number(obs.flightsTaken||0)],['Life moments',lifeMomentCount]];
      if(myDragonStats)myDragonStats.innerHTML=lifeStats.map(([label,value])=>`<div><strong>${Number(value).toLocaleString('en-GB')}</strong><small>${dragonboundEscapeHtml(label)}</small></div>`).join('');
      const memories=[];const seen=new Set();const add=(entry)=>{if(!entry?.title||seen.has(entry.title))return;seen.add(entry.title);memories.push(entry);};(Array.isArray(src.memory?.lifeHistory)?src.memory.lifeHistory:[]).forEach(add);Object.entries(src.memory?.bondMilestones||{}).forEach(([level,at])=>{const st=DRAGONBOUND_PROFILE_BOND_STAGES.find(s=>String(s.min)===String(level));if(st)add({title:`Reached ${st.name}`,detail:st.note,at:Number(at)||0,type:'bond'});});Object.entries(src.memory?.traitDiscoveredAt||{}).forEach(([trait,at])=>add({title:`Discovered: ${trait}`,detail:dragonProfileTraitObservation(trait),at:Number(at)||0,type:'trait'}));if(src.hatchedAt)add({title:'Hatched into the world',detail:`${src.name} joined your Dragonbound life.`,at:src.hatchedAt,type:'hatch'});memories.sort((a,b)=>Number(b.at||0)-Number(a.at||0));
      if(myDragonMemories)myDragonMemories.innerHTML=memories.length?memories.slice(0,14).map(m=>`<article><time>${dragonProfileDate(m.at)}</time><div><strong>${dragonboundEscapeHtml(m.title)}</strong><span>${dragonboundEscapeHtml(m.detail||'')}</span></div></article>`).join(''):'<p class="dragonbound-my-dragon-memory-empty">Keep spending time together and this scrapbook will fill itself in.</p>';
      if(myDragonKeeperRelationship){const rel=src.keeperRelationship||dragonProfileKeeperRelationshipFallback(src.name,src.bond,src.memory),recent=rel.recentMoment||{},recentText=recent.label?`${recent.label}${recent.detail?` · ${recent.detail}`:''}`:'No shared moment recorded yet.';myDragonKeeperRelationship.innerHTML=`<section class="dragonbound-keeper-relationship-card"><header><div><small>KEEPER RELATIONSHIP</small><strong>${dragonboundEscapeHtml(rel.stage||stage.name)}</strong></div><b>${Math.round(src.bond)} Bond</b></header><p>${dragonboundEscapeHtml(rel.description||stage.note)}</p><div class="dragonbound-keeper-relationship-grid"><article><small>GREETING STYLE</small><strong>${dragonboundEscapeHtml(rel.greetingStyle||'Still forming')}</strong></article><article><small>FAVOURITE THING TOGETHER</small><strong>${dragonboundEscapeHtml(rel.favouriteSharedActivity||'Still forming')}</strong></article><article><small>USUAL VISIT</small><strong>${dragonboundEscapeHtml(rel.usualVisit||'Still learning')}</strong></article><article><small>CHECK-INS</small><strong>${Number(rel.checkIns||0)+Number(rel.nearbyRests||0)} little moment${Number(rel.checkIns||0)+Number(rel.nearbyRests||0)===1?'':'s'}</strong></article></div><footer><small>RECENT TOGETHER</small><span>${dragonboundEscapeHtml(recentText)}</span></footer></section>`;}
      try{window.DragonboundSocialCalendar?.renderJournal?.(src);}catch(_e){}
    };
    let myDragonProfileTimer=0;
    myDragonJournalTabs.forEach(tab=>tab.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();const next=String(tab.dataset.dragonJournalTab||'nature');if(!['nature','habits','bonds','life','calendar','scrapbook'].includes(next))return;dragonProfileSelectedTab=next;syncDragonJournalTab();if(next==='bonds')dragonboundLoadSocialRelationships().then(()=>renderDragonboundSocialJournal());}));
    myDragonSkills?.addEventListener('click',event=>{const card=event.target.closest('[data-skill]');if(!card)return;const key=String(card.dataset.skill||'');if(!DRAGONBOUND_PROFILE_SKILLS.includes(key))return;event.preventDefault();event.stopPropagation();dragonProfileSelectedSkill=dragonProfileSelectedSkill===key?'':key;renderMyDragonProfile();});
    myDragonSkillHelpClose?.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();dragonProfileSelectedSkill='';renderMyDragonProfile();});
    const closeMyDragonProfile=()=>{clearInterval(myDragonProfileTimer);myDragonProfileTimer=0;dragonProfileSelectedSkill='';myDragonOverlay?.classList.remove('is-visible');myDragonOverlay?.setAttribute('aria-hidden','true');};
    const openMyDragonProfile=async({fromStudy=false}={})=>{
      dragonProfileSelectedTab='nature';if(fromStudy)closeStudyMenu();closeTravelMenu();renderMyDragonProfile();myDragonOverlay?.classList.add('is-visible');myDragonOverlay?.setAttribute('aria-hidden','false');dragonboundLoadSocialRelationships().then(()=>renderDragonboundSocialJournal());
      clearInterval(myDragonProfileTimer);myDragonProfileTimer=setInterval(()=>{if(myDragonOverlay?.classList.contains('is-visible'))renderMyDragonProfile();},1000);
      requestAnimationFrame(()=>myDragonClose?.focus({preventScroll:true}));
      if(!window.DragonboundBabyEngine?.actor&&!namedDragonForCurrentAccount()?.name){try{await hydrateDragonboundProfile({force:false});renderMyDragonProfile();}catch(_e){}}
    };

    let dragonboundHouseVisitRows=[];
    let dragonboundHouseVisitCatalogPromise=null;
    const DRAGONBOUND_VISIT_FURNITURE_CATALOG=[{"item_id":"cottage-0","name":"Hearthstone Fireplace","category":"Living","collection_name":"Cozy Cottage","rarity":"Rare","price":180,"sprite_path":"assets/dragonbound/furniture/cottage-00.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["inspectable","warm"]},{"item_id":"cottage-1","name":"Mosswood Rocking Chair","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":215,"sprite_path":"assets/dragonbound/furniture/cottage-01.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["comfortable","inspectable"]},{"item_id":"cottage-2","name":"Fernrest Sofa","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":250,"sprite_path":"assets/dragonbound/furniture/cottage-02.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["comfortable","inspectable"]},{"item_id":"cottage-3","name":"Cottage Tea Table","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":285,"sprite_path":"assets/dragonbound/furniture/cottage-03.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["inspectable"]},{"item_id":"cottage-4","name":"Keeper’s Bookcase","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":320,"sprite_path":"assets/dragonbound/furniture/cottage-04.png","footprint_w":1,"footprint_h":2,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["inspectable"]},{"item_id":"cottage-5","name":"Mossstitch Workbench","category":"Living","collection_name":"Cozy Cottage","rarity":"Crafted","price":355,"sprite_path":"assets/dragonbound/furniture/cottage-05.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["comfortable","inspectable"]},{"item_id":"cottage-6","name":"Warden’s Coat Stand","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":390,"sprite_path":"assets/dragonbound/furniture/cottage-06.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["inspectable"]},{"item_id":"cottage-7","name":"Oldwood Longcase Clock","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":425,"sprite_path":"assets/dragonbound/furniture/cottage-07.png","footprint_w":1,"footprint_h":2,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["inspectable"]},{"item_id":"cottage-8","name":"Scribe’s Writing Desk","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":460,"sprite_path":"assets/dragonbound/furniture/cottage-08.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["inspectable"]},{"item_id":"cottage-9","name":"Meadow Tea Trolley","category":"Kitchen","collection_name":"Cozy Cottage","rarity":"Common","price":495,"sprite_path":"assets/dragonbound/furniture/cottage-09.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["food","inspectable"]},{"item_id":"cottage-10","name":"Traveller’s Storage Chest","category":"Living","collection_name":"Cozy Cottage","rarity":"Crafted","price":530,"sprite_path":"assets/dragonbound/furniture/cottage-10.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["hideable","inspectable"]},{"item_id":"cottage-11","name":"Dragon Nesting Cushions","category":"Beds","collection_name":"Cozy Cottage","rarity":"Common","price":565,"sprite_path":"assets/dragonbound/furniture/cottage-11.png","footprint_w":2,"footprint_h":1,"clearance":"Wide","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["comfortable","sleepable"]},{"item_id":"cottage-12","name":"Clay Wash Cabinet","category":"Bath","collection_name":"Cozy Cottage","rarity":"Common","price":600,"sprite_path":"assets/dragonbound/furniture/cottage-12.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["hideable","inspectable","washable"]},{"item_id":"cottage-13","name":"Cottage Pantry","category":"Kitchen","collection_name":"Cozy Cottage","rarity":"Common","price":635,"sprite_path":"assets/dragonbound/furniture/cottage-13.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["food","inspectable"]},{"item_id":"cottage-14","name":"Glowwick Floor Lamp","category":"Living","collection_name":"Cozy Cottage","rarity":"Common","price":670,"sprite_path":"assets/dragonbound/furniture/cottage-14.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["inspectable","warm"]},{"item_id":"cottage-15","name":"Hallway Storage Bench","category":"Living","collection_name":"Cozy Cottage","rarity":"Crafted","price":705,"sprite_path":"assets/dragonbound/furniture/cottage-15.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Warm starter-house craftsmanship in oak, moss green and aged brass.","tags":["comfortable","hideable","inspectable"]},{"item_id":"bed-0","name":"Emerald Canopy Bed","category":"Beds","collection_name":"Royal Velmora","rarity":"Epic","price":250,"sprite_path":"assets/dragonbound/furniture/bed-00.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"A grand draped bed sized for broad-winged companions.","tags":["comfortable","sleepable"]},{"item_id":"bed-1","name":"Marenza Captain’s Bed","category":"Beds","collection_name":"Marenza Coast","rarity":"Rare","price":315,"sprite_path":"assets/dragonbound/furniture/bed-01.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"Sea-blue timber and a sturdy captain’s frame.","tags":["comfortable","sleepable"]},{"item_id":"bed-2","name":"Guildmaster’s Rest","category":"Beds","collection_name":"Guildhall","rarity":"Rare","price":380,"sprite_path":"assets/dragonbound/furniture/bed-02.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"Reinforced oak, banners and deep red upholstery.","tags":["comfortable","sleepable"]},{"item_id":"bed-3","name":"Amethyst Dream Bed","category":"Beds","collection_name":"Arcane Scholar","rarity":"Epic","price":445,"sprite_path":"assets/dragonbound/furniture/bed-03.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"Crystal-lit rest with a calm arcane glow.","tags":["comfortable","sleepable"]},{"item_id":"bed-4","name":"Vardesh Fur Bed","category":"Beds","collection_name":"Vardesh North","rarity":"Crafted","price":510,"sprite_path":"assets/dragonbound/furniture/bed-04.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"Cold-climate timber layered with thick woven furs.","tags":["comfortable","sleepable"]},{"item_id":"bed-5","name":"Zafir Mosaic Canopy","category":"Beds","collection_name":"Zafir","rarity":"Epic","price":575,"sprite_path":"assets/dragonbound/furniture/bed-05.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"Turquoise mosaic panels and breathable desert linen.","tags":["comfortable","sleepable"]},{"item_id":"bed-6","name":"Autumn Storage Bed","category":"Beds","collection_name":"Cozy Cottage","rarity":"Crafted","price":640,"sprite_path":"assets/dragonbound/furniture/bed-06.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"Warm autumn quilting with useful built-in drawers.","tags":["comfortable","hideable","sleepable"]},{"item_id":"bed-7","name":"Blackglass Ember Bed","category":"Beds","collection_name":"Blackglass","rarity":"Epic","price":705,"sprite_path":"assets/dragonbound/furniture/bed-07.png","footprint_w":4,"footprint_h":2,"clearance":"Wide","description":"Heatproof ironwork and a banked ember glow.","tags":["comfortable","sleepable"]},{"item_id":"kitchen-0","name":"Azure Baker’s Range","category":"Kitchen","collection_name":"Marenza Coast","rarity":"Rare","price":340,"sprite_path":"assets/dragonbound/furniture/kitchen-00.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"A compact blue-tile oven for cottage kitchens.","tags":["food","inspectable"]},{"item_id":"kitchen-1","name":"Crimson Guild Range","category":"Kitchen","collection_name":"Guildhall","rarity":"Rare","price":405,"sprite_path":"assets/dragonbound/furniture/kitchen-01.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A heavy guild range with hanging copper pans.","tags":["food","inspectable"]},{"item_id":"kitchen-2","name":"Cottage Butler Sink","category":"Kitchen","collection_name":"Cozy Cottage","rarity":"Common","price":470,"sprite_path":"assets/dragonbound/furniture/kitchen-02.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Deep ceramic basin with dragon-safe rounded corners.","tags":["food","inspectable"]},{"item_id":"kitchen-3","name":"Arcane Preserves Bench","category":"Kitchen","collection_name":"Arcane Scholar","rarity":"Epic","price":535,"sprite_path":"assets/dragonbound/furniture/kitchen-03.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Potion storage disguised as a practical pantry bench.","tags":["comfortable","food","inspectable"]},{"item_id":"kitchen-4","name":"Aurelia Prep Counter","category":"Kitchen","collection_name":"Aurelia","rarity":"Crafted","price":600,"sprite_path":"assets/dragonbound/furniture/kitchen-04.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Bright prep counter for fruit, feed and daily meals.","tags":["food","inspectable"]},{"item_id":"kitchen-5","name":"Frostkeep Pantry","category":"Kitchen","collection_name":"Vardesh North","rarity":"Rare","price":665,"sprite_path":"assets/dragonbound/furniture/kitchen-05.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Insulated pantry for chilled fish and medicines.","tags":["food","inspectable"]},{"item_id":"kitchen-6","name":"Zafir Spice Dresser","category":"Kitchen","collection_name":"Zafir","rarity":"Rare","price":730,"sprite_path":"assets/dragonbound/furniture/kitchen-06.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Carved turquoise cabinet for spices and preserves.","tags":["food","inspectable"]},{"item_id":"kitchen-7","name":"Terracotta Bread Oven","category":"Kitchen","collection_name":"Zafir","rarity":"Crafted","price":795,"sprite_path":"assets/dragonbound/furniture/kitchen-07.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Wood-fired oven with an accessible low hearth.","tags":["food","inspectable"]},{"item_id":"bath-0","name":"Meadow Washstand","category":"Bath","collection_name":"Cozy Cottage","rarity":"Common","price":430,"sprite_path":"assets/dragonbound/furniture/bath-00.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"A compact wash station for smaller starter rooms.","tags":["inspectable","washable"]},{"item_id":"bath-1","name":"Marenza Tile Bath","category":"Bath","collection_name":"Marenza Coast","rarity":"Rare","price":495,"sprite_path":"assets/dragonbound/furniture/bath-01.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Salt-resistant blue tile and a deep bathing bowl.","tags":["inspectable","washable"]},{"item_id":"bath-2","name":"Vardesh Copper Tub","category":"Bath","collection_name":"Vardesh North","rarity":"Crafted","price":560,"sprite_path":"assets/dragonbound/furniture/bath-02.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Hammered copper that holds warmth through winter.","tags":["inspectable","washable"]},{"item_id":"bath-3","name":"Rosewater Vanity","category":"Bath","collection_name":"Royal Velmora","rarity":"Rare","price":625,"sprite_path":"assets/dragonbound/furniture/bath-03.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Polished grooming vanity with secure storage.","tags":["inspectable","washable"]},{"item_id":"bath-4","name":"Rainfall Wash Arch","category":"Bath","collection_name":"Elven Verdant","rarity":"Epic","price":690,"sprite_path":"assets/dragonbound/furniture/bath-04.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Gentle overhead rinse with leaf-filtered water.","tags":["inspectable","washable"]},{"item_id":"bath-5","name":"Steamroom Bench","category":"Bath","collection_name":"Vardesh North","rarity":"Crafted","price":755,"sprite_path":"assets/dragonbound/furniture/bath-05.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A sturdy bench for warming and towel-drying.","tags":["comfortable","inspectable","washable"]},{"item_id":"bath-6","name":"Wing-Dry Towel Rack","category":"Bath","collection_name":"Cozy Cottage","rarity":"Common","price":820,"sprite_path":"assets/dragonbound/furniture/bath-06.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Wide rack positioned clear of tails and wings.","tags":["inspectable","washable"]},{"item_id":"bath-7","name":"Deep Dragon Wash Basin","category":"Bath","collection_name":"Zafir","rarity":"Rare","price":885,"sprite_path":"assets/dragonbound/furniture/bath-07.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Low-sided basin for safe step-in washing.","tags":["inspectable","washable"]},{"item_id":"training-0","name":"Beginner Jump Rail","category":"Training","collection_name":"Starter Training","rarity":"Common","price":520,"sprite_path":"assets/dragonbound/furniture/training-00.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Low breakaway rail for safe first jumps.","tags":["climbable","playable"]},{"item_id":"training-1","name":"Balance Beam","category":"Training","collection_name":"Starter Training","rarity":"Common","price":585,"sprite_path":"assets/dragonbound/furniture/training-01.png","footprint_w":2,"footprint_h":1,"clearance":"Wide","description":"Broad timber beam with a non-slip top.","tags":["climbable","playable"]},{"item_id":"training-2","name":"Target Bell Stand","category":"Training","collection_name":"Guildhall","rarity":"Crafted","price":650,"sprite_path":"assets/dragonbound/furniture/training-02.png","footprint_w":2,"footprint_h":1,"clearance":"Wide","description":"A clear bell target for focus exercises.","tags":["climbable","playable"]},{"item_id":"training-3","name":"Weave Pole Set","category":"Training","collection_name":"Starter Training","rarity":"Common","price":715,"sprite_path":"assets/dragonbound/furniture/training-03.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Flexible weave poles on a stable floor strip.","tags":["climbable","playable"]},{"item_id":"training-4","name":"Wing Stretch Frame","category":"Training","collection_name":"Care & Recovery","rarity":"Rare","price":780,"sprite_path":"assets/dragonbound/furniture/training-04.png","footprint_w":2,"footprint_h":1,"clearance":"Wide","description":"Padded frame for guided shoulder and wing movement.","tags":["climbable","playable"]},{"item_id":"training-5","name":"Climbing Ramp","category":"Training","collection_name":"Vardesh North","rarity":"Crafted","price":845,"sprite_path":"assets/dragonbound/furniture/training-05.png","footprint_w":2,"footprint_h":1,"clearance":"Wide","description":"A grippy incline for claws of every size.","tags":["climbable","playable"]},{"item_id":"training-6","name":"Endurance Treadwheel","category":"Training","collection_name":"Blackglass","rarity":"Epic","price":910,"sprite_path":"assets/dragonbound/furniture/training-06.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Controlled resistance training with safety stops.","tags":["climbable","playable"]},{"item_id":"training-7","name":"Guild Agility Course","category":"Training","collection_name":"Guildhall","rarity":"Rare","price":975,"sprite_path":"assets/dragonbound/furniture/training-07.png","footprint_w":2,"footprint_h":1,"clearance":"Wide","description":"A modular obstacle set for confident dragons.","tags":["climbable","playable"]},{"item_id":"toy-0","name":"Treat Puzzle Chest","category":"Toys","collection_name":"Playful Nursery","rarity":"Crafted","price":610,"sprite_path":"assets/dragonbound/furniture/toy-00.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Sliding panels hide small treats without sharp edges.","tags":["hideable","inspectable","playable"]},{"item_id":"toy-1","name":"Rope Tug Post","category":"Toys","collection_name":"Cozy Cottage","rarity":"Common","price":675,"sprite_path":"assets/dragonbound/furniture/toy-01.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A replaceable rope toy fixed to a weighted base.","tags":["inspectable","playable"]},{"item_id":"toy-2","name":"Rolling Feed Ball","category":"Toys","collection_name":"Playful Nursery","rarity":"Common","price":740,"sprite_path":"assets/dragonbound/furniture/toy-02.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Dispenses feed as it rolls across the floor.","tags":["inspectable","playable"]},{"item_id":"toy-3","name":"Chime Mobile","category":"Toys","collection_name":"Elven Verdant","rarity":"Rare","price":805,"sprite_path":"assets/dragonbound/furniture/toy-03.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Soft chimes reward gentle nose and paw touches.","tags":["inspectable","playable"]},{"item_id":"toy-4","name":"Scent Trail Board","category":"Toys","collection_name":"Care & Recovery","rarity":"Crafted","price":870,"sprite_path":"assets/dragonbound/furniture/toy-04.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Reusable scent cups encourage calm exploration.","tags":["inspectable","playable"]},{"item_id":"toy-5","name":"Burrow Blanket","category":"Toys","collection_name":"Cozy Cottage","rarity":"Common","price":935,"sprite_path":"assets/dragonbound/furniture/toy-05.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Layered blankets for digging, hiding and nesting.","tags":["inspectable","playable"]},{"item_id":"toy-6","name":"Treasure Sorter","category":"Toys","collection_name":"Zafir","rarity":"Rare","price":1000,"sprite_path":"assets/dragonbound/furniture/toy-06.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Colour-and-shape puzzle with oversized pieces.","tags":["inspectable","playable"]},{"item_id":"toy-7","name":"Enrichment Activity Tree","category":"Toys","collection_name":"Royal Velmora","rarity":"Epic","price":1065,"sprite_path":"assets/dragonbound/furniture/toy-07.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A premium multi-level play and puzzle station.","tags":["inspectable","playable"]},{"item_id":"health-0","name":"Padded Examination Table","category":"Care","collection_name":"Starter Care","rarity":"Common","price":700,"sprite_path":"assets/dragonbound/furniture/health-00.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"A stable padded surface with open access on both sides.","tags":["inspectable"]},{"item_id":"health-1","name":"Low Care Bench","category":"Care","collection_name":"Starter Care","rarity":"Common","price":765,"sprite_path":"assets/dragonbound/furniture/health-01.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Low step-up care bench for young or recovering dragons.","tags":["comfortable","inspectable"]},{"item_id":"health-2","name":"Dragon Weighing Scale","category":"Care","collection_name":"Starter Care","rarity":"Crafted","price":830,"sprite_path":"assets/dragonbound/furniture/health-02.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Wide platform with an easy-to-read brass dial.","tags":["inspectable"]},{"item_id":"health-3","name":"Balance Care Scale","category":"Care","collection_name":"Starter Care","rarity":"Rare","price":895,"sprite_path":"assets/dragonbound/furniture/health-03.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Counterweight scale for precise health checks.","tags":["inspectable"]},{"item_id":"health-4","name":"Wall Medicine Cabinet","category":"Care","collection_name":"Starter Care","rarity":"Common","price":960,"sprite_path":"assets/dragonbound/furniture/health-04.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Lockable shelves for tonics, wraps and salves.","tags":["hideable","inspectable"]},{"item_id":"health-5","name":"Tall Remedy Cabinet","category":"Care","collection_name":"Care & Recovery","rarity":"Crafted","price":1025,"sprite_path":"assets/dragonbound/furniture/health-05.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Tall organised storage for a complete care room.","tags":["hideable","inspectable"]},{"item_id":"health-6","name":"Bandage Trolley","category":"Care","collection_name":"Starter Care","rarity":"Crafted","price":1090,"sprite_path":"assets/dragonbound/furniture/health-06.png","footprint_w":3,"footprint_h":1,"clearance":"Standard","description":"Mobile wraps and dressing station with locking wheels.","tags":["inspectable"]},{"item_id":"health-7","name":"Healer’s Supply Cart","category":"Care","collection_name":"Care & Recovery","rarity":"Rare","price":1155,"sprite_path":"assets/dragonbound/furniture/health-07.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A larger supply cart for long recovery sessions.","tags":["inspectable"]},{"item_id":"starter-01-round-dragon-nest-bed","name":"Round Dragon Nest Bed","category":"Beds","collection_name":"Starter Essentials","rarity":"Common","price":0,"sprite_path":"assets/dragonbound/furniture/starter-01-round-dragon-nest-bed.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: round dragon nest bed.","tags":["comfortable","inspectable","sleepable"],"sort_order":2001},{"item_id":"starter-02-tail-channel-bed","name":"Tail Channel Bed","category":"Beds","collection_name":"Starter Essentials","rarity":"Common","price":145,"sprite_path":"assets/dragonbound/furniture/starter-02-tail-channel-bed.png","footprint_w":4,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: tail channel bed.","tags":["comfortable","inspectable","sleepable"],"sort_order":2002},{"item_id":"starter-03-heated-sleeping-slab","name":"Heated Sleeping Slab","category":"Beds","collection_name":"Starter Essentials","rarity":"Common","price":160,"sprite_path":"assets/dragonbound/furniture/starter-03-heated-sleeping-slab.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: heated sleeping slab.","tags":["comfortable","inspectable","sleepable","warm"],"sort_order":2003},{"item_id":"starter-04-hanging-cocoon-hammock","name":"Hanging Cocoon Hammock","category":"Beds","collection_name":"Starter Essentials","rarity":"Crafted","price":260,"sprite_path":"assets/dragonbound/furniture/starter-04-hanging-cocoon-hammock.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: hanging cocoon hammock.","tags":["comfortable","inspectable","sleepable"],"sort_order":2004},{"item_id":"starter-05-low-food-bowl","name":"Low Food Bowl","category":"Feeding","collection_name":"Starter Essentials","rarity":"Common","price":140,"sprite_path":"assets/dragonbound/furniture/starter-05-low-food-bowl.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: low food bowl.","tags":["feeding","food","inspectable"],"sort_order":2005},{"item_id":"starter-06-low-water-trough","name":"Low Water Trough","category":"Feeding","collection_name":"Starter Essentials","rarity":"Common","price":150,"sprite_path":"assets/dragonbound/furniture/starter-06-low-water-trough.png","footprint_w":4,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: low water trough.","tags":["drink","hydration","inspectable"],"sort_order":2006},{"item_id":"starter-07-baby-dragon-bath-tub","name":"Baby-Dragon Bath Tub","category":"Bath","collection_name":"Starter Essentials","rarity":"Common","price":0,"sprite_path":"assets/dragonbound/furniture/starter-07-baby-dragon-bath-tub.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: baby-dragon bath tub.","tags":["groomable","inspectable","washable"],"sort_order":2007},{"item_id":"starter-08-sand-cleaning-pit","name":"Sand Cleaning Pit","category":"Bath","collection_name":"Starter Essentials","rarity":"Crafted","price":265,"sprite_path":"assets/dragonbound/furniture/starter-08-sand-cleaning-pit.png","footprint_w":4,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: sand cleaning pit.","tags":["diggable","groomable","inspectable","sandbath","washable"],"sort_order":2008},{"item_id":"starter-09-grooming-brush-post","name":"Grooming Brush Post","category":"Care","collection_name":"Starter Essentials","rarity":"Common","price":185,"sprite_path":"assets/dragonbound/furniture/starter-09-grooming-brush-post.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A practical Dragonbound starter furnishing designed for young dragons: grooming brush post.","tags":["groomable","inspectable"],"sort_order":2009},{"item_id":"starter-10-scale-polishing-station","name":"Scale Polishing Station","category":"Care","collection_name":"Starter Essentials","rarity":"Common","price":200,"sprite_path":"assets/dragonbound/furniture/starter-10-scale-polishing-station.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: scale polishing station.","tags":["groomable","inspectable"],"sort_order":2010},{"item_id":"starter-11-dragon-toilet-litter-station","name":"Dragon Toilet Litter Station","category":"Care","collection_name":"Starter Essentials","rarity":"Common","price":210,"sprite_path":"assets/dragonbound/furniture/starter-11-dragon-toilet-litter-station.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: dragon toilet litter station.","tags":["inspectable","toilet"],"sort_order":2011},{"item_id":"starter-12-wall-towel-rail","name":"Wall Towel Rail","category":"Bath","collection_name":"Starter Essentials","rarity":"Crafted","price":310,"sprite_path":"assets/dragonbound/furniture/starter-12-wall-towel-rail.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: wall towel rail.","tags":["groomable","inspectable","wall-mounted"],"sort_order":2012},{"item_id":"starter-13-winged-wall-mirror","name":"Winged Wall Mirror","category":"Decor","collection_name":"Starter Essentials","rarity":"Common","price":235,"sprite_path":"assets/dragonbound/furniture/starter-13-winged-wall-mirror.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: winged wall mirror.","tags":["inspectable","mirror","wall-mounted"],"sort_order":2013},{"item_id":"starter-14-wooden-toy-chest","name":"Wooden Toy Chest","category":"Storage","collection_name":"Starter Essentials","rarity":"Common","price":245,"sprite_path":"assets/dragonbound/furniture/starter-14-wooden-toy-chest.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: wooden toy chest.","tags":["inspectable","playable"],"sort_order":2014},{"item_id":"starter-15-wooden-chew-ring-stack","name":"Wooden Chew Ring Stack","category":"Toys","collection_name":"Starter Essentials","rarity":"Common","price":260,"sprite_path":"assets/dragonbound/furniture/starter-15-wooden-chew-ring-stack.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: wooden chew ring stack.","tags":["chewable","inspectable","playable"],"sort_order":2015},{"item_id":"starter-16-treat-puzzle-ball","name":"Treat Puzzle Ball","category":"Toys","collection_name":"Starter Essentials","rarity":"Crafted","price":360,"sprite_path":"assets/dragonbound/furniture/starter-16-treat-puzzle-ball.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: treat puzzle ball.","tags":["food","inspectable","playable","puzzle"],"sort_order":2016},{"item_id":"starter-17-rope-tug-post","name":"Rope Tug Post","category":"Toys","collection_name":"Starter Essentials","rarity":"Common","price":280,"sprite_path":"assets/dragonbound/furniture/starter-17-rope-tug-post.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: rope tug post.","tags":["inspectable","playable","tug"],"sort_order":2017},{"item_id":"starter-18-stuffed-wyvern-toy","name":"Stuffed Wyvern Toy","category":"Toys","collection_name":"Starter Essentials","rarity":"Common","price":0,"sprite_path":"assets/dragonbound/furniture/starter-18-stuffed-wyvern-toy.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: stuffed wyvern toy.","tags":["inspectable","playable"],"sort_order":2018},{"item_id":"starter-19-miniature-treasure-hoard","name":"Miniature Treasure Hoard","category":"Toys","collection_name":"Starter Essentials","rarity":"Common","price":305,"sprite_path":"assets/dragonbound/furniture/starter-19-miniature-treasure-hoard.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: miniature treasure hoard.","tags":["hoardable","inspectable","playable"],"sort_order":2019},{"item_id":"starter-20-baby-dragon-exercise-wheel","name":"Baby-Dragon Exercise Wheel","category":"Training","collection_name":"Starter Essentials","rarity":"Crafted","price":455,"sprite_path":"assets/dragonbound/furniture/starter-20-baby-dragon-exercise-wheel.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: baby-dragon exercise wheel.","tags":["exercise","inspectable","playable","training"],"sort_order":2020},{"item_id":"starter-21-low-balance-beam","name":"Low Balance Beam","category":"Training","collection_name":"Starter Essentials","rarity":"Common","price":375,"sprite_path":"assets/dragonbound/furniture/starter-21-low-balance-beam.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: low balance beam.","tags":["agility","exercise","inspectable","training"],"sort_order":2021},{"item_id":"starter-22-claw-scratching-log","name":"Claw Scratching Log","category":"Care","collection_name":"Starter Essentials","rarity":"Common","price":340,"sprite_path":"assets/dragonbound/furniture/starter-22-claw-scratching-log.png","footprint_w":4,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: claw scratching log.","tags":["inspectable","scratchable"],"sort_order":2022},{"item_id":"starter-23-baby-dragon-agility-hoop","name":"Baby-Dragon Agility Hoop","category":"Training","collection_name":"Starter Essentials","rarity":"Common","price":400,"sprite_path":"assets/dragonbound/furniture/starter-23-baby-dragon-agility-hoop.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: baby-dragon agility hoop.","tags":["agility","exercise","inspectable","training"],"sort_order":2023},{"item_id":"starter-24-short-climbing-ramp","name":"Short Climbing Ramp","category":"Training","collection_name":"Starter Essentials","rarity":"Crafted","price":500,"sprite_path":"assets/dragonbound/furniture/starter-24-short-climbing-ramp.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: short climbing ramp.","tags":["climbable","exercise","inspectable","training"],"sort_order":2024},{"item_id":"starter-25-roaring-practice-target","name":"Roaring Practice Target","category":"Training","collection_name":"Starter Essentials","rarity":"Common","price":425,"sprite_path":"assets/dragonbound/furniture/starter-25-roaring-practice-target.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: roaring practice target.","tags":["inspectable","roarable"],"sort_order":2025},{"item_id":"starter-26-roaring-practice-horn","name":"Roaring Practice Horn","category":"Training","collection_name":"Starter Essentials","rarity":"Common","price":435,"sprite_path":"assets/dragonbound/furniture/starter-26-roaring-practice-horn.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: roaring practice horn.","tags":["inspectable","roarable"],"sort_order":2026},{"item_id":"starter-27-flame-practice-brazier","name":"Flame Practice Brazier","category":"Training","collection_name":"Starter Essentials","rarity":"Common","price":445,"sprite_path":"assets/dragonbound/furniture/starter-27-flame-practice-brazier.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: flame practice brazier.","tags":["fire-practice","inspectable","warm"],"sort_order":2027},{"item_id":"starter-28-soot-proof-practice-dummy","name":"Soot Proof Practice Dummy","category":"Training","collection_name":"Starter Essentials","rarity":"Crafted","price":550,"sprite_path":"assets/dragonbound/furniture/starter-28-soot-proof-practice-dummy.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: soot proof practice dummy.","tags":["exercise","inspectable","training"],"sort_order":2028},{"item_id":"starter-29-velmora-mountain-painting","name":"Velmora Mountain Painting","category":"Decor","collection_name":"Starter Essentials","rarity":"Common","price":425,"sprite_path":"assets/dragonbound/furniture/starter-29-velmora-mountain-painting.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: velmora mountain painting.","tags":["inspectable","wall-mounted"],"sort_order":2029},{"item_id":"starter-30-flying-dragon-painting","name":"Flying Dragon Painting","category":"Decor","collection_name":"Starter Essentials","rarity":"Common","price":440,"sprite_path":"assets/dragonbound/furniture/starter-30-flying-dragon-painting.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: flying dragon painting.","tags":["inspectable","wall-mounted"],"sort_order":2030},{"item_id":"starter-31-wall-growth-chart","name":"Wall Growth Chart","category":"Decor","collection_name":"Starter Essentials","rarity":"Common","price":450,"sprite_path":"assets/dragonbound/furniture/starter-31-wall-growth-chart.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: wall growth chart.","tags":["inspectable","wall-mounted"],"sort_order":2031},{"item_id":"starter-32-dragon-care-bookshelf","name":"Dragon Care Bookshelf","category":"Storage","collection_name":"Starter Essentials","rarity":"Crafted","price":550,"sprite_path":"assets/dragonbound/furniture/starter-32-dragon-care-bookshelf.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: dragon care bookshelf.","tags":["inspectable","reading"],"sort_order":2032},{"item_id":"starter-33-tail-handle-wardrobe","name":"Tail Handle Wardrobe","category":"Storage","collection_name":"Starter Essentials","rarity":"Common","price":475,"sprite_path":"assets/dragonbound/furniture/starter-33-tail-handle-wardrobe.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A practical Dragonbound starter furnishing designed for young dragons: tail handle wardrobe.","tags":["hideable","inspectable"],"sort_order":2033},{"item_id":"starter-34-low-storage-cabinet","name":"Low Storage Cabinet","category":"Storage","collection_name":"Starter Essentials","rarity":"Common","price":485,"sprite_path":"assets/dragonbound/furniture/starter-34-low-storage-cabinet.png","footprint_w":4,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: low storage cabinet.","tags":["hideable","inspectable"],"sort_order":2034},{"item_id":"starter-35-scale-pattern-floor-rug","name":"Scale Pattern Floor Rug","category":"Decor","collection_name":"Starter Essentials","rarity":"Common","price":500,"sprite_path":"assets/dragonbound/furniture/starter-35-scale-pattern-floor-rug.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A practical Dragonbound starter furnishing designed for young dragons: scale pattern floor rug.","tags":["comfortable","inspectable","restable"],"sort_order":2035},{"item_id":"starter-36-warm-floor-lantern","name":"Warm Floor Lantern","category":"Decor","collection_name":"Starter Essentials","rarity":"Crafted","price":600,"sprite_path":"assets/dragonbound/furniture/starter-36-warm-floor-lantern.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A practical Dragonbound starter furnishing designed for young dragons: warm floor lantern.","tags":["inspectable","warm"],"sort_order":2036},{"item_id":"exp-01-living-moss-nest-bed","name":"Living Moss Nest Bed","category":"Beds","collection_name":"Wildwood Nature","rarity":"Common","price":380,"sprite_path":"assets/dragonbound/furniture/exp-01-living-moss-nest-bed.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A wildwood nature furnishing for Dragonbound homes: living moss nest bed.","tags":["comfortable","inspectable","nature","sleepable"],"sort_order":3001},{"item_id":"exp-02-hollow-log-hideaway","name":"Hollow Log Hideaway","category":"Nature","collection_name":"Wildwood Nature","rarity":"Crafted","price":590,"sprite_path":"assets/dragonbound/furniture/exp-02-hollow-log-hideaway.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A wildwood nature furnishing for Dragonbound homes: hollow log hideaway.","tags":["hideable","inspectable"],"sort_order":3002},{"item_id":"exp-03-leaf-canopy-daybed","name":"Leaf Canopy Daybed","category":"Beds","collection_name":"Wildwood Nature","rarity":"Common","price":435,"sprite_path":"assets/dragonbound/furniture/exp-03-leaf-canopy-daybed.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A wildwood nature furnishing for Dragonbound homes: leaf canopy daybed.","tags":["comfortable","inspectable","nature","sleepable"],"sort_order":3003},{"item_id":"exp-04-mushroom-floor-lamp","name":"Mushroom Floor Lamp","category":"Decor","collection_name":"Wildwood Nature","rarity":"Rare","price":875,"sprite_path":"assets/dragonbound/furniture/exp-04-mushroom-floor-lamp.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A wildwood nature furnishing for Dragonbound homes: mushroom floor lamp.","tags":["inspectable","nature","warm"],"sort_order":3004},{"item_id":"exp-05-vine-climbing-trellis","name":"Vine Climbing Trellis","category":"Nature","collection_name":"Wildwood Nature","rarity":"Crafted","price":670,"sprite_path":"assets/dragonbound/furniture/exp-05-vine-climbing-trellis.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A wildwood nature furnishing for Dragonbound homes: vine climbing trellis.","tags":["climbable","inspectable","nature"],"sort_order":3005},{"item_id":"exp-06-indoor-pebble-pond","name":"Indoor Pebble Pond","category":"Nature","collection_name":"Wildwood Nature","rarity":"Rare","price":930,"sprite_path":"assets/dragonbound/furniture/exp-06-indoor-pebble-pond.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A wildwood nature furnishing for Dragonbound homes: indoor pebble pond.","tags":["drink","inspectable","nature","washable"],"sort_order":3006},{"item_id":"exp-07-flower-and-herb-planter","name":"Flower and Herb Planter","category":"Nature","collection_name":"Wildwood Nature","rarity":"Common","price":550,"sprite_path":"assets/dragonbound/furniture/exp-07-flower-and-herb-planter.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A wildwood nature furnishing for Dragonbound homes: flower and herb planter.","tags":["inspectable","nature","sniffable"],"sort_order":3007},{"item_id":"exp-08-tree-stump-feeding-table","name":"Tree Stump Feeding Table","category":"Feeding","collection_name":"Wildwood Nature","rarity":"Epic","price":1315,"sprite_path":"assets/dragonbound/furniture/exp-08-tree-stump-feeding-table.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A wildwood nature furnishing for Dragonbound homes: tree stump feeding table.","tags":["feeding","food","inspectable"],"sort_order":3008},{"item_id":"exp-09-woven-willow-toy-basket","name":"Woven Willow Toy Basket","category":"Toys","collection_name":"Wildwood Nature","rarity":"Common","price":605,"sprite_path":"assets/dragonbound/furniture/exp-09-woven-willow-toy-basket.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A wildwood nature furnishing for Dragonbound homes: woven willow toy basket.","tags":["inspectable","nature","playable"],"sort_order":3009},{"item_id":"exp-10-pressed-leaf-wall-art","name":"Pressed Leaf Wall Art","category":"Decor","collection_name":"Wildwood Nature","rarity":"Crafted","price":810,"sprite_path":"assets/dragonbound/furniture/exp-10-pressed-leaf-wall-art.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A wildwood nature furnishing for Dragonbound homes: pressed leaf wall art.","tags":["inspectable","nature","wall-mounted"],"sort_order":3010},{"item_id":"exp-11-branch-resting-perch","name":"Branch Resting Perch","category":"Nature","collection_name":"Wildwood Nature","rarity":"Common","price":660,"sprite_path":"assets/dragonbound/furniture/exp-11-branch-resting-perch.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A wildwood nature furnishing for Dragonbound homes: branch resting perch.","tags":["comfortable","inspectable","nature","perchable","restable"],"sort_order":3011},{"item_id":"exp-12-indoor-grass-digging-patch","name":"Indoor Grass Digging Patch","category":"Nature","collection_name":"Wildwood Nature","rarity":"Rare","price":1100,"sprite_path":"assets/dragonbound/furniture/exp-12-indoor-grass-digging-patch.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A wildwood nature furnishing for Dragonbound homes: indoor grass digging patch.","tags":["diggable","inspectable","nature"],"sort_order":3012},{"item_id":"exp-13-rose-canopy-nest-bed","name":"Rose Canopy Nest Bed","category":"Beds","collection_name":"Moonpetal Collection","rarity":"Crafted","price":700,"sprite_path":"assets/dragonbound/furniture/exp-13-rose-canopy-nest-bed.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A moonpetal collection furnishing for Dragonbound homes: rose canopy nest bed.","tags":["comfortable","expensive","inspectable","sleepable"],"sort_order":3013},{"item_id":"exp-14-heart-scale-vanity-table","name":"Heart Scale Vanity Table","category":"Living","collection_name":"Moonpetal Collection","rarity":"Rare","price":960,"sprite_path":"assets/dragonbound/furniture/exp-14-heart-scale-vanity-table.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A moonpetal collection furnishing for Dragonbound homes: heart scale vanity table.","tags":["expensive","inspectable"],"sort_order":3014},{"item_id":"exp-15-oval-wing-dressing-mirror","name":"Oval Wing Dressing Mirror","category":"Decor","collection_name":"Moonpetal Collection","rarity":"Common","price":575,"sprite_path":"assets/dragonbound/furniture/exp-15-oval-wing-dressing-mirror.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A moonpetal collection furnishing for Dragonbound homes: oval wing dressing mirror.","tags":["expensive","inspectable","mirror"],"sort_order":3015},{"item_id":"exp-16-pastel-wing-handle-wardrobe","name":"Pastel Wing Handle Wardrobe","category":"Storage","collection_name":"Moonpetal Collection","rarity":"Epic","price":1345,"sprite_path":"assets/dragonbound/furniture/exp-16-pastel-wing-handle-wardrobe.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"A moonpetal collection furnishing for Dragonbound homes: pastel wing handle wardrobe.","tags":["expensive","hideable","inspectable"],"sort_order":3016},{"item_id":"exp-17-ribbon-trimmed-toy-chest","name":"Ribbon Trimmed Toy Chest","category":"Toys","collection_name":"Moonpetal Collection","rarity":"Common","price":490,"sprite_path":"assets/dragonbound/furniture/exp-17-ribbon-trimmed-toy-chest.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A moonpetal collection furnishing for Dragonbound homes: ribbon trimmed toy chest.","tags":["inspectable","playable"],"sort_order":3017},{"item_id":"exp-18-flower-shaped-floor-rug","name":"Flower Shaped Floor Rug","category":"Decor","collection_name":"Moonpetal Collection","rarity":"Crafted","price":700,"sprite_path":"assets/dragonbound/furniture/exp-18-flower-shaped-floor-rug.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A moonpetal collection furnishing for Dragonbound homes: flower shaped floor rug.","tags":["comfortable","inspectable","nature","restable"],"sort_order":3018},{"item_id":"exp-19-moon-stars-night-light","name":"Moon Stars Night Light","category":"Living","collection_name":"Moonpetal Collection","rarity":"Common","price":550,"sprite_path":"assets/dragonbound/furniture/exp-19-moon-stars-night-light.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A moonpetal collection furnishing for Dragonbound homes: moon stars night light.","tags":["inspectable","warm"],"sort_order":3019},{"item_id":"exp-20-jewel-display-pedestal","name":"Jewel Display Pedestal","category":"Decor","collection_name":"Moonpetal Collection","rarity":"Rare","price":1125,"sprite_path":"assets/dragonbound/furniture/exp-20-jewel-display-pedestal.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A moonpetal collection furnishing for Dragonbound homes: jewel display pedestal.","tags":["expensive","inspectable"],"sort_order":3020},{"item_id":"exp-21-tasseled-dragon-floor-cushion","name":"Tasseled Dragon Floor Cushion","category":"Living","collection_name":"Moonpetal Collection","rarity":"Crafted","price":785,"sprite_path":"assets/dragonbound/furniture/exp-21-tasseled-dragon-floor-cushion.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A moonpetal collection furnishing for Dragonbound homes: tasseled dragon floor cushion.","tags":["comfortable","inspectable","restable"],"sort_order":3021},{"item_id":"exp-22-dragon-treat-party-table","name":"Dragon Treat Party Table","category":"Feeding","collection_name":"Moonpetal Collection","rarity":"Rare","price":1040,"sprite_path":"assets/dragonbound/furniture/exp-22-dragon-treat-party-table.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A moonpetal collection furnishing for Dragonbound homes: dragon treat party table.","tags":["feeding","food","inspectable"],"sort_order":3022},{"item_id":"exp-23-cloud-shaped-bookshelf","name":"Cloud Shaped Bookshelf","category":"Storage","collection_name":"Moonpetal Collection","rarity":"Common","price":660,"sprite_path":"assets/dragonbound/furniture/exp-23-cloud-shaped-bookshelf.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A moonpetal collection furnishing for Dragonbound homes: cloud shaped bookshelf.","tags":["inspectable","reading"],"sort_order":3023},{"item_id":"exp-24-flower-moon-wall-garland","name":"Flower Moon Wall Garland","category":"Decor","collection_name":"Moonpetal Collection","rarity":"Epic","price":1430,"sprite_path":"assets/dragonbound/furniture/exp-24-flower-moon-wall-garland.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A moonpetal collection furnishing for Dragonbound homes: flower moon wall garland.","tags":["inspectable","nature","wall-mounted"],"sort_order":3024},{"item_id":"exp-25-riveted-iron-dragon-bunk","name":"Riveted Iron Dragon Bunk","category":"Beds","collection_name":"Ironkeep Collection","rarity":"Common","price":380,"sprite_path":"assets/dragonbound/furniture/exp-25-riveted-iron-dragon-bunk.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A ironkeep collection furnishing for Dragonbound homes: riveted iron dragon bunk.","tags":["comfortable","inspectable","sleepable"],"sort_order":3025},{"item_id":"exp-26-dark-leather-dragon-lounger","name":"Dark Leather Dragon Lounger","category":"Living","collection_name":"Ironkeep Collection","rarity":"Crafted","price":590,"sprite_path":"assets/dragonbound/furniture/exp-26-dark-leather-dragon-lounger.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A ironkeep collection furnishing for Dragonbound homes: dark leather dragon lounger.","tags":["comfortable","inspectable","restable"],"sort_order":3026},{"item_id":"exp-27-heavy-ironbound-storage-chest","name":"Heavy Ironbound Storage Chest","category":"Storage","collection_name":"Ironkeep Collection","rarity":"Common","price":435,"sprite_path":"assets/dragonbound/furniture/exp-27-heavy-ironbound-storage-chest.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A ironkeep collection furnishing for Dragonbound homes: heavy ironbound storage chest.","tags":["hideable","inspectable"],"sort_order":3027},{"item_id":"exp-28-barrel-hydration-station","name":"Barrel Hydration Station","category":"Feeding","collection_name":"Ironkeep Collection","rarity":"Rare","price":875,"sprite_path":"assets/dragonbound/furniture/exp-28-barrel-hydration-station.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A ironkeep collection furnishing for Dragonbound homes: barrel hydration station.","tags":["drink","hydration","inspectable"],"sort_order":3028},{"item_id":"exp-29-protected-forge-heat-lamp","name":"Protected Forge Heat Lamp","category":"Decor","collection_name":"Ironkeep Collection","rarity":"Crafted","price":670,"sprite_path":"assets/dragonbound/furniture/exp-29-protected-forge-heat-lamp.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A ironkeep collection furnishing for Dragonbound homes: protected forge heat lamp.","tags":["inspectable","warm"],"sort_order":3029},{"item_id":"exp-30-crossed-shield-wall-display","name":"Crossed Shield Wall Display","category":"Decor","collection_name":"Ironkeep Collection","rarity":"Rare","price":930,"sprite_path":"assets/dragonbound/furniture/exp-30-crossed-shield-wall-display.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A ironkeep collection furnishing for Dragonbound homes: crossed shield wall display.","tags":["inspectable","wall-mounted"],"sort_order":3030},{"item_id":"exp-31-race-trophy-and-medal-shelf","name":"Race Trophy and Medal Shelf","category":"Storage","collection_name":"Ironkeep Collection","rarity":"Common","price":690,"sprite_path":"assets/dragonbound/furniture/exp-31-race-trophy-and-medal-shelf.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A ironkeep collection furnishing for Dragonbound homes: race trophy and medal shelf.","tags":["expensive","inspectable","wall-mounted"],"sort_order":3031},{"item_id":"exp-32-stone-and-iron-tool-cabinet","name":"Stone and Iron Tool Cabinet","category":"Storage","collection_name":"Ironkeep Collection","rarity":"Epic","price":1315,"sprite_path":"assets/dragonbound/furniture/exp-32-stone-and-iron-tool-cabinet.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A ironkeep collection furnishing for Dragonbound homes: stone iron tool cabinet.","tags":["hideable","inspectable"],"sort_order":3032},{"item_id":"exp-33-velmora-map-table","name":"Velmora Map Table","category":"Living","collection_name":"Ironkeep Collection","rarity":"Common","price":605,"sprite_path":"assets/dragonbound/furniture/exp-33-velmora-map-table.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A ironkeep collection furnishing for Dragonbound homes: velmora map table.","tags":["inspectable"],"sort_order":3033},{"item_id":"exp-34-heavy-chain-tug-post","name":"Heavy Chain Tug Post","category":"Toys","collection_name":"Ironkeep Collection","rarity":"Crafted","price":810,"sprite_path":"assets/dragonbound/furniture/exp-34-heavy-chain-tug-post.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A ironkeep collection furnishing for Dragonbound homes: heavy chain tug post.","tags":["inspectable","playable","tug"],"sort_order":3034},{"item_id":"exp-35-boulder-scratching-pillar","name":"Boulder Scratching Pillar","category":"Care","collection_name":"Ironkeep Collection","rarity":"Common","price":660,"sprite_path":"assets/dragonbound/furniture/exp-35-boulder-scratching-pillar.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A ironkeep collection furnishing for Dragonbound homes: boulder scratching pillar.","tags":["inspectable","scratchable"],"sort_order":3035},{"item_id":"exp-36-black-iron-floor-lantern","name":"Black Iron Floor Lantern","category":"Decor","collection_name":"Ironkeep Collection","rarity":"Rare","price":1100,"sprite_path":"assets/dragonbound/furniture/exp-36-black-iron-floor-lantern.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A ironkeep collection furnishing for Dragonbound homes: black iron floor lantern.","tags":["inspectable","warm"],"sort_order":3036},{"item_id":"exp-37-claw-safe-dragon-treadmill","name":"Claw Safe Dragon Treadmill","category":"Training","collection_name":"Dragon Training Hall","rarity":"Crafted","price":650,"sprite_path":"assets/dragonbound/furniture/exp-37-claw-safe-dragon-treadmill.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A dragon training hall furnishing for Dragonbound homes: claw safe dragon treadmill.","tags":["exercise","inspectable","training"],"sort_order":3037},{"item_id":"exp-38-wing-resistance-pulley","name":"Wing Resistance Pulley","category":"Training","collection_name":"Dragon Training Hall","rarity":"Rare","price":910,"sprite_path":"assets/dragonbound/furniture/exp-38-wing-resistance-pulley.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A dragon training hall furnishing for Dragonbound homes: wing resistance pulley.","tags":["exercise","inspectable","training"],"sort_order":3038},{"item_id":"exp-39-stone-dumbbell-rack","name":"Stone Dumbbell Rack","category":"Training","collection_name":"Dragon Training Hall","rarity":"Common","price":525,"sprite_path":"assets/dragonbound/furniture/exp-39-stone-dumbbell-rack.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A dragon training hall furnishing for Dragonbound homes: stone dumbbell rack.","tags":["exercise","inspectable","training"],"sort_order":3039},{"item_id":"exp-40-tail-strength-cable-machine","name":"Tail Strength Cable Machine","category":"Training","collection_name":"Dragon Training Hall","rarity":"Epic","price":1295,"sprite_path":"assets/dragonbound/furniture/exp-40-tail-strength-cable-machine.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A dragon training hall furnishing for Dragonbound homes: tail strength cable machine.","tags":["exercise","inspectable","training"],"sort_order":3040},{"item_id":"exp-41-wall-climbing-panel","name":"Wall Climbing Panel","category":"Training","collection_name":"Dragon Training Hall","rarity":"Common","price":580,"sprite_path":"assets/dragonbound/furniture/exp-41-wall-climbing-panel.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A dragon training hall furnishing for Dragonbound homes: wall climbing panel.","tags":["climbable","exercise","inspectable","training","wall-mounted"],"sort_order":3041},{"item_id":"exp-42-protected-hover-practice-fan","name":"Protected Hover Practice Fan","category":"Training","collection_name":"Dragon Training Hall","rarity":"Crafted","price":1120,"sprite_path":"assets/dragonbound/furniture/exp-42-protected-hover-practice-fan.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A dragon training hall furnishing for Dragonbound homes: protected hover practice fan.","tags":["exercise","flight-practice","inspectable","noisy","training"],"sort_order":3042},{"item_id":"exp-43-padded-punching-bag","name":"Padded Punching Bag","category":"Training","collection_name":"Dragon Training Hall","rarity":"Common","price":640,"sprite_path":"assets/dragonbound/furniture/exp-43-padded-punching-bag.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A dragon training hall furnishing for Dragonbound homes: padded punching bag.","tags":["exercise","inspectable","training"],"sort_order":3043},{"item_id":"exp-44-agility-weave-poles","name":"Agility Weave Poles","category":"Training","collection_name":"Dragon Training Hall","rarity":"Rare","price":1075,"sprite_path":"assets/dragonbound/furniture/exp-44-agility-weave-poles.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A dragon training hall furnishing for Dragonbound homes: agility weave poles.","tags":["agility","exercise","inspectable","training"],"sort_order":3044},{"item_id":"exp-45-wobble-balance-board","name":"Wobble Balance Board","category":"Training","collection_name":"Dragon Training Hall","rarity":"Crafted","price":875,"sprite_path":"assets/dragonbound/furniture/exp-45-wobble-balance-board.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A dragon training hall furnishing for Dragonbound homes: wobble balance board.","tags":["agility","exercise","inspectable","training"],"sort_order":3045},{"item_id":"exp-46-dragon-stretching-mat","name":"Dragon Stretching Mat","category":"Training","collection_name":"Dragon Training Hall","rarity":"Rare","price":1130,"sprite_path":"assets/dragonbound/furniture/exp-46-dragon-stretching-mat.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A dragon training hall furnishing for Dragonbound homes: dragon stretching mat.","tags":["comfortable","exercise","inspectable","restable","training"],"sort_order":3046},{"item_id":"exp-47-recovery-ice-bath","name":"Recovery Ice Bath","category":"Bath","collection_name":"Dragon Training Hall","rarity":"Common","price":660,"sprite_path":"assets/dragonbound/furniture/exp-47-recovery-ice-bath.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A dragon training hall furnishing for Dragonbound homes: recovery ice bath.","tags":["care","groomable","inspectable","washable"],"sort_order":3047},{"item_id":"exp-48-gym-hydration-and-towel-station","name":"Gym Hydration and Towel Station","category":"Feeding","collection_name":"Dragon Training Hall","rarity":"Epic","price":1480,"sprite_path":"assets/dragonbound/furniture/exp-48-gym-hydration-and-towel-station.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A dragon training hall furnishing for Dragonbound homes: gym hydration towel station.","tags":["drink","hydration","inspectable"],"sort_order":3048},{"item_id":"exp-49-tail-gap-dragon-sofa","name":"Tail Gap Dragon Sofa","category":"Living","collection_name":"Keeper’s Everyday","rarity":"Common","price":380,"sprite_path":"assets/dragonbound/furniture/exp-49-tail-gap-dragon-sofa.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A keeper’s everyday furnishing for Dragonbound homes: tail gap dragon sofa.","tags":["comfortable","inspectable","restable"],"sort_order":3049},{"item_id":"exp-50-round-drawer-side-table","name":"Round Drawer Side Table","category":"Living","collection_name":"Keeper’s Everyday","rarity":"Crafted","price":590,"sprite_path":"assets/dragonbound/furniture/exp-50-round-drawer-side-table.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A keeper’s everyday furnishing for Dragonbound homes: round drawer side table.","tags":["inspectable"],"sort_order":3050},{"item_id":"exp-51-low-dining-and-feeding-table","name":"Low Dining and Feeding Table","category":"Feeding","collection_name":"Keeper’s Everyday","rarity":"Common","price":435,"sprite_path":"assets/dragonbound/furniture/exp-51-low-dining-and-feeding-table.png","footprint_w":4,"footprint_h":1,"clearance":"Wide","description":"A keeper’s everyday furnishing for Dragonbound homes: low dining feeding table.","tags":["feeding","food","inspectable"],"sort_order":3051},{"item_id":"exp-52-dragon-tail-floor-lamp","name":"Dragon Tail Floor Lamp","category":"Decor","collection_name":"Keeper’s Everyday","rarity":"Rare","price":875,"sprite_path":"assets/dragonbound/furniture/exp-52-dragon-tail-floor-lamp.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"A keeper’s everyday furnishing for Dragonbound homes: dragon tail floor lamp.","tags":["inspectable","warm"],"sort_order":3052},{"item_id":"exp-53-dragon-egg-wall-clock","name":"Dragon Egg Wall Clock","category":"Decor","collection_name":"Keeper’s Everyday","rarity":"Crafted","price":670,"sprite_path":"assets/dragonbound/furniture/exp-53-dragon-egg-wall-clock.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"A keeper’s everyday furnishing for Dragonbound homes: dragon egg wall clock.","tags":["inspectable","wall-mounted"],"sort_order":3053},{"item_id":"exp-54-wall-flat-curtains","name":"Wall Flat Curtains","category":"Decor","collection_name":"Keeper’s Everyday","rarity":"Rare","price":930,"sprite_path":"assets/dragonbound/furniture/exp-54-wall-flat-curtains.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A keeper’s everyday furnishing for Dragonbound homes: wall flat curtains.","tags":["inspectable","wall-mounted","window"],"sort_order":3054},{"item_id":"exp-55-harness-and-rain-cape-rack","name":"Harness and Rain Cape Rack","category":"Storage","collection_name":"Keeper’s Everyday","rarity":"Common","price":550,"sprite_path":"assets/dragonbound/furniture/exp-55-harness-and-rain-cape-rack.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A keeper’s everyday furnishing for Dragonbound homes: harness and rain cape rack.","tags":["inspectable","wall-mounted"],"sort_order":3055},{"item_id":"exp-56-dragon-medicine-cabinet","name":"Dragon Medicine Cabinet","category":"Care","collection_name":"Keeper’s Everyday","rarity":"Epic","price":1315,"sprite_path":"assets/dragonbound/furniture/exp-56-dragon-medicine-cabinet.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A keeper’s everyday furnishing for Dragonbound homes: dragon medicine cabinet.","tags":["care","inspectable","wall-mounted"],"sort_order":3056},{"item_id":"exp-57-blanket-and-laundry-basket","name":"Blanket and Laundry Basket","category":"Storage","collection_name":"Keeper’s Everyday","rarity":"Common","price":605,"sprite_path":"assets/dragonbound/furniture/exp-57-blanket-and-laundry-basket.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"A keeper’s everyday furnishing for Dragonbound homes: blanket laundry basket.","tags":["hideable","inspectable"],"sort_order":3057},{"item_id":"exp-58-dragon-wing-fireplace-guard","name":"Dragon Wing Fireplace Guard","category":"Living","collection_name":"Keeper’s Everyday","rarity":"Crafted","price":810,"sprite_path":"assets/dragonbound/furniture/exp-58-dragon-wing-fireplace-guard.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A keeper’s everyday furnishing for Dragonbound homes: dragon wing fireplace guard.","tags":["inspectable","warm"],"sort_order":3058},{"item_id":"exp-59-mismatched-floor-cushions","name":"Mismatched Floor Cushions","category":"Living","collection_name":"Keeper’s Everyday","rarity":"Common","price":660,"sprite_path":"assets/dragonbound/furniture/exp-59-mismatched-floor-cushions.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A keeper’s everyday furnishing for Dragonbound homes: mismatched floor cushions.","tags":["comfortable","inspectable","restable"],"sort_order":3059},{"item_id":"exp-60-toy-and-supplies-shelf","name":"Toy and Supplies Shelf","category":"Toys","collection_name":"Keeper’s Everyday","rarity":"Rare","price":1100,"sprite_path":"assets/dragonbound/furniture/exp-60-toy-and-supplies-shelf.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"A keeper’s everyday furnishing for Dragonbound homes: toy and supplies shelf.","tags":["inspectable","playable"],"sort_order":3060},{"item_id":"exp2-001-gilded-royal-nest-throne","name":"Gilded Royal Nest Throne","category":"Beds","collection_name":"Royal & Luxury","rarity":"Epic","price":950,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/01_gilded_royal_nest_throne.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Gilded Royal Nest Throne, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","comfortable","restable","sleepable","expensive"],"sort_order":4001},{"item_id":"exp2-002-burgundy-velvet-dragon-chaise","name":"Burgundy Velvet Dragon Chaise","category":"Living","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/02_burgundy_velvet_dragon_chaise.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Burgundy Velvet Dragon Chaise, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","comfortable","restable","sleepable","expensive"],"sort_order":4002},{"item_id":"exp2-003-marble-gold-feeding-station","name":"Marble Gold Feeding Station","category":"Feeding","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/03_marble_gold_feeding_station.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Marble Gold Feeding Station, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","food","expensive"],"sort_order":4003},{"item_id":"exp2-004-crown-egg-stained-glass-panel","name":"Crown Egg Stained-Glass Panel","category":"Decor","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/04_crown_egg_stained_glass_panel.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Crown Egg Stained-Glass Panel, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","expensive","wall-mounted"],"sort_order":4004},{"item_id":"exp2-005-royal-dragon-crest-tapestry","name":"Royal Dragon-Crest Tapestry","category":"Decor","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/05_royal_dragon_crest_tapestry.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Royal Dragon-Crest Tapestry, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","expensive","wall-mounted"],"sort_order":4005},{"item_id":"exp2-006-ornate-treasure-cabinet","name":"Ornate Treasure Cabinet","category":"Storage","collection_name":"Royal & Luxury","rarity":"Epic","price":950,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/06_ornate_treasure_cabinet.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Ornate Treasure Cabinet, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","hoardable","expensive"],"sort_order":4006},{"item_id":"exp2-007-padded-royal-room-divider","name":"Padded Royal Room Divider","category":"Decor","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/07_padded_royal_room_divider.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Padded Royal Room Divider, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","expensive"],"sort_order":4007},{"item_id":"exp2-008-crown-wings-luxury-rug","name":"Crown Wings Luxury Rug","category":"Decor","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/08_crown_wings_luxury_rug.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Crown Wings Luxury Rug, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","expensive"],"sort_order":4008},{"item_id":"exp2-009-velvet-rope-egg-pedestal","name":"Velvet Rope Egg Pedestal","category":"Decor","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/09_velvet_rope_egg_pedestal.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Velvet Rope Egg Pedestal, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","expensive"],"sort_order":4009},{"item_id":"exp2-010-crystal-chandelier-fixture","name":"Crystal Chandelier Fixture","category":"Decor","collection_name":"Royal & Luxury","rarity":"Epic","price":950,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/10_crystal_chandelier_fixture.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Crystal Chandelier Fixture, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","expensive","wall-mounted"],"sort_order":4010},{"item_id":"exp2-011-caged-warming-lamp-cushion","name":"Caged Warming Lamp Cushion","category":"Beds","collection_name":"Royal & Luxury","rarity":"Rare","price":700,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/11_caged_warming_lamp_cushion.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Caged Warming Lamp Cushion, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","comfortable","restable","sleepable","warm","expensive"],"sort_order":4011},{"item_id":"exp2-012-race-ribbon-display-case","name":"Race Ribbon Display Case","category":"Storage","collection_name":"Royal & Luxury","rarity":"Epic","price":950,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/12_race_ribbon_display_case.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Race Ribbon Display Case, part of the Dragonbound Royal & Luxury collection.","tags":["inspectable","hoardable","expensive"],"sort_order":4012},{"item_id":"exp2-013-hovering-rune-sleep-cushion","name":"Hovering Rune Sleep Cushion","category":"Beds","collection_name":"Magical Study","rarity":"Rare","price":650,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/13_hovering_rune_sleep_cushion.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Hovering Rune Sleep Cushion, part of the Dragonbound Magical Study collection.","tags":["inspectable","comfortable","restable","sleepable"],"sort_order":4013},{"item_id":"exp2-014-crystal-resonance-toy","name":"Crystal Resonance Toy","category":"Toys","collection_name":"Magical Study","rarity":"Crafted","price":475,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/14_crystal_resonance_toy.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Crystal Resonance Toy, part of the Dragonbound Magical Study collection.","tags":["inspectable","playable"],"sort_order":4014},{"item_id":"exp2-015-rune-learning-board","name":"Rune Learning Board","category":"Training","collection_name":"Magical Study","rarity":"Crafted","price":475,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/15_rune_learning_board.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Rune Learning Board, part of the Dragonbound Magical Study collection.","tags":["inspectable","training","wall-mounted"],"sort_order":4015},{"item_id":"exp2-016-potion-herb-cabinet","name":"Potion Herb Cabinet","category":"Storage","collection_name":"Magical Study","rarity":"Crafted","price":475,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/16_potion_herb_cabinet.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Potion Herb Cabinet, part of the Dragonbound Magical Study collection.","tags":["inspectable","sniffable"],"sort_order":4016},{"item_id":"exp2-017-spellbook-lectern","name":"Spellbook Lectern","category":"Living","collection_name":"Magical Study","rarity":"Crafted","price":475,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/17_spellbook_lectern.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Spellbook Lectern, part of the Dragonbound Magical Study collection.","tags":["inspectable","reading"],"sort_order":4017},{"item_id":"exp2-018-crystal-mana-fountain","name":"Crystal Mana Fountain","category":"Nature","collection_name":"Magical Study","rarity":"Rare","price":650,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/18_crystal_mana_fountain.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Crystal Mana Fountain, part of the Dragonbound Magical Study collection.","tags":["inspectable"],"sort_order":4018},{"item_id":"exp2-019-star-projector-lantern","name":"Star Projector Lantern","category":"Decor","collection_name":"Magical Study","rarity":"Crafted","price":475,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/19_star_projector_lantern.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Star Projector Lantern, part of the Dragonbound Magical Study collection.","tags":["inspectable","wall-mounted"],"sort_order":4019},{"item_id":"exp2-020-padded-rune-crawl-tunnel","name":"Padded Rune Crawl Tunnel","category":"Toys","collection_name":"Magical Study","rarity":"Crafted","price":475,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/20_padded_rune_crawl_tunnel.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Padded Rune Crawl Tunnel, part of the Dragonbound Magical Study collection.","tags":["inspectable","playable","climbable","hideable"],"sort_order":4020},{"item_id":"exp2-021-enchanted-dragon-music-box","name":"Enchanted Dragon Music Box","category":"Toys","collection_name":"Magical Study","rarity":"Crafted","price":475,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/21_enchanted_dragon_music_box.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Enchanted Dragon Music Box, part of the Dragonbound Magical Study collection.","tags":["inspectable","playable","noisy"],"sort_order":4021},{"item_id":"exp2-022-scrying-basin","name":"Scrying Basin","category":"Living","collection_name":"Magical Study","rarity":"Rare","price":650,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/22_scrying_basin.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Scrying Basin, part of the Dragonbound Magical Study collection.","tags":["inspectable"],"sort_order":4022},{"item_id":"exp2-023-magical-crystal-terrarium","name":"Magical Crystal Terrarium","category":"Nature","collection_name":"Magical Study","rarity":"Rare","price":650,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/23_magical_crystal_terrarium.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Magical Crystal Terrarium, part of the Dragonbound Magical Study collection.","tags":["inspectable","nature"],"sort_order":4023},{"item_id":"exp2-024-rune-heating-stone-platform","name":"Rune Heating Stone Platform","category":"Living","collection_name":"Magical Study","rarity":"Rare","price":650,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/24_rune_heating_stone_platform.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Rune Heating Stone Platform, part of the Dragonbound Magical Study collection.","tags":["inspectable","warm"],"sort_order":4024},{"item_id":"exp2-025-heated-massage-nest","name":"Heated Massage Nest","category":"Care","collection_name":"Spa & Care","rarity":"Rare","price":625,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/25_heated_massage_nest.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Heated Massage Nest, part of the Dragonbound Spa & Care collection.","tags":["inspectable","comfortable","restable","sleepable","warm"],"sort_order":4025},{"item_id":"exp2-026-rainfall-rinse-arch","name":"Rainfall Rinse Arch","category":"Bath","collection_name":"Spa & Care","rarity":"Rare","price":625,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/26_rainfall_rinse_arch.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Rainfall Rinse Arch, part of the Dragonbound Spa & Care collection.","tags":["inspectable","washable"],"sort_order":4026},{"item_id":"exp2-027-scale-scrub-bath","name":"Scale Scrub Bath","category":"Bath","collection_name":"Spa & Care","rarity":"Rare","price":625,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/27_scale_scrub_bath.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Scale Scrub Bath, part of the Dragonbound Spa & Care collection.","tags":["inspectable","washable"],"sort_order":4027},{"item_id":"exp2-028-mineral-mud-bathing-pit","name":"Mineral Mud Bathing Pit","category":"Bath","collection_name":"Spa & Care","rarity":"Rare","price":625,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/28_mineral_mud_bathing_pit.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Mineral Mud Bathing Pit, part of the Dragonbound Spa & Care collection.","tags":["inspectable","washable","sandbath"],"sort_order":4028},{"item_id":"exp2-029-enclosed-steam-bench","name":"Enclosed Steam Bench","category":"Bath","collection_name":"Spa & Care","rarity":"Rare","price":625,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/29_enclosed_steam_bench.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Enclosed Steam Bench, part of the Dragonbound Spa & Care collection.","tags":["inspectable","comfortable","restable","washable"],"sort_order":4029},{"item_id":"exp2-030-towel-warming-cabinet","name":"Towel Warming Cabinet","category":"Storage","collection_name":"Spa & Care","rarity":"Crafted","price":425,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/30_towel_warming_cabinet.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Towel Warming Cabinet, part of the Dragonbound Spa & Care collection.","tags":["inspectable","warm","groomable"],"sort_order":4030},{"item_id":"exp2-031-claw-filing-station","name":"Claw Filing Station","category":"Care","collection_name":"Spa & Care","rarity":"Crafted","price":425,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/31_claw_filing_station.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Claw Filing Station, part of the Dragonbound Spa & Care collection.","tags":["inspectable","groomable"],"sort_order":4031},{"item_id":"exp2-032-horn-polishing-stand","name":"Horn Polishing Stand","category":"Care","collection_name":"Spa & Care","rarity":"Crafted","price":425,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/32_horn_polishing_stand.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Horn Polishing Stand, part of the Dragonbound Spa & Care collection.","tags":["inspectable","groomable"],"sort_order":4032},{"item_id":"exp2-033-tail-soaking-trough","name":"Tail Soaking Trough","category":"Bath","collection_name":"Spa & Care","rarity":"Crafted","price":425,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/33_tail_soaking_trough.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Tail Soaking Trough, part of the Dragonbound Spa & Care collection.","tags":["inspectable","washable"],"sort_order":4033},{"item_id":"exp2-034-warm-air-drying-fan","name":"Warm-Air Drying Fan","category":"Care","collection_name":"Spa & Care","rarity":"Crafted","price":425,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/34_warm_air_drying_fan.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Warm-Air Drying Fan, part of the Dragonbound Spa & Care collection.","tags":["inspectable","groomable"],"sort_order":4034},{"item_id":"exp2-035-spa-privacy-screen","name":"Spa Privacy Screen","category":"Decor","collection_name":"Spa & Care","rarity":"Crafted","price":425,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/35_spa_privacy_screen.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Spa Privacy Screen, part of the Dragonbound Spa & Care collection.","tags":["inspectable"],"sort_order":4035},{"item_id":"exp2-036-wheeled-grooming-cart","name":"Wheeled Grooming Cart","category":"Care","collection_name":"Spa & Care","rarity":"Crafted","price":425,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/36_wheeled_grooming_cart.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Wheeled Grooming Cart, part of the Dragonbound Spa & Care collection.","tags":["inspectable","groomable"],"sort_order":4036},{"item_id":"exp2-037-dragon-ball-pit","name":"Dragon Ball Pit","category":"Toys","collection_name":"Toys & Play","rarity":"Rare","price":525,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/37_dragon_ball_pit.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Dragon Ball Pit, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable"],"sort_order":4037},{"item_id":"exp2-038-sleeping-dragon-crawl-tunnel","name":"Sleeping Dragon Crawl Tunnel","category":"Toys","collection_name":"Toys & Play","rarity":"Common","price":275,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/38_sleeping_dragon_crawl_tunnel.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Sleeping Dragon Crawl Tunnel, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable","climbable","hideable"],"sort_order":4038},{"item_id":"exp2-039-baby-dragon-seesaw","name":"Baby-Dragon Seesaw","category":"Toys","collection_name":"Toys & Play","rarity":"Common","price":275,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/39_baby_dragon_seesaw.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Baby-Dragon Seesaw, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable","exercise","training","agility"],"sort_order":4039},{"item_id":"exp2-040-indoor-scale-slide","name":"Indoor Scale Slide","category":"Toys","collection_name":"Toys & Play","rarity":"Common","price":275,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/40_indoor_scale_slide.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Indoor Scale Slide, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable","exercise","training","agility","climbable"],"sort_order":4040},{"item_id":"exp2-041-castle-building-block-tray","name":"Castle Building-Block Tray","category":"Toys","collection_name":"Toys & Play","rarity":"Common","price":275,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/41_castle_building_block_tray.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Castle Building-Block Tray, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable"],"sort_order":4041},{"item_id":"exp2-042-dragon-music-corner","name":"Dragon Music Corner","category":"Toys","collection_name":"Toys & Play","rarity":"Common","price":275,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/42_dragon_music_corner.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Dragon Music Corner, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable","noisy"],"sort_order":4042},{"item_id":"exp2-043-sliding-puzzle-feeder","name":"Sliding Puzzle Feeder","category":"Feeding","collection_name":"Toys & Play","rarity":"Common","price":275,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/43_sliding_puzzle_feeder.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Sliding Puzzle Feeder, part of the Dragonbound Toys & Play collection.","tags":["inspectable","puzzle","playable","food"],"sort_order":4043},{"item_id":"exp2-044-dragon-puppet-theatre","name":"Dragon Puppet Theatre","category":"Toys","collection_name":"Toys & Play","rarity":"Rare","price":525,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/44_dragon_puppet_theatre.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Dragon Puppet Theatre, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable"],"sort_order":4044},{"item_id":"exp2-045-treasure-hunt-maze-table","name":"Treasure-Hunt Maze Table","category":"Toys","collection_name":"Toys & Play","rarity":"Rare","price":525,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/45_treasure_hunt_maze_table.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Treasure-Hunt Maze Table, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable","puzzle","hoardable"],"sort_order":4045},{"item_id":"exp2-046-magical-fish-bubble-maker","name":"Magical Fish Bubble Maker","category":"Toys","collection_name":"Toys & Play","rarity":"Rare","price":525,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/46_magical_fish_bubble_maker.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Magical Fish Bubble Maker, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable"],"sort_order":4046},{"item_id":"exp2-047-rocking-wyvern-toy","name":"Rocking Wyvern Toy","category":"Toys","collection_name":"Toys & Play","rarity":"Common","price":275,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/47_rocking_wyvern_toy.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Rocking Wyvern Toy, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable"],"sort_order":4047},{"item_id":"exp2-048-miniature-dragon-bowling-lane","name":"Miniature Dragon Bowling Lane","category":"Toys","collection_name":"Toys & Play","rarity":"Rare","price":525,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/48_miniature_dragon_bowling_lane.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Miniature Dragon Bowling Lane, part of the Dragonbound Toys & Play collection.","tags":["inspectable","playable"],"sort_order":4048},{"item_id":"exp2-049-vardesh-fjord-ice-cooling-bed","name":"Vardesh Fjord-Ice Cooling Bed","category":"Beds","collection_name":"Velmora Regional","rarity":"Epic","price":875,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/49_vardesh_fjord_ice_cooling_bed.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Vardesh Fjord-Ice Cooling Bed, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","comfortable","restable","sleepable","nature"],"sort_order":4049},{"item_id":"exp2-050-lumerre-silk-lounging-canopy","name":"Lumerre Silk Lounging Canopy","category":"Living","collection_name":"Velmora Regional","rarity":"Rare","price":675,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/50_lumerre_silk_lounging_canopy.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Lumerre Silk Lounging Canopy, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","comfortable","restable","sleepable"],"sort_order":4050},{"item_id":"exp2-051-kordesh-stone-feeding-altar","name":"Kordesh Stone Feeding Altar","category":"Feeding","collection_name":"Velmora Regional","rarity":"Rare","price":675,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/51_kordesh_stone_feeding_altar.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Kordesh Stone Feeding Altar, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","food"],"sort_order":4051},{"item_id":"exp2-052-nambara-woven-reed-basket","name":"Nambara Woven-Reed Basket","category":"Storage","collection_name":"Velmora Regional","rarity":"Rare","price":675,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/52_nambara_woven_reed_basket.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Nambara Woven-Reed Basket, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","nature"],"sort_order":4052},{"item_id":"exp2-053-norveth-fur-warming-den","name":"Norveth Fur Warming Den","category":"Beds","collection_name":"Velmora Regional","rarity":"Rare","price":675,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/53_norveth_fur_warming_den.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Norveth Fur Warming Den, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","comfortable","restable","sleepable","warm"],"sort_order":4053},{"item_id":"exp2-054-zafran-sun-mosaic-fountain","name":"Zafran Sun-Mosaic Fountain","category":"Nature","collection_name":"Velmora Regional","rarity":"Epic","price":875,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/54_zafran_sun_mosaic_fountain.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Zafran Sun-Mosaic Fountain, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","drink","hydration","nature"],"sort_order":4054},{"item_id":"exp2-055-elvane-living-willow-bookshelf","name":"Elvane Living-Willow Bookshelf","category":"Nature","collection_name":"Velmora Regional","rarity":"Epic","price":875,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/55_elvane_living_willow_bookshelf.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Elvane Living-Willow Bookshelf, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","reading","nature"],"sort_order":4055},{"item_id":"exp2-056-qasmir-star-lantern-screen","name":"Qasmir Star-Lantern Screen","category":"Decor","collection_name":"Velmora Regional","rarity":"Rare","price":675,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/56_qasmir_star_lantern_screen.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Qasmir Star-Lantern Screen, part of the Dragonbound Velmora Regional collection.","tags":["inspectable"],"sort_order":4056},{"item_id":"exp2-057-calvora-tiled-sun-couch","name":"Calvora Tiled Sun Couch","category":"Living","collection_name":"Velmora Regional","rarity":"Rare","price":675,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/57_calvora_tiled_sun_couch.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Calvora Tiled Sun Couch, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","comfortable","restable"],"sort_order":4057},{"item_id":"exp2-058-talune-shell-driftwood-rocker","name":"Talune Shell Driftwood Rocker","category":"Living","collection_name":"Velmora Regional","rarity":"Rare","price":675,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/58_talune_shell_driftwood_rocker.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Talune Shell Driftwood Rocker, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","comfortable","restable","sleepable","nature"],"sort_order":4058},{"item_id":"exp2-059-drazhen-volcanic-warming-rock","name":"Drazhen Volcanic Warming Rock","category":"Nature","collection_name":"Velmora Regional","rarity":"Epic","price":875,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/59_drazhen_volcanic_warming_rock.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Drazhen Volcanic Warming Rock, part of the Dragonbound Velmora Regional collection.","tags":["inspectable","warm","nature"],"sort_order":4059},{"item_id":"exp2-060-iskandar-celestial-map-cabinet","name":"Iskandar Celestial Map Cabinet","category":"Storage","collection_name":"Velmora Regional","rarity":"Epic","price":875,"sprite_path":"assets/dragonbound/furniture/v3266/expansion-two/60_iskandar_celestial_map_cabinet.png","footprint_w":1,"footprint_h":1,"clearance":"Standard","description":"Iskandar Celestial Map Cabinet, part of the Dragonbound Velmora Regional collection.","tags":["inspectable"],"sort_order":4060},{"item_id":"personality-001-shy-dragon-hideaway","name":"Shy Dragon Hideaway","category":"Beds","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/01_shy_dragon_hideaway.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Shy Dragon Hideaway, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","hideable","comfortable","sleepable"],"sort_order":4101},{"item_id":"personality-002-mischief-cupboard","name":"Mischief Cupboard","category":"Storage","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/02_mischief_cupboard.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Mischief Cupboard, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","hoardable","playable"],"sort_order":4102},{"item_id":"personality-003-treasure-sorting-table","name":"Treasure Sorting Table","category":"Storage","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/03_treasure_sorting_table.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Treasure Sorting Table, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","puzzle","playable","hoardable"],"sort_order":4103},{"item_id":"personality-004-book-reading-nest","name":"Book Reading Nest","category":"Beds","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/04_book_reading_nest.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Book Reading Nest, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","comfortable","restable","sleepable","reading"],"sort_order":4104},{"item_id":"personality-005-painting-easel-messy-paint-tray","name":"Painting Easel & Messy Paint Tray","category":"Living","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/05_painting_easel_and_messy_paint_tray.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Painting Easel & Messy Paint Tray, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","playable"],"sort_order":4105},{"item_id":"personality-006-improvisation-music-nook","name":"Improvisation Music Nook","category":"Toys","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/06_improvisation_music_nook.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Improvisation Music Nook, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","playable","noisy"],"sort_order":4106},{"item_id":"personality-007-digging-fossil-box","name":"Digging & Fossil Box","category":"Training","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/07_digging_and_fossil_box.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Digging & Fossil Box, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","diggable","playable"],"sort_order":4107},{"item_id":"personality-008-window-watching-perch","name":"Window Watching Perch","category":"Living","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/08_window_watching_perch.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Window Watching Perch, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","perchable","window"],"sort_order":4108},{"item_id":"personality-009-double-cuddle-nest","name":"Double Cuddle Nest","category":"Beds","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/09_double_cuddle_nest.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Double Cuddle Nest, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","comfortable","restable","sleepable"],"sort_order":4109},{"item_id":"personality-010-social-play-table","name":"Social Play Table","category":"Toys","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/10_social_play_table.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Social Play Table, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","playable"],"sort_order":4110},{"item_id":"personality-011-solo-puzzle-station","name":"Solo Puzzle Station","category":"Toys","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/11_solo_puzzle_station.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Solo Puzzle Station, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","puzzle","playable"],"sort_order":4111},{"item_id":"personality-012-indoor-flying-launch-perch","name":"Indoor Flying Launch Perch","category":"Training","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/12_indoor_flying_launch_perch.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Indoor Flying Launch Perch, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","exercise","training","agility","climbable","perchable","flight-practice"],"sort_order":4112},{"item_id":"personality-013-fire-breathing-experiment-bench","name":"Fire-Breathing Experiment Bench","category":"Training","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/13_fire_breathing_experiment_bench.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Fire-Breathing Experiment Bench, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","comfortable","restable","fire-practice","training"],"sort_order":4113},{"item_id":"personality-014-water-splashing-pool","name":"Water Splashing Pool","category":"Bath","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/14_water_splashing_pool.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Water Splashing Pool, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","washable","playable"],"sort_order":4114},{"item_id":"personality-015-snack-stealing-pantry","name":"Snack Stealing Pantry","category":"Feeding","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/15_snack_stealing_pantry.png","footprint_w":1,"footprint_h":2,"clearance":"Tall","description":"Snack Stealing Pantry, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","food","hoardable"],"sort_order":4115},{"item_id":"personality-016-collectible-display-shelves","name":"Collectible Display Shelves","category":"Storage","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/16_collectible_display_shelves.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Collectible Display Shelves, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","hoardable","wall-mounted"],"sort_order":4116},{"item_id":"personality-017-sulking-corner-cushion","name":"Sulking Corner Cushion","category":"Beds","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/17_sulking_corner_cushion.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Sulking Corner Cushion, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","comfortable","restable","sleepable","hideable"],"sort_order":4117},{"item_id":"personality-018-zoomies-track-markers","name":"Zoomies Track Markers","category":"Training","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/18_zoomies_track_markers.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Zoomies Track Markers, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","exercise","training","agility"],"sort_order":4118},{"item_id":"personality-019-nap-anywhere-blanket-pile","name":"Nap Anywhere Blanket Pile","category":"Beds","collection_name":"Personality & Behaviour","rarity":"Crafted","price":375,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/19_nap_anywhere_blanket_pile.png","footprint_w":3,"footprint_h":1,"clearance":"Wide","description":"Nap Anywhere Blanket Pile, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","comfortable","restable","sleepable"],"sort_order":4119},{"item_id":"personality-020-comfort-toy-basket","name":"Comfort Toy Basket","category":"Toys","collection_name":"Personality & Behaviour","rarity":"Rare","price":575,"sprite_path":"assets/dragonbound/furniture/v3266/personality-behaviour/20_comfort_toy_basket.png","footprint_w":2,"footprint_h":1,"clearance":"Standard","description":"Comfort Toy Basket, designed to give different baby-dragon personalities something distinctive to interact with.","tags":["inspectable","playable","comfortable"],"sort_order":4120}];
    let dragonboundHouseVisitRaf=0;
    let dragonboundHouseVisitActor=null;
    let dragonboundHouseVisitPreviewData=null;
    let dragonboundHouseVisitCompanionRaf=0;
    let dragonboundHouseVisitCompanion=null;
    let dragonboundSocialRelationshipsCache=[];
    let dragonboundSocialRelationshipsLoadedAt=0;
    let dragonboundActivePlaydate=null;
    let dragonboundPlaydateGuest=null;
    let dragonboundPlaydateGuestRaf=0;
    let dragonboundPlaydateEventTimer=0;
    let dragonboundPlaydateUi=null;

    const dragonboundVisitClamp=(n,a,b)=>Math.max(a,Math.min(b,n));
    const dragonboundVisitPointInPoly=(p,poly)=>{let inside=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const xi=Number(poly[i][0]),yi=Number(poly[i][1]),xj=Number(poly[j][0]),yj=Number(poly[j][1]);const hit=((yi>p[1])!==(yj>p[1]))&&(p[0]<(xj-xi)*(p[1]-yi)/((yj-yi)||1e-9)+xi);if(hit)inside=!inside;}return inside;};
    const dragonboundVisitOrient=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
    const dragonboundVisitSegIntersect=(a,b,c,d)=>{const o1=dragonboundVisitOrient(a,b,c),o2=dragonboundVisitOrient(a,b,d),o3=dragonboundVisitOrient(c,d,a),o4=dragonboundVisitOrient(c,d,b);return ((o1>0)!==(o2>0))&&((o3>0)!==(o4>0));};
    const dragonboundVisitSegHitsPoly=(a,b,poly)=>{if(dragonboundVisitPointInPoly(a,poly)||dragonboundVisitPointInPoly(b,poly))return true;for(let i=0;i<poly.length;i++)if(dragonboundVisitSegIntersect(a,b,poly[i],poly[(i+1)%poly.length]))return true;return false;};
    const dragonboundVisitDistance=(a,b,map)=>Math.hypot((a[0]-b[0])*map.width,(a[1]-b[1])*map.height);
    const dragonboundVisitHouseProperty=id=>Object.values(DRAGONBOUND_PROPERTY_LISTINGS).flat().find(item=>item.id===id)||null;
    const dragonboundVisitSourceScale=(world,map)=>Math.max(world.clientWidth/map.width,world.clientHeight/map.height);
    const dragonboundVisitToPixels=(world,map,p)=>{const s=dragonboundVisitSourceScale(world,map),dw=map.width*s,dh=map.height*s,ox=(world.clientWidth-dw)/2,oy=(world.clientHeight-dh)/2;return{x:ox+p[0]*map.width*s,y:oy+p[1]*map.height*s};};
    const dragonboundVisitFurniturePoly=(placement,item)=>{const scale=dragonboundVisitClamp(Number(placement.scale||.7),.55,1.6),hw=(.010+Number(item?.footprint_w||2)*.0065)*scale,d=(.007+Number(item?.footprint_h||1)*.0055)*scale,x=Number(placement.x),y=Number(placement.y);return[[x-hw,y-d],[x+hw,y-d],[x+hw,y+.004],[x-hw,y+.004]];};
    const dragonboundVisitLoadCatalog=()=>{
      if(!dragonboundHouseVisitCatalogPromise)dragonboundHouseVisitCatalogPromise=Promise.resolve(new Map(DRAGONBOUND_VISIT_FURNITURE_CATALOG.map(item=>[item.item_id,item])));
      return dragonboundHouseVisitCatalogPromise;
    };
    const dragonboundVisitRpc=async(name,args=undefined)=>{
      let lastError=null;
      for(let attempt=0;attempt<2;attempt++){
        try{
          const result=args===undefined?await db.rpc(name):await db.rpc(name,args);
          if(result?.error)throw result.error;
          return result?.data;
        }catch(err){
          lastError=err;
          const msg=String(err?.message||err||'');
          if(attempt===0&&/failed to fetch|network|load failed|fetch/i.test(msg)){
            await new Promise(resolve=>setTimeout(resolve,280));
            continue;
          }
          throw err;
        }
      }
      throw lastError||new Error('Could not contact the house visitor service.');
    };
    const dragonboundSocialNormaliseId=value=>String(value||'').trim();
    const dragonboundSocialRelationshipFor=keeperId=>{
      const id=dragonboundSocialNormaliseId(keeperId),found=dragonboundSocialRelationshipsCache.find(row=>dragonboundSocialNormaliseId(row?.otherUserId)===id);
      return found||{otherUserId:id,relationshipType:'Stranger',meetingCount:0,friendship:0,rivalry:0,nervousness:0,trust:0,favouriteSharedActivity:''};
    };
    const dragonboundLoadSocialRelationships=async(force=false)=>{
      if(!force&&Date.now()-dragonboundSocialRelationshipsLoadedAt<45000)return dragonboundSocialRelationshipsCache;
      try{
        const data=await dragonboundVisitRpc('dragonbound_get_social_relationships');
        dragonboundSocialRelationshipsCache=Array.isArray(data)?data:[];
        dragonboundSocialRelationshipsLoadedAt=Date.now();
      }catch(err){console.warn('[Dragonbound Social] relationship load failed',err);}
      return dragonboundSocialRelationshipsCache;
    };
    const dragonboundRecordSocialInteraction=async(otherUserId,type)=>{
      const id=dragonboundSocialNormaliseId(otherUserId);if(!id)return null;
      try{
        const rel=await dragonboundVisitRpc('dragonbound_record_social_interaction',{p_other_user_id:id,p_interaction_type:String(type||'greeting')});
        if(rel){const i=dragonboundSocialRelationshipsCache.findIndex(row=>dragonboundSocialNormaliseId(row?.otherUserId)===id);if(i>=0)dragonboundSocialRelationshipsCache[i]=rel;else dragonboundSocialRelationshipsCache.push(rel);dragonboundSocialRelationshipsLoadedAt=Date.now();}
        return rel;
      }catch(err){console.warn('[Dragonbound Social] interaction was not recorded',err);return null;}
    };
    const dragonboundSocialTraitList=dragon=>{
      const traits=dragon?.traits||{},personality=dragon?.personality||{},out=[];
      ['assigned','signature','discovered'].forEach(k=>Array.isArray(traits?.[k])&&out.push(...traits[k]));
      if(Array.isArray(personality?.signatureTraits))out.push(...personality.signatureTraits);
      if(Array.isArray(personality?.traits))out.push(...personality.traits);
      return [...new Set(out.map(v=>String(v||'').trim()).filter(Boolean))];
    };
    const dragonboundSocialHasTrait=(dragon,...names)=>{const hay=dragonboundSocialTraitList(dragon).map(v=>v.toLowerCase());return names.some(name=>hay.includes(String(name).toLowerCase()));};
    const dragonboundSocialDescription=(rel,dragonName='This dragon',otherName='their friend')=>{
      const label=String(rel?.relationshipType||'Stranger'),activity=String(rel?.favouriteSharedActivity||'').trim();
      if(label==='Best Friend')return `${dragonName} clearly knows ${otherName} well now${activity?`, especially when it comes to ${activity.toLowerCase()}`:''}.`;
      if(label==='Close Friend')return `${dragonName} relaxes noticeably around ${otherName}${activity?` and often ends up ${activity.toLowerCase()}`:''}.`;
      if(label==='Playmate')return `${dragonName} seems to have decided ${otherName} is excellent company for causing a little chaos.`;
      if(label==='Competitive Rival'||label==='Rival')return `${dragonName} and ${otherName} have a habit of turning perfectly ordinary activities into a competition.`;
      if(label==='Nervous Around')return `${dragonName} still keeps a careful eye on ${otherName}, although familiarity can change that over time.`;
      if(label==='Friend')return `${dragonName} is comfortable around ${otherName} and increasingly chooses to spend time nearby.`;
      if(label==='Familiar'||label==='Curious About')return `${dragonName} recognises ${otherName} now, but their relationship is still taking shape.`;
      return `${dragonName} has not spent enough time with ${otherName} to know what to make of them yet.`;
    };
    const renderDragonboundSocialJournal=()=>{
      if(!myDragonBonds)return;
      const src=dragonProfileSource(),rows=dragonboundSocialRelationshipsCache.slice().sort((a,b)=>Number(b?.friendship||0)+Number(b?.rivalry||0)-Number(a?.friendship||0)-Number(a?.rivalry||0));
      if(!rows.length){myDragonBonds.innerHTML=`<section class="dragonbound-social-empty"><small>FRIENDS &amp; RIVALS</small><strong>No dragon friends yet</strong><p>${dragonboundEscapeHtml(src.name||'Your dragon')} will remember other dragons after house visits and playdates.</p></section>`;return;}
      myDragonBonds.innerHTML=`<div class="dragonbound-social-journal-head"><div><small>FRIENDS &amp; RIVALS</small><strong>Dragon Social Life</strong></div><span>${rows.length} known dragon${rows.length===1?'':'s'}</span></div><div class="dragonbound-social-list">${rows.slice(0,12).map(rel=>{const other=rel.dragonName||'Another dragon',label=rel.relationshipType||'Familiar',met=rel.firstMetAt?dragonProfileDate(rel.firstMetAt):'Recently',activity=rel.favouriteSharedActivity||'Still discovering';return `<article class="dragonbound-social-card" data-social-label="${dragonboundEscapeHtml(label)}"><div class="dragonbound-social-card-top"><div><small>${dragonboundEscapeHtml(rel.username||'Keeper')}</small><strong>${dragonboundEscapeHtml(other)}</strong></div><b>${dragonboundEscapeHtml(label)}</b></div><p>${dragonboundEscapeHtml(dragonboundSocialDescription(rel,src.name||'Your dragon',other))}</p><div class="dragonbound-social-card-meta"><span>First met · ${dragonboundEscapeHtml(met)}</span><span>${dragonboundEscapeHtml(activity)}</span></div><button type="button" data-social-invite="${dragonboundEscapeHtml(rel.otherUserId)}">Invite over</button></article>`;}).join('')}</div>`;
      myDragonBonds.querySelectorAll('[data-social-invite]').forEach(btn=>btn.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();dragonboundStartPlaydate(btn.dataset.socialInvite);}));
    };
    const dragonboundEnsurePlaydateUi=()=>{
      if(dragonboundPlaydateUi?.isConnected)return dragonboundPlaydateUi;
      const el=document.createElement('div');el.className='dragonbound-playdate-strip';el.setAttribute('aria-hidden','true');el.innerHTML='<div><small>PLAYDATE</small><strong data-playdate-name>Guest dragon</strong><span data-playdate-status>Settling in…</span></div><button type="button" data-playdate-end>End playdate</button>';
      homeScene?.appendChild(el);el.querySelector('[data-playdate-end]')?.addEventListener('click',()=>dragonboundEndPlaydate('ended-by-keeper'));
      dragonboundPlaydateUi=el;return el;
    };
    const dragonboundPlaydateThought=(text,duration=3200)=>{
      const guest=dragonboundPlaydateGuest;if(!guest?.el)return;let bubble=guest.el.querySelector('.dragonbound-social-thought');if(!bubble){bubble=document.createElement('span');bubble.className='dragonbound-social-thought';guest.el.appendChild(bubble);}bubble.textContent=String(text||'');bubble.classList.add('is-visible');clearTimeout(guest.thoughtTimer);guest.thoughtTimer=setTimeout(()=>bubble?.classList.remove('is-visible'),duration);
    };
    const dragonboundSocialWeightedEvent=(guest,rel)=>{
      const local=dragonProfileSource(),localDragonSocial={personality:local.personality||{},traits:{assigned:local.assigned||[],signature:local.signatureTraits||[],discovered:local.discovered||[]}},g=guest?.profile||{},mood=String(local.dailyMood?.name||local.mood||'').toLowerCase(),label=String(rel?.relationshipType||'Stranger');
      const pool=[['calm_proximity',4],['play',3],['chase',2],['shared_nap',2],['window_watch',2],['training',2],['food_negotiation',1],['follow',2]];
      const bump=(id,n)=>{const row=pool.find(x=>x[0]===id);if(row)row[1]+=n;};
      if(dragonboundSocialHasTrait(localDragonSocial,'Playful','Energetic')||dragonboundSocialHasTrait(g,'Playful','Energetic')||['bouncy','playful','restless'].includes(mood)){bump('play',5);bump('chase',4);}
      if(dragonboundSocialHasTrait(localDragonSocial,'Competitive')||dragonboundSocialHasTrait(g,'Competitive'))bump('training',5);
      if(dragonboundSocialHasTrait(localDragonSocial,'Food Obsessed')||dragonboundSocialHasTrait(g,'Food Obsessed')||mood==='hungry')bump('food_negotiation',6);
      if(dragonboundSocialHasTrait(localDragonSocial,'Lazy','Sleepy','Calm')||dragonboundSocialHasTrait(g,'Lazy','Sleepy','Calm')||['sleepy','relaxed'].includes(mood))bump('shared_nap',5);
      if(label==='Playmate'||label==='Best Friend'||label==='Close Friend'){bump('play',4);bump('chase',3);bump('calm_proximity',3);}
      if(label==='Competitive Rival'||label==='Rival'){pool.push(['rival_challenge',8]);bump('training',4);}
      if(label==='Nervous Around'||dragonboundSocialHasTrait(localDragonSocial,'Shy')||dragonboundSocialHasTrait(g,'Shy'))pool.push(['nervous_retreat',5]);
      let total=pool.reduce((a,b)=>a+b[1],0),r=Math.random()*total;for(const row of pool){r-=row[1];if(r<=0)return row[0];}return'calm_proximity';
    };
    const dragonboundPlaydateEventCopy=(type,guestName)=>({
      greeting:['Hello there',`${guestName} has arrived.`,'greeting'],play:['Play time',`${guestName} wants to play.`,'play'],chase:['The Great Chase',`${guestName} has started a chase.`,'chase'],shared_nap:['Nap Pact',`${guestName} is settling down nearby.`,'shared_nap'],training:['Show-Off',`${guestName} is getting competitive.`,'training'],rival_challenge:['Rival Challenge',`${guestName} has apparently made this a contest.`,'rival_challenge'],food_negotiation:['Food Negotiations',`${guestName} has found the feeding area.`,'food_negotiation'],window_watch:['Window Watch',`${guestName} is enjoying a quiet moment.`,'window_watch'],follow:['Follow the Leader',`${guestName} has decided to tag along.`,'follow'],nervous_retreat:['Keeping a Little Distance',`${guestName} is taking things slowly.`,'nervous_retreat'],calm_proximity:['Keeping Company',`${guestName} is happy just being nearby.`,'calm_proximity']}[type]||['Playdate',`${guestName} is exploring the house.`,type]);
    const dragonboundRunPlaydateEvent=()=>{
      const guest=dragonboundPlaydateGuest,owner=window.DragonboundBabyEngine?.actor;if(!guest||!owner||!dragonboundActivePlaydate)return;
      if(owner.carePriorityNeed?.()||owner.commandedFurniture||owner.pendingMoveMode?.startsWith('command')){guest.nextSocialAt=performance.now()+20000;return;}
      const rel=dragonboundActivePlaydate.relationship||dragonboundSocialRelationshipFor(dragonboundActivePlaydate.guestUserId),type=dragonboundSocialWeightedEvent(guest,rel),copy=dragonboundPlaydateEventCopy(type,guest.profile?.name||'Your guest');
      guest.eventType=type;guest.eventUntil=performance.now()+(type==='shared_nap'?12000:8000);guest.nextSocialAt=performance.now()+120000+Math.random()*240000;
      const map=window.DragonboundBabyEngine?.map,engine=window.DragonboundBabyEngine;if(!map||owner.floorId!=='downstairs')return;
      const nodes=(map.floors?.find(f=>f.id==='downstairs')?.navigationNodes||[]).filter(p=>engine.isWalkable?.('downstairs',p));if(!nodes.length)return;
      let target=owner.pos?.slice?.()||nodes[Math.floor(Math.random()*nodes.length)].slice();
      if(type==='nervous_retreat'){target=nodes.slice().sort((a,b)=>Math.hypot((b[0]-owner.pos[0])*map.width,(b[1]-owner.pos[1])*map.height)-Math.hypot((a[0]-owner.pos[0])*map.width,(a[1]-owner.pos[1])*map.height))[0]||target;dragonboundPlaydateThought('I’ll watch from here…');}
      else if(type==='chase'){target=nodes[Math.floor(Math.random()*nodes.length)].slice();guest.speedBoost=1.35;dragonboundPlaydateThought('Catch me!');}
      else if(type==='food_negotiation'){dragonboundPlaydateThought('Snacks?');}
      else if(type==='rival_challenge'||type==='training'){dragonboundPlaydateThought(type==='rival_challenge'?'You again.':'Watch this.');}
      else if(type==='shared_nap'){dragonboundPlaydateThought('This spot is good.');}
      else if(type==='play'){dragonboundPlaydateThought('Play?');}
      else if(type==='greeting'){dragonboundPlaydateThought('Hello!');}
      const near=[dragonboundVisitClamp(target[0]+(Math.random()-.5)*.05,.08,.92),dragonboundVisitClamp(target[1]+(Math.random()-.5)*.025,.10,.90)];
      const path=engine.findPath?.('downstairs',guest.pos,near)||[];if(path.length){guest.path=path;guest.pathIndex=0;guest.state='walk';}
      if(['play','chase','training','rival_challenge','calm_proximity','shared_nap','follow'].includes(type)){const ownerTarget=[dragonboundVisitClamp(near[0]+(Math.random()-.5)*.04,.08,.92),dragonboundVisitClamp(near[1]+.018,.10,.90)];owner.startWalk?.(ownerTarget,'social-playdate');}
      if(dragonboundPlaydateUi){dragonboundPlaydateUi.querySelector('[data-playdate-status]').textContent=copy[0];}
      owner.maybeShowDragonThought?.('social',{kind:type,otherName:guest.profile?.name||'the other dragon',relationship:rel.relationshipType||''});
      if(['chase','shared_nap','rival_challenge','play','hide_seek','food_negotiation'].includes(type)){const ownerName=dragonProfileSource().name||'Your dragon',guestName=guest.profile?.name||'their friend',detail=type==='chase'?`${ownerName} and ${guestName} tore around the house until both eventually remembered how tired they were.`:type==='shared_nap'?`${ownerName} and ${guestName} quietly settled down beside one another.`:type==='rival_challenge'?`${ownerName} and ${guestName} managed to turn an ordinary playdate into a competition.`:type==='food_negotiation'?`${ownerName} and ${guestName} somehow both ended up negotiating with the feeding area.`:`${ownerName} and ${guestName} spent a while playing together.`;owner.recordSocialMoment?.(type,copy[0],detail,guestName);}
      dragonboundRecordSocialInteraction(dragonboundActivePlaydate.guestUserId,copy[2]).then(updated=>{if(updated)dragonboundActivePlaydate.relationship=updated;renderDragonboundSocialJournal();});
    };
    const dragonboundStopHomePlaydateGuest=()=>{
      if(dragonboundPlaydateGuestRaf)cancelAnimationFrame(dragonboundPlaydateGuestRaf);dragonboundPlaydateGuestRaf=0;clearTimeout(dragonboundPlaydateEventTimer);dragonboundPlaydateEventTimer=0;
      if(dragonboundPlaydateGuest?.thoughtTimer)clearTimeout(dragonboundPlaydateGuest.thoughtTimer);dragonboundPlaydateGuest?.el?.remove();dragonboundPlaydateGuest=null;
      if(dragonboundPlaydateUi){dragonboundPlaydateUi.classList.remove('is-visible');dragonboundPlaydateUi.setAttribute('aria-hidden','true');}
    };
    const dragonboundStartHomePlaydateGuest=(session,preview)=>{
      dragonboundStopHomePlaydateGuest();if(!session||!preview?.dragon||!homeWorld)return;
      const engine=window.DragonboundBabyEngine,map=engine?.map,def=window.DragonboundBabyRegistry?.[preview.dragon.breedId];if(!engine||!map||!def)return;
      const layer=document.createElement('div');layer.className='dragonbound-playdate-guest';const img=document.createElement('img');img.className='dragonbound-playdate-guest-sprite';img.alt=preview.dragon.name||def.displayName;layer.appendChild(img);homeWorld.appendChild(layer);
      const owner=engine.actor,floor=map.floors?.find(f=>f.id==='downstairs'),nodes=(floor?.navigationNodes||[]).filter(p=>engine.isWalkable?.('downstairs',p));let spawn=(map.spawnPoints||[]).map(x=>x.p).find(p=>engine.isWalkable?.('downstairs',p))||nodes[0]||[.5,.68];if(owner?.floorId==='downstairs'&&nodes.length)spawn=nodes.slice().sort((a,b)=>Math.hypot((b[0]-owner.pos[0])*map.width,(b[1]-owner.pos[1])*map.height)-Math.hypot((a[0]-owner.pos[0])*map.width,(a[1]-owner.pos[1])*map.height))[0]||spawn;
      const guest={el:layer,img,def,profile:preview.dragon,pos:spawn.slice(),facing:def.nativeFacing||'right',state:'idle',path:[],pathIndex:0,frameIndex:0,frameAt:0,animName:'',stateUntil:performance.now()+1800,nextSocialAt:performance.now()+2500,eventType:'greeting',eventUntil:performance.now()+7000,speedBoost:1};dragonboundPlaydateGuest=guest;
      const ui=dragonboundEnsurePlaydateUi();ui.querySelector('[data-playdate-name]').textContent=`${preview.dragon.name} · ${session.relationship?.relationshipType||'Visitor'}`;ui.querySelector('[data-playdate-status]').textContent='Arriving at your home…';ui.classList.add('is-visible');ui.setAttribute('aria-hidden','false');
      const animFor=()=>guest.state==='walk'?'walk':guest.state==='sleep'?'sleep':guest.state==='rest'?'rest':guest.state==='sit'?'sit':'idle';
      const setFrame=t=>{const name=animFor(),anim=guest.def.animations?.[name]||guest.def.animations?.idle;if(!anim?.frames?.length)return;if(guest.animName!==name){guest.animName=name;guest.frameIndex=0;guest.frameAt=0;}const frame=anim.frames[guest.frameIndex%anim.frames.length];if(guest.img.dataset.src!==frame.src){guest.img.src=frame.src;guest.img.dataset.src=frame.src;}const duration=Number(frame.durationMs||500)/(name==='walk'?1.5:1);if(!guest.frameAt)guest.frameAt=t+duration;if(t>=guest.frameAt){guest.frameIndex=(guest.frameIndex+1)%anim.frames.length;guest.frameAt=0;}};
      const render=()=>{const q=engine.toPixels?.(guest.pos);if(!q)return;guest.el.style.left=q.x+'px';guest.el.style.top=q.y+'px';guest.el.style.zIndex=String(100000+Math.round(guest.pos[1]*100000)*10+8);const source=Math.max(homeWorld.clientWidth/map.width,homeWorld.clientHeight/map.height),scale=source*Number(def.renderedScale||.6)*.43923,nw=guest.img.naturalWidth||220;guest.img.style.width=(nw*scale)+'px';const flip=guest.facing===(def.nativeFacing||'right')?1:-1;guest.img.style.transform=`translate(-50%,-98.5%) scaleX(${flip})`;};
      let last=performance.now();const loop=t=>{dragonboundPlaydateGuestRaf=requestAnimationFrame(loop);if(!dragonboundActivePlaydate){last=t;return;}if(document.body.classList.contains('dragonbound-outing-active')){last=t;return;}if(!newGameStage.classList.contains('is-home')){dragonboundEndPlaydate('left-home');last=t;return;}if(Date.now()>=Date.parse(dragonboundActivePlaydate.expiresAt||0)){dragonboundEndPlaydate('expired');return;}const dt=Math.min(.05,(t-last)/1000);last=t;setFrame(t);if(guest.state==='walk'&&guest.path.length){const target=guest.path[guest.pathIndex],dx=(target[0]-guest.pos[0])*map.width,dy=(target[1]-guest.pos[1])*map.height,d=Math.hypot(dx,dy),step=32*guest.speedBoost*dt;if(Math.abs(dx)>1)guest.facing=dx>=0?'right':'left';if(d<=step+1){guest.pos=target.slice();guest.pathIndex++;if(guest.pathIndex>=guest.path.length){guest.path=[];guest.speedBoost=1;guest.state=guest.eventType==='shared_nap'?'sleep':guest.eventType==='calm_proximity'?'rest':'sit';guest.stateUntil=t+(guest.state==='sleep'?10000:4500);}}else{guest.pos[0]+=(dx/d*step)/map.width;guest.pos[1]+=(dy/d*step)/map.height;}}else if(t>=guest.stateUntil&&!guest.eventType){guest.state='idle';guest.stateUntil=t+2000+Math.random()*3500;}if(guest.eventType&&t>=guest.eventUntil){guest.eventType='';if(guest.state!=='walk'){guest.state='idle';guest.stateUntil=t+2200;}}if(t>=guest.nextSocialAt){dragonboundRunPlaydateEvent();}render();};
      setFrame(performance.now());render();dragonboundPlaydateGuestRaf=requestAnimationFrame(loop);dragonboundRecordSocialInteraction(session.guestUserId,'greeting');
    };
    const dragonboundEndPlaydate=async(reason='ended')=>{
      const active=dragonboundActivePlaydate;dragonboundStopHomePlaydateGuest();dragonboundActivePlaydate=null;if(active?.playdateId){try{await dragonboundVisitRpc('dragonbound_end_playdate',{p_playdate_id:active.playdateId,p_reason:String(reason||'ended')});}catch(_e){}}
    };
    const dragonboundResumeActivePlaydate=async()=>{
      try{const active=await dragonboundVisitRpc('dragonbound_get_active_playdate');if(!active){if(dragonboundActivePlaydate)dragonboundStopHomePlaydateGuest();dragonboundActivePlaydate=null;return null;}dragonboundActivePlaydate={...active,hostHouseId:resolveOwnedStarterHome()?.id||''};if(newGameStage.classList.contains('is-home')){const preview=await dragonboundVisitRpc('dragonbound_public_house_preview',{p_keeper_id:active.guestUserId});if(preview?.dragon)dragonboundStartHomePlaydateGuest(active,preview);}return active;}catch(err){console.warn('[Dragonbound Social] could not restore playdate',err);return null;}
    };
    const dragonboundStartPlaydate=async otherUserId=>{
      const id=dragonboundSocialNormaliseId(otherUserId);if(!id)return;
      if(houseVisitsStatus)houseVisitsStatus.textContent='Sending playdate invitation…';
      try{
        const [session,preview]=await Promise.all([dragonboundVisitRpc('dragonbound_start_playdate',{p_other_user_id:id}),dragonboundVisitRpc('dragonbound_public_house_preview',{p_keeper_id:id})]);
        if(!session||!preview?.dragon)throw new Error('That dragon could not visit right now.');dragonboundActivePlaydate={...session,guestUserId:id,hostHouseId:resolveOwnedStarterHome()?.id||''};closeDragonboundHouseVisits();closeMyDragonProfile();if(!newGameStage.classList.contains('is-home'))travelToOwnedHome();setTimeout(()=>dragonboundStartHomePlaydateGuest(dragonboundActivePlaydate,preview),newGameStage.classList.contains('is-home')?120:760);await dragonboundLoadSocialRelationships(true);renderDragonboundSocialJournal();
      }catch(err){if(houseVisitsStatus)houseVisitsStatus.textContent=err?.message||'Could not start that playdate.';else console.warn('[Dragonbound Social] playdate failed',err);}
    };
    const dragonboundVisitBlockedPolys=(placements,catalog)=>placements.map(p=>{const item=catalog.get(p.itemId||p.item_id);if(!item||String(item.category||'').toLowerCase()==='decor'&&/wall|tapestry|panel|painting|portrait|map|board|mirror|shelf|chandelier/i.test(`${item.name} ${item.description||''}`))return null;return dragonboundVisitFurniturePoly(p,item);}).filter(Boolean);
    const dragonboundVisitIsWalkable=(map,p,blocked)=>{const floor=map?.floors?.[0];return !!floor&&floor.walkableZones.some(poly=>dragonboundVisitPointInPoly(p,poly))&&!blocked.some(poly=>dragonboundVisitPointInPoly(p,poly));};
    const dragonboundVisitLineClear=(a,b,blocked)=>!blocked.some(poly=>dragonboundVisitSegHitsPoly(a,b,poly));
    const dragonboundVisitFindPath=(map,a,b,blocked)=>{if(!dragonboundVisitIsWalkable(map,b,blocked))return[];if(dragonboundVisitLineClear(a,b,blocked))return[b.slice()];const floor=map.floors[0],nodes=(floor.navigationNodes||[]).filter(p=>dragonboundVisitIsWalkable(map,p,blocked)),pts=[a,...nodes,b],N=pts.length,adj=Array.from({length:N},()=>[]);for(let i=0;i<N;i++)for(let j=i+1;j<N;j++)if(dragonboundVisitLineClear(pts[i],pts[j],blocked)){const d=dragonboundVisitDistance(pts[i],pts[j],map);adj[i].push([j,d]);adj[j].push([i,d]);}const dist=Array(N).fill(Infinity),prev=Array(N).fill(-1),used=Array(N).fill(false);dist[0]=0;for(let k=0;k<N;k++){let u=-1;for(let i=0;i<N;i++)if(!used[i]&&(u<0||dist[i]<dist[u]))u=i;if(u<0||!isFinite(dist[u]))break;used[u]=true;if(u===N-1)break;for(const [v,w] of adj[u])if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;prev[v]=u;}}if(!isFinite(dist[N-1]))return[];const out=[];for(let cur=N-1;cur>0;cur=prev[cur])out.unshift(pts[cur].slice());return out;};

    const stopDragonboundHouseVisitActor=()=>{if(dragonboundHouseVisitRaf)cancelAnimationFrame(dragonboundHouseVisitRaf);if(dragonboundHouseVisitCompanionRaf)cancelAnimationFrame(dragonboundHouseVisitCompanionRaf);dragonboundHouseVisitRaf=0;dragonboundHouseVisitCompanionRaf=0;dragonboundHouseVisitActor=null;dragonboundHouseVisitCompanion=null;if(houseVisitDragonLayer)houseVisitDragonLayer.replaceChildren();};
    const startDragonboundHouseVisitActor=(data,map,blocked)=>{
      stopDragonboundHouseVisitActor();
      const def=window.DragonboundBabyRegistry?.[data?.dragon?.breedId];if(!def||!houseVisitDragonLayer||!houseVisitWorld)return;
      const el=document.createElement('div');el.className='dragonbound-house-visit-dragon';const img=document.createElement('img');img.className='dragonbound-house-visit-dragon-sprite';img.alt=data.dragon.name||def.displayName;el.appendChild(img);houseVisitDragonLayer.appendChild(el);
      const spawn=(map.spawnPoints||[]).map(s=>s.p).find(p=>dragonboundVisitIsWalkable(map,p,blocked))||(map.floors?.[0]?.navigationNodes||[]).find(p=>dragonboundVisitIsWalkable(map,p,blocked))||[.52,.68];
      const actor={el,img,def,map,blocked,pos:spawn.slice(),facing:def.nativeFacing||'right',state:'idle',path:[],pathIndex:0,stateUntil:performance.now()+1200+Math.random()*1800,frameIndex:0,frameAt:0,animName:''};dragonboundHouseVisitActor=actor;
      const chooseAnim=()=>actor.state==='walk'?'walk':actor.state==='sleep'?'sleep':actor.state==='rest'?'rest':actor.state==='sit'?'sit':Math.random()<.45?'look':'idle';
      const setFrame=(t,force=false)=>{const animName=chooseAnim(),anim=actor.def.animations?.[animName]||actor.def.animations?.idle;if(!anim?.frames?.length)return;if(actor.animName!==animName){actor.animName=animName;actor.frameIndex=0;actor.frameAt=0;force=true;}const frame=anim.frames[actor.frameIndex%anim.frames.length];if(force||actor.img.dataset.src!==frame.src){actor.img.src=frame.src;actor.img.dataset.src=frame.src;}const duration=Number(frame.durationMs||500)/(animName==='walk'?1.45:1);if(!actor.frameAt)actor.frameAt=t+duration;if(t>=actor.frameAt){actor.frameIndex=(actor.frameIndex+1)%anim.frames.length;actor.frameAt=0;setFrame(t,true);}};
      const pickWalk=()=>{const nodes=(map.floors?.[0]?.navigationNodes||[]).filter(p=>dragonboundVisitIsWalkable(map,p,blocked)&&dragonboundVisitDistance(actor.pos,p,map)>38);for(let tries=0;tries<Math.min(16,nodes.length*2);tries++){const target=nodes[Math.floor(Math.random()*nodes.length)];if(!target)break;const path=dragonboundVisitFindPath(map,actor.pos,target,blocked);if(path.length){actor.path=path;actor.pathIndex=0;actor.state='walk';actor.frameIndex=0;actor.frameAt=0;return true;}}return false;};
      const render=()=>{const q=dragonboundVisitToPixels(houseVisitWorld,map,actor.pos);actor.el.style.left=q.x+'px';actor.el.style.top=q.y+'px';const base=Math.round(actor.pos[1]*100000);actor.el.style.zIndex=String(100000+base*10+7);const s=dragonboundVisitSourceScale(houseVisitWorld,map)*Number(actor.def.renderedScale||.6)*.43923,nw=actor.img.naturalWidth||220;actor.img.style.width=(nw*s)+'px';const flip=actor.facing===(actor.def.nativeFacing||'right')?1:-1;actor.img.style.transform=`translate(-50%,-98.5%) scaleX(${flip})`;};
      let last=performance.now();const loop=t=>{dragonboundHouseVisitRaf=requestAnimationFrame(loop);if(!houseVisits?.classList.contains('is-previewing')){last=t;return;}const dt=Math.min(.05,(t-last)/1000);last=t;setFrame(t);if(actor.state==='walk'&&actor.path.length){const target=actor.path[actor.pathIndex],dx=(target[0]-actor.pos[0])*map.width,dy=(target[1]-actor.pos[1])*map.height,d=Math.hypot(dx,dy),step=34*dt;if(Math.abs(dx)>1)actor.facing=dx>=0?'right':'left';if(d<=step+1){actor.pos=target.slice();actor.pathIndex++;if(actor.pathIndex>=actor.path.length){actor.path=[];actor.state=['idle','sit','rest'][Math.floor(Math.random()*3)];actor.stateUntil=t+1600+Math.random()*3800;actor.frameIndex=0;actor.frameAt=0;}}else{actor.pos[0]+=(dx/d*step)/map.width;actor.pos[1]+=(dy/d*step)/map.height;}}else if(t>=actor.stateUntil){const r=Math.random();if(r<.64&&!pickWalk()){actor.state='idle';actor.stateUntil=t+1600+Math.random()*3000;}else if(r>=.64){actor.state=r>.92?'sleep':r>.80?'rest':r>.70?'sit':'idle';actor.stateUntil=t+(actor.state==='sleep'?4500:2000)+Math.random()*4200;actor.frameIndex=0;actor.frameAt=0;}}render();};
      setFrame(performance.now(),true);render();dragonboundHouseVisitRaf=requestAnimationFrame(loop);
    };

    const startDragonboundHouseVisitCompanion=(data,map,blocked,relationship)=>{
      if(!data?.keeperId||!houseVisitDragonLayer||!houseVisitWorld)return;const src=dragonProfileSource(),def=window.DragonboundBabyRegistry?.[src.breedId];if(!src.hasDragon||!def)return;
      const el=document.createElement('div');el.className='dragonbound-house-visit-dragon is-visiting-companion';const badge=document.createElement('span');badge.className='dragonbound-house-visit-dragon-badge';badge.textContent='Your dragon';const img=document.createElement('img');img.className='dragonbound-house-visit-dragon-sprite';img.alt=src.name||def.displayName;el.append(img,badge);houseVisitDragonLayer.appendChild(el);
      const nodes=(map.floors?.[0]?.navigationNodes||[]).filter(p=>dragonboundVisitIsWalkable(map,p,blocked));const owner=dragonboundHouseVisitActor;let spawn=nodes[0]||[.44,.70];if(owner&&nodes.length)spawn=nodes.slice().sort((a,b)=>dragonboundVisitDistance(b,owner.pos,map)-dragonboundVisitDistance(a,owner.pos,map))[0]||spawn;
      const actor={el,img,def,pos:spawn.slice(),facing:def.nativeFacing||'right',state:'idle',path:[],pathIndex:0,stateUntil:performance.now()+1000,frameIndex:0,frameAt:0,animName:'',nextSocialAt:performance.now()+2200};dragonboundHouseVisitCompanion=actor;
      const chooseAnim=()=>actor.state==='walk'?'walk':actor.state==='sleep'?'sleep':actor.state==='rest'?'rest':actor.state==='sit'?'sit':'idle';
      const setFrame=t=>{const name=chooseAnim(),anim=def.animations?.[name]||def.animations?.idle;if(!anim?.frames?.length)return;if(actor.animName!==name){actor.animName=name;actor.frameIndex=0;actor.frameAt=0;}const f=anim.frames[actor.frameIndex%anim.frames.length];if(actor.img.dataset.src!==f.src){actor.img.src=f.src;actor.img.dataset.src=f.src;}const dur=Number(f.durationMs||500)/(name==='walk'?1.45:1);if(!actor.frameAt)actor.frameAt=t+dur;if(t>=actor.frameAt){actor.frameIndex=(actor.frameIndex+1)%anim.frames.length;actor.frameAt=0;}};
      const goTo=target=>{const path=dragonboundVisitFindPath(map,actor.pos,target,blocked);if(path.length){actor.path=path;actor.pathIndex=0;actor.state='walk';return true;}return false;};
      const render=()=>{const q=dragonboundVisitToPixels(houseVisitWorld,map,actor.pos);actor.el.style.left=q.x+'px';actor.el.style.top=q.y+'px';actor.el.style.zIndex=String(100000+Math.round(actor.pos[1]*100000)*10+8);const sc=dragonboundVisitSourceScale(houseVisitWorld,map)*Number(def.renderedScale||.6)*.43923,nw=actor.img.naturalWidth||220;actor.img.style.width=(nw*sc)+'px';actor.img.style.transform=`translate(-50%,-98.5%) scaleX(${actor.facing===(def.nativeFacing||'right')?1:-1})`;};
      let last=performance.now();const loop=t=>{dragonboundHouseVisitCompanionRaf=requestAnimationFrame(loop);if(!houseVisits?.classList.contains('is-previewing')){last=t;return;}const dt=Math.min(.05,(t-last)/1000);last=t;setFrame(t);if(actor.state==='walk'&&actor.path.length){const target=actor.path[actor.pathIndex],dx=(target[0]-actor.pos[0])*map.width,dy=(target[1]-actor.pos[1])*map.height,d=Math.hypot(dx,dy),step=34*dt;if(Math.abs(dx)>1)actor.facing=dx>=0?'right':'left';if(d<=step+1){actor.pos=target.slice();actor.pathIndex++;if(actor.pathIndex>=actor.path.length){actor.path=[];actor.state='sit';actor.stateUntil=t+4500;}}else{actor.pos[0]+=(dx/d*step)/map.width;actor.pos[1]+=(dy/d*step)/map.height;}}else if(t>=actor.nextSocialAt&&owner){const label=String(relationship?.relationshipType||'Stranger');let target=owner.pos.slice();let dist=label==='Nervous Around'?.12:label==='Rival'||label==='Competitive Rival'?.055:.035;target=[dragonboundVisitClamp(target[0]+(Math.random()-.5)*dist,.08,.92),dragonboundVisitClamp(target[1]+dist*.35,.10,.90)];if(label==='Nervous Around'&&nodes.length)target=nodes.slice().sort((a,b)=>dragonboundVisitDistance(b,owner.pos,map)-dragonboundVisitDistance(a,owner.pos,map))[0]||target;goTo(target);actor.nextSocialAt=t+120000+Math.random()*240000;dragonboundRecordSocialInteraction(data.keeperId,label==='Nervous Around'?'nervous_retreat':label.includes('Rival')?'rival_challenge':'greeting');}else if(t>=actor.stateUntil&&actor.state!=='walk'){actor.state='idle';actor.stateUntil=t+2000+Math.random()*2500;}render();};
      setFrame(performance.now());render();dragonboundHouseVisitCompanionRaf=requestAnimationFrame(loop);
    };

    const renderDragonboundHouseVisitFurniture=async(data,map)=>{if(!houseVisitFurniture||!houseVisitWorld)return new Map();houseVisitFurniture.replaceChildren();const catalog=await dragonboundVisitLoadCatalog();const placements=Array.isArray(data.placements)?data.placements:[];for(const p of placements){const item=catalog.get(p.itemId||p.item_id);if(!item)continue;const el=document.createElement('div');el.className='dragonbound-house-visit-furnishing';el.dataset.itemId=item.item_id;const img=document.createElement('img');img.alt=item.name||'Furniture';img.dataset.rawSrc=`${item.sprite_path}?v=v32-79-house-visits`;img.src=img.dataset.rawSrc;el.appendChild(img);houseVisitFurniture.appendChild(el);const position=()=>{const q=dragonboundVisitToPixels(houseVisitWorld,map,[Number(p.x),Number(p.y)]);el.style.left=q.x+'px';el.style.top=q.y+'px';const base=Math.round(Number(p.y)*100000);el.style.zIndex=String(100000+base*10+5);const natural=img.naturalWidth||160,s=dragonboundVisitSourceScale(houseVisitWorld,map),userScale=dragonboundVisitClamp(Number(p.scale||.7),.55,1.6);img.style.width=Math.max(28,Math.min(245,natural*s*.42*userScale))+'px';img.style.transform=`translate(-50%,-96%) scaleX(${String(p.direction||'right')==='left'?-1:1})`;};img.addEventListener('load',position);position();}return catalog;};

    const renderDragonboundHouseVisitList=()=>{
      if(!houseVisitsGrid)return;const q=String(houseVisitsSearch?.value||'').trim().toLowerCase(),rows=dragonboundHouseVisitRows.filter(row=>!q||`${row.username||''} ${row.dragon_name||''} ${row.breed_id||''}`.toLowerCase().includes(q));
      if(!rows.length){houseVisitsGrid.innerHTML='<div class="dragonbound-house-visits-empty">No keeper homes match that search.</div>';return;}
      houseVisitsGrid.innerHTML=rows.map(row=>{const property=dragonboundVisitHouseProperty(row.house_id),image=property?.full||'',breed=String(row.breed_id||'').replace(/-/g,' ').replace(/\b\w/g,m=>m.toUpperCase()),count=Number(row.furniture_count||0),rel=dragonboundSocialRelationshipFor(row.keeper_id),label=rel.relationshipType||'Stranger';return `<article class="dragonbound-house-visit-card" data-keeper-id="${escapeHtml(row.keeper_id)}"><button class="dragonbound-house-visit-card-main" type="button" data-visit-keeper="${escapeHtml(row.keeper_id)}"><span class="dragonbound-house-visit-card-image" style="background-image:linear-gradient(180deg,rgba(3,12,14,.04),rgba(3,12,14,.38)),url('${escapeHtml(image)}')"></span><span class="dragonbound-house-visit-card-copy"><strong>${escapeHtml(row.username||'Keeper')}</strong><b>${escapeHtml(row.dragon_name||'Baby Dragon')}</b><small>${escapeHtml(breed)} · ${count} furnishing${count===1?'':'s'}</small><em>${escapeHtml(label)}</em></span><span class="dragonbound-house-visit-card-arrow">Visit ›</span></button><button class="dragonbound-house-visit-invite" type="button" data-invite-keeper="${escapeHtml(row.keeper_id)}">Invite over</button></article>`;}).join('');
      houseVisitsGrid.querySelectorAll('[data-visit-keeper]').forEach(button=>button.addEventListener('click',()=>openDragonboundHouseVisitPreview(button.dataset.visitKeeper)));
      houseVisitsGrid.querySelectorAll('[data-invite-keeper]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();dragonboundStartPlaydate(button.dataset.inviteKeeper);}));
    };

    const closeDragonboundHouseVisits=()=>{stopDragonboundHouseVisitActor();dragonboundHouseVisitPreviewData=null;houseVisits?.classList.remove('is-visible','is-previewing');houseVisits?.setAttribute('aria-hidden','true');houseVisitPreview?.setAttribute('aria-hidden','true');houseVisitsBrowser?.setAttribute('aria-hidden','false');newGameStage.classList.remove('is-visiting-house');if(houseVisitFurniture)houseVisitFurniture.replaceChildren();if(houseVisitImage)houseVisitImage.style.backgroundImage='';};
    const showDragonboundHouseVisitBrowser=()=>{stopDragonboundHouseVisitActor();houseVisits?.classList.remove('is-previewing');houseVisitPreview?.setAttribute('aria-hidden','true');houseVisitsBrowser?.setAttribute('aria-hidden','false');newGameStage.classList.remove('is-visiting-house');renderDragonboundHouseVisitList();};
    const openDragonboundHouseVisits=async()=>{closeTravelMenu();houseVisits?.classList.add('is-visible');houseVisits?.setAttribute('aria-hidden','false');houseVisitsBrowser?.setAttribute('aria-hidden','false');houseVisitPreview?.setAttribute('aria-hidden','true');if(houseVisitsStatus)houseVisitsStatus.textContent='Looking up keeper homes…';if(houseVisitsGrid)houseVisitsGrid.innerHTML='';try{const [data]=await Promise.all([dragonboundVisitRpc('dragonbound_public_house_list'),dragonboundLoadSocialRelationships()]);dragonboundHouseVisitRows=Array.isArray(data)?data:[];if(houseVisitsStatus)houseVisitsStatus.textContent=dragonboundHouseVisitRows.length?`${dragonboundHouseVisitRows.length} keeper home${dragonboundHouseVisitRows.length===1?'':'s'} available to visit.`:'No other keeper homes are ready to visit yet.';renderDragonboundHouseVisitList();}catch(err){if(houseVisitsStatus)houseVisitsStatus.textContent='Could not load keeper homes right now.';if(houseVisitsGrid)houseVisitsGrid.innerHTML=`<div class="dragonbound-house-visits-empty">${escapeHtml(err?.message||'Please try again.')}</div>`;}};
    const openDragonboundHouseVisitPreview=async keeperId=>{if(!keeperId)return;if(houseVisitsStatus)houseVisitsStatus.textContent='Opening house…';try{const [data,relData]=await Promise.all([dragonboundVisitRpc('dragonbound_public_house_preview',{p_keeper_id:keeperId}),dragonboundVisitRpc('dragonbound_get_relationship',{p_other_user_id:keeperId})]);if(!data?.houseId||!data?.dragon)throw new Error('That keeper does not have a visitable Dragonbound home yet.');const property=dragonboundVisitHouseProperty(data.houseId),map=window.DragonboundHouseNavigationRegistry?.[data.houseId];if(!property?.full||!map)throw new Error('That starter house is not available in this build.');const relationship=relData||dragonboundSocialRelationshipFor(keeperId);dragonboundHouseVisitPreviewData={...data,relationship};houseVisitsBrowser?.setAttribute('aria-hidden','true');houseVisitPreview?.setAttribute('aria-hidden','false');houseVisits?.classList.add('is-previewing');newGameStage.classList.add('is-visiting-house');if(houseVisitImage)houseVisitImage.style.backgroundImage=`url('${property.full}')`;if(houseVisitOwner)houseVisitOwner.textContent=`${data.username}'s Home`;if(houseVisitDragonName){const gender=String(data.dragon.gender||'').toLowerCase();houseVisitDragonName.textContent=`${data.dragon.name} · ${gender==='female'?'Female':gender==='male'?'Male':String(data.dragon.breedId||'').replace(/-/g,' ')} · ${relationship.relationshipType||'Stranger'}`;}const catalog=await renderDragonboundHouseVisitFurniture(data,map),blocked=dragonboundVisitBlockedPolys(Array.isArray(data.placements)?data.placements:[],catalog);startDragonboundHouseVisitActor(data,map,blocked);setTimeout(()=>startDragonboundHouseVisitCompanion(data,map,blocked,relationship),180);dragonboundRecordSocialInteraction(keeperId,'meeting').then(()=>dragonboundLoadSocialRelationships(true));if(houseVisitsStatus)houseVisitsStatus.textContent='';}catch(err){showDragonboundHouseVisitBrowser();if(houseVisitsStatus)houseVisitsStatus.textContent=err?.message||'Could not open that home.';}};

    const stopTravelLocationAudio=()=>{
      [adoptionExteriorAudio,adoptionInteriorAudio,estateInteriorAudio].forEach(audio=>{try{audio.pause();audio.currentTime=0;}catch(_e){}});
      try{adoptionExteriorAudio.volume=.5;adoptionInteriorAudio.volume=.6;estateInteriorAudio.volume=.5;}catch(_e){}
    };
    const prepareTravelTransition=()=>{
      closeTravelMenu();
      closeBonnieMenu();
      closeAdoptEggMenu();
      closeStudyMenu();
      closeEstatePrompt();
      closePropertyBoard();
      closeAdoptionConfirmation();
      clearStudyEstatePromptTimer();
      clearDialogue();
      dialogueMode='transition';
      hideHomeSidebar();
      blackout.classList.add('is-black');
    };
    const travelToOwnedHome=({deliverEgg=false}={})=>{
      const property=resolveOwnedStarterHome();
      if(!property) return;
      if(deliverEgg) resetHomeDeliveryScene();
      prepareTravelTransition();
      fadeAudio(adoptionExteriorAudio,0,280);fadeAudio(adoptionInteriorAudio,0,280);fadeAudio(estateInteriorAudio,0,280);
      transitionTimerD=setTimeout(()=>{
        stopTravelLocationAudio();
        if(homeImage) homeImage.style.backgroundImage=`url('${property.full}')`;
        newGameStage.dataset.dragonboundHouseId=property.id;
        window.dispatchEvent(new CustomEvent('dragonbound:house-selected',{detail:{houseId:property.id}}));
        newGameStage.classList.remove('is-estate-interior','is-estate-exterior','is-adoption','is-adoption-interior','is-video','is-valley','is-cave');
        newGameStage.classList.add('is-home','has-owned-home');
        homeScene?.classList.add('is-visible');
        homeScene?.setAttribute('aria-hidden','false');
        if(bonnieHotspot){bonnieHotspot.disabled=false;bonnieHotspot.style.pointerEvents='';}
        if(estateDoorHotspot){estateDoorHotspot.disabled=false;estateDoorHotspot.style.pointerEvents='';}
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          dialogueMode='home';
          if(deliverEgg && selectedAdoptionEgg && (!namedDragonForCurrentAccount() || dragonboundIsAdminTester())){
            hideHomeSidebar();
            setTimeout(()=>{if(newGameStage.classList.contains('is-home'))startDoppyArrival();},320);
          }else showHomeSidebar();
          setTimeout(()=>dragonboundResumeActivePlaydate(),220);
        },180);
      },460);
    };
    const travelToAdoptionCentre=()=>{
      if(!resolveOwnedStarterHome()) return;
      prepareTravelTransition();
      homeScene?.classList.remove('is-visible');homeScene?.setAttribute('aria-hidden','true');
      transitionTimerD=setTimeout(()=>{
        stopTravelLocationAudio();
        newGameStage.classList.remove('is-home','is-adoption-interior','is-estate-interior','is-estate-exterior','is-video','is-valley','is-cave');
        newGameStage.classList.add('is-adoption','has-owned-home');
        if(adoptionDoorHotspot){adoptionDoorHotspot.disabled=false;adoptionDoorHotspot.style.pointerEvents='auto';}
        if(bonnieHotspot){bonnieHotspot.disabled=false;bonnieHotspot.style.pointerEvents='';}
        adoptionExteriorAudio.volume=0;
        const p=adoptionExteriorAudio.play();if(p&&typeof p.catch==='function')p.catch(()=>{});
        fadeAudio(adoptionExteriorAudio,.5,700);
        transitionTimerE=setTimeout(()=>{blackout.classList.remove('is-black');dialogueMode='adoption';},180);
      },460);
    };
    const travelToEstateAgents=()=>{
      if(!resolveOwnedStarterHome()) return;
      prepareTravelTransition();
      homeScene?.classList.remove('is-visible');homeScene?.setAttribute('aria-hidden','true');
      transitionTimerD=setTimeout(()=>{
        stopTravelLocationAudio();
        newGameStage.classList.remove('is-home','is-adoption','is-adoption-interior','is-estate-interior','is-video','is-valley','is-cave');
        newGameStage.classList.add('is-estate-exterior','has-owned-home');
        if(estateDoorHotspot){estateDoorHotspot.disabled=false;estateDoorHotspot.style.pointerEvents='auto';}
        transitionTimerE=setTimeout(()=>{blackout.classList.remove('is-black');dialogueMode='estate-exterior';},180);
      },460);
    };
    const setHomeBasketReady=(ready)=>{
      homeBasketReady=!!ready && !homeBasketOpened;
      if(!homeBasketWrap) return;
      homeBasketWrap.classList.toggle('is-ready',homeBasketReady);
      homeBasketWrap.tabIndex=homeBasketReady?0:-1;
      homeBasketWrap.setAttribute('aria-disabled',homeBasketReady?'false':'true');
    };
    const closeHomeBasketConfirmation=()=>{
      homeBasketConfirm?.classList.remove('is-visible');
      homeBasketConfirm?.setAttribute('aria-hidden','true');
    };
    const resetHomeHatchReveal=()=>{
      clearTimeout(homeHatchTimer);
      homeHatchTimer=0;
      homeHatchFrameTimers.forEach(clearTimeout);
      homeHatchFrameTimers=[];
      try{homeRevealMusicAudio.pause();homeRevealMusicAudio.currentTime=0;}catch(_e){}
      try{homeBagOpenAudio.pause();homeBagOpenAudio.currentTime=0;}catch(_e){}
      homeHatchReveal?.classList.remove('is-visible','is-opening','is-result');
      homeHatchReveal?.setAttribute('aria-hidden','true');
      homeHatchOpening?.setAttribute('aria-hidden','true');
      homeHatchResult?.setAttribute('aria-hidden','true');
      if(homeHatchPortrait){homeHatchPortrait.removeAttribute('src');homeHatchPortrait.alt='';}
      if(homeHatchType) homeHatchType.textContent='';
      if(homeHatchOrigin) homeHatchOrigin.textContent='';
      if(homeHatchGender){homeHatchGender.textContent='';homeHatchGender.classList.remove('is-male','is-female','is-error');}
      selectedDragonGender='';
      homeDragonGenderPromise=null;
      if(homeHatchNameInput) homeHatchNameInput.value='';
      if(homeHatchNameFeedback) homeHatchNameFeedback.textContent='';
      homeHatchNameForm?.classList.remove('is-hidden');
      homeHatchNamed?.classList.remove('is-visible');
      homeHatchNamed?.setAttribute('aria-hidden','true');
    };
    const resetHomeDeliveryScene=()=>{
      clearTimeout(doppyArrivalTimer);
      clearTimeout(doppyDepartureTimer);
      cancelDoppyMotion();
      stopDoppyFrameCycle();
      stopDoppyFootsteps();
      if(homeDelivery){
        homeDelivery.classList.remove('is-visible','is-arriving','is-arrived','is-departing');
        homeDelivery.setAttribute('aria-hidden','true');
        homeDelivery.style.opacity='';
        homeDelivery.style.visibility='';
        homeDelivery.style.transform='';
      }
      if(homeDoppy){
        homeDoppy.removeAttribute('src');
        homeDoppy.style.transform='';
      }
      if(homeBasketWrap){
        homeBasketWrap.classList.remove('is-visible','is-dropping','is-ready');
        homeBasketWrap.setAttribute('aria-hidden','true');
        homeBasketWrap.tabIndex=-1;
      }
      closeHomeBasketConfirmation();
      resetHomeHatchReveal();
      hideHomeSidebar();
      homeDeliveryFinished=false;
      homeBasketReady=false;
      homeBasketOpened=false;
      selectedDragonName='';
      selectedDragonGender='';
      homeDragonGenderPromise=null;
    };
    const startDoppyHomeDialogue=()=>{
      clearDialogue();
      dialogueMode='dialogue';
      dialogueSequence='doppy-home';
      dialoguePages=DRAGONBOUND_DOPPY_HOME_PAGES;
      dialogueIndex=0;
      setDialoguePage(0);
    };
    const startDoppyDeparture=()=>{
      if(!homeDelivery || !homeDoppy) return;
      clearTimeout(doppyDepartureTimer);
      cancelDoppyMotion();
      homeDelivery.classList.remove('is-arriving','is-arrived','is-departing');
      homeDelivery.classList.add('is-visible');
      homeDelivery.setAttribute('aria-hidden','false');
      homeDoppy.style.transform='scaleX(1)';
      startDoppyFrameCycle();
      startDoppyFootsteps(2550,300);
      const keyframes=[
        {transform:'translate3d(0,0,0)',offset:0},
        {transform:'translate3d(28%,2px,0)',offset:.24},
        {transform:'translate3d(58%,-3px,0)',offset:.5},
        {transform:'translate3d(92%,2px,0)',offset:.76},
        {transform:'translate3d(132%,4px,0)',offset:1}
      ];
      try{
        doppyMotionAnimation=homeDelivery.animate(keyframes,{duration:2700,easing:'linear',fill:'forwards'});
        doppyMotionAnimation.onfinish=()=>{
          stopDoppyFrameCycle();
          stopDoppyFootsteps();
          doppyMotionAnimation=null;
          homeDelivery.classList.remove('is-visible');
          homeDelivery.setAttribute('aria-hidden','true');
          homeDelivery.style.transform='';
          setHomeBasketReady(true);
        };
      }catch(_e){
        doppyDepartureTimer=setTimeout(()=>{
          stopDoppyFrameCycle();
          stopDoppyFootsteps();
          homeDelivery.classList.remove('is-visible');
          homeDelivery.setAttribute('aria-hidden','true');
          setHomeBasketReady(true);
        },2700);
      }
    };
    const startDoppyArrival=()=>{
      if(!newGameStage.classList.contains('is-home') || !homeDelivery || !homeDoppy) return;
      clearTimeout(doppyArrivalTimer);
      cancelDoppyMotion();
      clearDialogue();
      dialogueMode='transition';
      hideHomeSidebar();
      setHomeBasketReady(false);
      homeDelivery.classList.remove('is-departing','is-arrived','is-arriving');
      homeDelivery.classList.add('is-visible');
      homeDelivery.setAttribute('aria-hidden','false');
      homeDoppy.style.transform='scaleX(-1)';
      startDoppyFrameCycle();
      startDoppyFootsteps(2550,300);
      if(homeBasketWrap){
        homeBasketWrap.classList.remove('is-visible','is-dropping','is-ready');
        homeBasketWrap.setAttribute('aria-hidden','true');
      }
      const keyframes=[
        {transform:'translate3d(132%,4px,0)',offset:0},
        {transform:'translate3d(96%,1px,0)',offset:.2},
        {transform:'translate3d(66%,-3px,0)',offset:.43},
        {transform:'translate3d(34%,2px,0)',offset:.7},
        {transform:'translate3d(0,0,0)',offset:1}
      ];
      const finishArrival=()=>{
        cancelDoppyMotion();
        stopDoppyFrameCycle();
        stopDoppyFootsteps();
        homeDelivery.classList.add('is-arrived','is-visible');
        homeDelivery.setAttribute('aria-hidden','false');
        homeDoppy.style.transform='scaleX(-1)';
        homeDoppy.src=DRAGONBOUND_HOME_DOPPY_FRAMES[1];
        if(homeBasketWrap){
          homeBasketWrap.classList.add('is-visible','is-dropping');
          homeBasketWrap.setAttribute('aria-hidden','false');
        }
        setTimeout(()=>{
          homeBasketWrap?.classList.remove('is-dropping');
          startDoppyHomeDialogue();
        },480);
      };
      try{
        doppyMotionAnimation=homeDelivery.animate(keyframes,{duration:2700,easing:'linear',fill:'forwards'});
        doppyMotionAnimation.onfinish=finishArrival;
      }catch(_e){
        doppyArrivalTimer=setTimeout(finishArrival,2700);
      }
    };
    const openHomeBasketConfirmation=()=>{
      if(!homeBasketReady || homeBasketOpened || !selectedAdoptionEgg) return;
      homeBasketConfirm?.classList.add('is-visible');
      homeBasketConfirm?.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>homeBasketConfirmYes?.focus({preventScroll:true}));
    };
    const ensureHomeDragonGender=()=>{
      if(selectedDragonGender) return Promise.resolve(selectedDragonGender);
      if(homeDragonGenderPromise) return homeDragonGenderPromise;
      homeDragonGenderPromise=(async()=>{
        if(dragonboundAccountSlug()==='guest'){
          selectedDragonGender=Math.random()<.5?'male':'female';
          return selectedDragonGender;
        }
        const {data,error}=await db.rpc('dragonbound_reveal_gender');
        if(error) throw error;
        const row=Array.isArray(data)?data[0]:data;
        const gender=normaliseDragonGender(row?.dragon_gender);
        if(!gender) throw new Error('Dragonbound did not return a valid dragon gender.');
        selectedDragonGender=gender;
        dragonboundLastProfile={...(dragonboundLastProfile||{}),gender};
        return gender;
      })().finally(()=>{homeDragonGenderPromise=null;});
      return homeDragonGenderPromise;
    };
    const showHomeDragonReveal=async()=>{
      if(!selectedAdoptionEgg) return;
      const portrait=DRAGONBOUND_DRAGON_REVEALS[selectedAdoptionEgg.name];
      if(homeHatchPortrait && portrait){
        homeHatchPortrait.src=portrait;
        homeHatchPortrait.alt=`Newly hatched ${selectedAdoptionEgg.name} dragon`;
      }
      if(homeHatchType) homeHatchType.textContent=`${selectedAdoptionEgg.name} Dragon`;
      if(homeHatchOrigin) homeHatchOrigin.textContent=`Hatched from your ${selectedAdoptionEgg.name} egg`;
      if(homeHatchGender){homeHatchGender.textContent='Discovering gender…';homeHatchGender.classList.remove('is-male','is-female','is-error');}
      let revealGender='';
      for(let attempt=0;attempt<3&&!revealGender;attempt++){
        try{revealGender=await ensureHomeDragonGender();}
        catch(error){
          console.warn('[Dragonbound] Gender reveal attempt failed.',error);
          if(attempt<2) await new Promise(resolve=>setTimeout(resolve,450*(attempt+1)));
        }
      }
      if(homeHatchGender){
        homeHatchGender.classList.remove('is-male','is-female','is-error');
        if(revealGender){
          homeHatchGender.textContent=dragonGenderRevealCopy(revealGender);
          homeHatchGender.classList.add(revealGender==='female'?'is-female':'is-male');
        }else{
          homeHatchGender.textContent='Gender registration unavailable — please try again.';
          homeHatchGender.classList.add('is-error');
        }
      }
      try{
        homeRevealMusicAudio.pause();homeRevealMusicAudio.currentTime=0;homeRevealMusicAudio.volume=.5;
        const p=homeRevealMusicAudio.play();if(p&&typeof p.catch==='function')p.catch(()=>{});
      }catch(_e){}
      homeHatchReveal?.classList.remove('is-opening');
      homeHatchReveal?.classList.add('is-result');
      homeHatchOpening?.setAttribute('aria-hidden','true');
      homeHatchResult?.setAttribute('aria-hidden','false');
      requestAnimationFrame(()=>setTimeout(()=>homeHatchNameInput?.focus({preventScroll:true}),420));
    };
    const startHomeBasketOpening=()=>{
      if(!homeBasketReady || homeBasketOpened || !selectedAdoptionEgg) return;
      homeBasketOpened=true;
      setHomeBasketReady(false);
      closeHomeBasketConfirmation();
      void ensureHomeDragonGender().catch(error=>console.warn('[Dragonbound] Gender assignment will retry at reveal.',error));
      homeBasketWrap?.classList.add('is-opening');
      homeHatchReveal?.classList.add('is-visible','is-opening');
      homeHatchReveal?.setAttribute('aria-hidden','false');
      homeHatchOpening?.setAttribute('aria-hidden','false');
      homeHatchResult?.setAttribute('aria-hidden','true');
      homeHatchFrameTimers.forEach(clearTimeout);
      homeHatchFrameTimers=[];
      if(homeHatchOpeningImage){
        homeHatchOpeningImage.classList.remove('is-playing','is-frame-changing');
        homeHatchOpeningImage.src=DRAGONBOUND_HOME_BASKET_OPEN_FRAMES[0];
        void homeHatchOpeningImage.offsetWidth;
        homeHatchOpeningImage.classList.add('is-playing');
        const frameTimes=[0,720,1490,2380,3350,4250];
        DRAGONBOUND_HOME_BASKET_OPEN_FRAMES.forEach((src,index)=>{
          if(index===0) return;
          homeHatchFrameTimers.push(setTimeout(()=>{
            if(!homeHatchOpeningImage || !homeHatchReveal?.classList.contains('is-opening')) return;
            homeHatchOpeningImage.classList.add('is-frame-changing');
            setTimeout(()=>{
              if(!homeHatchOpeningImage || !homeHatchReveal?.classList.contains('is-opening')) return;
              homeHatchOpeningImage.src=src;
              homeHatchOpeningImage.classList.remove('is-frame-changing');
            },55);
          },frameTimes[index]));
        });
      }
      try{
        homeBagOpenAudio.pause();homeBagOpenAudio.currentTime=0;homeBagOpenAudio.volume=.82;
        const p=homeBagOpenAudio.play();if(p&&typeof p.catch==='function')p.catch(()=>{});
      }catch(_e){}
      clearTimeout(homeHatchTimer);
      homeHatchTimer=setTimeout(()=>{
        homeHatchFrameTimers.forEach(clearTimeout);
        homeHatchFrameTimers=[];
        homeHatchTimer=0;
        homeBasketWrap?.classList.remove('is-opening','is-visible');
        homeBasketWrap?.setAttribute('aria-hidden','true');
        showHomeDragonReveal();
      },DRAGONBOUND_HOME_REVEAL_DURATION);
    };
    let homeDragonNameSaving=false;
    const submitHomeDragonName=async()=>{
      if(homeDragonNameSaving || !homeHatchNameInput || !selectedAdoptionEgg) return;
      const name=homeHatchNameInput.value.trim().replace(/\s+/g,' ');
      if(name.length<2){
        if(homeHatchNameFeedback) homeHatchNameFeedback.textContent='Give your dragon a name with at least 2 characters.';
        homeHatchNameInput.focus();
        return;
      }
      if(!/^[A-Za-z0-9À-ÖØ-öø-ÿ'’ -]+$/.test(name)){
        if(homeHatchNameFeedback) homeHatchNameFeedback.textContent='Use letters, numbers, spaces, apostrophes or hyphens.';
        homeHatchNameInput.focus();
        return;
      }

      let gender=selectedDragonGender;
      if(!gender){
        try{gender=await ensureHomeDragonGender();}
        catch(error){
          console.warn('[Dragonbound] Gender could not be confirmed before naming.',error);
          if(homeHatchNameFeedback) homeHatchNameFeedback.textContent='Your dragon’s gender could not be registered yet. Please try again.';
          return;
        }
      }
      const breedId=(window.DragonboundBreedIdForEgg?window.DragonboundBreedIdForEgg(selectedAdoptionEgg.name):selectedAdoptionEgg.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''));
      const ownerUsername=dragonboundCurrentUsername();
      const ownerSlug=dragonboundAccountSlug();
      const dragonIdentity={id:`dragon-${ownerSlug}-${breedId}`,breedId,name,eggName:selectedAdoptionEgg.name,ownerUsername,gender,hatchedAt:Date.now()};

      homeDragonNameSaving=true;
      if(homeHatchNameSubmit){homeHatchNameSubmit.disabled=true;homeHatchNameSubmit.setAttribute('aria-disabled','true');}
      homeHatchNameInput.disabled=true;
      if(homeHatchNameFeedback) homeHatchNameFeedback.textContent='Registering your dragon with Bonnie…';

      try{
        const saved=await persistNamedDragonServer(dragonIdentity);
        if(saved?.hatched_at||saved?.dragon_hatched_at){
          const parsed=Date.parse(saved.hatched_at||saved.dragon_hatched_at);
          if(Number.isFinite(parsed)) dragonIdentity.hatchedAt=parsed;
        }
        dragonIdentity.gender=normaliseDragonGender(saved?.gender||gender)||gender;
        dragonIdentity.personality=saved?.personality||null;
        dragonIdentity.traits=saved?.dragon_traits||{};
        dragonIdentity.preferences=saved?.dragon_preferences||{};
        dragonIdentity.memory=saved?.dragon_memory||{};
        dragonIdentity.mood=saved?.dragon_mood||{};
        dragonIdentity.dailyPreferences=saved?.dragon_daily_preferences||dragonboundLastDailyPreferences;
        dragonIdentity.personalityVersion=Number(saved?.personality_version||1);
        selectedDragonName=name;
        try{localStorage.setItem(dragonboundScopedKey(DRAGONBOUND_NAMED_DRAGON_KEY),JSON.stringify(dragonIdentity));}catch(_e){}
        window.dispatchEvent(new CustomEvent('dragonbound:dragon-named',{detail:dragonIdentity}));
        if(homeHatchNameFeedback) homeHatchNameFeedback.textContent='';
        homeHatchNameForm?.classList.add('is-hidden');
        if(homeHatchNamedCopy) homeHatchNamedCopy.innerHTML=`Meet <strong>${name.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}</strong>, your ${dragonGenderDisplay(dragonIdentity.gender).toLowerCase()} ${selectedAdoptionEgg.name} dragon.`;
        homeHatchNamed?.classList.add('is-visible');
        homeHatchNamed?.setAttribute('aria-hidden','false');
        requestAnimationFrame(()=>homeHatchContinue?.focus({preventScroll:true}));
      }catch(error){
        console.error('[Dragonbound] Dragon naming save failed.',error);
        if(homeHatchNameFeedback) homeHatchNameFeedback.textContent='Your dragon could not be saved to your account. Please try again — your name has not been lost.';
        homeHatchNameInput.disabled=false;
        if(homeHatchNameSubmit){homeHatchNameSubmit.disabled=false;homeHatchNameSubmit.setAttribute('aria-disabled','false');}
        homeHatchNameInput.focus();
        homeDragonNameSaving=false;
        return;
      }

      homeDragonNameSaving=false;
    };
    const finishHomeHatchReveal=()=>{
      if(!selectedDragonName) return;
      try{homeRevealMusicAudio.pause();homeRevealMusicAudio.currentTime=0;}catch(_e){}
      homeHatchReveal?.classList.remove('is-visible','is-result');
      homeHatchReveal?.setAttribute('aria-hidden','true');
      dialogueMode='home';
      showHomeSidebar();
    };
    const startMiraHomeDialogue=()=>{
      clearDialogue();
      dialogueMode='dialogue';
      dialogueSequence='mira-home';
      dialoguePages=DRAGONBOUND_MIRA_HOME_PAGES;
      dialogueIndex=0;
      setDialoguePage(0);
    };
    const showAdoptionScene=()=>{
      dialogueMode='transition';
      blackout.classList.add('is-black');
      videoContinueReady=false;
      videoProgressUnlocked=false;
      videoContinuePrompt.classList.remove('is-visible');
      videoContinuePrompt.setAttribute('aria-hidden','true');
      transitionTimerD=setTimeout(()=>{
        try{newGameVideo.pause();newGameVideo.currentTime=0;}catch(_e){}
        newGameStage.classList.add('is-adoption');
        newGameStage.classList.remove('is-video','is-valley','is-cave','is-adoption-interior');
        adoptionExteriorAudio.volume=0;
        const ap=adoptionExteriorAudio.play();
        if(ap&&typeof ap.catch==='function')ap.catch(()=>{});
        fadeAudio(adoptionExteriorAudio,0.5,900);
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          startAdoptionExteriorDialogue();
        },180);
      },520);
    };
    const enterAdoptionCentre=()=>{
      if(dialogueMode!=='adoption') return;
      dialogueMode='transition';
      blackout.classList.add('is-black');
      fadeAudio(adoptionExteriorAudio,0,520);
      transitionTimerD=setTimeout(()=>{
        try{adoptionExteriorAudio.pause();adoptionExteriorAudio.currentTime=0;adoptionExteriorAudio.volume=0.5}catch(_e){}
        closeBonnieMenu();
        closeAdoptEggMenu();
        newGameStage.classList.add('is-adoption-interior');
        newGameStage.classList.remove('is-adoption','is-video','is-valley','is-cave');
        adoptionInteriorAudio.volume=0;
        const ip=adoptionInteriorAudio.play();
        if(ip&&typeof ip.catch==='function')ip.catch(()=>{});
        fadeAudio(adoptionInteriorAudio,0.6,1100);
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          if(newGameStage.classList.contains('has-owned-home')){
            clearDialogue();
            dialogueMode='adoption-interior';
          }else{
            startBonnieIntroDialogue();
          }
        },190);
      },560);
    };
    const unlockVideoContinue=()=>{
      if(videoProgressUnlocked)return;
      videoProgressUnlocked=true;
      videoContinueReady=true;
      videoContinuePrompt.classList.add('is-visible');
      videoContinuePrompt.setAttribute('aria-hidden','false');
    };
    const startMaelithVideo=()=>{
      dialogueMode='transition';
      blackout.classList.add('is-black');
      clearDialogue();
      dialoguePanel.classList.remove('is-visible');
      videoContinueReady=false;
      videoProgressUnlocked=false;
      videoContinuePrompt.classList.remove('is-visible');
      videoContinuePrompt.setAttribute('aria-hidden','true');
      fadeAudio(valleyAudio,0,700);
      clearTimeout(videoUnlockTimeout);
      transitionTimerD=setTimeout(()=>{
        try{valleyAudio.pause();valleyAudio.currentTime=0;valleyAudio.volume=0.4}catch(_e){}
        newGameStage.classList.add('is-video');
        newGameStage.classList.remove('is-adoption','is-valley','is-cave','is-adoption-interior');
        try{
          newGameVideo.pause();
          newGameVideo.currentTime=0;
          newGameVideo.volume=1;
          const p=newGameVideo.play();
          if(p&&typeof p.catch==='function')p.catch(()=>{});
        }catch(_e){}
        videoUnlockTimeout=setTimeout(unlockVideoContinue, 25000);
        transitionTimerE=setTimeout(()=>{
          blackout.classList.remove('is-black');
          dialogueMode='flight-video';
        },160);
      },620);
    };

    const concludeMaelithSequence=()=>{
      startMaelithVideo();
    };
    const advanceDialogue=()=>{
      if(dialogueMode!=='dialogue') return;
      const now=Date.now();
      if(now-lastAdvanceAt<160) return;
      lastAdvanceAt=now;
      if(finishDialogueTyping()) return;
      if(dialogueIndex>=dialoguePages.length-1){
        if(dialogueSequence==='forest'){
          showCaveScene();
        }else if(dialogueSequence==='cave'){
          revealValleyScene();
        }else if(dialogueSequence==='adoption-exterior'){
          clearDialogue();
          dialogueMode='adoption';
        }else if(dialogueSequence==='adoption-interior'){
          clearDialogue();
          dialogueMode='adoption-interior';
        }else if(dialogueSequence==='bonnie-chat'){
          clearDialogue();
          dialogueMode='adoption-interior';
          if(bonnieChatReturnToMenu){
            bonnieChatReturnToMenu=false;
            openBonnieMenu();
          }
        }else if(dialogueSequence==='adoption-result'){
          clearDialogue();
          dialogueMode='adoption-interior';
          openBonnieMenu();
        }else if(dialogueSequence==='mira-home'){
          clearDialogue();
          startDoppyArrival();
        }else if(dialogueSequence==='doppy-home'){
          clearDialogue();
          dialogueMode='home';
          homeDeliveryFinished=true;
          setHomeBasketReady(true);
          showHomeSidebar();
          startDoppyDeparture();
        }else{
          concludeMaelithSequence();
        }
        return;
      }
      setDialoguePage(dialogueIndex+1);
    };
    const continueFlightVideo=()=>{
      if(dialogueMode!=='flight-video' || !videoContinueReady) return;
      showAdoptionScene();
    };
    const startDialogueSequence=()=>{
      dialogueMode='dialogue';
      dialogueSequence='forest';
      dialoguePages=DRAGONBOUND_PROLOGUE_PAGES;
      dialogueIndex=0;
      setDialoguePage(0);
    };
    const loadDragonboundGame=async()=>{
      if(overlay.classList.contains('is-new-game')) return;
      const profile=await hydrateDragonboundProfile({force:true});
      const hasSave=syncDragonboundMainMenuSaveState(profile);
      if(!hasSave){
        showFeedback('No Dragonbound save found yet. Start a New Game first.');
        return;
      }

      restoreLockedEgg();
      const property=resolveOwnedStarterHome();
      const locked=lockedEggForCurrentAccount();
      const dragon=namedDragonForCurrentAccount();

      overlay.classList.add('is-new-game');
      blackout.classList.add('is-black');
      fadeAudio(audio,0,420);
      transitionTimerA=setTimeout(()=>{
        try{audio.pause();audio.currentTime=0;audio.volume=0.25}catch(_e){}
        newGameStage.classList.add('is-active','is-revealed');
        newGameStage.setAttribute('aria-hidden','false');
        newGameStage.classList.remove('is-cave','is-valley','is-video','is-adoption','is-adoption-interior','is-estate-exterior','is-estate-interior','is-home','has-owned-home');

        if(property){
          // Backfill any starter home that was saved locally by V32.41 before
          // the profile hydration user-id bug was fixed.
          saveStarterHouseLocally(property.id);
          if(profile?.starter_house_id!==property.id) void persistStarterHouseServer(property.id);
          newGameStage.dataset.dragonboundHouseId=property.id;
          newGameStage.classList.add('is-home','has-owned-home');
          if(homeImage) homeImage.style.backgroundImage=`url('${property.full}')`;
          homeScene?.classList.add('is-visible');
          homeScene?.setAttribute('aria-hidden','false');
          window.dispatchEvent(new CustomEvent('dragonbound:house-selected',{detail:{houseId:property.id}}));
          dialogueMode='home';
          transitionTimerB=setTimeout(()=>{
            blackout.classList.remove('is-black');
            if(locked && !dragon && !dragonboundIsAdminTester()){
              resetHomeDeliveryScene();
              hideHomeSidebar();
              setTimeout(()=>{if(newGameStage.classList.contains('is-home')) startDoppyArrival();},320);
            }else{
              showHomeSidebar();
            }
          },220);
          return;
        }

        homeScene?.classList.remove('is-visible');
        homeScene?.setAttribute('aria-hidden','true');
        // A locked egg is already a valid cloud save, even if the player left
        // before choosing a house. Resume that incomplete onboarding at Hearth
        // & Key instead of dropping them back at Bonnie's with a dead Home
        // button. Their permanent egg remains selected and is delivered after
        // they choose a starter property.
        if(locked) selectedAdoptionEgg=locked;
        newGameStage.classList.add('is-estate-interior');
        estateInteriorAudio.volume=0;
        const p=estateInteriorAudio.play();
        if(p&&typeof p.catch==='function')p.catch(()=>{});
        fadeAudio(estateInteriorAudio,0.5,850);
        dialogueMode='estate-interior';
        transitionTimerB=setTimeout(()=>{
          blackout.classList.remove('is-black');
          showFeedback(locked&&!dragon
            ? `${locked.name} egg restored from your cloud save. Choose a free starter home with Mira to continue.`
            : 'Choose a starter home to continue your Dragonbound save.');
        },220);
      },520);
    };

    const startNewGame=()=>{
      if(overlay.classList.contains('is-new-game'))return;
      preloadDragonboundSequenceAssets();
      overlay.classList.add('is-new-game');
      blackout.classList.add('is-black');
      fadeAudio(audio,0,560);
      transitionTimerA=setTimeout(()=>{
        try{audio.pause();audio.currentTime=0;audio.volume=0.25}catch(_e){}
        newGameStage.classList.add('is-active');
        newGameStage.setAttribute('aria-hidden','false');
        newGameAudio.volume=0;
        const p=newGameAudio.play();
        if(p&&typeof p.catch==='function')p.catch(()=>{});
        transitionTimerB=setTimeout(()=>{
          newGameStage.classList.add('is-revealed');
          blackout.classList.remove('is-black');
          fadeAudio(newGameAudio,0.4,1100);
          transitionTimerC=setTimeout(startDialogueSequence, 700);
        },160);
      },720);
    };
    const close=()=>{
      window.dispatchEvent(new CustomEvent('dragonbound:house-closed'));
      closeMyDragonProfile();
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden','true');
      document.body.classList.remove('dragonbound-menu-open');
      fadeAudio(audio,0,300);
      fadeAudio(newGameAudio,0,300);
      fadeAudio(valleyAudio,0,300);
      fadeAudio(adoptionExteriorAudio,0,300);
      fadeAudio(adoptionInteriorAudio,0,300);
      fadeAudio(estateInteriorAudio,0,300);
      setTimeout(()=>{
        try{audio.pause();audio.currentTime=0;audio.volume=0.25}catch(_e){}
        try{newGameAudio.pause();newGameAudio.currentTime=0;newGameAudio.volume=0.4}catch(_e){}
        try{valleyAudio.pause();valleyAudio.currentTime=0;valleyAudio.volume=0.4}catch(_e){}
        stopDialogueTypeAudio();
        resetDragonboundScene();
      },340);
    };
    const open=()=>{
      resetDragonboundScene();
      syncDragonboundMainMenuSaveState(dragonboundLastProfile);
      void hydrateDragonboundProfile({force:true}).then(profile=>syncDragonboundMainMenuSaveState(profile));
      try{
        const savedHouse=readStarterHouseLocally();
        if(savedHouse) window.dispatchEvent(new CustomEvent('dragonbound:house-selected',{detail:{houseId:savedHouse}}));
      }catch(_e){}
      document.querySelectorAll('.repo-character-passport-hover,#repoCharacterPassportHover').forEach(card=>{
        card.classList.remove('is-visible');
        card.style.opacity='0';
        card.style.visibility='hidden';
      });
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden','false');
      document.body.classList.add('dragonbound-menu-open');
      audio.volume=0;
      const playPromise=audio.play();
      fadeAudio(audio,0.25,900);
      if(playPromise&&typeof playPromise.catch==='function')playPromise.catch(()=>{});
    };

    overlay.querySelectorAll('.dragonbound-menu-action').forEach(button=>{
      const activate=async()=>{
        const action=button.dataset.dragonboundAction;
        if(action==='new-game'){
          closeRulesOverlay();
          const profile=await hydrateDragonboundProfile({force:true});
          if(!dragonboundIsAdminTester() && syncDragonboundMainMenuSaveState(profile)){
            showFeedback('You already have a Dragonbound save — use Load Game.');
            return;
          }
          startNewGame();
          return;
        }
        if(action==='load-game'){ await loadDragonboundGame(); return; }
        if(action==='rules'){ openRulesOverlay(); return; }
      };
      button.addEventListener('click',activate);
      button.addEventListener('keydown',event=>{
        if(event.key==='Enter' || event.key===' '){
          event.preventDefault();
          activate();
        }
      });
    });

    rulesClose?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      closeRulesOverlay();
    });
    rulesOverlay?.addEventListener('click', event=>{
      if(event.target===rulesOverlay || event.target.closest('.dragonbound-rules-backdrop')) closeRulesOverlay();
    });

    dialogueNext.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      advanceDialogue();
    });
    dialoguePanel.addEventListener('click', event=>{
      const actionable=event.target.closest('button');
      if(actionable) return;
      advanceDialogue();
    });
    newGameStage.addEventListener('click', event=>{
      if(event.target.closest('.dragonbound-bonnie-hotspot') || event.target.closest('.dragonbound-estate-door-hotspot') || event.target.closest('.dragonbound-mira-hotspot') || event.target.closest('.dragonbound-bonnie-menu-shell') || event.target.closest('.dragonbound-bonnie-chat-wrap') || event.target.closest('.dragonbound-adopt-menu-shell') || event.target.closest('.dragonbound-adopt-confirmation') || event.target.closest('.dragonbound-adoption-roll') || event.target.closest('.dragonbound-study-shell') || event.target.closest('.dragonbound-estate-prompt-panel') || event.target.closest('.dragonbound-property-shell') || event.target.closest('.dragonbound-property-confirm-panel') || event.target.closest('.dragonbound-home-basket-wrap') || event.target.closest('.dragonbound-home-basket-confirm-panel') || event.target.closest('.dragonbound-home-hatch-reveal')) return;
      if(dialogueMode==='dialogue'){
        if(event.target.closest('.dragonbound-dialogue-next')) return;
        advanceDialogue();
        return;
      }
      if(dialogueMode==='flight-video'){
        continueFlightVideo();
      }
    });

    bonnieHotspot?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      if(dialogueMode!=='adoption-interior' || !newGameStage.classList.contains('is-adoption-interior')) return;
      openBonnieMenu();
    });
    bonnieMenuClose?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      closeBonnieMenu();
    });
    bonnieChatLaunch?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      if(dialogueMode!=='adoption-interior' || !newGameStage.classList.contains('is-adoption-interior') || !bonnieMenuOverlay?.classList.contains('is-visible')) return;
      setBonnieChatOptionsOpen(!bonnieChatOptionsOpen);
    });
    bonnieChatOptionButtons.forEach(button=>{
      button.addEventListener('click', event=>{
        event.preventDefault();
        event.stopPropagation();
        if(dialogueMode!=='adoption-interior' || !newGameStage.classList.contains('is-adoption-interior') || !bonnieMenuOverlay?.classList.contains('is-visible')) return;
        startBonnieChat(button.dataset.bonnieTopic || '');
      });
    });
    bonnieMenuActions.forEach(button=>{
      button.addEventListener('click', event=>{
        event.preventDefault();
        event.stopPropagation();
        const kind=[...button.classList].find(name=>name.startsWith('dragonbound-bonnie-menu-action--'))?.replace('dragonbound-bonnie-menu-action--','')||'';
        if(kind==='adopt'){
          openAdoptEggMenu();
        }else if(kind==='study'){
          openStudyMenu();
        }else if(kind==='shop'){
          showFeedback("Bonnie's shop is coming soon");
        }
      });
    });
    bonnieMenuOverlay?.addEventListener('click', event=>{
      if(event.target===bonnieMenuOverlay || event.target.closest('.dragonbound-bonnie-menu-backdrop')) closeBonnieMenu();
    });
    studyMenuBack?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      closeStudyMenu();
      openBonnieMenu();
    });
    studyMenuOverlay?.addEventListener('click', event=>{
      if(event.target===studyMenuOverlay || event.target.closest('.dragonbound-study-backdrop')){
        closeStudyMenu();
        openBonnieMenu();
      }
    });
    estatePromptStay?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      studyEstatePromptDismissed=true;
      clearStudyEstatePromptTimer();
      closeEstatePrompt();
    });
    estatePromptGo?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      if(estatePromptGo.dataset.destination==='home') travelToOwnedHome({deliverEgg:true});
      else goToEstateExterior();
    });
    estatePrompt?.addEventListener('click', event=>{
      if(event.target===estatePrompt || event.target.closest('.dragonbound-estate-prompt-backdrop')){
        studyEstatePromptDismissed=true;
        clearStudyEstatePromptTimer();
        closeEstatePrompt();
      }
    });
    adoptMenuClose?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      if(adoptionBonnieTimer) return;
      closeAdoptEggMenu();
      openBonnieMenu();
    });
    adoptMenuActions.forEach(button=>{
      button.addEventListener('click', event=>{
        event.preventDefault();
        event.stopPropagation();
        const kind=[...button.classList].find(name=>name.startsWith('dragonbound-adopt-menu-action--'))?.replace('dragonbound-adopt-menu-action--','')||'';
        if(adoptionRolling || adoptionBonnieTimer) return;
        if(kind==='back'){
          closeAdoptEggMenu();
          openBonnieMenu();
        }else if(kind==='confirm'){
          openAdoptionConfirmation();
        }
      });
    });
    adoptMenuOverlay?.addEventListener('click', event=>{
      if(adoptionRolling || adoptionConfirmationOpen || adoptionBonnieTimer) return;
      if(event.target===adoptMenuOverlay || event.target.closest('.dragonbound-adopt-menu-backdrop')){
        closeAdoptEggMenu();
        openBonnieMenu();
      }
    });
    adoptConfirmationYes?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      startAdoptionRoll();
    });
    adoptConfirmationNo?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      closeAdoptionConfirmation();
    });
    adoptConfirmation?.addEventListener('click', event=>{
      event.stopPropagation();
      if(event.target===adoptConfirmation || event.target.closest('.dragonbound-adopt-confirmation-backdrop')) closeAdoptionConfirmation();
    });
    adoptionRoll?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
    });
    adoptionDoorHotspot?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      enterAdoptionCentre();
    });
    estateDoorHotspot?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopImmediatePropagation();
      enterEstateAgent();
    }, true);
    miraHotspot?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopPropagation();
      openPropertyBoard();
    });
    propertyBack?.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();closePropertyBoard();
    });
    propertyOverlay?.addEventListener('click', event=>{
      if(event.target===propertyOverlay || event.target.closest('.dragonbound-property-backdrop')) closePropertyBoard();
    });
    propertyConfirmYes?.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();
      if(pendingStarterProperty) void moveIntoStarterHome(pendingStarterProperty);
    });
    propertyConfirmNo?.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();closePropertyConfirmation();
    });
    homeTreatButton?.addEventListener('click', event=>{event.preventDefault();event.stopPropagation();openDragonTreatConfirm();});
    homeTreatConfirmYes?.addEventListener('click', event=>{event.preventDefault();event.stopPropagation();startDragonTreatSequence();});
    homeTreatConfirmNo?.addEventListener('click', event=>{event.preventDefault();event.stopPropagation();closeDragonTreatConfirm();});
    homeTreatConfirm?.addEventListener('click', event=>{if(event.target===homeTreatConfirm||event.target.closest('.dragonbound-home-treats-confirm-backdrop'))closeDragonTreatConfirm();});
    homeTravelHotspot?.addEventListener('click', event=>{
      event.preventDefault();event.stopImmediatePropagation();openTravelMenu();
    },true);
    homeBookHotspot?.addEventListener('click',event=>{event.preventDefault();event.stopImmediatePropagation();openMyDragonProfile();},true);
    myDragonClose?.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();closeMyDragonProfile();});
    myDragonOverlay?.addEventListener('click',event=>{if(event.target===myDragonOverlay||event.target.closest('.dragonbound-my-dragon-backdrop'))closeMyDragonProfile();});
    travelMenuClose?.addEventListener('click', event=>{event.preventDefault();event.stopPropagation();closeTravelMenu();});
    travelMenu?.addEventListener('click', event=>{
      if(event.target===travelMenu || event.target.closest('.dragonbound-travel-menu-backdrop')) closeTravelMenu();
    });
    travelDestinations.forEach(button=>button.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();
      const destination=button.dataset.dragonboundTravel;
      if(destination==='adoption') travelToAdoptionCentre();
      else if(destination==='estate') travelToEstateAgents();
      else if(destination==='home'){if(newGameStage.classList.contains('is-home')) closeTravelMenu();else travelToOwnedHome();}
      else if(destination==='keepers') openDragonboundHouseVisits();
    }));
    locationReturnHome?.addEventListener('click', event=>{event.preventDefault();event.stopImmediatePropagation();travelToOwnedHome();},true);
    window.addEventListener('dragonbound:house-selected',event=>{const nextId=String(event?.detail?.houseId||'');if(dragonboundActivePlaydate?.hostHouseId&&nextId&&nextId!==dragonboundActivePlaydate.hostHouseId)dragonboundEndPlaydate('house-changed');});
    houseVisitsClose?.addEventListener('click', event=>{event.preventDefault();event.stopPropagation();closeDragonboundHouseVisits();});
    houseVisits?.addEventListener('click', event=>{if(event.target===houseVisits||event.target.closest('.dragonbound-house-visits-backdrop'))closeDragonboundHouseVisits();});
    houseVisitsSearch?.addEventListener('input',()=>renderDragonboundHouseVisitList());
    houseVisitListButton?.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();showDragonboundHouseVisitBrowser();});
    houseVisitHomeButton?.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();closeDragonboundHouseVisits();});

    newGameStage.addEventListener('click', event=>{
      if(!newGameStage.classList.contains('is-home') || !homeBasketWrap || homeBasketOpened) return;
      const rect=homeBasketWrap.getBoundingClientRect();
      if(rect.width<=0 || rect.height<=0) return;
      const x=event.clientX;
      const y=event.clientY;
      const inside=x>=rect.left && x<=rect.right && y>=rect.top && y<=rect.bottom;
      if(!inside) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      if(!homeBasketReady && homeDeliveryFinished) setHomeBasketReady(true);
      openHomeBasketConfirmation();
    }, true);

    homeBasketWrap?.addEventListener('click', event=>{
      event.preventDefault();
      event.stopImmediatePropagation();
      if(!newGameStage.classList.contains('is-home')) return;
      if(!homeBasketReady && homeDeliveryFinished && !homeBasketOpened) setHomeBasketReady(true);
      openHomeBasketConfirmation();
    }, true);
    homeBasketWrap?.addEventListener('keydown', event=>{
      if(event.key==='Enter' || event.key===' '){
        event.preventDefault();
        event.stopImmediatePropagation();
        if(!newGameStage.classList.contains('is-home')) return;
        if(!homeBasketReady && homeDeliveryFinished && !homeBasketOpened) setHomeBasketReady(true);
        openHomeBasketConfirmation();
      }
    }, true);
    homeBasketConfirmYes?.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();startHomeBasketOpening();
    });
    homeBasketConfirmNo?.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();closeHomeBasketConfirmation();
    });
    homeBasketConfirm?.addEventListener('click', event=>{
      if(event.target===homeBasketConfirm || event.target.closest('.dragonbound-home-basket-confirm-backdrop')) closeHomeBasketConfirmation();
    });
    homeHatchNameSubmit?.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();submitHomeDragonName();
    });
    homeHatchNameInput?.addEventListener('keydown', event=>{
      if(event.key==='Enter'){event.preventDefault();event.stopPropagation();submitHomeDragonName();}
    });
    homeHatchContinue?.addEventListener('click', event=>{
      event.preventDefault();event.stopPropagation();finishHomeHatchReveal();
    });
    propertyConfirm?.addEventListener('click', event=>{
      if(event.target===propertyConfirm || event.target.closest('.dragonbound-property-confirm-backdrop')) closePropertyConfirmation();
    });

    newGameVideo.addEventListener('dragstart', event=>event.preventDefault());
    newGameVideo.addEventListener('selectstart', event=>event.preventDefault());
    newGameVideo.addEventListener('timeupdate', ()=>{
      if(!videoProgressUnlocked && newGameVideo.currentTime >= 25){
        unlockVideoContinue();
      }
    });
    newGameVideo.addEventListener('ended', ()=>{
      unlockVideoContinue();
    });
    closeBtn.addEventListener('click', event=>{
      if(adoptionRolling){ event.preventDefault(); event.stopPropagation(); return; }
      close();
    });
    overlay.addEventListener('click', event=>{
      if(event.target===overlay && !adoptionRolling && !adoptionConfirmationOpen) close();
    });
    document.addEventListener('keydown', event=>{
      if(event.key==='Escape' && overlay.classList.contains('is-open')){
        if(adoptionRolling) return;
        if(rulesOverlay?.classList.contains('is-visible')){ closeRulesOverlay(); return; }
        if(myDragonOverlay?.classList.contains('is-visible')){ closeMyDragonProfile(); return; }
        if(houseVisits?.classList.contains('is-visible')){ closeDragonboundHouseVisits(); return; }
        if(travelMenu?.classList.contains('is-visible')){ closeTravelMenu(); return; }
        if(adoptionConfirmationOpen){ closeAdoptionConfirmation(); return; }
        if(homeBasketConfirm?.classList.contains('is-visible')){ closeHomeBasketConfirmation(); return; }
        if(propertyConfirm?.classList.contains('is-visible')){ closePropertyConfirmation(); return; }
        if(propertyOverlay?.classList.contains('is-visible')){ closePropertyBoard(); return; }
        if(estatePrompt?.classList.contains('is-visible')){ studyEstatePromptDismissed=true; clearStudyEstatePromptTimer(); closeEstatePrompt(); return; }
        if(studyMenuOverlay?.classList.contains('is-visible')){ closeStudyMenu(); openBonnieMenu(); return; }
        if(adoptMenuOverlay?.classList.contains('is-visible')){ closeAdoptEggMenu(); openBonnieMenu(); return; }
        if(bonnieMenuOverlay?.classList.contains('is-visible')){ closeBonnieMenu(); return; }
        close(); return;
      }
      if(!overlay.classList.contains('is-open')) return;
      if(dialogueMode==='dialogue' && (event.key===' ' || event.key==='Enter')){
        event.preventDefault();
        advanceDialogue();
        return;
      }
      if(dialogueMode==='flight-video'){
        event.preventDefault();
        continueFlightVideo();
      }
    });

    // V34.09 — small public bridge for playable outings. This deliberately reuses
    // the existing profile, treat, pet and playdate systems rather than duplicating
    // economy or relationship logic inside the destination controller.
    window.DragonboundHomeActions={
      openProfile:()=>openMyDragonProfile(),
      closeProfile:()=>closeMyDragonProfile(),
      playdateSnapshot:()=>{
        if(!dragonboundActivePlaydate||!dragonboundPlaydateGuest?.profile)return null;
        const profile=dragonboundPlaydateGuest.profile||{};
        return {
          playdateId:dragonboundActivePlaydate.playdateId||'',
          guestUserId:dragonboundActivePlaydate.guestUserId||'',
          expiresAt:dragonboundActivePlaydate.expiresAt||null,
          relationship:dragonboundSocialRelationshipFor(dragonboundActivePlaydate.guestUserId||''),
          guest:{
            id:profile.id||`visitor-dragon-${dragonboundActivePlaydate.guestUserId||'guest'}`,
            name:profile.name||'Visiting dragon',
            breedId:profile.breedId||profile.breed_id||'',
            gender:profile.gender||'',
            personality:profile.personality||{},
            traits:profile.traits||{}
          }
        };
      },
      recordSocial:(interactionType='calm_proximity')=>{
        const uid=String(dragonboundActivePlaydate?.guestUserId||'');
        if(!uid)return Promise.resolve(null);
        return dragonboundRecordSocialInteraction(uid,String(interactionType||'calm_proximity'));
      },
      endPlaydate:(reason='outing-ended')=>dragonboundEndPlaydate(reason),
      giveOutingTreat:async()=>{
        if(dragonTreatsBusy)return{ok:false,message:'Dragon Bites are busy right now.'};
        const actor=activeDragonTreatActor();
        if(!actor)return{ok:false,message:'Your dragon is not ready for Dragon Bites right now.'};
        const remain=Math.max(0,getTreatCooldownUntil()-Date.now());
        if(remain>0)return{ok:false,message:`Dragon Bites will be ready again in ${formatTreatCooldown(remain)}.`};
        if(dragonTreatBalance()<DRAGONBOUND_TREAT_COST)return{ok:false,message:`You need ${DRAGONBOUND_TREAT_COST.toLocaleString('en-GB')} GP to buy Dragon Bites.`};
        try{
          const receipt=await purchaseDragonTreats();
          const name=actor.dragon?.name||'Your dragon';
          actor.applyCareBenefit?.('hunger',6);
          actor.applyCareBenefit?.('fun',2);
          actor.applyCareBenefit?.('social',1);
          actor.addBond?.(.15);
          const obs=actor.memory?.observationCounters||(actor.memory.observationCounters={});
          obs.dragonBitesEaten=(Number(obs.dragonBitesEaten)||0)+1;
          actor.noteKeeperRelationship?.('treat',{label:'Dragon Bites on an outing'});
          actor.noteUniverseActivity?.('treat');
          actor.openRoutineTrigger?.('keeper_treat',{durationMs:65000,source:'outing-treat'});
          actor.behaviourDirty=true;
          window.DragonboundBabyEngine?.saveBehaviourLocal?.();
          window.DragonboundBabyEngine?.saveBehaviour?.(true);
          return{ok:true,name,newGp:Number(receipt?.new_gp||dragonTreatBalance()),cooldownUntil:receipt?.cooldown_until||getTreatCooldownUntil()};
        }catch(error){
          const message=String(error?.message||'Dragon Bites could not be purchased.').replace(/^Error:\s*/, '');
          const seconds=Number(message.match(/in\s+(\d+)\s+seconds?/i)?.[1]||0);if(seconds>0)setTreatCooldownUntil(Date.now()+seconds*1000);
          return{ok:false,message};
        }
      }
    };

    overlay.openDragonbound=open;
    overlay.closeDragonbound=close;
    return overlay;
  }

  function bindDragonboundLauncher(){
    const button=document.getElementById('openDragonbound');
    if(!button) return;
    const overlay=buildDragonboundOverlay();
    button.addEventListener('click', event=>{
      event.preventDefault();
      overlay.openDragonbound();
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', bindDragonboundLauncher, {once:true});
  }else{
    bindDragonboundLauncher();
  }
})();


