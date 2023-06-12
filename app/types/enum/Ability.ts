import {
  AttackStrategy,
  SoftBoiledStrategy,
  BiteStrategy,
  BlastBurnStrategy,
  BlazeKickStrategy,
  BonemerangStrategy,
  BugBuzzStrategy,
  BurnStrategy,
  CalmMindStrategy,
  ChargeStrategy,
  ClangorousSoulStrategy,
  ConfusingMindStrategy,
  ConfusionStrategy,
  CorruptedNatureStrategy,
  CrabHammerStrategy,
  PaybackStrategy,
  DiamondStormStrategy,
  DisarmingVoiceStrategy,
  DischargeStrategy,
  DracoEnergyStrategy,
  DracoMeteorStrategy,
  DragonBreathStrategy,
  DragonTailStrategy,
  DynamaxCannonStrategy,
  DynamicPunchStrategy,
  EarthquakeStrategy,
  EchoStrategy,
  ElectroBoostStrategy,
  ElectroWebStrategy,
  ExplosionStrategy,
  FireBlastStrategy,
  FireTrickStrategy,
  FlameChargeStrategy,
  FreezeStrategy,
  GrassWhistleStrategy,
  GrowlStrategy,
  GuillotineStrategy,
  HappyHourStrategy,
  HeadSmashStrategy,
  HealBlockStrategy,
  HeatWaveStrategy,
  HighJumpKickStrategy,
  HurricaneStrategy,
  HydroPumpStrategy,
  HyperVoiceStrategy,
  IcicleCrashStrategy,
  IronDefenseStrategy,
  IronTailStrategy,
  JudgementStrategy,
  KingShieldStrategy,
  KnowledgeThiefStrategy,
  LeechLifeStrategy,
  LeechSeedStrategy,
  LockOnStrategy,
  MeteorMashStrategy,
  MetronomeStrategy,
  NastyPlotStrategy,
  NightmareStrategy,
  NightSlashStrategy,
  OriginPulseStrategy,
  PetalDanceStrategy,
  PoisonStingStrategy,
  PoisonStrategy,
  ProtectStrategy,
  PsychUpStrategy,
  RazorWindStrategy,
  RelicSongStrategy,
  RoarOfTimeStrategy,
  RockSlideStrategy,
  RockSmashStrategy,
  RockTombStrategy,
  RootStrategy,
  SeedFlareStrategy,
  SeismicTossStrategy,
  ShadowCloneStrategy,
  SilenceStrategy,
  SleepStrategy,
  SoakStrategy,
  SongOfDesireStrategy,
  StickyWebStrategy,
  StompStrategy,
  StringShotStrategy,
  StunSporeStrategy,
  TeleportStrategy,
  ThiefStrategy,
  ThunderStrategy,
  TormentStrategy,
  TriAttackStrategy,
  TwistingNeitherStrategy,
  VoltSwitchStrategy,
  WheelOfFireStrategy,
  WishStrategy,
  WonderGuardStrategy,
  ElectricSurgeStrategy,
  PsychicSurgeStrategy,
  MindBlownStrategy,
  PaydayStrategy,
  BeatUpStrategy,
  BlueFlareStrategy,
  FusionBoltStrategy,
  AuroraVeilStrategy,
  AquaJetStrategy,
  ChatterStrategy,
  LiquidationStrategy,
  SteamEruptionStrategy,
  AppleAcidStrategy,
  ShadowBallStrategy,
  DiveStrategy,
  SpikeArmorStrategy,
  FutureSightStrategy,
  FakeTearsStrategy,
  SparklingAriaStrategy,
  DragonDartsStrategy,
  MistySurgeStrategy,
  GrassySurgeStrategy,
  SkyAttackStrategy,
  IllusionStrategy,
  SmogStrategy,
  AuroraBeamStrategy,
  AgilityStrategy,
  SpiritShackleStrategy,
  WaterShurikenStrategy,
  ShadowSneakStrategy,
  MachPunchStrategy,
  UppercutStrategy,
  TripleKickStrategy,
  MawashiGeriStrategy,
  ForecastStrategy,
  SacredSwordStrategy,
  XScissorStrategy,
  PlasmaFistStrategy,
  SpectralThiefStrategy,
  GeomancyStrategy,
  DeathWingStrategy,
  SlackOffStrategy,
  DarkVoidStrategy,
  OverheatStrategy,
  HypnosisStrategy,
  MimicStrategy,
  HexStrategy,
  GrowthStrategy,
  HealOrderStrategy,
  ShellTrapStrategy,
  DigStrategy,
  FireSpinStrategy,
  SearingShotStrategy,
  PeckStrategy,
  SplashStrategy,
  CounterStrategy,
  ComsicPowerStrategy,
  PoisonPowderStrategy,
  SilverWindStrategy
} from "../../core/attack-strategy"

export enum Ability {
  DEFAULT = "DEFAULT",
  FIRE_BLAST = "FIRE_BLAST",
  WHEEL_OF_FIRE = "WHEEL_OF_FIRE",
  SEISMIC_TOSS = "SEISMIC_TOSS",
  GUILLOTINE = "GUILLOTINE",
  ROCK_SLIDE = "ROCK_SLIDE",
  HEAT_WAVE = "HEAT_WAVE",
  THUNDER = "THUNDER",
  HYDRO_PUMP = "HYDRO_PUMP",
  DRACO_METEOR = "DRACO_METEOR",
  BLAZE_KICK = "BLAZE_KICK",
  WISH = "WISH",
  CALM_MIND = "CALM_MIND",
  IRON_DEFENSE = "IRON_DEFENSE",
  METRONOME = "METRONOME",
  SOAK = "SOAK",
  IRON_TAIL = "IRON_TAIL",
  BLAST_BURN = "BLAST_BURN",
  CHARGE = "CHARGE",
  DISCHARGE = "DISCHARGE",
  BITE = "BITE",
  DRAGON_TAIL = "DRAGON_TAIL",
  DRAGON_BREATH = "DRAGON_BREATH",
  ICICLE_CRASH = "ICICLE_CRASH",
  ROOT = "ROOT",
  TORMENT = "TORMENT",
  STOMP = "STOMP",
  PAYBACK = "PAYBACK",
  NIGHT_SLASH = "NIGHT_SLASH",
  BUG_BUZZ = "BUG_BUZZ",
  STRING_SHOT = "STRING_SHOT",
  VENOSHOCK = "VENOSHOCK",
  LEECH_LIFE = "LEECH_LIFE",
  HAPPY_HOUR = "HAPPY_HOUR",
  TELEPORT = "TELEPORT",
  NASTY_PLOT = "NASTY_PLOT",
  THIEF = "THIEF",
  STUN_SPORE = "STUN_SPORE",
  METEOR_MASH = "METEOR_MASH",
  HURRICANE = "HURRICANE",
  BURN = "BURN",
  SILENCE = "SILENCE",
  SLEEP = "SLEEP",
  FREEZE = "FREEZE",
  PROTECT = "PROTECT",
  POISON = "POISON",
  CONFUSION = "CONFUSION",
  ORIGIN_PULSE = "ORIGIN_PULSE",
  SEED_FLARE = "SEED_FLARE",
  HEAL_BLOCK = "HEAL_BLOCK",
  ROAR_OF_TIME = "ROAR_OF_TIME",
  ROCK_TOMB = "ROCK_TOMB",
  ROCK_SMASH = "ROCK_SMASH",
  HEAD_SMASH = "HEAD_SMASH",
  VOLT_SWITCH = "VOLT_SWITCH",
  SHADOW_CLONE = "SHADOW_CLONE",
  HYPER_VOICE = "HYPER_VOICE",
  PETAL_DANCE = "PETAL_DANCE",
  ECHO = "ECHO",
  TRI_ATTACK = "TRI_ATTACK",
  GRASS_WHISTLE = "GRASS_WHISTLE",
  HIGH_JUMP_KICK = "HIGH_JUMP_KICK",
  DISARMING_VOICE = "DISARMING_VOICE",
  RELIC_SONG = "RELIC_SONG",
  GROWL = "GROWL",
  BONEMERANG = "BONEMERANG",
  CLANGOROUS_SOUL = "CLANGOROUS_SOUL",
  NIGHTMARE = "NIGHTMARE",
  EXPLOSION = "EXPLOSION",
  KING_SHIELD = "KING_SHIELD",
  CORRUPTED_NATURE = "CORRUPTED_NATURE",
  CRABHAMMER = "CRABHAMMER",
  DIAMOND_STORM = "DIAMOND_STORM",
  DRACO_ENERGY = "DRACO_ENERGY",
  DYNAMAX_CANNON = "DYNAMAX_CANNON",
  DYNAMIC_PUNCH = "DYNAMIC_PUNCH",
  ELECTRO_BOOST = "ELECTRO_BOOST",
  ELECTRO_WEB = "ELECTRO_WEB",
  FIRE_TRICK = "FIRE_TRICK",
  FLAME_CHARGE = "FLAME_CHARGE",
  LEECH_SEED = "LEECH_SEED",
  LOCK_ON = "LOCK_ON",
  PSYCH_UP = "PSYCH_UP",
  RAZOR_WIND = "RAZOR_WIND",
  TWISTING_NEITHER = "TWISTING_NEITHER",
  WONDER_GUARD = "WONDER_GUARD",
  SONG_OF_DESIRE = "SONG_OF_DESIRE",
  CONFUSING_MIND = "CONFUSING_MIND",
  KNOWLEDGE_THIEF = "KNOWLEDGE_THIEF",
  EARTHQUAKE = "EARTHQUAKE",
  SOFT_BOILED = "SOFT_BOILED",
  ELECTRIC_SURGE = "ELECTRIC_SURGE",
  PSYCHIC_SURGE = "PSYCHIC_SURGE",
  MIND_BLOWN = "MIND_BLOWN",
  PAYDAY = "PAYDAY",
  BEAT_UP = "BEAT_UP",
  BLUE_FLARE = "BLUE_FLARE",
  FUSION_BOLT = "FUSION_BOLT",
  AURORA_VEIL = "AURORA_VEIL",
  AQUA_JET = "AQUA_JET",
  JUDGEMENT = "JUDGEMENT",
  CHATTER = "CHATTER",
  LIQUIDATION = "LIQUIDATION",
  STEAM_ERUPTION = "STEAM_ERUPTION",
  APPLE_ACID = "APPLE_ACID",
  SHADOW_BALL = "SHADOW_BALL",
  DIVE = "DIVE",
  SPIKE_ARMOR = "SPIKE_ARMOR",
  FUTURE_SIGHT = "FUTURE_SIGHT",
  FAKE_TEARS = "FAKE_TEARS",
  SPARKLING_ARIA = "SPARKLING_ARIA",
  DRAGON_DARTS = "DRAGON_DARTS",
  GRASSY_SURGE = "GRASSY_SURGE",
  MISTY_SURGE = "MISTY_SURGE",
  SKY_ATTACK = "SKY_ATTACK",
  ILLUSION = "ILLUSION",
  SMOG = "SMOG",
  AURORA_BEAM = "AURORA_BEAM",
  AGILITY = "AGILITY",
  SPIRIT_SHACKLE = "SPIRIT_SHACKLE",
  WATER_SHURIKEN = "WATER_SHURIKEN",
  SHADOW_SNEAK = "SHADOW_SNEAK",
  MACH_PUNCH = "MACH_PUNCH",
  UPPERCUT = "UPPERCUT",
  TRIPLE_KICK = "TRIPLE_KICK",
  MAWASHI_GERI = "MAWASHI_GERI",
  FORECAST = "FORECAST",
  SACRED_SWORD = "SACRED_SWORD",
  X_SCISSOR = "X_SCISSOR",
  PLASMA_FIST = "PLASMA_FIST",
  SPECTRAL_THIEF = "SPECTRAL_THIEF",
  GEOMANCY = "GEOMANCY",
  DEATH_WING = "DEATH_WING",
  SLACK_OFF = "SLACK_OFF",
  DARK_VOID = "DARK_VOID",
  OVERHEAT = "OVERHEAT",
  HYPNOSIS = "HYPNOSIS",
  MIMIC = "MIMIC",
  HEX = "HEX",
  GROWTH = "GROWTH",
  HEAL_ORDER = "HEAL_ORDER",
  SHELL_TRAP = "SHELL_TRAP",
  DIG = "DIG",
  FIRE_SPIN = "FIRE_SPIN",
  SEARING_SHOT = "SEARING_SHOT",
  PECK = "PECK",
  SPLASH = "SPLASH",
  COUNTER = "COUNTER",
  COSMIC_POWER = "COSMIC_POWER",
  STICKY_WEB = "STICKY_WEB",
  SILVER_WIND = "SILVER_WIND",
  POISON_POWDER = "POISON_POWDER"
}

export const AbilityStrategy: { [key in Ability]: AttackStrategy } = {
  [Ability.SONG_OF_DESIRE]: new SongOfDesireStrategy(),
  [Ability.CONFUSING_MIND]: new ConfusingMindStrategy(),
  [Ability.KNOWLEDGE_THIEF]: new KnowledgeThiefStrategy(),
  [Ability.WONDER_GUARD]: new WonderGuardStrategy(),
  [Ability.CORRUPTED_NATURE]: new CorruptedNatureStrategy(),
  [Ability.CRABHAMMER]: new CrabHammerStrategy(),
  [Ability.KING_SHIELD]: new KingShieldStrategy(),
  [Ability.EXPLOSION]: new ExplosionStrategy(),
  [Ability.NIGHTMARE]: new NightmareStrategy(),
  [Ability.CLANGOROUS_SOUL]: new ClangorousSoulStrategy(),
  [Ability.BONEMERANG]: new BonemerangStrategy(),
  [Ability.GROWL]: new GrowlStrategy(),
  [Ability.RELIC_SONG]: new RelicSongStrategy(),
  [Ability.DISARMING_VOICE]: new DisarmingVoiceStrategy(),
  [Ability.HIGH_JUMP_KICK]: new HighJumpKickStrategy(),
  [Ability.GRASS_WHISTLE]: new GrassWhistleStrategy(),
  [Ability.TRI_ATTACK]: new TriAttackStrategy(),
  [Ability.ECHO]: new EchoStrategy(),
  [Ability.PETAL_DANCE]: new PetalDanceStrategy(),
  [Ability.HYPER_VOICE]: new HyperVoiceStrategy(),
  [Ability.SHADOW_CLONE]: new ShadowCloneStrategy(),
  [Ability.VOLT_SWITCH]: new VoltSwitchStrategy(),
  [Ability.FIRE_BLAST]: new FireBlastStrategy(),
  [Ability.WHEEL_OF_FIRE]: new WheelOfFireStrategy(),
  [Ability.SEISMIC_TOSS]: new SeismicTossStrategy(),
  [Ability.GUILLOTINE]: new GuillotineStrategy(),
  [Ability.ROCK_SLIDE]: new RockSlideStrategy(),
  [Ability.HEAT_WAVE]: new HeatWaveStrategy(),
  [Ability.THUNDER]: new ThunderStrategy(),
  [Ability.HYDRO_PUMP]: new HydroPumpStrategy(),
  [Ability.DRACO_METEOR]: new DracoMeteorStrategy(),
  [Ability.BLAZE_KICK]: new BlazeKickStrategy(),
  [Ability.WISH]: new WishStrategy(),
  [Ability.CALM_MIND]: new CalmMindStrategy(),
  [Ability.IRON_DEFENSE]: new IronDefenseStrategy(),
  [Ability.METRONOME]: new MetronomeStrategy(),
  [Ability.SOAK]: new SoakStrategy(),
  [Ability.IRON_TAIL]: new IronTailStrategy(),
  [Ability.BLAST_BURN]: new BlastBurnStrategy(),
  [Ability.CHARGE]: new ChargeStrategy(),
  [Ability.DISCHARGE]: new DischargeStrategy(),
  [Ability.BITE]: new BiteStrategy(),
  [Ability.DRAGON_TAIL]: new DragonTailStrategy(),
  [Ability.DRAGON_BREATH]: new DragonBreathStrategy(),
  [Ability.ICICLE_CRASH]: new IcicleCrashStrategy(),
  [Ability.ROOT]: new RootStrategy(),
  [Ability.TORMENT]: new TormentStrategy(),
  [Ability.STOMP]: new StompStrategy(),
  [Ability.PAYBACK]: new PaybackStrategy(),
  [Ability.NIGHT_SLASH]: new NightSlashStrategy(),
  [Ability.BUG_BUZZ]: new BugBuzzStrategy(),
  [Ability.STRING_SHOT]: new StringShotStrategy(),
  [Ability.STICKY_WEB]: new StickyWebStrategy(),
  [Ability.VENOSHOCK]: new PoisonStingStrategy(),
  [Ability.LEECH_LIFE]: new LeechLifeStrategy(),
  [Ability.HAPPY_HOUR]: new HappyHourStrategy(),
  [Ability.TELEPORT]: new TeleportStrategy(),
  [Ability.NASTY_PLOT]: new NastyPlotStrategy(),
  [Ability.THIEF]: new ThiefStrategy(),
  [Ability.STUN_SPORE]: new StunSporeStrategy(),
  [Ability.METEOR_MASH]: new MeteorMashStrategy(),
  [Ability.HURRICANE]: new HurricaneStrategy(),
  [Ability.BURN]: new BurnStrategy(),
  [Ability.SLEEP]: new SleepStrategy(),
  [Ability.SILENCE]: new SilenceStrategy(),
  [Ability.CONFUSION]: new ConfusionStrategy(),
  [Ability.FREEZE]: new FreezeStrategy(),
  [Ability.PROTECT]: new ProtectStrategy(),
  [Ability.POISON]: new PoisonStrategy(),
  [Ability.ORIGIN_PULSE]: new OriginPulseStrategy(),
  [Ability.SEED_FLARE]: new SeedFlareStrategy(),
  [Ability.HEAL_BLOCK]: new HealBlockStrategy(),
  [Ability.ROAR_OF_TIME]: new RoarOfTimeStrategy(),
  [Ability.ROCK_TOMB]: new RockTombStrategy(),
  [Ability.ROCK_SMASH]: new RockSmashStrategy(),
  [Ability.HEAD_SMASH]: new HeadSmashStrategy(),
  [Ability.DEFAULT]: new AttackStrategy(),
  DIAMOND_STORM: new DiamondStormStrategy(),
  DRACO_ENERGY: new DracoEnergyStrategy(),
  DYNAMAX_CANNON: new DynamaxCannonStrategy(),
  DYNAMIC_PUNCH: new DynamicPunchStrategy(),
  ELECTRO_BOOST: new ElectroBoostStrategy(),
  ELECTRO_WEB: new ElectroWebStrategy(),
  FIRE_TRICK: new FireTrickStrategy(),
  FLAME_CHARGE: new FlameChargeStrategy(),
  LEECH_SEED: new LeechSeedStrategy(),
  LOCK_ON: new LockOnStrategy(),
  PSYCH_UP: new PsychUpStrategy(),
  RAZOR_WIND: new RazorWindStrategy(),
  TWISTING_NEITHER: new TwistingNeitherStrategy(),
  EARTHQUAKE: new EarthquakeStrategy(),
  SOFT_BOILED: new SoftBoiledStrategy(),
  [Ability.ELECTRIC_SURGE]: new ElectricSurgeStrategy(),
  [Ability.PSYCHIC_SURGE]: new PsychicSurgeStrategy(),
  [Ability.MIND_BLOWN]: new MindBlownStrategy(),
  [Ability.PAYDAY]: new PaydayStrategy(),
  [Ability.BEAT_UP]: new BeatUpStrategy(),
  [Ability.BLUE_FLARE]: new BlueFlareStrategy(),
  [Ability.FUSION_BOLT]: new FusionBoltStrategy(),
  [Ability.AURORA_VEIL]: new AuroraVeilStrategy(),
  [Ability.AQUA_JET]: new AquaJetStrategy(),
  [Ability.JUDGEMENT]: new JudgementStrategy(),
  [Ability.CHATTER]: new ChatterStrategy(),
  [Ability.LIQUIDATION]: new LiquidationStrategy(),
  [Ability.STEAM_ERUPTION]: new SteamEruptionStrategy(),
  [Ability.APPLE_ACID]: new AppleAcidStrategy(),
  [Ability.SHADOW_BALL]: new ShadowBallStrategy(),
  [Ability.DIVE]: new DiveStrategy(),
  [Ability.SPIKE_ARMOR]: new SpikeArmorStrategy(),
  [Ability.FUTURE_SIGHT]: new FutureSightStrategy(),
  [Ability.FAKE_TEARS]: new FakeTearsStrategy(),
  [Ability.SPARKLING_ARIA]: new SparklingAriaStrategy(),
  [Ability.DRAGON_DARTS]: new DragonDartsStrategy(),
  [Ability.GRASSY_SURGE]: new GrassySurgeStrategy(),
  [Ability.MISTY_SURGE]: new MistySurgeStrategy(),
  [Ability.SKY_ATTACK]: new SkyAttackStrategy(),
  [Ability.ILLUSION]: new IllusionStrategy(),
  [Ability.SMOG]: new SmogStrategy(),
  [Ability.AURORA_BEAM]: new AuroraBeamStrategy(),
  [Ability.AGILITY]: new AgilityStrategy(),
  [Ability.SPIRIT_SHACKLE]: new SpiritShackleStrategy(),
  [Ability.WATER_SHURIKEN]: new WaterShurikenStrategy(),
  [Ability.SHADOW_SNEAK]: new ShadowSneakStrategy(),
  [Ability.MACH_PUNCH]: new MachPunchStrategy(),
  [Ability.UPPERCUT]: new UppercutStrategy(),
  [Ability.TRIPLE_KICK]: new TripleKickStrategy(),
  [Ability.MAWASHI_GERI]: new MawashiGeriStrategy(),
  [Ability.FORECAST]: new ForecastStrategy(),
  [Ability.SACRED_SWORD]: new SacredSwordStrategy(),
  [Ability.X_SCISSOR]: new XScissorStrategy(),
  [Ability.PLASMA_FIST]: new PlasmaFistStrategy(),
  [Ability.SPECTRAL_THIEF]: new SpectralThiefStrategy(),
  [Ability.GEOMANCY]: new GeomancyStrategy(),
  [Ability.DEATH_WING]: new DeathWingStrategy(),
  [Ability.SLACK_OFF]: new SlackOffStrategy(),
  [Ability.DARK_VOID]: new DarkVoidStrategy(),
  [Ability.OVERHEAT]: new OverheatStrategy(),
  [Ability.HYPNOSIS]: new HypnosisStrategy(),
  [Ability.MIMIC]: new MimicStrategy(),
  [Ability.HEX]: new HexStrategy(),
  [Ability.GROWTH]: new GrowthStrategy(),
  [Ability.HEAL_ORDER]: new HealOrderStrategy(),
  [Ability.SHELL_TRAP]: new ShellTrapStrategy(),
  [Ability.DIG]: new DigStrategy(),
  [Ability.FIRE_SPIN]: new FireSpinStrategy(),
  [Ability.SEARING_SHOT]: new SearingShotStrategy(),
  [Ability.PECK]: new PeckStrategy(),
  [Ability.SPLASH]: new SplashStrategy(),
  [Ability.COUNTER]: new CounterStrategy(),
  [Ability.COSMIC_POWER]: new ComsicPowerStrategy(),
  [Ability.POISON_POWDER]: new PoisonPowderStrategy(),
  [Ability.SILVER_WIND]: new SilverWindStrategy()
}
