interface Data {
    info: Info
    results: Character[]
}

interface EpData {
    info: Info
    results: Episode[]
}

interface Info {
    count: number
    next: string
    pages: number
    prev: string
}

interface Character {
    created: string
    episode: string[]
    gender: 'Male' | 'Female'
    id: number
    image: string
    location: Location
    name: string
    origin: Origin
    species: string
    status: 'Alive' | 'Dead' | 'unknown'
    type: string
    url: string
}

interface Location {
    name: string
    url: string
}

interface Origin {
    name: string
    url: string
}

interface Episode {
    id: number
    name: string
    air_date: string | Date
    episode: string
    characters: string[]
    created: string
    url: string
}


export type { Data, Info, Character, Location, Origin, Episode, EpData }