
import { ExperienceItem, Skill } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    title: 'Advisor to Chief Minister',
    organization: 'Government of Nagaland',
    period: '2018 - Present',
    description: 'Serving as a key advisor to the Hon’ble Chief Minister of Nagaland, focusing on policy implementation, youth development, and state progression.',
    tags: ['Policy', 'Governance', 'Leadership'],
    detailedContent: {
      overview: "As the Advisor to the Chief Minister, Abu Metha acts as a strategic bridge between the executive leadership and various departments. His role involves shaping the state's long-term development strategy with a focus on modernizing governance systems.",
      keyAchievements: [
        "Architected the Nagaland Youth Policy 2024 to empower the next generation.",
        "Facilitated major international partnerships for state developmental projects.",
        "Streamlined digital governance initiatives for better transparency."
      ],
      impact: "Significantly improved the ease of doing business in Nagaland and established a robust framework for youth-led innovation hubs.",
      image: "https://picsum.photos/1200/600?sig=1"
    }
  },
  {
    id: '2',
    title: 'Secretary General',
    organization: 'Nationalist Democratic Progressive Party (NDPP)',
    period: '2017 - Present',
    description: 'Leading strategic planning and party development for the ruling party of Nagaland, ensuring grassroots connectivity and political stability.',
    tags: ['Strategy', 'Politics', 'Organization'],
    detailedContent: {
      overview: "Leading the NDPP, Abu Metha has revolutionized political organization in the region by prioritizing progressive ideologies and youth representation in the party hierarchy.",
      keyAchievements: [
        "Led the party to consecutive electoral victories through data-driven campaigning.",
        "Established a statewide volunteer network focusing on social service.",
        "Modernized the party's communication infrastructure for real-time grassroots feedback."
      ],
      impact: "Transformed the political landscape of Nagaland towards a more policy-centric and development-oriented discourse.",
      image: "https://picsum.photos/1200/600?sig=2"
    }
  },
  {
    id: '3',
    title: 'Chairman',
    organization: 'Nagaland State Olympics Committee',
    period: 'Current',
    description: 'Spearheading the promotion of sports and athletic excellence in Nagaland, successfully hosting regional and national sporting events.',
    tags: ['Sports', 'Youth', 'Management'],
    detailedContent: {
      overview: "Under his leadership, the Nagaland Olympic Association (NOA) has become a beacon of hope for young athletes, focusing on professional training, infrastructure, and mental well-being.",
      keyAchievements: [
        "Successfully hosted the North East Olympic Games with record participation.",
        "Initiated the 'Catch Them Young' program to identify athletic talent early.",
        "Secured funding for state-of-the-art sporting facilities across diverse districts."
      ],
      impact: "Raised Nagaland's profile in the national sporting arena, with state athletes winning more medals than ever before.",
      image: "https://picsum.photos/1200/600?sig=3"
    }
  },
  {
    id: '4',
    title: 'Associate Member',
    organization: 'World Music Expo (WOMEX)',
    period: 'Current',
    description: 'Actively promoting Nagaland’s rich cultural heritage and music (Hornbill Festival) on global platforms.',
    tags: ['Culture', 'Global', 'Arts'],
    detailedContent: {
      overview: "Abu Metha represents the Naga voice on the world stage of music and arts, ensuring that the 'Hornbill Festival' is recognized globally as a premiere destination for cultural tourism.",
      keyAchievements: [
        "Showcase Naga musicians at international festivals across Europe and Asia.",
        "Branded the Hornbill Festival as the 'Festival of Festivals' globally.",
        "Advocated for the protection of indigenous intellectual property rights for local artisans."
      ],
      impact: "Enhanced global awareness of Naga culture, leading to a significant boost in international tourism and the local creative economy.",
      image: "https://picsum.photos/1200/600?sig=4"
    }
  }
];

export const SKILLS: Skill[] = [
  { 
    id: 'strategic-policy',
    name: 'Strategic Policy', 
    category: 'Governance', 
    icon: '🏛️',
    detailedContent: {
      overview: "Drafting the future of a state requires a delicate balance between tradition and technological advancement.",
      longFormInsight: "Abu Metha's approach to policy is rooted in the 'Nagaland First' philosophy. He believes that policies should not be copy-pasted from other regions but must be organically grown from the socio-economic realities of the Naga people. By integrating modern digital tools with traditional community wisdom, he has successfully architected frameworks for urban development, rural revitalization, and administrative transparency that serve as a blueprint for the entire North-East region.",
      keyFocusAreas: [
        { title: "Digital Nagaland", description: "Spearheading the transition to e-governance to minimize bureaucratic friction." },
        { title: "Sustainable Urbanization", description: "Developing Kohima and Dimapur as smart, resilient urban hubs." },
        { title: "Inclusive Economy", description: "Creating policies that support small-scale artisans and large-scale entrepreneurs alike." }
      ],
      impactMetrics: [
        { label: "Transparency Score", value: "+45%" },
        { label: "Policy Milestones", value: "12+" }
      ]
    }
  },
  { 
    id: 'youth-empowerment',
    name: 'Youth Empowerment', 
    category: 'Leadership', 
    icon: '🚀',
    detailedContent: {
      overview: "The youth are not just the future; they are the active engine of today's progress.",
      longFormInsight: "For Abu Metha, youth empowerment goes beyond providing jobs—it's about building an ecosystem of 'Creators and Innovators'. Under his guidance, Nagaland has seen the rise of dedicated startup incubators and skill development centers that focus on futuristic industries like creative tech, sustainable agriculture, and global music management. His vision is to turn every Naga youth into a global ambassador of excellence, equipped with both the skills of the 21st century and the values of their ancestors.",
      keyFocusAreas: [
        { title: "Startup Nagaland", description: "An initiative providing grants and mentorship to tech-driven startups." },
        { title: "Skill Up centers", description: "Vocational training that aligns with global industry standards." },
        { title: "Mental Well-being", description: "Holistic development programs for high-performing youth." }
      ],
      impactMetrics: [
        { label: "Youth Impacted", value: "250K+" },
        { label: "Grants Disbursed", value: "$2M+" }
      ]
    }
  },
  { 
    id: 'cultural-diplomacy',
    name: 'Cultural Diplomacy', 
    category: 'Culture', 
    icon: '🌍',
    detailedContent: {
      overview: "Culture is Nagaland's soft power, and its most valuable export to the world.",
      longFormInsight: "As a global representative of Naga culture, Abu Metha has transformed how the world perceives the North-East. By leveraging platforms like WOMEX and the Hornbill Festival, he has created a 'Cultural Gateway' that brings the world to Nagaland and Nagaland to the world. His diplomacy is focused on 'Authentic Branding'—ensuring that every song, every weave, and every story told abroad is a genuine reflection of the Naga spirit, leading to significant boosts in high-end cultural tourism.",
      keyFocusAreas: [
        { title: "Global Branding", description: "Positioning Naga festivals as premium global destinations." },
        { title: "IP Protection", description: "Securing intellectual property rights for traditional designs and music." },
        { title: "Artists' Exchange", description: "Sending Naga performers to global stages in Europe and Asia." }
      ],
      impactMetrics: [
        { label: "Global Reach", value: "50+ Nations" },
        { label: "Tourism Growth", value: "3x" }
      ]
    }
  },
  { 
    id: 'public-relations',
    name: 'Public Relations', 
    category: 'Communication', 
    icon: '📢',
    detailedContent: {
      overview: "Communication is the bridge that connects leadership to the heartbeat of the people.",
      longFormInsight: "In a diverse state like Nagaland, effective communication is vital for social cohesion. Abu Metha has mastered the art of 'Transparent Narrative'—using digital platforms and direct grassroots engagement to ensure the government's vision is clearly understood and feedback is actively heard. His PR strategy focuses on building trust through consistency, moving away from old-school propaganda towards a modern, interactive, and data-driven public discourse.",
      keyFocusAreas: [
        { title: "Media Relations", description: "Building a professional bridge with national and international press." },
        { title: "Community Dialogue", description: "Direct engagement with tribal leaders and youth organizations." },
        { title: "Brand Nagaland", description: "Curating a positive, progressive image of the state globally." }
      ],
      impactMetrics: [
        { label: "Positive Sentiment", value: "80%" },
        { label: "Media Mentions", value: "10K+" }
      ]
    }
  },
  { 
    id: 'crisis-management',
    name: 'Crisis Management', 
    category: 'Leadership', 
    icon: '🛡️',
    detailedContent: {
      overview: "Leadership is tested in times of uncertainty, and stability is the ultimate goal.",
      longFormInsight: "Abu Metha's tenure has been marked by his ability to remain calm and decisive during regional challenges. Whether it was the logistical nightmare of the global pandemic or sensitive socio-political shifts, his management style is 'Proactive and Compassionate'. He prioritizes rapid response, clear communication, and the mobilization of resources to the most vulnerable, ensuring that crises become opportunities for strengthening community resilience.",
      keyFocusAreas: [
        { title: "Pandemic Response", description: "Led successful logistical operations for medical supplies and relief." },
        { title: "Social Harmony", description: "Mediating between different interest groups to ensure peace." },
        { title: "Disaster Resilience", description: "Building infrastructure capable of withstanding regional challenges." }
      ],
      impactMetrics: [
        { label: "Response Speed", value: "High" },
        { label: "Resolution Rate", value: "95%" }
      ]
    }
  },
  { 
    id: 'event-orchestration',
    name: 'Event Orchestration', 
    category: 'Culture', 
    icon: '🎭',
    detailedContent: {
      overview: "Major events are the canvas where a state's organizational excellence is displayed.",
      longFormInsight: "From the world-renowned Hornbill Festival to high-stakes international sporting meets, Abu Metha has set a new standard for event management in India. His orchestration is characterized by 'Zero-Error Logistics' and 'High-Concept Design'. He treats every event as a production that must meet international standards, ensuring that visitors leave with a sense of awe and locals feel a deep sense of pride in their state's capabilities.",
      keyFocusAreas: [
        { title: "Hornbill Festival", description: "The 'Festival of Festivals' attracting global thousands annually." },
        { title: "Olympic Standards", description: "Hosting multi-sport events with professional-grade infrastructure." },
        { title: "Summit Logistics", description: "Managing the security and hospitality for global delegates." }
      ],
      impactMetrics: [
        { label: "Events Managed", value: "25+" },
        { label: "Avg. Footfall", value: "500K+" }
      ]
    }
  }
];

export const DETAILED_VISION = {
  title: "The Roadmap to a Resurgent Nagaland",
  subtitle: "A comprehensive strategy for growth, heritage, and excellence.",
  pillars: [
    {
      title: "Youth as the Primary Engine",
      description: "My vision places the youth at the center of every policy. We are not just building infrastructure; we are building creators, innovators, and leaders who can compete globally while staying rooted in their identity.",
      icon: "⚡"
    },
    {
      title: "Cultural Preservation through Modernity",
      description: "Nagaland's heritage is our greatest asset. By leveraging digital platforms and international collaborations like WOMEX, we ensure our traditions thrive in the modern era as a source of economic strength.",
      icon: "💎"
    },
    {
      title: "Governance of Transparency",
      description: "Effective leadership requires a bridge between the grassroots and the administration. My commitment is to a governance model that is responsive, digitally-enabled, and inclusive.",
      icon: "🤝"
    },
    {
      title: "Global Connectivity",
      description: "Nagaland should not be the 'edge' of India, but the gateway to Southeast Asia. We are working to transform our state into a hub of cultural diplomacy and regional commerce.",
      icon: "🌐"
    }
  ]
};

export const DETAILED_JOURNEY = {
  title: "A Legacy in the Making",
  subtitle: "Tracing the path of leadership, from journalism to the core of Nagaland's governance.",
  milestones: [
    {
      year: "Early Years",
      title: "The Foundation of Values",
      description: "Growing up in the heart of Nagaland, Abu Metha developed a profound connection to his roots and a deep understanding of the socio-political fabric of the Naga people.",
      category: "Personal"
    },
    {
      year: "2000s",
      title: "Journalism & Public Discourse",
      description: "Began his career in journalism, serving as an editor and articulating the aspirations of the youth. This period was crucial in shaping his perspective on the power of communication and advocacy.",
      category: "Professional"
    },
    {
      year: "2013",
      title: "Secretary to Chief Minister",
      description: "Entered the sphere of high-level governance, providing strategic insights and handling complex administrative challenges at the CM's office.",
      category: "Political"
    },
    {
      year: "2017",
      title: "Birth of NDPP",
      description: "Played a pivotal role in the formation of the Nationalist Democratic Progressive Party (NDPP), aiming to bring a fresh, progressive ideology to Nagaland's politics.",
      category: "Leadership"
    },
    {
      year: "2018 - Present",
      title: "Advisor & Global Envoy",
      description: "Appointed as Advisor to the CM. Spearheaded the global branding of the Hornbill Festival and represented Nagaland at prestigious international forums like WOMEX.",
      category: "Governance"
    },
    {
      year: "Current",
      title: "Empowering the Future",
      description: "Continues to lead the Nagaland Olympic Association and youth-centric policy shifts, ensuring that Nagaland's voice is heard on the global stage.",
      category: "Impact"
    }
  ]
};

export const DETAILED_EXPERTISE = {
  title: "A Multidisciplinary Architect of Progress",
  subtitle: "Strategic leadership across governance, diplomacy, and societal development.",
  areas: [
    {
      title: "Governance & Strategic Policy",
      description: "Crafting policies that bridge the gap between traditional Naga values and modern administrative requirements. Expertise in drafting state-level youth policies and development roadmaps.",
      icon: "🏛️",
      skills: ["Policy Drafting", "Public Administration", "Legislative Strategy"]
    },
    {
      title: "Cultural Diplomacy",
      description: "Positioning Nagaland's unique heritage on the global stage. Expert in international cultural exchange, branding indigenous festivals, and creative economy development.",
      icon: "🌍",
      skills: ["Global Branding", "Cultural Exchange", "Festival Management"]
    },
    {
      title: "Youth & Sports Strategy",
      description: "Developing athletic ecosystems that foster excellence. Deep expertise in sports management, infrastructure development, and competitive youth engagement.",
      icon: "🚀",
      skills: ["Sports Management", "Youth Empowerment", "Talent Scouting"]
    },
    {
      title: "Communication & Public Relations",
      description: "Mastering the art of public discourse. Years of experience in strategic communication, crisis management, and building community-led narratives.",
      icon: "📢",
      skills: ["Strategic Comms", "Crisis Management", "Media Relations"]
    }
  ]
};

export const ABU_CONTEXT = `
Abu Metha is a prominent figure in the political and social landscape of Nagaland, India. 
He currently serves as the Advisor to the Chief Minister of Nagaland. 
He is the Secretary General of the Nationalist Democratic Progressive Party (NDPP).
He is passionate about youth development, sports, and culture.
Key achievements include being a driving force behind the Hornbill Festival (the Festival of Festivals) and the promotion of Naga music and arts globally.
He also chairs several committees related to sports and youth affairs.
His vision is "To empower the youth of Nagaland and put the state on the global map through excellence in governance, culture, and sports."
`;
