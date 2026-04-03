export type LandingImageSet = {
  heroImage: string;
  heroMockupImage: string;
  serviceImages: string[];
};

const landingImages: Record<string, LandingImageSet> = {
  default: {
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=420&fit=crop",
    ],
  },
  gimnasios: {
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1514053026555-49ce8618b8d0?w=600&h=420&fit=crop",
    ],
  },
  "personal-trainers": {
    heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=600&h=420&fit=crop",
    ],
  },
  nutricionistas: {
    heroImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1a?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=420&fit=crop",
    ],
  },
  psicologos: {
    heroImage: "https://images.unsplash.com/photo-1516308775066-5fbf9a3b7d50?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=420&fit=crop",
    ],
  },
  "estetica-corporal": {
    heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6b40d8?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=420&fit=crop",
    ],
  },
  emprendedores: {
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=420&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=420&fit=crop",
    ],
  },
  "iron-fitness": {
    heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
    heroMockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
    serviceImages: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80",
    ],
  },
};

export function getLandingImages(slug: string) {
  return landingImages[slug] ?? landingImages.default;
}
