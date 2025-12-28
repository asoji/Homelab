# Homelab
most, if not, all of my docker compose stuff for my homelab. will not contain instructions for the most part. this will be gradually open sourced as i try to move things, since it's all very messy on my prod system, and getting cleaned up while this is being written.

expected file structure is to at least have a `containers` and a `data` folder under `/srv`, so it looks like this
```
/srv
├── containers
│   ├── arcane
│   ├── bagetter
│   ├── beszel
│   ├── forgejo
│   ├── glance
│   ├── homeassistant
│   ├── jellyfin
│   ├── kavita
│   ├── ntfy
│   ├── pocket-id
│   ├── portainer
│   ├── traefik
│   ├── wallos
│   └── zipline
└── data
    ├── arcane
    ├── bagetter
    ├── beszel
    ├── forgejo
    ├── glance
    ├── homeassistant
    ├── jellyfin
    ├── kavita
    ├── ntfy
    ├── pocket-id
    ├── wallos
    └── zipline
  ```
but of course if your structure is different, and you know how to work these files, then feel free to adapt it to however you like.

`/docs` is not part of the homelab, more just documentation for myself and whoever else looks at it. please use `pnpm` to build, no `yarn` or `npm` or **i will steal your fuckin knees. i am not kidding.**

that will be finished one day but for now it's baren, and that's because [at the time of writing] i've spent the past week cleaning up my homelab and then sanity checking against this repo and actual local where i'm copying from. so of course, there's been no time for docs.

## LICENSE
[MIT license](LICENSE). as per all my projects. :p