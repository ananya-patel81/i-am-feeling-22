export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  date: string;
  rotation: number;
  tape: "pink" | "blue" | "yellow" | "green";
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: "g1", src: "https://picsum.photos/seed/gal1/500/650", caption: "Sunday pancakes, burnt but beloved", date: "Feb 2023", rotation: -4, tape: "pink" },
  { id: "g2", src: "https://picsum.photos/seed/gal2/500/500", caption: "That hike we almost gave up on", date: "Apr 2023", rotation: 3, tape: "blue" },
  { id: "g3", src: "https://picsum.photos/seed/gal3/500/700", caption: "Your terrible karaoke face", date: "May 2023", rotation: -2, tape: "yellow" },
  { id: "g4", src: "https://picsum.photos/seed/gal4/500/550", caption: "Beach day, sunburned and happy", date: "Jul 2023", rotation: 5, tape: "green" },
  { id: "g5", src: "https://picsum.photos/seed/gal5/500/620", caption: "Rainy day museum trip", date: "Sep 2023", rotation: -3, tape: "pink" },
  { id: "g6", src: "https://picsum.photos/seed/gal6/500/500", caption: "Cooking disaster #7", date: "Oct 2023", rotation: 2, tape: "blue" },
  { id: "g7", src: "https://picsum.photos/seed/gal7/500/680", caption: "Fireworks, freezing, worth it", date: "Dec 2023", rotation: -5, tape: "yellow" },
  { id: "g8", src: "https://picsum.photos/seed/gal8/500/560", caption: "Sunday market flowers", date: "Mar 2024", rotation: 4, tape: "green" },
  { id: "g9", src: "https://picsum.photos/seed/gal9/500/600", caption: "Movie night blanket fort", date: "Jun 2024", rotation: -2, tape: "pink" },
  { id: "g10", src: "https://picsum.photos/seed/gal10/500/640", caption: "Road trip snacks and bad music", date: "Aug 2024", rotation: 3, tape: "blue" },
  { id: "g11", src: "https://picsum.photos/seed/gal11/500/520", caption: "Anniversary dinner, both overdressed", date: "Nov 2024", rotation: -4, tape: "yellow" },
  { id: "g12", src: "https://picsum.photos/seed/gal12/500/660", caption: "Just us, ordinary Tuesday", date: "Jan 2025", rotation: 2, tape: "green" },
];
