/* ============================================================
   PORTFOLIO CONTENT
   Edit text here — the page builds itself from this file.
   deck: folder name inside assets/decks (null = no document)
   deckPage: page the viewer opens on (1-based)
   ============================================================ */

window.DECKS = {
  "central-province":       { title: "Central Province — Case Study",            pages: 39,  ratio: 16 / 9 },
  "central-province-pitch": { title: "Central Province Whisky — Brand Pitch",    pages: 76,  ratio: 16 / 9 },
  "barrel":                 { title: "Barrel — Club Launch Case Study",           pages: 12,  ratio: 16 / 9 },
  "credai":                 { title: "CREDAI Property Show 2026 — Case Study",    pages: 21,  ratio: 16 / 9 },
  "dr-arpit-tiwari":        { title: "Dr. Arpit Tiwari — Personal Branding",      pages: 18,  ratio: 16 / 9 },
  "saa":                    { title: "Sunil Agrawal & Associates — Case Study",   pages: 14,  ratio: 16 / 9 },
  "lemount":                { title: "Lemount — Year-long Launch Campaign",       pages: 105, ratio: 16 / 9 },
  "rhythm-resitel":         { title: "Rhythm ResiTel — Go-to-Market Plan",        pages: 34,  ratio: 16 / 9 },
  "stok":                   { title: "STOK India — Gen Z Strategy",               pages: 38,  ratio: 16 / 9 },
  "kimirica":               { title: "Kimirica — Digital Strategy (Phase 1)",     pages: 26,  ratio: 16 / 9 },
  "dp-jewelers":            { title: "DP Jewelers — #ForEveryGeneration",         pages: 22,  ratio: 16 / 9 }
};

window.WORK = [
  {
    id: "central-province",
    type: "case", cat: ["brand", "performance"],
    tag: "Growth in a dark market",
    title: "Central Province",
    client: "Associated Alcohols & Breweries Ltd.",
    role: "Social Media Strategist & Campaign Planner",
    hook: "Built a spirits brand on social — without ever being allowed to advertise it.",
    hero: { n: "54M+", l: "organic views" },
    challenge: "Scale a rum, whisky and vodka brand in a heavily regulated dark market — no surrogate marketing, no breaking platform rules on alcohol promotion. The brand started on the bottom shelf: seen as “just another brand”, no story, no loyalists, zero top-of-mind recall.",
    insight: "If the bottle is the subject, the content gets flagged. If the bottle is part of the moment, it gets shared.",
    move: "I created the <b>Product-as-a-Prop</b> strategy. The bottle became a natural prop inside humour, lifestyle and relatable everyday situations — placed at the centre of conversations the audience was already having. It solved the regulatory problem and kept the brand top-of-mind, run as a consistent content machine rather than one-off posts.",
    results: [
      ["67,000+", "organic followers in 19 months"],
      ["54M+", "views"],
      ["31M+", "unique accounts reached"],
      ["260K+", "profile visits — proof of intent"],
      ["2,000+", "new followers every single month"]
    ],
    deck: "central-province", deckPage: 1
  },
  {
    id: "masterstroke",
    type: "case", cat: ["brand", "launch"],
    tag: "Owned media IP",
    title: "The MasterStroke",
    client: "Associated Alcohols & Breweries Ltd.",
    role: "End-to-end Creative Lead — story, screenplay, script",
    hook: "Central India's first cinematic micro-drama series from an alcohol brand.",
    hero: { n: "2.4 Cr+", l: "views" },
    challenge: "Relatable content was already working. The harder question: how do we reach a young audience, break the clutter and do something never done before in this category?",
    insight: "Ads get skipped. Stories get followed. A brand can own a show instead of renting attention.",
    move: "I wrote <b>The MasterStroke</b> — a horror-comedy micro-drama about four friends and a suspicious watchman, all chasing a party. Horror-comedy because it is massy, fresh and has high recall: the jumps and the laughs make moments people talk about. <br><br><b>The build:</b> 14 script drafts over 2 months · 15+ actors auditioned in 15 days · the whole series shot in 2 days · rolled out as 1 poster, 1 teaser and 5 micro-episodes.",
    results: [
      ["2.4 Cr+", "views across 5 episodes"],
      ["1.5 Cr+", "people reached"],
      ["72.4K", "interactions"],
      ["62.9K", "profile visits"],
      ["9.7K", "new followers"]
    ],
    deck: "central-province", deckPage: 25
  },
  {
    id: "credai",
    type: "case", cat: ["launch", "performance"],
    tag: "9-day sprint",
    title: "CREDAI Property Show 2026",
    client: "CREDAI Indore",
    role: "Campaign Strategy & Execution Lead",
    hook: "Brief on 14 January. Event on 23 January. The whole city talking by the 26th.",
    hero: { n: "32M+", l: "views in 9 days" },
    challenge: "The digital mandate arrived on 14 January for a show running 23–26 January. Nine days to plan, produce and deliver — no room for slow approvals or experiments.",
    insight: "If Indore is on social media, the property show should be everywhere — and every piece must serve footfall or collective recall, or it doesn't go live.",
    move: "Two outcomes defined before a single post: <b>footfall</b> and <b>unified recall for CREDAI as a collective body</b>. Then three content layers running in parallel — CREDAI-led authority content, developer collaborations to borrow warm audiences, and 30 influencers with one rule: <b>they had to be on-ground</b>. No stock visuals, no passive posting.<br><br><b>Volume shipped in days:</b> 150+ stories · 110+ posts · 100+ organic reposts.",
    results: [
      ["3.2 Cr", "views"],
      ["1.2 Cr", "unique people reached"],
      ["50K+", "likes, comments, shares & saves"],
      ["15,000", "link clicks for event details"],
      ["20K+", "profile visits"],
      ["1,200+", "genuine new followers"]
    ],
    note: "Instagram Insights only — other platforms not included.",
    deck: "credai", deckPage: 1
  },
  {
    id: "barrel",
    type: "case", cat: ["launch"],
    tag: "Club launch",
    title: "Barrel & Co.",
    client: "Barrel — premium club & bar, Indore",
    role: "Content Strategist & Campaign Planner",
    hook: "Launched a Mumbai club in a new city and sold out tables every single day.",
    hero: { n: "9M+", l: "views in 3 months" },
    challenge: "Bring one of Mumbai's renowned clubs to Indore and guarantee a sold-out opening in a city with a crowded nightlife scene.",
    insight: "Curiosity sells tables better than photos. Don't show the place — make the city ask what's inside.",
    move: "A <b>two-phase 360° launch</b>. Phase 1 created hype without showing the venue: teaser videos, influencer seeding, the <b>#whatsinthebarrel</b> puzzle campaign and deliberate mystery. Phase 2 revealed Barrel in a content blitz, amplified by influencers, local pages and traditional media.",
    results: [
      ["9M+", "views in 3 months"],
      ["0 → 6,000+", "followers in 60 days"],
      ["2.2M+", "views on a single organic reel"],
      ["Sold out", "tables every day"]
    ],
    deck: "barrel", deckPage: 1
  },
  {
    id: "dr-arpit",
    type: "case", cat: ["brand", "performance"],
    tag: "Healthcare personal brand",
    title: "Dr. Arpit Tiwari",
    client: "Orthopedic & Joint Replacement Surgeon, Indore",
    role: "Brand & Growth Strategy (since Dec 2021)",
    hook: "Turned a surgeon the market couldn't see into Indore's #1 orthopedic search result.",
    hero: { n: "10×", l: "busier practice" },
    challenge: "One of very few M.Ch. orthopedic surgeons in Indore — but his hospital was known for his mother's gynecology practice. The market had no idea what he could do.",
    insight: "Stop marketing the hospital. Start building the doctor. Don't say he's an expert — let him demonstrate it.",
    move: "Repositioned from <i>“Visit Jyoti Hospital”</i> to <i>“Know Dr. Arpit Tiwari”</i>. Built an ecosystem, not a campaign: hundreds of doctor-led education videos answering real patient questions, testimonials, PR and newspaper coverage, a new website, SEO — and a <b>lead-management system</b> that carries a viewer from content → enquiry → follow-up → consultation.",
    results: [
      ["4–5 → 40–50+", "OPDs per day"],
      ["1–2 → 7–10+", "surgeries per day"],
      ["#1", "on Google: “Best Orthopedic Surgeon in Indore”"],
      ["2,000+", "patient leads generated"],
      ["2022", "Best Joint Replacement Surgeon, M.P. — Dainik Bhaskar Healthcare Awards"]
    ],
    deck: "dr-arpit-tiwari", deckPage: 1
  },
  {
    id: "simcha-snow",
    type: "case", cat: ["launch", "performance"],
    tag: "Attraction launch",
    title: "Simcha Island — Snow Park",
    client: "Simcha Island, Central India's largest adventure park & resort",
    role: "Scriptwriter, Director & strategic lead (3.5+ years on the brand)",
    hook: "Proved the direct ROI of creative: sales up 29% in two weeks.",
    hero: { n: "+29%", l: "Snow Park sales in 2 weeks" },
    challenge: "Launch a new attraction and prove that digital creative drives ticket sales — not just likes.",
    insight: "People don't buy a ticket, they buy the feeling of being there. Sell the experience, then add urgency.",
    move: "A <b>3-part video campaign</b> — teasers into a main promo — built on experience-led storytelling designed to create desire and urgency.",
    results: [
      ["29%", "increase in Snow Park sales within two weeks"],
      ["1.2M+", "views across platforms"]
    ],
    deck: null
  },
  {
    id: "simcha-winter",
    type: "case", cat: ["launch"],
    tag: "360° seasonal campaign",
    title: "Simcha Winter Fiesta",
    client: "Simcha Island",
    role: "Lead — Campaign & Social Media",
    hook: "Owned the whole Christmas–New Year season and turned it into real footfall.",
    hero: { n: "14,000", l: "in-person visitors" },
    challenge: "Dominate a month-long holiday season against every other event in town — measured in people through the gate, not engagement.",
    insight: "One message, everywhere: the campaign only works if every touchpoint says the same thing.",
    move: "With the branding team I ran <b>“Happy Ho! It's a Simcha Winter”</b> as a fully integrated campaign — social, influencers, Google Search and YouTube ads, radio spots, auto-rickshaw branding and on-site collateral. My job on the operations side: coordinate creative, media and on-ground teams so dozens of touchpoints carried a single message.",
    results: [
      ["14,000", "in-person visitors"],
      ["2.9M", "Meta impressions"],
      ["92,000", "YouTube views"],
      ["5,900", "website visits"]
    ],
    deck: null
  },
  {
    id: "royal-greens",
    type: "case", cat: ["performance"],
    tag: "Repositioning",
    title: "Royal Greens",
    client: "Indoprops · Man Developers",
    role: "Lead Strategist & Campaign Architect",
    hook: "Lead gen had stalled. The problem wasn't the product — it was the map.",
    hero: { n: "4,000+", l: "qualified leads" },
    challenge: "Buyers saw Dewas Naka as too far from Indore's hub (Vijaynagar). The location objection was killing every lead before the pitch.",
    insight: "Don't sell the township. Sell the area — then the township sells itself.",
    move: "Reframed Dewas Naka as <b>the new extension of Vijaynagar</b>. Sold the why first — peace of mind, community, escape from congestion — and only then introduced Royal Greens as the how.",
    results: [["4,000+", "qualified leads after the narrative shift"]],
    deck: null
  },
  {
    id: "arihant",
    type: "case", cat: ["performance", "brand"],
    tag: "Financial services",
    title: "Arihant Capital",
    client: "Arihant Capital / Arihant PLUS",
    role: "Head of Digital Strategy",
    hook: "Took a 30-year-old broker digital-first: ~1 million new website users in 6 months.",
    hero: { n: "917K+", l: "new website users" },
    challenge: "30+ years of legacy, but low digital visibility — weak SEO, few quality backlinks, no content strategy — while the business needed DMAT sign-ups.",
    insight: "Casual browsers and serious investors live on different platforms. Feed both from one financial-literacy engine.",
    move: "A <b>multi-dimensional digital overhaul</b>: full SEO restructure, high-value blog content, and an aligned content engine — market humour and reels on Instagram, technical articles on Google.",
    results: [
      ["917,000+", "new website users (Apr–Sep 2024)"],
      ["2.71M", "search impressions"],
      ["4M+", "Facebook reach"],
      ["2M+", "Instagram reach"]
    ],
    deck: null
  },
  {
    id: "saa",
    type: "case", cat: ["performance"],
    tag: "MarTech transformation",
    title: "Sunil Agrawal & Associates",
    client: "SAA — Indore's trusted real estate firm (24 years)",
    role: "Lead Strategist & Campaign Lead",
    hook: "Replaced manual sales chaos with an automated, data-driven pipeline.",
    hero: { n: "23,223", l: "enquiries in FY 23-24" },
    challenge: "A 24-year legacy, manual processes, no unified view of data — and massive inventory to sell without diluting a premium brand.",
    insight: "Leads are wasted if the system behind them is manual. Fix the pipe, then fill it.",
    move: "Deployed a <b>tech-enabled brand ecosystem</b>: CRM integration and WhatsApp automation for lead flow, paired with a trust-and-authority content strategy positioning SAA as the city's #1 experts. Content built around SAA's USP pulled home buyers in, every digital property was integrated, and regular newsletters, mailers and PR kept existing prospects warm — while search, display, Facebook, Instagram, YouTube, lead-gen and retargeting ads sold the inventory.",
    results: [
      ["23,223", "enquiries in FY 2023-24"],
      ["#1", "Google ranking for key commercial searches"],
      ["246,000+", "search impressions"]
    ],
    deck: "saa", deckPage: 1
  },

  /* ---------------- PITCHES ---------------- */
  {
    id: "lemount",
    type: "pitch", cat: ["pitch"],
    tag: "Year-long launch campaign",
    title: "Lemount Beer",
    client: "Bold Strong Beer — national launch",
    role: "Creative Strategy & Campaign Concept",
    hook: "Three complete campaign routes to launch a mass Indian beer brand.",
    hero: { n: "3", l: "full campaign routes" },
    challenge: "Position a new strong beer to lead in one of Asia's fastest-growing beer markets — a brand for the masses, truly Indian, that grows and stays relevant through a narrative.",
    insight: "The best evenings aren't occasions — they're the gang choosing to show up. Lemount should belong to the moment the plan comes together.",
    move: "<b>Route 1 — “Scene hai? Lemount le aa.”</b> Lemount becomes part of the invitation: voice notes, rooftop plans, a housewarming on cartons.<br><br><b>Route 2 — “Shaam Hogi Superhit.”</b> Everyday evenings get the blockbuster-trailer treatment: action, drama, all-time-hit dialogues.<br><br><b>Route 3 — “Milenge Toh Machega.”</b> An artist collaboration (Raftaar × Rashmeet Kaur × SickFlip) with South-first lead options, a call-and-response chorus for UGC, live launch gig and Milenge Sessions.<br><br>Each route ships with film scripts, socials, retail branding, regional adaptations, on-ground activations and merch.",
    results: [
      ["105", "page campaign book"],
      ["3", "routes, each fully scripted"],
      ["360°", "film · social · retail · on-ground · merch"]
    ],
    deck: "lemount", deckPage: 1
  },
  {
    id: "cp-pitch",
    type: "pitch", cat: ["pitch"],
    tag: "Brand platform",
    title: "Central Province Whisky",
    client: "Associated Alcohols & Breweries Ltd.",
    role: "Brand Strategy & Creative Routes",
    hook: "Brands begin with a stance. Two routes to give a whisky one.",
    hero: { n: "2", l: "brand stances" },
    challenge: "Make a brand out of Central Province — and find the stance it could own.",
    insight: "Most whisky brands sell arrival. Real people care about their immediate next step — and in divided times, a blend is what brings people together.",
    move: "<b>Route 1 — “Upgrade to Next Level.”</b> Real people, real stories (a barber from Ujjain, a psychologist from Chhindwara) about stepping it up a notch.<br><br><b>Route 2 — the blend that unites.</b> CP Club Nights, a bar stunt, ASMR films, branded table-top BT speakers, graffiti walls, next-level events and pranks — plus full retail branding.",
    results: [["76", "page brand pitch"], ["2", "complete routes"], ["ATL · BTL · retail", "activation ideas"]],
    deck: "central-province-pitch", deckPage: 1
  },
  {
    id: "rhythm-resitel",
    type: "pitch", cat: ["pitch"],
    tag: "Luxury real estate · GTM plan",
    title: "Rhythm ResiTel",
    client: "Luxury resort villas — leaseback investment model",
    role: "Digital Strategy, Content & SEO Plan",
    hook: "Selling luxury villas as an investment — not just a holiday home.",
    hero: { n: "7", l: "workstreams, one plan" },
    challenge: "Take Rhythm ResiTel to high-net-worth investors: a resort-villa model that blends luxury living, passive income from a leaseback, and long-term capital appreciation — a product that needs explaining before it can be sold.",
    insight: "HNIs don't buy a villa, they buy a return — and the right to enjoy it. Lead with the investment, close with the lifestyle.",
    move: "Positioned Rhythm ResiTel as a <b>premier investment destination</b> with a tone of exclusivity, high returns and hassle-free ownership. The plan runs seven workstreams: website re-development (full sitemap), social content, communication campaigns — <b>“The Real Luxury is…”</b> and <b>“Experience ownership with Rhythm ResiTel”</b> — CRM setup, paid media, a 5-part explainer video series on the leaseback and revenue-sharing model, and an SEO engine of pillar pages, content clusters and keyword maps (branded, business-model and location).",
    results: [["34", "page go-to-market plan"], ["2", "communication campaigns"], ["5", "explainer videos planned"], ["SEO", "pillar pages, clusters & keyword map"]],
    deck: "rhythm-resitel", deckPage: 1
  },
  {
    id: "stok",
    type: "pitch", cat: ["pitch"],
    tag: "Gen Z brand strategy",
    title: "STOK India",
    client: "STOK beer",
    role: "Strategy, Content & Activation Ideas",
    hook: "Brand? Strong. Panda? Iconic. Now get Gen Z to care.",
    hero: { n: "Gameplan '25", l: "6-month roadmap" },
    challenge: "STOK had social presence but couldn't reach new audiences or drive meaningful engagement with its core Gen Z audience.",
    insight: "Shift from product-first (product slammed into every post) to people-first: a brand that feels like a friend in the chaos — “Live the Chill”.",
    move: "Content IPs: <b>Chill Guru</b> (ulta gyan from a hammock), <b>Unstok'd Truths</b> (a satirical panda podcast), dance hooksteps and <b>Stok on the Streets</b>. On-ground: Panda Pods in waiting lounges, Panda Wali Party club takeovers, Stok'd Beats QR playlists, Wear the Chill merch — plus a Jaipur launch plan (#SpotTheStokPanda).",
    results: [["38", "page strategy deck"], ["8+", "named content & activation IPs"], ["3-phase", "awareness → community → engagement"]],
    deck: "stok", deckPage: 1
  },
  {
    id: "kimirica",
    type: "pitch", cat: ["pitch"],
    tag: "B2B luxury",
    title: "Kimirica",
    client: "Luxury hotel & airline amenities — 40+ countries",
    role: "Digital Marketing Strategy (Phase 1)",
    hook: "Making a manufacturer the globally loved hotel & airline toiletries brand.",
    hero: { n: "4", l: "strategic campaigns" },
    challenge: "Strengthen a 35-year B2B manufacturer's presence with hotel owners, GMs, procurement heads and airline experience teams — in India and abroad.",
    insight: "B2B buyers still buy feelings. Show the luxury guests feel, and the factory that guarantees it.",
    move: "Four campaigns: <b>Luxury at 30,000 Feet</b> (airlines), <b>The Touch of Kimirica</b> (hotel sensory experience), <b>Inside Kimirica</b> (manufacturing & people) and <b>10K+ Hotels, 1 Partner</b> (global trust). Path ahead: online events for TOFU, LinkedIn automation to reach buyers directly, and digital PR.",
    results: [["26", "page strategy"], ["2", "audiences: hotels & airlines"], ["B2B", "LinkedIn + PR roadmap"]],
    deck: "kimirica", deckPage: 1
  },
  {
    id: "dp-jewelers",
    type: "pitch", cat: ["pitch"],
    tag: "Retail jewellery",
    title: "DP Jewelers",
    client: "DP Jewelers",
    role: "Social Strategy & Campaign Concept",
    hook: "Making a jeweller a household name — #ForEveryGeneration.",
    hero: { n: "6", l: "goal strategy" },
    challenge: "Turn a respected jeweller into a household name on social media.",
    insight: "Gold is passed between generations. So are stories.",
    move: "A 6-goal strategy with three content buckets (fun & relatable, timeless appeal, shareable reels), Bollywood monologues with a golden twist, and the <b>#ForEveryGeneration</b> film series — grandmother & granddaughter, never-too-late resolutions, a gift of generations.",
    results: [["22", "page pitch"], ["3", "content buckets"], ["3", "campaign film ideas"]],
    deck: "dp-jewelers", deckPage: 1
  }
];

window.REAL_ESTATE_CLIENTS = ["SAA", "BCM Group", "Skye Earth Developers", "NM Group", "SS Infinitus", "Ruchi Realty", "D2R", "Sanjana Developers", "Universal Infratech", "VKG Group"];

window.MARQUEE = ["Central Province", "CREDAI Indore", "Simcha Island", "Arihant Capital", "Barrel", "SAA", "Lemount", "STOK", "Kimirica", "DP Jewelers", "Dr. Arpit Tiwari", "BCM Group", "Royal Greens", "Ruchi Realty", "VKG Group"];

/* Instagram reels — the code is the part after /reel/ in the link.
   caseId shows the reels inside that case study as well. */
window.REELS = [
  {
    id: "masterstroke", caseId: "masterstroke",
    title: "The MasterStroke",
    sub: "Micro-drama series for Associated Alcohols & Breweries Ltd. — teaser + 5 episodes",
    role: "Written, directed & planned",
    items: [["Teaser", "DIqOEk8MqOs"], ["Episode 1", "DIyndervOcI"], ["Episode 2", "DJHGqgevIp_"], ["Episode 3", "DJZfvKbIYjs"], ["Episode 4", "DJrnAQGo9ND"], ["Episode 5", "DJ9f927o9gM"]]
  },
  {
    id: "snow-park", caseId: "simcha-snow",
    title: "Simcha Snow Park",
    sub: "Summer campaign launching Simcha Island's new snow park — 2 teasers + final film",
    role: "Directed & planned",
    items: [["Teaser 1", "C6OQttVxWiO"], ["Teaser 2", "C6WEwPGscwu"], ["Final film", "C6d8HXIxa2m"]]
  },
  {
    id: "simcha-stays", caseId: null,
    title: "Simcha Island Stays",
    sub: "Video campaign promoting the resort's stay options",
    role: "Directed & planned",
    items: [["Stay campaign", "C92XHCFS9Wp"]]
  },
  {
    id: "one-street", caseId: null,
    title: "Singapore One Street",
    sub: "AI-generated film for Sarthak's Singapore One Street project",
    role: "Directed & planned (AI video)",
    items: [["AI film", "DfJk8D-pNpT"]]
  }
];
