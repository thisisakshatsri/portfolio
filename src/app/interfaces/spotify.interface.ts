export interface SpotifyArtist {
  name: string;
  id: string;
}

export interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: {
    images: { url: string }[];
  };
  external_urls: {
    spotify: string;
  };
}